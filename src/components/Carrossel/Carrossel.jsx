"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Carrossel.module.scss";

const Carrossel = () => {
  const skills = useMemo(
    () => [
      { src: "/images/figma.svg", alt: "Figma" },
      { src: "/images/ps.svg", alt: "Photoshop" },
      { src: "/images/html.svg", alt: "HTML" },
      { src: "/images/css.svg", alt: "CSS" },
      { src: "/images/sass.svg", alt: "Sass" },
      { src: "/images/js.svg", alt: "JavaScript" },
      { src: "/images/ts.svg", alt: "TypeScript" },
      { src: "/images/react.svg", alt: "React" },
      { src: "/images/node.svg", alt: "Node.js" },
      { src: "/images/git.svg", alt: "Git" },
      { src: "/images/wp.svg", alt: "WordPress" },
      { src: "/images/php.svg", alt: "PHP" },
      { src: "/images/sql.svg", alt: "SQL" },
      { src: "/images/docker.svg", alt: "Docker" },
      { src: "/images/linux.svg", alt: "Linux" },
      { src: "/images/magento.svg", alt: "Magento" },
    ],
    [],
  );

  const marqueeRef = useRef(null);
  const groupRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2);
  const [shiftPx, setShiftPx] = useState(0);

  useEffect(() => {
    const update = () => {
      const marqueeEl = marqueeRef.current;
      const groupEl = groupRef.current;

      if (!marqueeEl || !groupEl) return;

      const containerWidth = marqueeEl.clientWidth;
      const sequenceWidth = groupEl.scrollWidth;

      if (!containerWidth || !sequenceWidth) return;

      setShiftPx(sequenceWidth);

      // Repete o suficiente para nunca “abrir buraco” durante o loop.
      const required = Math.ceil((containerWidth * 2) / sequenceWidth) + 1;
      setRepeatCount(Math.max(2, required));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className={styles.carrossel}>
      <div>
        <div className={styles.marquee} ref={marqueeRef}>
          <div
            className={styles.marqueeContent}
            style={{ "--shift": `${shiftPx}px` }}
          >
            {Array.from({ length: repeatCount }).map((_, groupIndex) => (
              <div
                className={styles.group}
                key={`group-${groupIndex}`}
                ref={groupIndex === 0 ? groupRef : undefined}
                aria-label={groupIndex === 0 ? "Skills" : undefined}
                aria-hidden={groupIndex === 0 ? undefined : true}
              >
                {skills.map((skill) => (
                  <div
                    className={styles.item}
                    key={`${groupIndex}-${skill.alt}`}
                  >
                    <img
                      src={skill.src}
                      alt={groupIndex === 0 ? skill.alt : ""}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrossel;
