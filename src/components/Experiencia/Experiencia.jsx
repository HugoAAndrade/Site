"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import styles from "./Experiencia.module.scss";

const experiencias = [
  {
    empresa: "WideCommerce",
    cargo: "Desenvolvedor Full Stack",
    periodo: "2022 — presente",
    descricao:
      "Desenvolvimento e manutenção de e-commerces e plataformas digitais. Atuação com Magento, WooCommerce e WordPress, além de infraestrutura com Docker e Linux. Entre os clientes atendidos: Dumond, Kikos, Lightning Bolt, Redelease e Shopping Eldorado.",
    tags: ["PHP", "Magento", "Node.js", "Docker", "Linux", "MySQL"],
    link: "https://widecommerce.com.br/",
    atual: true,
  },
  {
    empresa: "Hubsell",
    cargo: "Desenvolvedor Web",
    periodo: "2021 — 2022",
    descricao:
      "Participação no desenvolvimento de sites e e-commerces personalizados, com foco em performance, usabilidade e experiência do usuário.",
    tags: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
    link: "https://www.hubsell.com.br/",
    atual: false,
  },
  {
    empresa: "Análise e Desenvolvimento de Sistemas",
    cargo: "Graduação",
    periodo: "2020 — 2023",
    descricao:
      "Formação técnica com base em programação, banco de dados, redes de computadores e engenharia de software.",
    tags: ["ADS", "Graduação"],
    link: null,
    atual: false,
  },
];

const Experiencia = () => {
  useEffect(() => {
    Aos.init({ delay: 25, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className={styles.experiencia}>
      <div>
        <h2 data-aos="fade-up" data-aos-duration="800">
          Experiência <span>profissional</span>
        </h2>
        <div className={styles.timeline}>
          {experiencias.map((exp, index) => (
            <div
              key={index}
              className={styles.item}
              data-aos="fade-up"
              data-aos-duration={800 + index * 200}
            >
              <div className={styles.marker}>
                <div
                  className={`${styles.dot} ${exp.atual ? styles.dotAtual : ""}`}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div>
                    <h3>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exp.empresa}
                        </a>
                      ) : (
                        exp.empresa
                      )}
                    </h3>
                    <p className={styles.cargo}>{exp.cargo}</p>
                  </div>
                  <span
                    className={`${styles.periodo} ${exp.atual ? styles.periodoAtual : ""}`}
                  >
                    {exp.periodo}
                  </span>
                </div>
                <p className={styles.descricao}>{exp.descricao}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
