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
          Engenharia <span>Full Stack</span>
          <br /> com foco em <span>infraestrutura</span> e confiabilidade.
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
              Meu nome é <Link href="/">Hugo</Link>, sou desenvolvedor Full
              Stack e atuo na criação de aplicações web que equilibram boa
              experiência do usuário, qualidade de código e infraestrutura bem
              estruturada. Ao longo da minha trajetória, desenvolvi tanto o lado
              visual das aplicações quanto a parte técnica responsável pelo
              funcionamento e operação dos sistemas.
            </p>

            <p>
              Tenho experiência no desenvolvimento de interfaces modernas,
              intuitivas e responsivas, sempre buscando unir boas práticas de
              UI/UX com desempenho e organização do código. Essa base em design
              me ajuda a pensar nas aplicações não apenas do ponto de vista
              técnico, mas também na experiência real de quem utiliza o sistema.
            </p>

            <p>
              No lado de engenharia, trabalho com tecnologias do ecossistema web
              como PHP, Node.js e bancos de dados, participando da construção de
              sistemas robustos e integrações entre diferentes plataformas.
            </p>

            <p>
              Também tenho forte interesse por infraestrutura e operação de
              aplicações, trabalhando com Docker, servidores Linux e ambientes
              containerizados. Essa experiência me permite atuar não apenas no
              desenvolvimento das aplicações, mas também na organização dos
              ambientes de execução, deploy e manutenção dos sistemas.
            </p>

            <p>
              Grande parte da minha experiência está ligada ao desenvolvimento
              de e-commerces e plataformas digitais, principalmente utilizando
              Magento, WooCommerce e WordPress, participando tanto da
              implementação quanto da manutenção e evolução dessas soluções.
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
              , participando de projetos voltados para e-commerce e plataformas
              digitais. Entre os clientes atendidos estão marcas como Dumond,
              Kikos, Lightning Bolt, Catálogo Favorita, Redelease, Shopping
              Eldorado, DetonaShop e diversos outros.
            </p>

            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e sigo em
              constante evolução profissional, estudando novas tecnologias
              relacionadas a desenvolvimento, arquitetura de software,
              infraestrutura e automação de ambientes.
            </p>

            <p>
              Ao longo da minha carreira também participei de diversos projetos
              de sites e e-commerces, incluindo soluções personalizadas
              desenvolvidas pela{" "}
              <a
                target="_blank"
                href="https://www.hubsell.com.br/"
                rel="noopener noreferrer"
              >
                <span>Hubsell</span>
              </a>
              . Além do trabalho profissional, também desenvolvo projetos
              pessoais e estudos voltados a novas tecnologias e melhorias na
              forma de construir e operar aplicações web.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Principal;
