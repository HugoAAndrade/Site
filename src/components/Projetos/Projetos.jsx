"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import styles from "./Projetos.module.scss";

const projetos = [
  {
    titulo: "Portfolio Pessoal",
    descricao:
      "Site de portfólio desenvolvido com Next.js, React e SCSS. Conta com modo dark/light, animações de scroll, carrossel de skills e design totalmente responsivo.",
    tags: ["Next.js", "React", "SCSS", "Vercel"],
    link: "/",
    tipo: "Frontend",
  },
  {
    titulo: "E-commerce Dumond",
    descricao:
      "Desenvolvimento e manutenção da plataforma de e-commerce da Dumond, com customizações de layout, integrações e otimizações de performance.",
    tags: ["Magento", "PHP", "MySQL", "Docker"],
    link: "https://www.dumond.com.br/",
    tipo: "E-commerce",
  },
  {
    titulo: "Ambiente Containerizado",
    descricao:
      "Configuração de ambientes Docker para múltiplos serviços: nginx, PHP-FPM, MySQL e Redis, com rotinas automatizadas de build e deploy via shell scripts.",
    tags: ["Docker", "Linux", "Nginx", "Shell"],
    link: null,
    tipo: "DevOps",
  },
  {
    titulo: "Shopping Eldorado",
    descricao:
      "Implementação e customização de plataforma digital para o Shopping Eldorado, com integrações personalizadas e otimização de UX.",
    tags: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
    link: "https://www.shopeldorado.com.br/",
    tipo: "E-commerce",
  },
];

const Projetos = () => {
  useEffect(() => {
    Aos.init({ delay: 25, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className={styles.projetos}>
      <div>
        <h2 data-aos="fade-up" data-aos-duration="800">
          Projetos <span>selecionados</span>
        </h2>
        <div className={styles.grid}>
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration={800 + index * 150}
            >
              <div className={styles.cardTop}>
                <span className={styles.tipo}>{projeto.tipo}</span>
                {projeto.link && (
                  <a
                    href={projeto.link}
                    target={
                      projeto.link.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      projeto.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={styles.extLink}
                    aria-label={`Abrir ${projeto.titulo}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="15 3 21 3 21 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="10"
                        y1="14"
                        x2="21"
                        y2="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <div className={styles.tags}>
                {projeto.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
