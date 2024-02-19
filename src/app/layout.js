import { Kanit } from "next/font/google";
import "./globals.css";
import NextProvider from "@/providers/NextProvider";

const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Arkadiusz Sarach - porfolio",
  description: "Portfolio written in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={kanit.className}>
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
