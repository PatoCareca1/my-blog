// src/pages/Home.tsx
import { SiVite, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  const stacks = [
    {
      title: "Vite",
      desc: "Ferramenta de build moderna que oferece inicialização instantânea e recarregamento rápido. Usada neste projeto para acelerar o desenvolvimento e garantir uma experiência ágil durante a codificação.",
      icon: <SiVite className="text-6xl text-purple-600 mb-4" />,
    },
    {
      title: "React",
      desc: "Biblioteca JavaScript para construção de interfaces interativas. Escolhida pela sua arquitetura baseada em componentes reutilizáveis e pelo amplo ecossistema, ideal para projetos de médio a grande porte.",
      icon: <SiReact className="text-6xl text-sky-500 mb-4" />,
    },
    {
      title: "TypeScript",
      desc: "Superset do JavaScript que adiciona tipagem estática ao código. Garante maior segurança, melhor autocompletar e reduz erros em tempo de execução, tornando o desenvolvimento mais robusto.",
      icon: <SiTypescript className="text-6xl text-blue-600 mb-4" />,
    },
    {
      title: "Tailwind CSS",
      desc: "Framework CSS baseado em utilitários que permite criação rápida e altamente customizável de interfaces. Foi adotado para manter consistência visual e produtividade sem abrir mão do controle de design.",
      icon: <SiTailwindcss className="text-6xl text-cyan-500 mb-4" />,
    },
  ];

  return (
    <PageWrapper>
    <div className="py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Stacks utilizadas</h1>
      <p className="text-lg mb-10 text-center max-w-2xl">
        Este blog foi criado com Vite, React, TypeScript e Tailwind CSS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {stacks.map(({ title, desc, icon }) => (
          <div
            key={title}
            className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center"
          >
            {icon}
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
}
