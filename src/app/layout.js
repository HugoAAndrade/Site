import "./globals.css";

export const metadata = {
  title: "Hugo Andrade - Front End & UI/UX Designer",
  description: "Front End & UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
