import "./globals.scss";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hugo Andrade - Desenvolvedor Full Stack & UI/UX Designer",
  description:
    "Desenvolvedor Full Stack com experiência em PHP, Node, Docker, Linux, Magento, WooCommerce e WordPress. Especialista em UI/UX e interfaces modernas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="light">
      <body className={outfit.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
