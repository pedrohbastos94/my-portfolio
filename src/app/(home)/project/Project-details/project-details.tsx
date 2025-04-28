"use client";

import TechBadge from "@/app/components/Tech-badge/techBadge";
import { SectionTitle } from "../../sections/Skills/Tiitle/sectionTitle";
import Button from "@/app/components/Button/button";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { Link } from "@/app/components/Link/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";

export default function ProjectDetails() {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-center relative pb-10 sm:pm-24 py-24 px-6 overflow-hidden">
      <div className="relative w-full h-[600px]">
        <motion.img
          src="/sorteiogamer.png"
          alt="Sorteio Gamer"
          className="absolute inset-0 w-full h-full object-cover z-[-2] blur-sm"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <SectionTitle
            subtitle="projetos"
            title="HypeFY"
            classname="text-center items-center sm:[&>h3]:text-4xl"
          />
          <motion.p
            className="text-gray-400 max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
            {...fadeUpAnimation}
          >
            Hypefy é uma plataforma para campanhas de alto impacto, como
            sorteios e lançamentos. Neste projeto, ela foi usada para sortear um
            Setup Gamer completo com um sistema de inscrições gamificadas e
            indicações virais, onde usuários acumulam pontos e sobem no ranking
            ao convidarem amigos.
          </motion.p>
          <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
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
                {...techBadgeAnimation}
                transition={{ duration: 0.3, delay: i * 0.2 }}
              >
                <TechBadge name={tech} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
            {...fadeUpAnimation}
          >
            <a
              href="https://github.com/pedrohbastos94"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="min-w-[180px]">
                <TbBrandGithub size={20} />
                Repositório
              </Button>
            </a>
            <a href="." target="_blank" rel="noreferrer">
              <Button className="min-w-[180px]">
                <FiGlobe size={20} />
                Projeto Online
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
      <Link href="/project">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
}
