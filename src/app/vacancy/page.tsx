import { cookies } from "next/headers";
import s from "../register/RegisterForm.module.css";
import VacancyForm from "./VacancyForm";

export default async function NewVacancyPage() {
    const id = (await cookies()).get("id")
  return (
    <div className="center max-h-screen min-h-[1000px]">
      <div className={s.block}>
        <h2>Создание вакансии</h2>
        <VacancyForm id={id!.value} />
      </div>
    </div>
  );
}
