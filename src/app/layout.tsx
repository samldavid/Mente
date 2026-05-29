import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seamosgenios.com"),
  title: "Mentes Sin Límites | Clases gratis ICFES Saber 11",
  description:
    "Clases gratuitas, estrategias Saber 11 y acompañamiento académico para estudiantes que quieren llegar con más seguridad al ICFES.",
  keywords: [
    "ICFES gratis",
    "Saber 11",
    "PreICFES",
    "SeamosGenios",
    "Mentes Sin Límites",
    "clases gratuitas ICFES",
  ],
  openGraph: {
    title: "Mentes Sin Límites | SeamosGenios",
    description:
      "Un programa gratuito para aprender estrategias ICFES con tutores, material de apoyo y comunidad académica.",
    images: [
      {
        url: "/brand/mente-sin-limites.png",
        width: 547,
        height: 655,
        alt: "Logo Mentes Sin Límites",
      },
    ],
    locale: "es_CO",
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
      <body>{children}</body>
    </html>
  );
}
