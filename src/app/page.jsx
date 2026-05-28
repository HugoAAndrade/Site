"use client";
import Header from "@/components/Header/Header";
import Principal from "@/components/Principal/Principal";
import Footer from "@/components/Footer/Footer";
import Carrossel from "@/components/Carrossel/Carrossel";
import Cards from "@/components/Cards/Cards";
import Contato from "@/components/Contato/Contato";
import Experiencia from "@/components/Experiencia/Experiencia";
import Projetos from "@/components/Projetos/Projetos";

export default function Home() {
  return (
    <>
      <Header anchor />
      <main>
        <Principal />
        <Carrossel />
        <Experiencia />
        <Cards />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
