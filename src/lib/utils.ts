import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function apiFetch(apiPath: string, init?: RequestInit) {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${apiPath}`, init);
    return respone;
}