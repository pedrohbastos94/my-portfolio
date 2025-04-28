"use client";

import NavItem, { type NavItemInterface } from "./navItem";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const items: NavItemInterface[] = [
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#experience", label: "Experiências" },
  { href: "#contact", label: "Contato" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md shadow-md"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo PB"
            width={300}
            height={49}
            className="w-[200px] h-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="md:hidden">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
            aria-label="Abrir menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/10 px-6 pb-2 flex flex-col gap-3">
          {items.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </motion.header>
  );
}
