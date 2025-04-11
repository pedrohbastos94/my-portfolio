"use client";

import { KnownSkills } from "./known-Skills";
import { SectionTitle } from "./Tiitle/sectionTitle";
import { motion } from "framer-motion";
import {
  TbBrandReact,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandGithub,
} from "react-icons/tb";

export default function Skills() {
  const skills = [
    { icon: <TbBrandJavascript />, name: "JavaScript" },
    { icon: <TbBrandReact />, name: "React" },
    { icon: <TbBrandNodejs />, name: "Node.js" },
    { icon: <TbBrandTailwind />, name: "Tailwind" },
    { icon: <TbBrandNextjs />, name: "Nextjs" },
    { icon: <TbBrandGithub />, name: "GitbHub" },
  ];

  return (
    <section className="container">
      <SectionTitle
        subtitle="competências"
        classname="mb-2"
        title="Conhecimentos"
      />

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <KnownSkills skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
