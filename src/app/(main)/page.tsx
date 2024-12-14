import { apiFetch } from "@/lib/utils";
import type { Vacancy } from "@/lib/types";
import MainPage from "./MainPage";

export default async function HomePage() {
  let vacancies: Vacancy[]
  try {
    const res = await apiFetch("/api/vacancies")
    vacancies = await res.json()
  } catch {
    vacancies = []
  }

  return (
    <MainPage vacancies={vacancies} />
  );
}
