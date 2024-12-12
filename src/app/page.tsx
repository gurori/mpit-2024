import { apiFetch } from "@/lib/utils";
import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";

export default async function HomePage() {
  const users = await apiFetch("/api/Users").then(
    async (res) => await res.json()
  );
  console.log(users)


  return <div className="bg-slate-500 rounded-2xl p-10">{users[0].id}
  <div>
  <ArrowBigLeft size={1000} />
  </div>
  </div>;
}
