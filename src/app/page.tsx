import { apiFetch, cn } from "@/lib/utils";
import s from "./Main.module.css";
import { Input } from "@/components/input/Input";
import {
  BookOpenCheckIcon,
  CircleUserIcon,
  FolderInputIcon,
  RussianRubleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Vacancy } from "@/lib/types";

export default async function HomePage() {
  const vacancies: Vacancy[] = await apiFetch("/api/vacancies").then(async res => res.json())

  return (
    <>
      <main className="container">
        <div className={s.greenBlock}>
          <div className="absolute top-80 flex items-center justify-center h-[400px] inset-0">
            <div className="blur-background inset-0"></div>
          </div>
          <h1 className="relative z-50 mt-20">
            Найди <span className="font-omg">работу</span>
            <br /> в один клик
          </h1>
          <Input
            className="relative z-50 mt-16 px-8 py-8 w-[616px]"
            placeholder="Найти услуги..."
            variant="shadow"
          />
          <p className="text-gray-400 pt-2 mb-24 text-lg relative z-50">
            Ищу сотрудника
          </p>
        </div>
        <h2 className="py-16 flex self-start">Вакансии</h2>
        <div className="center flex-wrap gap-6">
          {vacancies.map((v, i) => {
            const count = Math.floor(Math.random() * 10) + 1
            return (
              <span key={i} className={cn(s.vacancy, "relative")}>
                <Link href={`/vacancy/${v.id}`}>
                <span className="absolute"></span>
                <p className="text-lg">
                  <b>{v.title}</b>
                </p>
                <p>от {v.salary} ₽</p>
                <div className="flex gap-1 place-items-center text-[#007043] pt-4">
                  <span className="bg-[#F5F5F5] p-0.5 rounded-sm">{count}</span>
                  <p>похожих вакансий</p>
                </div>
                </Link>
              </span>
            )
          })}
        </div>

        <h2 className="py-16 flex self-start">Всё ради удобства</h2>
        <div className="center gap-x-12 flex-wrap [&>*]:w-64 [&>*]:h-64">
          <span>
            <FolderInputIcon size={128} strokeWidth={0.5} className="mb-4" />
            <p>Возможность добавлять портфолио работ</p>
          </span>
          <span>
            <BookOpenCheckIcon size={128} strokeWidth={0.5} className="mb-4" />
            <p>Онлайн тестирование и анкетирование для соискателей</p>
          </span>
          <span>
            <RussianRubleIcon size={128} strokeWidth={0.5} className="mb-4" />
            <p>
              Оценка зарплат, помогающая ориентироваться в актуальных
              предложениях рынка
            </p>
          </span>
          <span>
            <CircleUserIcon size={128} strokeWidth={0.5} className="mb-4" />
            <p>Специальная категория для подростков</p>
          </span>
        </div>
        <Link href="/register" className="center pt-8">
        
        <Button variant="black">Присоединиться</Button>
        </Link>

        <h2 className="text-2xl pt-24 pb-8 flex self-start [&>*]:text-[#9D9D9D] [&>*]:text-lg">
          Поиск работы и вакансий в Республике Саха (Якутии)
        </h2>
        <p className="text-lg text-[#9D9D9D]">
          Вакансии в Республике Сахе (Якутии) всегда можно найти на сайте
          mywork.ru. Компании каждый день публикуют здесь свои предложения — им
          требуются специалисты разного уровня, руководители, менеджеры, рядовые
          сотрудники. Сайт направлен не только на большие города, но и на
          маленькие населённые пункты. В каталоге вакансий все предложения
          сгруппированы по отраслям, также там есть разделы с вакансиями для
          соискателей без опыта и студентов. Свежие вакансии в Республике Саха
          (Якутия) — вакансии от прямых работодателей.
        </p>
        <br />
        <p className="text-lg text-[#9D9D9D]">
          Как быстрее найти работу? Задействуйте все возможности сайта
          mywork.ru. Ищите вакансии по названию должности или используя
          расширенный поиск (например, с учетом зарплаты или графика).
          Подпишитесь на вакансии, чтобы получать их подборку на свою почту.
        </p>
        <br />
        <p className="text-lg text-[#9D9D9D] pb-16">
          На что стоит обратить внимание при поиске новой работы? Работодатели
          обращают внимание не только на профессионализм потенциальных
          сотрудников, но и на их адаптивность. Чем она выше, тем работник легче
          переносит перемены в жизни, свободнее ориентируется в любой ситуации,
          эмоционально устойчив и способен меняться вместе с обстоятельствами.
          Таким образом, рекрутеры советуют для успешного трудоустройства
          развивать следующие качества: умение быстро реагировать на резкие
          перемены в обстоятельствах; принятие на себя новых задач в кратчайшие
          сроки; успешную адаптацию к изменяющимся ситуациям; способность
          сохранять спокойствие перед лицом трудностей.
        </p>
      </main>
    </>
  );
}
