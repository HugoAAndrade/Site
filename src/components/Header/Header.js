"use client";
import styles from "./Header.module.scss";
import { useEffect } from "react";
import Link from "next/link";
import Social from "@/components/Social/Social";

const Header = ({ anchor }) => {
  useEffect(() => {
    window.onscroll = () => {
      if (scroll >= window.scroll && window.scroll > 50) {
        document.getElementById("header").classList.add("sticky");
      } else {
        document.getElementById("header").classList.remove("sticky");
      }

      scroll = window.scrollY;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header id="header" className={styles.header}>
      <div>
        {anchor ? (
          <Link href="#" onClick={scrollToTop}>
            <p>
              Hugo
              <br />
              Andrade
            </p>
          </Link>
        ) : (
          <Link href="/">
            <p>
              Hugo
              <br />
              Andrade
            </p>
          </Link>
        )}

        <Social />
      </div>
    </header>
  );
};

export default Header;
