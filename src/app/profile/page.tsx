import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const role = (await cookies()).get("role");

  if (!role) redirect("/register");

  redirect(`/profile/${role.value}`);
}
