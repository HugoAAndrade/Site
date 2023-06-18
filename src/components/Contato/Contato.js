"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import styles from "./Contato.module.scss";

const Contato = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className={styles.contato}>
      <div>
        <h1 data-aos="fade" data-aos-duration="1500" data-aos-offset="200">
          Me conte sobre seu
          <br /> próximo projeto.
        </h1>
        <a
          data-aos="fade"
          data-aos-duration="2500"
          data-aos-offset="0"
          href="mailto:hugoalvesandrade@gmail.com"
        >
          <p>Entre em contato</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_99_230)">
              <path d="M30.8571 3.42857H1.14286C0.510714 3.42857 -7.15256e-07 3.93929 -7.15256e-07 4.57143V27.4286C-7.15256e-07 28.0607 0.510714 28.5714 1.14286 28.5714H30.8571C31.4893 28.5714 32 28.0607 32 27.4286V4.57143C32 3.93929 31.4893 3.42857 30.8571 3.42857ZM29.4286 7.38571V26H2.57143V7.38571L1.58571 6.61786L2.98929 4.81429L4.51786 6.00357H27.4857L29.0143 4.81429L30.4179 6.61786L29.4286 7.38571ZM27.4857 6L16 14.9286L4.51428 6L2.98571 4.81071L1.58214 6.61429L2.56786 7.38214L14.7679 16.8679C15.1187 17.1404 15.5504 17.2884 15.9946 17.2884C16.4389 17.2884 16.8706 17.1404 17.2214 16.8679L29.4286 7.38571L30.4143 6.61786L29.0107 4.81429L27.4857 6Z" />
            </g>
            <defs>
              <clipPath id="clip0_99_230">
                <rect width="32" height="32" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contato;
