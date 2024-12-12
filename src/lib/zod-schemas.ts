import { z } from "zod";

export const emailSchema = z
  .string()
  .email("Некоректный адрес электронной почты");