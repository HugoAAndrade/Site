import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Principal from "@/components/Principal/Principal";
import Carrossel from "@/components/Carrossel/Carrossel";
import Cards from "@/components/Cards/Cards";
import Contato from "@/components/Contato/Contato";

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        <Principal sobre />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
