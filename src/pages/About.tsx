// src/pages/About.tsx
import {
  FaUser,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="py-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Sobre o Desenvolvedor</h1>
        <p className="text-lg mb-10 text-center max-w-2xl">
          Sou Lucas Daniel, estudante de Ciência da Computação, desenvolvedor
          full stack e entusiasta de musculação. Este blog é um espaço para
          compartilhar conhecimento técnico e promover um estilo de vida
          saudável. Abaixo, você encontra mais sobre minha formação, experiências
          e como me contatar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

          {/* Perfil */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
            <FaUser className="text-6xl text-blue-700 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Lucas Daniel</h2>
            <p className="text-sm mb-2">
              Desenvolvedor Full Stack | Python | Typescript | Django | React |
            </p>
            <p className="text-sm">Estudante de Ciência da Computação - UERN</p>
          </div>

          {/* Contato */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
            <FaEnvelope className="text-6xl text-red-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Contato</h2>
            <p className="text-sm mb-1">LucasDan16@outlook.com</p>
            <p className="text-sm mb-1">📞 (84) 98108-3103</p>
            <p className="text-sm mb-1">
              <a
                href="http://lattes.cnpq.br/8218283806656500"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Lattes
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/PatoCareca1"
                target="_blank"
                className="text-gray-800 hover:text-black text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-daniel-costa-souza/"
                target="_blank"
                className="text-blue-700 hover:text-blue-900 text-3xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Experiência */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
            <FaTools className="text-6xl text-green-700 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Experiência</h2>
            <p className="text-sm mb-1 font-semibold">4PUMP (2023)</p>
            <p className="text-sm mb-2">
              Dev Full Stack e automações em Python
            </p>
            <p className="text-sm mb-1 font-semibold">Secretaria de Educação (2021)</p>
            <p className="text-sm">Técnico em TI - manutenção e suporte</p>
          </div>

          {/* Habilidades */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <FaLayerGroup className="text-6xl text-indigo-700 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Habilidades Técnicas</h2>
            <div className="text-sm text-left space-y-2">
              <div>
                <strong>Frontend:</strong> React, TypeScript, JavaScript, HTML5, CSS3,
                Tailwind CSS, Sass, Bootstrap, Bulma
              </div>
              <div>
                <strong>Backend:</strong> Python, Django, FastAPI, Node.js
              </div>
              <div>
                <strong>Banco de Dados:</strong> PostgreSQL, MySQL, SQLite, MongoDB
              </div>
              <div>
                <strong>Ferramentas e DevOps:</strong> Git, GitHub, Docker, CI/CD
              </div>
              <div>
                <strong>Outros:</strong> Power BI, Figma, Linux, Metodologias Ágeis
              </div>
            </div>
          </div>

          {/* Projetos */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <FaLaptopCode className="text-6xl text-purple-700 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Projetos em Destaque</h2>
            <ul className="text-sm space-y-1 text-left">
              <li>• <strong>IA Dieta & Treino:</strong> geração personalizada via NLP</li>
              <li>• <strong>IA Cuidadora:</strong> reconhecimento de voz e alerta para idosos</li>
              <li>• <strong>Crowdless:</strong> aplicativo premiado em Hackathon nacional</li>
              <li>• <strong>Blogs, Portfólios e APIs:</strong> com React, Django, Tailwind e MongoDB</li>
            </ul>
            <p className="mt-4 text-sm">
              Veja mais projetos no meu{" "}
              <a
                href="https://github.com/PatoCareca1"
                target="_blank"
                className="text-blue-800 underline hover:text-blue-900 font-semibold"
              >
                GitHub
              </a>{" "}
              e conheça melhor meu trabalho!
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
