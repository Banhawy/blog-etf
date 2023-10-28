import "./globals.css";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import EditorPickComponent from "@/components/EditorsPick";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body>
        <Header />
        {/* <EditorPickComponent /> */}
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}
