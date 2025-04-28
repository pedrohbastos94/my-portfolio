"use client";

import { KnownSkills } from "@/app/(home)/sections/Skills/known-Skills";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  TbBrandReact,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandGithub,
} from "react-icons/tb";

const skills = [
  { icon: <TbBrandJavascript name="" /> },
  { icon: <TbBrandReact name="" /> },
  { icon: <TbBrandNodejs name="" /> },
  { icon: <TbBrandTailwind name="" /> },
  { icon: <TbBrandNextjs name="" /> },
  { icon: <TbBrandGithub name="" /> },
];

export default function ProjectCard() {
  return (
    <div className="rounded-lg h-[436px] p-4 flex flex-col bg-gray-800 overflow-hidden group transition-all border-2 border-gray-800 hover:border-danger opacity-70 hover:opacity-100">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="/HypeFY.png"
          alt="Thumbnail do projeto HypeFY"
          unoptimized
          className="w-full h-105 object-cover duration-500 transition-all group-hover:scale-110"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <strong className="font-medium text-gray-50/90 group-hover:text-danger transition-all">
          HypeFY - Em andamento
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Hypefy é uma plataforma dinâmica criada para campanhas de alto
          impacto, como sorteios, eventos, lançamentos de produtos ou qualquer
          ação de divulgação com recompensas. Neste projeto, a Hypefy foi usada
          para promover o sorteio de um Setup Gamer completo, combinando um
          sistema de inscrições gamificadas com uma mecânica de indicação viral.
          O usuário se cadastra por meio de um formulário e recebe um link
          exclusivo. A cada nova inscrição feita através desse link, ele acumula
          pontos e sobe em um ranking atualizado em tempo real.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {skills.map((skill, i) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
}
