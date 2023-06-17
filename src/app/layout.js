import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hugo Andrade",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
