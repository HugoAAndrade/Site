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
    if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
    setToggle(!toggle);
  };

  return (
    <header id="header" className={styles.header}>
      <div>
        {anchor ? (
          <Link href="/" onClick={scrollToTop}>
            <svg
              width="28"
              height="35"
              viewBox="0 0 28 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 0H0V35H4.5V19.5H23V35H27.5V0H23V15.5H4.5V0Z" />
              <path d="M24 25H3V29H24V25Z" />
              <path d="M0 35V15.5H27.5V35H23V19.5H4.5V35H0Z" />
            </svg>
            <p>
              Hugo
              <br />
              Andrade
            </p>
          </Link>
        ) : (
          <Link href="/">
            <svg
              width="28"
              height="35"
              viewBox="0 0 28 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 0H0V35H4.5V19.5H23V35H27.5V0H23V15.5H4.5V0Z" />
              <path d="M24 25H3V29H24V25Z" />
              <path d="M0 35V15.5H27.5V35H23V19.5H4.5V35H0Z" />
            </svg>

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
