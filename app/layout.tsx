import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/shared/theme-provider";
import GridPattern from "@/components/shared/grid-pattern";

export const metadata: Metadata = {
  title: "Harsh - Portfolio",
  description: "Harsh Portfolio using Nextjs",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full mx-auto md:w-5/6 lg:w-3/4 xl:w-3/5">
            <section className="min-h-screen w-full relative">
              <GridPattern />
              <div className="relative z-10">
                {children}
              </div>
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
