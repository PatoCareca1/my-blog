// src/pages/FitnessPosts.tsx
import { GiWeightLiftingUp, GiMuscleUp, GiMeal, GiShinyApple } from "react-icons/gi";
import PageWrapper from "../components/PageWrapper";

export default function FitnessPosts() {
  const fitnessPosts = [
    {
      title: "Treinos para Hipertrofia",
      desc: "Estratégias de treino para ganhar massa muscular com eficiência.",
      icon: <GiMuscleUp className="text-6xl text-rose-600 mb-4" />,
    },
    {
      title: "Alimentação inteligente",
      desc: "Dicas nutricionais para otimizar o ganho de massa magra e recuperação.",
      icon: <GiMeal className="text-6xl text-yellow-600 mb-4" />,
    },
    {
      title: "Exercícios compostos",
      desc: "A importância dos grandes levantamentos e como executá-los corretamente.",
      icon: <GiWeightLiftingUp className="text-6xl text-green-600 mb-4" />,
    },
    {
      title: "Snacks saudáveis",
      desc: "Opções práticas e nutritivas para o dia a dia de quem treina.",
      icon: <GiShinyApple className="text-6xl text-lime-500 mb-4" />,
    },
  ];

  return (
    <PageWrapper>
    <div className="py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Posts de Musculação</h1>
      <p className="text-lg mb-10 text-center max-w-2xl">
        Dicas práticas, treinos e estratégias de nutrição para alcançar seus objetivos na academia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {fitnessPosts.map(({ title, desc, icon }) => (
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