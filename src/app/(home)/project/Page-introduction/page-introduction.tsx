"use client";

import { Link } from "@/app/components/Link/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SectionTitle } from "../../sections/Skills/Tiitle/sectionTitle";
import { motion } from "framer-motion";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
      <SectionTitle
        title={"Projetos"}
        subtitle={"Meus projetos"}
        classname="text-center items-center [&>motion.h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Separei aqui alguns projetos que criei com muito cuidado (e café ☕).
          Dá uma olhada, vê o que usei em cada um e aproveita pra conhecer as
          ideias por trás do código!
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  );
};
