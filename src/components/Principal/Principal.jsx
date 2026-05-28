"use client";
import styles from "./Principal.module.scss";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const Principal = ({ sobre }) => {
  const { t } = useLang();
  const h1 = t.hero.h1;
  const bio = t.bio;

  return (
    <section className={styles.principal}>
      <div>
        <figure>
          <img src="images/me.webp" alt="logo" />
        </figure>
        <p>{t.hero.greeting}</p>
        <h1>
          {h1.before1}
          <span>{h1.span1}</span>
          {h1.after1}
          <br />
          {h1.before2}
          <span>{h1.span2}</span>
          {h1.after2}
        </h1>
        {!sobre ? (
          <>
            <Link href="/sobre-mim">
              <p>{t.hero.sobreMimBtn}</p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.85019 4.08611L4.71722 0.0480284C4.67782 0.0172409 4.62755 0 4.57457 0H3.37216C3.27162 0 3.22543 0.113298 3.30151 0.17241L8.0595 3.91617H0.108692C0.0489113 3.91617 0 3.9605 0 4.01469V4.75359C0 4.80777 0.0489113 4.85211 0.108692 4.85211H8.05814L3.30015 8.59586C3.22407 8.65621 3.27026 8.76827 3.3708 8.76827H4.61397C4.63978 8.76827 4.6656 8.75965 4.68462 8.74364L9.85019 4.68216C9.89723 4.64509 9.93494 4.5993 9.96078 4.54789C9.98663 4.49647 10 4.44063 10 4.38414C10 4.32764 9.98663 4.2718 9.96078 4.22039C9.93494 4.16897 9.89723 4.12319 9.85019 4.08611Z" />
              </svg>
            </Link>
            <div className={styles.stats}>
              <div>
                <strong>5+</strong>
                <span>{t.hero.stats[0]}</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>{t.hero.stats[1]}</span>
              </div>
              <div>
                <strong>16+</strong>
                <span>{t.hero.stats[2]}</span>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2>{bio.heading}</h2>

            <p>{bio.p1}</p>

            <p>{bio.p2}</p>

            <p>{bio.p3}</p>

            <p>{bio.p4}</p>

            <p>{bio.p5}</p>

            <p>
              {bio.p6before}
              <a
                target="_blank"
                href="https://widecommerce.com.br/"
                rel="noopener noreferrer"
              >
                <span>WideCommerce</span>
              </a>
              {bio.p6after}
            </p>

            <p>{bio.p7}</p>

            <p>
              {bio.p8before}
              <a
                target="_blank"
                href="https://www.hubsell.com.br/"
                rel="noopener noreferrer"
              >
                <span>Hubsell</span>
              </a>
              {bio.p8after}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Principal;
