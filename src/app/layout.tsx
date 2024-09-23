import { ThemeProvider } from "@/components/Providers/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mo's Blog",
  description: "Mohamad SababSaz's personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "body min-h-screen bg-background antialiased",
          dosis.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
