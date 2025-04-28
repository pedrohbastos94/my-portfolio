import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";
import NavBar from "./components/navBar/navBar";
import BackToTop from "./components/BackToTop/backtotop";
import Contact from "./components/Contact-form/contact";
import Footer from "./components/Footer/Footer";

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
        <main className="mx-auto md:py-0">{children}</main>
        <BackToTop />
        <section className="scroll-mt-24 py-20 px-6 sm:px-12 lg:px-30">
          <Contact />
        </section>
        <footer className="mt-12">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
