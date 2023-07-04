import styles from "./Principal.module.scss";
import Link from "next/link";

const Principal = ({ sobre }) => {
  return (
    <section className={styles.principal}>
      <div>
        <figure>
          <img src="images/me.webp" alt="logo" />
        </figure>
        <p>Olá! 👋</p>
        <h1>
          Construindo sua
          <br /> experiência digital, <span>Front End</span> &{" "}
          <span>UI/UX Designer</span>
        </h1>
        {!sobre ? (
          <Link href="/sobre-mim">
            <p>Sobre mim</p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 10 9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.85019 4.08611L4.71722 0.0480284C4.67782 0.0172409 4.62755 0 4.57457 0H3.37216C3.27162 0 3.22543 0.113298 3.30151 0.17241L8.0595 3.91617H0.108692C0.0489113 3.91617 0 3.9605 0 4.01469V4.75359C0 4.80777 0.0489113 4.85211 0.108692 4.85211H8.05814L3.30015 8.59586C3.22407 8.65621 3.27026 8.76827 3.3708 8.76827H4.61397C4.63978 8.76827 4.6656 8.75965 4.68462 8.74364L9.85019 4.68216C9.89723 4.64509 9.93494 4.5993 9.96078 4.54789C9.98663 4.49647 10 4.44063 10 4.38414C10 4.32764 9.98663 4.2718 9.96078 4.22039C9.93494 4.16897 9.89723 4.12319 9.85019 4.08611Z" />
            </svg>
          </Link>
        ) : (
          <div>
            <h2>Sobre mim</h2>
            <p>
              Meu nome é <Link href="/">Hugo</Link>, sou um apaixonado por Front
              End e UI/UX design, com experiência na criação de interfaces
              intuitivas e atraentes. Meu objetivo é combinar habilidades
              técnicas e criativas para desenvolver experiências digitais.
              <br /> Tenho conhecimento em algumas áreas da programação mas a
              área que mais me identifiquei e me especializei foi a de Front
              End.
            </p>
            <p>
              Como sempre tive afinidade com design isso sempre me auxiliou na
              minha carreira como desenvolvedor Front End, sempre utilizo as
              melhores práticas de programação atreladas ao máximo de cuidado ao
              layout.
              {/* Sempre atento as interfaces, wireframes, prototipagem,
              desenvolvimento responsivo, otimização de desempenho, entre
              outros. */}
            </p>
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas. Tenho
              habilidades em JavaScript, React, Node, jQuery, SASS, Adobe
              Photoshop, Figma, entre outros.
            </p>
            <p>
              Ao longo dos anos, desenvolvi diversos sites e ecommerces e atuei
              como Front End em projetos de larga escala.
              <br /> Pela empresa{" "}
              <a target="_blank" href="https://www.hubsell.com.br/">
                <span>Hubsell</span>
              </a>{" "}
              desenvolvi diversos projetos e templates. Além disso possuo
              experiência com projetos de freelance e pessoais.
            </p>

            <p>
              Estou sempre em busca de me aperfeiçoar como profissional,
              participando cursos, eventos e workshops. Tentando sempre
              aprimorar minhas hard skills e soft skills.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Principal;
