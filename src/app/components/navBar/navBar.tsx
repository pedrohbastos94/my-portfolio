"use client";

import NavItem, { type NavItemInterface } from "./navItem";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const items: NavItemInterface[] = [
  {
    href: "/",
    label: "Sobre",
  },
  {
    href: "/skills",
    label: "Habilidades",
  },
  {
    href: "/projects",
    label: "Projetos",
  },
];

export default function NavBar() {
  // const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="absolute px-4 sm:px-48 top-0 w-full z-10 h-24 flex items-center justify-center">
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

      {/* <button
        onClick={() => setOpenMenu(!openMenu)}
        className="sm:hidden p-2"
        type="button"
      >
        {openMenu ? <CloseIcon /> : <HorizontalSplitIcon />}
      </button>

      <ul
        className={`sm:hidden absolute top-18 left-0 w-full bg-gray-900 justify-between flex p-5 transition-all duration-300 ease-in-out ${
          openMenu ? "block" : "hidden"
        }`}
      >
        {items.map((item, index) => (
          <NavItem key={item.href} href={item.href} label={item.label} />
        ))}
      </ul> */}
    </header>
  );
}
