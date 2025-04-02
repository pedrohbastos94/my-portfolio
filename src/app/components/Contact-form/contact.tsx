"use client";

import { SectionTitle } from "@/app/(home)/sections/Skills/Tiitle/sectionTitle";
import Button from "../Button/button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

const contactFormShema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormShema>;

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormShema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section className="py-16 px-6 md:py-28 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          title="contato"
          subtitle="Vamos trabalhar juntos? Entre em contato"
          classname="items-center text-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-red-600"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-red-600"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-red-600"
            maxLength={500}
            {...register("message")}
          />
          <Button className="w-max mx-auto mt-6 " disabled={isSubmitting}>
            Enviar mensagem
            <ArrowRightAltIcon />
          </Button>
        </form>
      </div>
    </section>
  );
}
