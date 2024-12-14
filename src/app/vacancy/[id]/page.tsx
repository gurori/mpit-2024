import { apiFetch } from "@/lib/utils";
import Link from "next/link";

export default async function Vacancy({ params }: { params: { id: string } }) {    
  const vacancy = await apiFetch(`/api/vacancies/${await params.id}`).then(
    async (res) => await res.json()
  );
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
          {/* <tr className="[&>*]:py-2">
            <td className="w-1/3">
              <b>Работодатель</b>
            </td>
            <td><Link href={`/profile/employer/${}`}>Ссылка</Link></td>
          </tr> */}
        </tbody>
      </table>
    </main>
  );
}
