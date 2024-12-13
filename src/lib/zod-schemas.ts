import { z } from "zod";

const SM_MIN_LEN = 2
const SM_MAX_LEN = 64

const PASSWORD_MIN_LEN = 6
const PASSWORD_MAX_LEN = 64

export const emailSchema = z
  .string()
  .email("Некоректный адрес электронной почты");

export const smStringSchema = z
  .string()
  .min(SM_MIN_LEN, `Ведите не менее ${SM_MIN_LEN} символов`)
  .max(SM_MAX_LEN, `Ведите не более ${SM_MAX_LEN} символов`)

export const passwordSchema = z
  .string()
  .min(PASSWORD_MIN_LEN, `Пароль должен состоять из не менее ${PASSWORD_MIN_LEN} символов`)
  .max(PASSWORD_MAX_LEN, `Пароль должен состоять из не более ${PASSWORD_MAX_LEN} символов`)

export const roleSchema = z.enum(["Applicant", "Employer"], {required_error: "Необходимо выбрать роль"});