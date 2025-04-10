"use client";

import React from "react";
import Image from "next/image";
import Avatar from "../../../../assets/Avatar.jpeg";
import TechBadge from "@/app/components/Tech-badge/techBadge";
import Button from "@/app/components/Button/button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";

const skillsSet = [
  {
    name: "JavaScript",
    description:
      "Uma linguagem de programação usada para desenvolvimento web dinâmico e interativo.",
  },
  {
    name: "Typescript",
    description: "Uma versão de JavaScript que inclui tipagem estática.",
  },
  {
    name: "React",
    description:
      "Uma biblioteca JavaScript para construção de interfaces de usuário interativas.",
  },
  {
    name: "Next",
    description:
      "Um framework para React que facilita a construção de aplicações web com renderização do lado do servidor.",
  },
  {
    name: "Git",
    description:
      "Sistema de controle de versão distribuído amplamente utilizado para gerenciar o código-fonte.",
  },
  {
    name: "HTML",
    description: "A linguagem de marcação usada para estruturar páginas web.",
  },
  {
    name: "TailWind-CSS",
    description:
      "Framework CSS utilitário para construção rápida de interfaces responsivas.",
  },
  {
    name: "Material UI",
    description:
      "Biblioteca de componentes React que implementa o Material Design.",
  },
  {
    name: "Figma",
    description:
      "Ferramenta de design colaborativo usada para criar interfaces e protótipos de aplicativos.",
  },
  {
    name: "Node.js",
    description:
      "Ambiente de execução JavaScript no lado do servidor, usado para construir aplicações escaláveis e rápidas.",
  },
];

const MOCK_CONTACTS = [
  {
    url: "https://github.com/pedrohbastos94",
    icon: <GitHubIcon />,
  },
  {
    url: "https://www.linkedin.com/in/pedrinbastos/",
    icon: <LinkedInIcon />,
  },
  {
    url: "mailto:pedro.bastoshf@gmail.com",
    icon: <EmailIcon />,
  },
];

export default function About() {
  return (
    <>
      <section className="container w-full lg:h-[755px] flex flex-col items-center justify-center mt-6 pb-10 sm:pb-32 lg:pb-[110px]  ">
        <div className=" flex items-center justify-center flex-col-reverse lg:flex-row">
          <motion.div
            className="w-full px-4 lg-max-w-[530px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl text-red-500">Sobre</h1>
            <p className="text-red-400 mt-2">Olá, meu nome é</p>
            <h2 className="text-2xl font-medium">Pedro Bastos</h2>
            <p className="my-6 text-sm sm:text-base">
              Sou apaixonado por tecnologia e tenho como missão me tornar um
              engenheiro de software excepcional. Atualmente, estou iniciando
              minha carreira na área de Engenharia de Software, buscando aplicar
              meus conhecimentos teóricos na prática por meio de estágios,
              projetos e colaborações em equipe. Estou focado em desenvolver
              minhas habilidades de resolução de problemas e comunicação,
              enquanto aprofundo minha compreensão do ciclo de vida do
              desenvolvimento de software. Estou aberto a oportunidades de
              estágio, projetos desafiadores e mentoria, ansioso para aprender
              com profissionais experientes e contribuir para o avanço da
              tecnologia.
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
              {[
                "Next.js",
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
              ].map((name, index) => (
                <motion.div
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  {...techBadgeAnimation}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <TechBadge name={name} />
                </motion.div>
              ))}
            </div>
            <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
              <Button className="w-max">
                Entre em Contato
                <ArrowRightAltIcon />
              </Button>

              <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                {MOCK_CONTACTS.map((contact, index) => (
                  <a
                    href={contact.url}
                    key={`contact-${
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      index
                    }`}
                    target="_blank"
                    className="hover:text-gray-100 transition-colors"
                    rel="noreferrer"
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="origin-center"
          >
            <Image
              width={420}
              height={404}
              src={Avatar}
              alt="Foto de Perfil do Pedro"
              layout=""
              objectFit=""
              className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
