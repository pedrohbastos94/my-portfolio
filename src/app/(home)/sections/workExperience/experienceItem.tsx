"use client";

import Image from "next/image";
import TechBadge from "@/app/components/Tech-badge/techBadge";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";

export const ExperienceItem = () => {
  return (
    <motion.div
      className="grid grid-cols-[1fr] md:grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="relative group">
          <a
            href="https://www.atados.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-500 p-0.5 block w-fit"
          >
            <Image
              src="https://atados.com.br/static/logo/logo-dark.svg"
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
              alt="Logo da empresa Atados"
            />
          </a>

          <div className="absolute z-10 hidden group-hover:flex flex-col gap-2 bg-black/20 text-white text-xs p-4 rounded-lg w-64 top-full left-12 mt-2 backdrop-blur-sm transition-all">
            <p>
              A maior plataforma de voluntariado do Brasil. A Atados é uma
              plataforma que conecta pessoas e causas sociais.
            </p>
            <span className="text-red-400 ">Clique para visitar</span>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/company/atados/"
          target="_blank"
          className="text-gray-500 hover:text-red-500 transition-colors"
          rel="noreferrer"
        >
          @ Atados
        </a>
      </div>

      <div>
        <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
        <span className="text-gray-500">julho 2024 - julho 2025</span>
        <p className="text-gray-400">
          Responsável por solucionar bugs diários e implementação de novas
          funcionalidades e otimizações nos projetos existentes.
        </p>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {["Javascript", "React", "TypeScript", "Tailwind"].map((tech, i) => (
            <motion.div
              key={tech}
              {...techBadgeAnimation}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <TechBadge name={tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
