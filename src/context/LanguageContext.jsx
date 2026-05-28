"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/locales/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("pt");

  // Lê o localStorage após hidratação e remove a classe que esconde o conteúdo
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "pt" || saved === "en") {
        setLangState(saved);
        document.documentElement.setAttribute("data-lang", saved);
        document.documentElement.lang = saved === "en" ? "en" : "pt-br";
      }
    } catch {}
    // Remove a classe que esconde o conteúdo — aplicada pelo script inline
    document.documentElement.classList.remove("lang-init");
  }, []);

  const setLang = (l) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.lang = l === "en" ? "en" : "pt-br";
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
