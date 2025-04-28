"use client";
import Link from "next/link";
import ProjectCard from "./Project-card/project-card";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

export const ProjectList = () => {
  return (
    <section className=" px-6 py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <motion.div
        {...fadeUpAnimation}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="/project/HypeFY">
          <ProjectCard />
        </Link>
      </motion.div>
    </section>
  );
};
