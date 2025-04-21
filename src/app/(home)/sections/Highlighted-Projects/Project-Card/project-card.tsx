import { Link } from "@/app/components/Link/link";
import TechBadge from "@/app/components/Tech-badge/techBadge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ProjectCard() {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/HypeFY.png"
          alt="Tumbnail do projeto de sorteio"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          🌀 Hypefy — Crie campanhas virais com engajamento real
        </h3>
        <p className="text-gray-400 my-6">
          Hypefy é uma plataforma dinâmica criada para campanhas de alto
          impacto, como sorteios, eventos, lançamentos de produtos ou qualquer
          ação de divulgação com recompensas. Neste projeto, a Hypefy foi usada
          para promover o sorteio de um Setup Gamer completo, combinando um
          sistema de inscrições gamificadas com uma mecânica de indicação viral.
          O usuário se cadastra por meio de um formulário e recebe um link
          exclusivo. A cada nova inscrição feita através desse link, ele acumula
          pontos e sobe em um ranking atualizado em tempo real.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="React" />
          <TechBadge name="TypeScript" />
          <TechBadge name="TailwindCSS" />
          <TechBadge name="Framer Motion" />
          <TechBadge name="PostgreSQL" />
          <TechBadge name="Node.js" />
        </div>
        <Link href={"/projects/sorteiogamer"}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
}
