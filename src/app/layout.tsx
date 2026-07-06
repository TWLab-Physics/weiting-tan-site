import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Weiting Tan — Physics @ ECNU",
  description:
    "Personal academic website of Weiting Tan (谭维庭), physics undergraduate at East China Normal University researching ultrafast laser microfabrication, biophotonics, and organ-on-chip systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-academic">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}