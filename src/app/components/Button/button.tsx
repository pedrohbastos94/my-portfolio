import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className="bg-red-600 py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-red-500 transition-all disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}
