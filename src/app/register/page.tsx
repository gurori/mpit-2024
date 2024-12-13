import RegisterForm from "./RegisterForm";
import s from "./RegisterForm.module.css"

export default function RegisterPage() {
    return (
        <div className="center max-h-screen min-h-[1000px]">
            <div className={s.block}>
            <h2>Регистрация</h2>
            <RegisterForm />
            </div>
        </div>
    )
}