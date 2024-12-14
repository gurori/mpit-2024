"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function setUserData(id: string, role: string) {
  "use server";
  const cookiesStorage = await cookies();
  cookiesStorage.set("role", role);
  cookiesStorage.set("id", id);
}
