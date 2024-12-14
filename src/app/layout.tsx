import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyWork",
  description: "Найди работу в один клик",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased`}
      >
        <header>
          <div className="container flex justify-between py-5">
            <Link href="/">
              <Image src="/logos/logo.png" width={118} height={34} alt="logo" />
            </Link>
            <div className="flex items-center gap-10">
              <Link href="/">Главная</Link>
              <Link href="/profile">Профиль</Link>
              <Link href="/register">
                <Button variant="outline">Зарегистрироваться</Button>
              </Link>
            </div>
          </div>
          <hr />
        </header>
        {children}
        <footer className="bg-[#F5F5F5]">
          <div className="container">
            <div className="flex flex-wrap place-content-between p-12">
              <span className="grid gap-2">
                <p className="pb-2"><b>Информация</b></p>
                <p>Правила сайта</p>
                <p>Политика обработки перс. данных</p>
                <p>Контакты</p>
                <p>Пресс-служба</p>
                <p>Работа у нас</p>
                <p>Как не стать жертвой мошенников</p>
              </span>
              <span className="grid gap-2">
                <p className="pb-2"><b>Соискателям</b></p>
                <p>Готовое резюме</p>
                <p>Все сервисы</p>
                <p>Профориентация</p>
                <p>Продвижение резюме</p>
                <p>Хочу у вас работать</p>
                <p>Производственный календарь</p>
              </span>
              <span className="grid">
                <p className="pb-2"><b>Работодателям</b></p>
                <p>Разместить вакансии</p>
                <p>Производственный календарь</p>
                <p>Прайс-лист</p>
                <p>Помощь работодателям</p>
              </span>
            </div>
            <hr />
            <Link href="/">
              <Image
                src="/logos/logo.png"
                className="py-12"
                width={118}
                height={34}
                alt="logo"
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
