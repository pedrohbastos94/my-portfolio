"use client";

import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
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
          {/* <div className="py-2 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              type="button"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/caminho/para/seu/arquivo.pdf";
                link.download = "arquivo-personalizado.pdf";
                link.click();
              }}
              className="flex justify-between items-center px-8 h-12 bg-gray-500 font-semibold rounded-lg w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900 "
            >
              <DownloadIcon />
              Curriculo
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.href = "mailto:pedro.bastoshf@gmail.com";
              }}
              className="flex justify-between items-center px-8 h-12 bg-gray-500 font-semibold rounded-lg w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900 "
            >
              <EmailIcon /> Contato
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
