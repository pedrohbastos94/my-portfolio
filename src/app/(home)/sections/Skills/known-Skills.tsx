import type { ReactElement } from "react";

type KnownSkillsProps = {
  skill: {
    icon: ReactElement;
    name: string;
  };
};

export const KnownSkills = ({ skill }: KnownSkillsProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-red-500 hover:bg-red-600/30">
      <div className="flex items-center justify-between">
        <p className="font-medium">{skill.name}</p>
        {skill.icon}
      </div>
    </div>
  );
};
