import { apiFetch } from "@/lib/utils";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import UserInfo from "../UserInfo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function EmployerProfilePage() {
  const cookiesStorage = await cookies();
  const idCookie = cookiesStorage.get("id");
  const role = cookiesStorage.get("role")!.value;

  if (!idCookie) redirect("/");
  if (role !== "Employer") {
    if (role === "Applicant") redirect(`/profile/${role.toLowerCase()}`);
    else notFound();
  }
  const id = idCookie.value;

  const user = await apiFetch(`/api/users/${id}`).then(
    async (res) => await res.json()
  );

  return (
      <UserInfo user={user}>
        <Link href="/vacancy">
        <Button variant="outline" className="mt-8">Создать вакансию</Button>
        </Link>
      </UserInfo>
    )
}
