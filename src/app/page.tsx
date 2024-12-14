import { apiFetch } from "@/lib/utils";
import type { Vacancy } from "@/lib/types";
import MainPage from "./MainPage";

export default async function HomePage() {
  const res = await apiFetch("/api/vacancies")
  const vacancies: Vacancy[] = await res.json()

  return (
    <MainPage vacancies={vacancies} />
  );
}
