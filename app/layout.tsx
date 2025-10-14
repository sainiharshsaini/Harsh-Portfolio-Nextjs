import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/shared/theme-provider";
import GridPattern from "@/components/shared/grid-pattern";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Harsh - Portfolio",
  description: "Harsh Portfolio using Nextjs",
  icons: {
    icon: '/profile-img.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="min-h-screen w-full bg-background relative">
            <GridPattern />
            <div className="relative z-10">
              {children}
            </div>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
