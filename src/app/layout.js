import { Inter } from "next/font/google";
import "./globals.css";
import NextProvider from "@/providers/NextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arkadiusz Sarach - porfolio",
  description: "Portfolio written in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
