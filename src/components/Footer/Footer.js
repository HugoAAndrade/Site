import Social from "@/components/Social/Social";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a>
          <p>Hugo Andrade © 2023 - present. Todos os direitos reservados.</p>
        </a>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
