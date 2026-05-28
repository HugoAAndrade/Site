"use client";
import Social from "@/components/Social/Social";
import styles from "./Footer.module.scss";
import { useLang } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <div>
        <p>{t.footer.text}</p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
