"use client";

import { Input } from "@/components/input/Input";
import {
  emailSchema,
  passwordSchema,
  roleSchema,
  smStringSchema,
} from "@/lib/zod-schemas";
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const { push } = useRouter();
  const [formError, setFormError] = useState("");

  const userSchema = z.object({
    email: emailSchema,
    firstName: smStringSchema,
    password: passwordSchema,
    role: roleSchema,
  });

  type FormDataType = z.infer<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormDataType>({
    resolver: zodResolver(userSchema),
  });

  const { field } = useController({ control, name: "role" });

  const onSubmit = async (data: FormDataType) => {
    try {
      const res = await apiFetch("/api/users/register", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        push("/profile");
      }
      else {
        const apiError = await res.json()
        setFormError(apiError.detail)
      }
    } catch (err) {
        setFormError("Ошибка. Пожалуйста повторите пойзже.")
    }
  };

  return (
    <form className="grid gap-2 " onSubmit={handleSubmit(onSubmit)}>
        <div>
            {formError && <p>{formError}</p>}
        </div>
      <Input {...register("firstName")} placeholder="Имя" />
      <div>{errors.firstName && <p>{errors.firstName.message}</p>}</div>
      <Input {...register("email")} placeholder="Почта" type="email" />
      <div>{errors.email && <p>{errors.email.message}</p>}</div>
      <Input {...register("password")} placeholder="Пароль" type="password" />
      <div>{errors.password && <p>{errors.password.message}</p>}</div>
      <Select onValueChange={field.onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Роль" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Applicant">Соискатель</SelectItem>
          <SelectItem value="Employer">Работодатель</SelectItem>
        </SelectContent>
      </Select>
      <div>{errors.role && <p>{errors.role.message}</p>}</div>
      <Button type="submit">Продолжить</Button>
    </form>
  );
}
