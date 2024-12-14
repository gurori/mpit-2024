import { apiFetch } from "@/lib/utils";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import UserInfo from "../UserInfo";

export default async function ApplicantProfilePage() {
  const cookiesStorage = await cookies();

  const idCookie = cookiesStorage.get("id");
  const role = cookiesStorage.get("role")!.value;

  if (!idCookie) redirect("/");
  if (role !== "Applicant") {
    if (role === "Employer") redirect(`/profile/${role.toLowerCase()}`);
    else notFound();
  }

  const user = await apiFetch(`/api/users/${idCookie.value}`).then(
    async (res) => {
      return await res.json()
    }
  );
  return (
    <UserInfo user={user}></UserInfo>
  )
}
