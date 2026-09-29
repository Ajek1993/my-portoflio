import "./globals.css";

export const metadata = {
  title: "Arkadiusz Sarach",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
