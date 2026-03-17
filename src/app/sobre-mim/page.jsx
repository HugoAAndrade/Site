import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Principal from "@/components/Principal/Principal";
import Contato from "@/components/Contato/Contato";

export const metadata = {
  title: "Sobre mim | Hugo Andrade - Full Stack e Infraestrutura",
  description: "Desenvolvedor Full Stack com foco em infraestrutura, automação e deploy.",
};

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
