import styles from "./Social.module.scss";

const Social = () => {
  return (
    <div className={styles.social}>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hugo-andrade-880862197/"
          >
            LinkedIn
          </a>
        </li>
        {/* <li>
          <a target="_blank" href="https://github.com/HugoAAndrade">
            GitHub
          </a>
        </li> */}
        <li>
          <a target="_blank" href="https://wa.me/5511954661530">
            Whatsapp
          </a>
        </li>
        <li>
          <a href="mailto:hugoalvesandrade@gmail.com">E-mail</a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
