"use client";

import NavItem, { type NavItemInterface } from "./navItem";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { motion } from "framer-motion";

const items: NavItemInterface[] = [
  {
    href: "#",
    label: "Sobre",
  },
  {
    href: "#skills",
    label: "Habilidades",
  },
  {
    href: "#projects",
    label: "Projetos",
  },
];

export default function NavBar() {
  // const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <motion.header
      className="absolute px-4 sm:px-48 top-0 w-full z-10 h-24 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container text-lg font-bold flex items-center justify-between">
        <a
          href="https://www.instagram.com/pdrfbastos"
          target="_blank"
          rel="noreferrer noopener"
        >
          Pedro Bastos
        </a>
      </div>

      <nav className="flex items-center gap-4 sm:gap-10">
        {items.map((item, index) => (
          <NavItem key={item.href} href={item.href} label={item.label} />
        ))}
      </nav>

      {}
    </motion.header>
  );
}
