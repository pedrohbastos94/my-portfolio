"use client";

import { useState } from "react";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import { Typewriter } from "react-simple-typewriter";
import { FcIdea } from "react-icons/fc";

export default function Hero() {
  const [showRest, setShowRest] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden">
      <div className="text-center w-full max-w-4xl">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight flex flex-wrap justify-center items-center gap-2 break-words">
          <span>
            <Typewriter
              words={["Codificando o que você imagina, criando o que você"]}
              typeSpeed={60}
              cursor={false}
              onType={() => {
                if (!showRest) {
                  setTimeout(() => {
                    setShowRest(true);
                  }, 3400);
                }
              }}
            />
          </span>

          {showRest && (
            <>
              <FcIdea />
              <Typewriter
                words={[" precisa"]}
                cursor
                cursorStyle="."
                typeSpeed={60}
                delaySpeed={300}
              />
            </>
          )}
        </h1>

        <h2 className="mt-8 font-heading font-semibold text-gray-200 text-base sm:text-xl md:text-2xl max-w-3xl mx-auto px-2">
          Meu nome é Pedro Bastos, sou estudante de engenharia de software.
          Minhas principais stacks são JavaScript, ReactJs, NodeJs e Tailwind.
        </h2>
      </div>
    </div>
  );
}
