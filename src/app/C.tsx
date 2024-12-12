"use client"

import { apiFetch } from "@/lib/utils";
import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default async function HomePage() {
  

  const {register, handleSubmit, formState: {errors}} = useForm();

  return <div className="bg-slate-500 rounded-2xl p-10">
  <div>
  <ArrowBigLeft />
  </div>
  </div>;
}
