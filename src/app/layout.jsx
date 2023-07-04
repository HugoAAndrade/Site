import "./globals.scss";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hugo Andrade - Front End & UI/UX Designer",
  description: "Front End & UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
