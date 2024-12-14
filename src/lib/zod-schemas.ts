import { z } from "zod";

const SM_MIN_LEN = 2;
const SM_MAX_LEN = 64;

const XL_MIN_LEN = 2;
//const XL_MAX_LEN = 2048

const PASSWORD_MIN_LEN = 6;
const PASSWORD_MAX_LEN = 64;

export const emailSchema = z
  .string()
  .email("Некоректный адрес электронной почты");

export const smStringSchema = z
  .string()
  .min(SM_MIN_LEN, `Ведите не менее ${SM_MIN_LEN} символов`)
  .max(SM_MAX_LEN, `Ведите не более ${SM_MAX_LEN} символов`);

export const xlStringSchema = z
  .string()
  .min(XL_MIN_LEN, `Ведите не менее ${XL_MIN_LEN} символов`);

export const passwordSchema = z
  .string()
  .min(
    PASSWORD_MIN_LEN,
    `Пароль должен состоять из не менее ${PASSWORD_MIN_LEN} символов`
  )
  .max(
    PASSWORD_MAX_LEN,
    `Пароль должен состоять из не более ${PASSWORD_MAX_LEN} символов`
  );

export const priceSchema = z.coerce
  .number({ required_error: "Введите число" })
  .min(50, "Введите не менее 50₽")
  .max(10000000, "Введите не более 10,000,000₽")
  .step(0.01, "Максимум 2 десятичных знака");

export const roleSchema = z.enum(["Applicant", "Employer"], {
  required_error: "Необходимо выбрать роль",
});
