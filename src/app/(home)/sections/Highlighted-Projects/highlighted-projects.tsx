import HorizontalDivier from "@/app/components/Divider/horizontal";
import { SectionTitle } from "../Skills/Tiitle/sectionTitle";
import ProjectCard from "./Project-Card/project-card";
import { Link } from "@/app/components/Link/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function HighlightedProjects() {
  return (
    <section>
      <SectionTitle subtitle="destaque" title="Projetos em destaque" />
      <HorizontalDivier className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivier className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href={"/projects"}>
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
}
