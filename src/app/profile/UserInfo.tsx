import { ReactNode } from "react";

export default function UserInfo({
  children,
  user,
}: {
  user: any;
  children?: ReactNode;
}) {
  return (
    <main className="container py-14">
      <h2 className="flex pb-8"><b>Личные данные</b></h2>
      <table className="min-w-full">
        <tbody>
          <tr className="[&>*]:py-2">
            <td className="w-1/3"><b>ИД пользователя</b></td>
            <td>{user.id}</td>
          </tr>
          <tr className="[&>*]:py-2">
            <td className="w-1/3"><b>Имя</b></td>
            <td>{user.firstName}</td>
          </tr>
          <tr className="[&>*]:py-2">
            <td className="w-1/3"><b>E-mail</b></td>
            <td>{user.email}</td>
          </tr>
          <tr className="[&>*]:py-2">
            <td className="w-1/3"><b></b></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {children}
    </main>
  );
}
