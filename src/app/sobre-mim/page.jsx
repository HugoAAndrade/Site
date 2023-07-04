import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Principal from "@/components/Principal/Principal";
import Contato from "@/components/Contato/Contato";

export const metadata = {
  title: "Sobre mim | Hugo Andrade - Front End & UI/UX Designer",
  description: "Front End & UI/UX Designer",
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
