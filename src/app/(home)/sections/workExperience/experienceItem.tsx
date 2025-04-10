"use client";

import Image from "next/image";
import TechBadge from "@/app/components/Tech-badge/techBadge";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import { duration } from "@mui/material";

export const ExperienceItem = () => {
  return (
    <motion.div
      className="grid grid-cols-[1fr] md:grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://atados.com.br/static/logo/logo-dark.svg"
            width={30}
            height={30}
            className="rounded-full"
            alt="Logo da empresa Atados"
          />{" "}
        </div>

        <a
          href="https://www.linkedin.com/company/atados/"
          target="_blank"
          className="text-gray-500 hover-red-500 transition-colors"
          rel="noreferrer"
        >
          @ Atados
        </a>
      </div>

      <div>
        <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
        <span className="text-gray-500">julho 2024 - O momento</span>
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
