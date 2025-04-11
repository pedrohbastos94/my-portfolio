"use client";

import { MdOutlineEmail } from "react-icons/md";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-4 pb-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-8 pb-4">
          <button
            type="button"
            onClick={() => window.open("https://github.com/pedrohbastos94")}
            className="p-2 hover:text-blue-400 cursor-pointer"
          >
            <TbBrandGithub className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/pedrinbastos/")
            }
            className="p-2 hover:text-blue-400 cursor-pointer"
          >
            <TbBrandLinkedin className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "mailto:pedro.bastoshf@gmail.com";
            }}
            className="p-2 hover:text-blue-400 cursor-pointer"
          >
            <MdOutlineEmail className="w-6 h-6" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-400">
          © 2025 Pedro Bastos - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
