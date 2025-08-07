import Social from "@/components/Social/Social";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Hugo Andrade © 2023 - presente. Todos os direitos reservados.</p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
