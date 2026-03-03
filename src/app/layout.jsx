import "./globals.scss";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hugo Andrade - Desenvolvedor Full Stack & UI/UX Designer",
  description:
    "Desenvolvedor Full Stack com experiência em PHP, Node, Docker, Linux, Magento, WooCommerce e WordPress. Especialista em UI/UX e interfaces modernas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  try {
    var storageKey = "theme";
    var theme = localStorage.getItem(storageKey);
    var root = document.documentElement;

    // Remove transições só durante a aplicação inicial do tema
    root.style.setProperty("--transition", "0s");

    if (theme !== "dark" && theme !== "light") {
      var prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme = prefersDark ? "dark" : "light";
    }

    root.classList.remove("dark", "light");
    root.classList.add(theme);

    // Restaura transições após a 1ª pintura
    requestAnimationFrame(function () {
      root.style.removeProperty("--transition");
    });
  } catch (e) {
    // Sem acesso ao localStorage (ex: modo privado restrito)
  }
})();`,
          }}
        />
      </head>
      <body className={outfit.className}>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
