import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Fleet App",
  description: "Travel booking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />

        {/* Main content grows to push footer down */}
        <main className="flex-1">{children}</main>

        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
