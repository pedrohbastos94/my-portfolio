import { SectionTitle } from "../Skills/Tiitle/sectionTitle";
import { ExperienceItem } from "./experienceItem";

export default function WorkExperience() {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre disposto a enfrentar novos desafios e colaborar em
          projetos estimulantes. Vamos unir forças para desenvolver soluções
          inovadoras para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  );
}
