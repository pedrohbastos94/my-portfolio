import { Link } from "@/app/components/Link/link";
import { SectionTitle } from "../../Skills/Tiitle/sectionTitle";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
      <SectionTitle
        title={"projetos"}
        subtitle={"Meus projetos"}
        classname="text-center items-center [&>motion.h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Separei aqui alguns projetos que criei com muito cuidado (e café ☕).
          Dá uma olhada, vê o que usei em cada um e aproveita pra conhecer as
          ideias por trás do código!
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </div>
    </section>
  );
};
