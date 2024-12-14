"use client";

import { Input } from "@/components/input/Input";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/utils";
import { priceSchema, smStringSchema, xlStringSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function VacancyForm({ id }: { id: string }) {
  const { push } = useRouter();
  const [formError, setFormError] = useState("");

  const vacancySchema = z.object({
    title: smStringSchema,
    description: xlStringSchema,
    salary: priceSchema,
    employerId: z.string(),
  });

  type FormDataType = z.infer<typeof vacancySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(vacancySchema),
    defaultValues: {
      employerId: id,
    },
  });

  const onSubmit = async (data: FormDataType) => {
    try {
      const res = await apiFetch("/api/vacancies", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);

      if (res.ok) {
        push("/");
      } else {
        const apiError = await res.json();
        setFormError(apiError.detail);
      }
    } catch {
      setFormError("Ошибка. Пожалуйста повторите пойзже.");
    }
  };

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div>{formError && <p>{formError}</p>}</div>
      <Input {...register("title")} placeholder="Должность" />
      <div>{errors.title && <p>{errors.title.message}</p>}</div>
      <Input {...register("description")} placeholder="Описаие" />
      <div>{errors.description && <p>{errors.description.message}</p>}</div>
      <Input
        type="number"
        {...register("salary")}
        placeholder="Заработная плата"
      />
      <div>{errors.salary && <p>{errors.salary.message}</p>}</div>
      <Button type="submit">Продолжить</Button>
    </form>
  );
}
