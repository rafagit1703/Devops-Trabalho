import { useEffect } from "react"; // 1. IMPORTADO O HOOK PARA LOGS DE CARREGAMENTO
import logo from "./assets/Unipar.png";
import Patrick from "./assets/image.png";

import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaInstagram,
} from "react-icons/fa";

import { SiVercel } from "react-icons/si";

import "./App.css";

function App() {
  // 2. LOG DE INICIALIZAÇÃO (Roda uma vez quando a página carrega)
  useEffect(() => {
    console.log(`[INFO] [${new Date().toISOString()}] Aplicação Iniciada com Sucesso no ambiente de Produção/Homologação.`);
  }, []);

  // 3. FUNÇÃO PARA LOGAR CLIQUE NO BOTÃO PRINCIPAL
  const handleAcessarProjeto = () => {
    console.log(`[TRACKING] [${new Date().toISOString()}] Usuário clicou no botão 'Acessar Projeto'.`);
    alert("Redirecionando para o projeto..."); // Mantive uma ação simulada
  };

  // 4. FUNÇÃO PARA LOGAR CLIQUES EM LINKS EXTERNOS (Métricas/Observabilidade)
  const handleTechClick = (techNome) => {
    console.log(`[NAVIGATE] [${new Date().toISOString()}] Usuário clicou no link da tecnologia: ${techNome}`);
  };

  const tecnologias = [
    {
      nome: "React",
      icone: <FaReact />,
      link: "https://react.dev/",
    },
    {
      nome: "GitHub",
      icone: <FaGithub />,
      link: "https://github.com/",
    },
    {
      nome: "Git",
      icone: <FaGitAlt />,
      link: "https://git-scm.com/",
    },
    {
      nome: "Node.js",
      icone: <FaNodeJs />,
      link: "https://nodejs.org/",
    },
    {
      nome: "Vercel",
      icone: <SiVercel />,
      link: "https://vercel.com/",
    },
  ];

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1 className="titulo">Unipar</h1>

        <p className="subtitulo">
          Curso de ADS - Desenvolvimento Web com React
        </p>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h2>DevOps</h2>

          <p>
            Projeto desenvolvido para apresentar conceitos de React, Git,
            versionamento e deploy utilizando tecnologias modernas de
            desenvolvimento.
          </p>

          {/* ADICIONADO EVENTO DE LOG NO BOTÃO */}
          <button className="botao" onClick={handleAcessarProjeto}>
            Acessar Projeto
          </button>
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre-container">
        {/* UNIPAR */}
        <div className="sobre-card">
          <a
            href="https://www.unipar.br/"
            target="_blank"
            rel="noreferrer"
            className="patrick-link"
            onClick={() => handleTechClick("Site UNIPAR")} // LOG DE CLIQUE
          >
            <img src={logo} alt="Unipar" className="sobre-img" />

            <div className="insta">
              <span>Site Oficial da UNIPAR</span>
            </div>
          </a>

          <h2>Universidade UNIPAR</h2>

          <p>
            A UNIPAR é uma universidade reconhecida no Paraná, oferecendo cursos de
            graduação e pós-graduação com foco em tecnologia, inovação e qualidade no
            ensino superior.
          </p>
        </div>
        {/* PROFESSOR */}
        <div className="sobre-card">
          <a
            href="https://www.instagram.com/_patrick.edueu_?igsh=eW5jZWkycXMwdTht"
            target="_blank"
            rel="noreferrer"
            className="patrick-link"
            onClick={() => handleTechClick("Instagram do Professor")} // LOG DE CLIQUE
          >
            <img src={Patrick} alt="Patrick" className="sobre-img" />

            <div className="insta">
              <FaInstagram />
              <span>Instagram do Professor</span>
            </div>
          </a>

          <h2>Professor Patrick</h2>

          <p>
            Professor responsável pela matéria de DevOps, auxiliando os alunos
            no aprendizado de versionamento, deploy, integração contínua e boas
            práticas no desenvolvimento de software.
          </p>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="tecnologias">
        <h2 className="section-title">Tecnologias Utilizadas</h2>

        <div className="tech-container">
          {tecnologias.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noreferrer"
              className="tech-card"
              onClick={() => handleTechClick(tech.nome)} // ADICIONADO LOG DE CLIQUE DINÂMICO
            >
              <div className="icone">{tech.icone}</div>

              <span>{tech.nome}</span>
            </a>
          ))}
        </div>
      </section>

      {/* CARDS */}
      <section className="cards-container">
        <h2 className="section-title">Conceitos Aplicados</h2>

        <div className="cards">
          <div className="card">
            <h3>Versionamento</h3>

            <p>
              Controle de versões utilizando Git e GitHub para organização do
              projeto.
            </p>
          </div>

          <div className="card">
            <h3>Deploy</h3>

            <p>
              Publicação automática do projeto utilizando a plataforma Vercel.
            </p>
          </div>

          <div className="card">
            <h3>Integração Contínua</h3>

            <p>
              Atualizações rápidas e organizadas utilizando práticas modernas de
              DevOps.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 - Projeto criado para a matéria de DevOps</p>
      </footer>
    </div>
  );
}

export default App;