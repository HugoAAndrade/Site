"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import styles from "./Projetos.module.scss";
import { useLang } from "@/context/LanguageContext";

const Projetos = () => {
  const { t } = useLang();
  const { heading, items } = t.projetos;

  useEffect(() => {
    Aos.init({ delay: 25, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className={styles.projetos}>
      <div>
        <h2 data-aos="fade-up" data-aos-duration="800">
          {heading.before}
          <span>{heading.span}</span>
        </h2>
        <div className={styles.grid}>
          {items.map((projeto, index) => (
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
