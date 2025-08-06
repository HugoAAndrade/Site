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
          <br /> experiência digital, <span>Full Stack</span> &{" "}
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
              Meu nome é <Link href="/">Hugo</Link>, sou um desenvolvedor Full
              Stack com forte atuação em Front End e UI/UX design. Tenho
              experiência na criação de interfaces modernas, intuitivas e
              performáticas, além de sistemas robustos no Back End.
            </p>
            <p>
              Ao longo da minha trajetória, fui ampliando meus conhecimentos em
              diversas tecnologias, e atualmente trabalho com PHP, Node.js,
              Docker, servidores Linux e e-commerces utilizando Magento,
              WooCommerce e WordPress.
            </p>
            <p>
              Minha base em design sempre me ajudou a entregar projetos com alto
              padrão visual, mantendo boas práticas de desenvolvimento aliadas à
              atenção aos detalhes e à responsividade.
            </p>
            <p>
              Atualmente atuo como desenvolvedor na{" "}
              <a
                target="_blank"
                href="https://widecommerce.com.br/"
                rel="noopener noreferrer"
              >
                <span>WideCommerce</span>
              </a>
              , onde participo de projetos com foco em e-commerce nas
              plataformas Magento e WordPress. Entre os clientes atendidos estão
              marcas como Dumond, Kikos, Lightning Bolt, Catálogo Favorita,
              Redelease, Shopping Eldorado, DetonaShop e diversos outros.
            </p>
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e sigo em
              constante evolução, estudando novas tecnologias, participando de
              eventos e sempre buscando melhorar minhas hard e soft skills.
            </p>
            <p>
              Já desenvolvi diversos sites e e-commerces, participando de
              projetos de grande porte. Pela empresa{" "}
              <a
                target="_blank"
                href="https://www.hubsell.com.br/"
                rel="noopener noreferrer"
              >
                <span>Hubsell</span>
              </a>{" "}
              também tive a oportunidade de criar soluções personalizadas para
              diferentes nichos. Além disso, atuo com projetos pessoais e
              freelances.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Principal;
