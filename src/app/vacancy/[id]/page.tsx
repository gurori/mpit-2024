import type { Vacancy } from "@/lib/types";
import { apiFetch } from "@/lib/utils";

export default async function Vacancy({ params }: { params: { id: string } }) {
  const response = await apiFetch(`/api/vacancies/${params.id}`);
  const vacancy: Vacancy = await response.json();
  return (
    <main className="container py-14">
      <h2 className="flex pb-8">
        <b>Информация о вакансии</b>
      </h2>
      <table className="min-w-full">
        <tbody>
          <tr className="[&>*]:py-2">
            <td className="w-1/3">
              <b>Должность</b>
            </td>
            <td>{vacancy.title}</td>
          </tr>
          <tr className="[&>*]:py-2">
            <td className="w-1/3">
              <b>Описание</b>
            </td>
            <td>{vacancy.description}</td>
          </tr>
          <tr className="[&>*]:py-2">
            <td className="w-1/3">
              <b>Заработная плата</b>
            </td>
            <td>от {vacancy.salary} ₽</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
