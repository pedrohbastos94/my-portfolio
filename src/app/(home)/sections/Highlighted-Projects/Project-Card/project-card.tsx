"use client";

import { Link } from "@/app/components/Link/link";
import TechBadge from "@/app/components/Tech-badge/techBadge";
import { fadeUpAnimation } from "@/app/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ProjectCard() {
  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={420}
          height={304}
          src="/HypeFY.png"
          alt="Tumbnail do projeto de sorteio"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </motion.div>

      <div>
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          🌀 Hypefy — Crie campanhas virais com engajamento real
          <span className="text-danger text-sm"> - Projeto em andamento</span>
        </motion.h3>

        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          Hypefy é uma plataforma dinâmica criada para campanhas de alto
          impacto, como sorteios, eventos, lançamentos de produtos ou qualquer
          ação de divulgação com recompensas. Neste projeto, a Hypefy foi usada
          para promover o sorteio de um Setup Gamer completo, combinando um
          sistema de inscrições gamificadas com uma mecânica de indicação viral.
          O usuário se cadastra por meio de um formulário e recebe um link
          exclusivo. A cada nova inscrição feita através desse link, ele acumula
          pontos e sobe em um ranking atualizado em tempo real.
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Framer Motion",
            "PostgreSQL",
            "Node.js",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            >
              <TechBadge name={tech} />
            </motion.div>
          ))}
        </div>

        <Link href={"/project/HypeFY"}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
}
