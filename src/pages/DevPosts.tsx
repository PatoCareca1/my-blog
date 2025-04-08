// src/pages/DevPosts.tsx
import { FaCode, FaLaptopCode, FaDatabase, FaBug } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

export default function DevPosts() {
  const devPosts = [
    {
      title: "Boas práticas com React",
      desc: "Aprenda a estruturar seus componentes de forma escalável e reutilizável em projetos modernos.",
      icon: <FaLaptopCode className="text-6xl text-indigo-600 mb-4" />,
    },
    {
      title: "Debugging eficiente",
      desc: "Dicas e ferramentas para encontrar e corrigir bugs em aplicações JavaScript de forma rápida.",
      icon: <FaBug className="text-6xl text-red-500 mb-4" />,
    },
    {
      title: "Organização de código",
      desc: "Padrões e estruturas para manter o código limpo e compreensível em times de desenvolvimento.",
      icon: <FaCode className="text-6xl text-green-600 mb-4" />,
    },
    {
      title: "Banco de dados no Frontend",
      desc: "Como integrar seu front-end com back-ends e bancos de dados de forma eficiente.",
      icon: <FaDatabase className="text-6xl text-yellow-500 mb-4" />,
    },
  ];

  return (
    <PageWrapper>
    <div className="py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Posts de Desenvolvimento</h1>
      <p className="text-lg mb-10 text-center max-w-2xl">
        Compartilhando conhecimento técnico, boas práticas e experiências no desenvolvimento web.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {devPosts.map(({ title, desc, icon }) => (
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