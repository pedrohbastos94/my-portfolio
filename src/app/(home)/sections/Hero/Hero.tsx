"use client";

import ModelTrainingIcon from "@mui/icons-material/ModelTraining";

export default function Hero() {
  return (
    <div className="w-full container mx-auto p-8 sm:p-16 lg:p-28 py-0 ">
      <div className="flex flex-wrap justify-center gap-12 py-24">
        <div className=" flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-heading font-medium">
            Codificando o que você imagina, criando o que você{" "}
            <ModelTrainingIcon className="text-red-600" fontSize="inherit" />
            precisa.
          </h1>
          <h2 className="py-8 font-heading font-semibold text-gray-200 text-2xl">
            Meu nome é Pedro Bastos, sou estudante de engenharia de software,
            minhas principais stacks são JavaScript, ReactJs, NodeJs e Tailwind
          </h2>
        </div>
      </div>
    </div>
  );
}
