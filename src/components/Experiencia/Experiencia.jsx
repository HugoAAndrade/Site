"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import styles from "./Experiencia.module.scss";
import { useLang } from "@/context/LanguageContext";

const Experiencia = () => {
  const { t } = useLang();
  const { heading, items } = t.experiencia;

  useEffect(() => {
    Aos.init({ delay: 25, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className={styles.experiencia}>
      <div>
        <h2 data-aos="fade-up" data-aos-duration="800">
          {heading.before}
          <span>{heading.span}</span>
        </h2>
        <div className={styles.timeline}>
          {items.map((exp, index) => (
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
