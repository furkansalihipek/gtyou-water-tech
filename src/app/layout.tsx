import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import FooterWrapper from '../components/FooterWrapper';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gtyou Water Tech",
  description: "Su arıtma sistemleri ve çözümleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
