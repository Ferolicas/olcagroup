import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OLCAGROUP | Desarrollo Web Profesional",
  description:
    "Transformando ideas en experiencias digitales. Desarrollo web profesional con tecnologías de vanguardia en España y Latinoamérica. Ahorra 40% vs. mercado.",
  keywords: [
    "desarrollo web",
    "diseño web",
    "e-commerce",
    "aplicaciones web",
    "Next.js",
    "React",
    "España",
    "Colombia",
    "México",
  ],
  openGraph: {
    title: "OLCAGROUP | Desarrollo Web Profesional",
    description:
      "Transformando ideas en experiencias digitales. Ahorra 40% vs. mercado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
