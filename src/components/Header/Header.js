"use client";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Social from "@/components/Social/Social";

const Header = ({ anchor }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (scroll >= window.scroll && window.scroll > 30) {
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

  const handleToggle = () => {
    const tema = localStorage.getItem("theme");
    if (tema === "dark") {
      document.documentElement.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    }

    setToggle(!toggle);
  };

  return (
    <header id="header" className={styles.header}>
      <div>
        {anchor ? (
          <Link href="/" onClick={scrollToTop}>
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
        <input onClick={handleToggle} type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
      </div>
    </header>
  );
};

export default Header;
