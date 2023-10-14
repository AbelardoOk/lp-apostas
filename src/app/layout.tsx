import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan as League, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700", "400", "800"],
  variable: "--font-raleway",
});

const leagueSpartan = League({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Apostas",
  description:
    "Comece aqui à ganhar muito mais dinheiro através de renda extra em apostas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} font-sans text-white`}>
        {children}
      </body>
    </html>
  );
}
