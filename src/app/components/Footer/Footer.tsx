"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
            <GitHubIcon className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/pedrinbastos/")
            }
            className="p-2 hover:text-blue-400 cursor-pointer"
          >
            <LinkedInIcon className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "mailto:pedro.bastoshf@gmail.com";
            }}
            className="p-2 hover:text-blue-400 cursor-pointer"
          >
            <EmailIcon className="w-8 h-8" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-400">
          © 2025 Pedro Bastos - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
