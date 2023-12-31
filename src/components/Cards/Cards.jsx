"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import styles from "./Cards.module.scss";

const Cards = () => {
  useEffect(() => {
    Aos.init({ delay: 25, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className={styles.cards}>
      <div>
        <h2>
          Criando produtos digitais de forma
          <br /> <span>moderna</span> e de <span>alta qualidade</span>.
        </h2>
        <div>
          <div data-aos="fade-down" data-aos-duration="1000">
            <svg
              width="50"
              height="47"
              viewBox="0 0 50 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 46.4523H0V5.71014H50V46.4523ZM1.5625 44.8898H48.4375V7.27264H1.5625V44.8898Z" />
              <path d="M44.7312 14.7316V24.025H5.26913V14.7316H44.7312ZM46.2683 13.1937H3.73163V25.5621H46.2683V13.1937Z" />
              <path d="M14.898 29.3785V33.2109H5.26913V29.3785H14.898ZM16.4355 27.8406H3.73163V34.7484H16.4355V27.8406Z" />
              <path d="M16.4355 36.6582H3.73163V38.2207H16.4355V36.6582Z" />
              <path d="M16.4355 40.5859H3.73163V42.1484H16.4355V40.5859Z" />
              <path d="M31.352 36.6582H18.6484V38.2207H31.352V36.6582Z" />
              <path d="M34.8836 18.5363H15.1164V20.0988H34.8836V18.5363Z" />
              <path d="M31.352 40.5859H18.6484V42.1484H31.352V40.5859Z" />
              <path d="M46.2683 36.6582H33.5648V38.2207H46.2683V36.6582Z" />
              <path d="M46.2683 40.5859H33.5648V42.1484H46.2683V40.5859Z" />
              <path d="M29.8145 29.3785V33.2109H20.1859V29.3785H29.8145ZM31.3523 27.8406H18.6484V34.7484H31.352L31.3523 27.8406Z" />
              <path d="M44.7312 29.3785V33.2109H35.1023V29.3785H44.7312ZM46.2683 27.8406H33.5648V34.7484H46.2683V27.8406Z" />
              <path d="M50 7.27266H0V0H50V7.27266ZM1.5625 5.71016H48.4375V1.5625H1.5625V5.71016Z" />
              <path d="M4.8324 1.81372H2.99451V3.37622H4.8324V1.81372Z" />
              <path d="M8.016 1.81372H6.17694V3.37622H8.016V1.81372Z" />
              <path d="M11.1981 2.81366H9.35901V4.37616H11.1981V2.81366Z" />
              <path d="M24.2672 9.74841H8.03906V11.3109H24.2672V9.74841Z" />
              <path d="M5.74296 8.74847H3.73163V10.311H5.74296V8.74847Z" />
            </svg>
            <h3>UI & UX</h3>
            <p>
              Construindo uma combinação entre UX e UI que resulta em
              experiências excepcionais, onde a usabilidade se encontra com o
              design.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 46.4211H34.2203V44.8586H48.4375V7.26874H1.5625V44.8586H15.7797V46.4211H0V5.70624H50V46.4211Z" />
              <path d="M50 7.26836H0V0H50V7.26836ZM1.5625 5.70586H48.4375V1.5625H1.5625V5.70586Z" />
              <path d="M4.8324 2.81213H2.99451V4.37463H4.8324V2.81213Z" />
              <path d="M8.016 2.81213H6.17694V4.37463H8.016V2.81213Z" />
              <path d="M11.1981 2.81213H9.35901V4.37463H11.1981V2.81213Z" />
              <path d="M31.7012 42.8015H18.2746L18.2258 42.0726C18.1309 40.6644 17.8184 39.5383 17.3453 38.9019C12.6246 32.7726 12.4926 26.9 12.4926 26.8422C12.4926 19.8875 18.1032 14.2297 24.9996 14.2297C31.8961 14.2297 37.5071 19.8875 37.5071 26.8422C37.5071 26.8996 37.3746 32.7676 32.6461 38.9117C32.1711 39.548 31.8606 40.6457 31.7551 42.0773L31.7012 42.8015ZM19.7164 41.239H30.2684C30.4465 39.8359 30.8262 38.7379 31.4004 37.9683C35.8207 32.2242 35.9446 26.8945 35.9446 26.8422C35.9446 20.7492 31.0348 15.7922 24.9996 15.7922C18.9645 15.7922 14.0551 20.7492 14.0551 26.8422C14.0551 26.8945 14.1786 32.2289 18.5907 37.9586C19.1707 38.7383 19.5465 39.8375 19.7164 41.239Z" />
              <path d="M17.1652 26.7977H15.6027C15.6035 21.5985 19.8191 17.3688 25 17.3688V18.9313C20.6805 18.9313 17.166 22.4602 17.1652 26.7977Z" />
              <path d="M22.654 41.8505L20.332 28.8484L18.7938 29.1231L21.1158 42.1252L22.654 41.8505Z" />
              <path d="M31.2087 29.1214L29.6706 28.8467L27.3485 41.8496L28.8866 42.1243L31.2087 29.1214Z" />
              <path d="M21.4211 31.4965L19.325 30.5957L19.9418 29.1602L21.4211 29.7961L23.209 29.0278L24.9969 29.7961L26.7852 29.0278L28.5758 29.7961L30.0582 29.1602L30.6746 30.5957L28.5758 31.4965L26.7852 30.7282L24.9965 31.4965L23.209 30.7282L21.4211 31.4965Z" />
              <path d="M32.6258 41.3785H17.3758V42.941H32.6258V41.3785Z" />
              <path d="M32.6258 44.8629H17.3758V46.4254H32.6258V44.8629Z" />
              <path d="M30.0711 48.3485H19.9297V49.911H30.0711V48.3485Z" />
              <path d="M19.9262 42.3184H18.3637V44.9665H19.9262V42.3184Z" />
              <path d="M25.7824 10.4852H24.2199V12.8309H25.7824V10.4852Z" />
              <path d="M22.1796 13.1055L21.5781 10.8398L20.0679 11.2408L20.6694 13.5064L22.1796 13.1055Z" />
              <path d="M18.7692 14.3115L17.6067 12.2795L16.2504 13.0555L17.413 15.0875L18.7692 14.3115Z" />
              <path d="M15.7824 16.3654L14.1384 14.7065L13.0285 15.8063L14.6725 17.4653L15.7824 16.3654Z" />
              <path d="M13.4252 19.1269L11.4126 17.9537L10.6257 19.3035L12.6383 20.4767L13.4252 19.1269Z" />
              <path d="M11.854 22.411L9.60754 21.8043L9.2002 23.3128L11.4466 23.9194L11.854 22.411Z" />
              <path d="M11.1801 25.993H8.85431V27.5555H11.1801V25.993Z" />
              <path d="M11.8553 31.1392L11.4478 29.6307L9.20207 30.2374L9.60957 31.7458L11.8553 31.1392Z" />
              <path d="M13.4242 34.4206L12.6381 33.0703L10.6241 34.2428L11.4102 35.5931L13.4242 34.4206Z" />
              <path d="M15.7846 37.1855L14.6749 36.0855L13.0307 37.7442L14.1404 38.8442L15.7846 37.1855Z" />
              <path d="M36.9732 37.7446L35.3297 36.0852L34.2196 37.1847L35.8631 38.8441L36.9732 37.7446Z" />
              <path d="M39.373 34.246L37.3602 33.073L36.5736 34.4227L38.5865 35.5957L39.373 34.246Z" />
              <path d="M40.7983 30.2379L38.5529 29.6305L38.1449 31.1388L40.3903 31.7461L40.7983 30.2379Z" />
              <path d="M41.1449 25.9946H38.8211V27.5571H41.1449V25.9946Z" />
              <path d="M40.8002 23.3151L40.3927 21.8066L38.1474 22.4132L38.5549 23.9216L40.8002 23.3151Z" />
              <path d="M39.3752 19.3042L38.5887 17.9542L36.5758 19.127L37.3624 20.477L39.3752 19.3042Z" />
              <path d="M36.9708 15.8072L35.8607 14.7077L34.218 16.3663L35.3281 17.4658L36.9708 15.8072Z" />
              <path d="M33.7508 13.0546L32.3943 12.2791L31.2325 14.3113L32.5889 15.0868L33.7508 13.0546Z" />
              <path d="M29.9331 11.2415L28.4235 10.8401L27.8212 13.1059L29.3308 13.5072L29.9331 11.2415Z" />
            </svg>
            <h3>Design & Criatividade</h3>
            <p>
              Fazendo o uso de uma disciplina que envolve o uso da criatividade
              para resolver problemas e criar soluções visualmente atraentes.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000">
            <svg
              width="50"
              height="46"
              viewBox="0 0 50 46"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 6.49219H48.4375V7.26133H50V6.49219Z" />
              <path d="M50 42.8641H48.4375V41.2446H50V42.8641ZM50 39.6254H48.4375V38.0059H50V39.6254ZM50 36.3864H48.4375V34.7668H50V36.3864ZM50 33.1473H48.4375V31.5278H50V33.1473ZM50 29.9082H48.4375V28.2891H50V29.9082ZM50 26.6692H48.4375V25.0496H50V26.6692ZM50 23.4305H48.4375V21.811H50V23.4305ZM50 20.1914H48.4375V18.5719H50V20.1914ZM50 16.9524H48.4375V15.3328H50V16.9524ZM50 13.7133H48.4375V12.0938H50V13.7133ZM50 10.4746H48.4375V8.8551H50V10.4746Z" />
              <path d="M50 45.4688H48.45V43.9062L50 43.918V45.4688Z" />
              <path d="M46.9367 45.4688H45.3992V43.9062H46.9367V45.4688ZM43.8621 45.4688H42.3246V43.9062H43.8621V45.4688ZM40.7875 45.4688H39.25V43.9062H40.7875V45.4688ZM37.7129 45.4688H36.1754V43.9062H37.7129V45.4688ZM34.6383 45.4688H33.1008V43.9062H34.6383V45.4688ZM31.5637 45.4688H30.0266V43.9062H31.5637V45.4688ZM28.4895 45.4688H26.952V43.9062H28.4895V45.4688ZM25.4149 45.4688H23.8774V43.9062H25.4149V45.4688ZM22.3399 45.4688H20.8024V43.9062H22.3399V45.4688ZM19.2653 45.4688H17.7278V43.9062H19.2653V45.4688ZM16.1907 45.4688H14.6532V43.9062H16.1907V45.4688ZM13.116 45.4688H11.5785V43.9062H13.116V45.4688ZM10.0414 45.4688H8.50393V43.9062H10.0414V45.4688ZM6.96682 45.4688H5.42971V43.9062H6.96721V45.4688H6.96682ZM3.89221 45.4688H2.3551V43.9062H3.8926V45.4688H3.89221Z" />
              <path d="M1.55 45.4687H0V43.918H1.5625L1.55 45.4687Z" />
              <path d="M1.5625 42.325H0V40.7055H1.5625V42.325ZM1.5625 39.0859H0V37.4664H1.5625V39.0859ZM1.5625 35.8469H0V34.2273H1.5625V35.8469ZM1.5625 32.6082H0V30.9887H1.5625V32.6082ZM1.5625 29.3691H0V27.7496H1.5625V29.3691ZM1.5625 26.1301H0V24.5105H1.5625V26.1301ZM1.5625 22.891H0V21.2715H1.5625V22.891ZM1.5625 19.6523H0V18.0328H1.5625V19.6523ZM1.5625 16.4133H0V14.7937H1.5625V16.4133ZM1.5625 13.1742H0V11.5547H1.5625V13.1742ZM1.5625 9.93514H0V8.31561H1.5625V9.93514Z" />
              <path d="M1.5625 6.49219H0V7.26133H1.5625V6.49219Z" />
              <path d="M50 7.27383H0V0H50V7.27383ZM1.5625 5.71133H48.4375V1.5625H1.5625V5.71133Z" />
              <path d="M4.83242 2.81445H2.99414V4.37695H4.83242V2.81445Z" />
              <path d="M8.01606 2.81445H6.177V4.37695H8.01606V2.81445Z" />
              <path d="M11.1981 2.81445H9.35901V4.37695H11.1981V2.81445Z" />
              <path d="M19.3582 30.5305L12.5406 25.0727L19.3582 19.6149L20.3348 20.8348L15.0407 25.0727L20.3348 29.3106L19.3582 30.5305Z" />
              <path d="M30.6418 30.5305L29.6653 29.3106L34.959 25.0727L29.6653 20.8356L30.6418 19.6157L37.4594 25.0727L30.6418 30.5305Z" />
              <path d="M28.1273 17.7164L26.6259 17.2839L22.2637 32.4271L23.7651 32.8596L28.1273 17.7164Z" />
            </svg>
            <h3>Desenvolvimento</h3>
            <p>
              Utilizando ferramentas como HTML, CSS, JavaScript, React, entre
              outros para construir interfaces responsivas e otimizadas para a
              web.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="2500">
            <svg
              width="50"
              height="48"
              viewBox="0 0 50 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_34_35)">
                <path d="M35.7215 47.8594H14.2789C13.0062 47.8594 11.9711 46.8667 11.9711 45.6461V2.35313C11.9711 1.13325 13.0062 0.140625 14.2789 0.140625H35.7211C36.9937 0.140625 38.0289 1.13325 38.0289 2.35313V45.6458C38.0293 46.2364 37.7894 46.7929 37.3527 47.2114C36.9168 47.6295 36.3375 47.8594 35.7215 47.8594ZM14.2789 1.632C13.8629 1.632 13.5242 1.95563 13.5242 2.3535V45.6461C13.5242 46.0444 13.8629 46.3684 14.2789 46.3684H35.7218C36.1375 46.3684 36.4761 46.0444 36.4761 45.6461L36.4754 2.35313C36.4754 1.95525 36.1371 1.63162 35.7207 1.63162H14.2789V1.632Z" />
                <path d="M37.0621 38.8065H12.9379V40.2979H37.0621V38.8065Z" />
                <path d="M37.0621 6.85614H12.9379V8.34751H37.0621V6.85614Z" />
                <path d="M29.0933 3.41888H20.9066V4.91026H29.0933V3.41888Z" />
                <path d="M26 42.5411H24V44.0325H26V42.5411Z" />
                <path d="M49.9999 23.4078H45.0007V24.8992H49.9999V23.4078Z" />
                <path d="M48.1033 15.3121L47.4479 13.96L42.917 15.9842L43.5724 17.3363L48.1033 15.3121Z" />
                <path d="M48.1038 32.9948L43.5724 30.9706L42.917 32.3229L47.4483 34.347L48.1038 32.9948Z" />
                <path d="M4.99961 23.4078H0V24.8992H4.99961V23.4078Z" />
                <path d="M7.08342 32.3211L6.42798 30.9686L1.89696 32.9921L2.55239 34.3447L7.08342 32.3211Z" />
                <path d="M7.08326 15.9854L2.55273 13.9614L1.89731 15.3134L6.42783 17.3375L7.08326 15.9854Z" />
              </g>
              <defs>
                <clipPath id="clip0_34_35">
                  <rect width="50" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3>Web & Mobile</h3>
            <p>
              Construção de aplicativos e sites que funcionem perfeitamente em
              diferentes plataformas e dispositivos. Oferecendo uma experiência
              perfeita aos usuários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
