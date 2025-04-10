"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  classname?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  classname,
}: SectionTitleProps) => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <div className={`flex flex-col gap-4 ${classname}`}>
      <motion.span
        className="text-sm text-red-400"
        {...animProps}
        transition={{ duration: 0.5 }}
      >{`../${subtitle}`}</motion.span>
      <motion.h3
        className="text-3xl font-medium"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  );
};
