import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";
import NavBar from "./components/navBar/navBar";
import BackToTop from "./components/BackToTop/backtotop";

export const metadata: Metadata = {
  title: "Portfólio © Pedro Bastos",
  icons: {
    icon: "/favicon.png",
  },
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxinium",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-monteserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background2.png)] bg-no-repeat md:bg-right-top bg-top">
        <NavBar />
        <main className="mx-auto md:py-0">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
