import { ComponentProps, forwardRef } from "react";
import { Input as InputProvider } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import s from "./Input.module.css"

const Input = forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & { variant?: "defualt" | "shadow" }
>(({ className, type, variant = "defualt", ...props }, ref) => {
  const style = {
    defualt: "",
    shadow: s.shadow
  }[variant];
  return (
    <InputProvider
      className={cn(style, className)}
      type={type}
      {...props}
      ref={ref}
    />
  );
});

export { Input };
