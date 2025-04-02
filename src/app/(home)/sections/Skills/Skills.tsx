import { KnownSkills } from "./known-Skills";
import { SectionTitle } from "./Tiitle/sectionTitle";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Skills() {
  return (
    <section className="container ">
      <SectionTitle
        subtitle="competências"
        classname="mb-2"
        title="Conhecimentos"
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {[
          { icon: <JavascriptIcon />, name: "JavaScript" },
          { icon: <span>&lt;/&gt;</span>, name: "React" },
          { icon: <GitHubIcon />, name: "Node.js" },
          { icon: <span>&lt;/&gt;</span>, name: "Tailwind" },
          { icon: <span>&lt;/&gt;</span>, name: "Nextjs" },
        ].map((skill, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <KnownSkills key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
