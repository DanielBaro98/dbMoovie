import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Movie Stats",
  description: "Finn populære filmer, søk etter filmer og utforsk filmdetaljer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
