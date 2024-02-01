import Sidebar from "@/components/sidebar";
import "./globals.css";
import clsx from "clsx";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Yafi Alhakim",
  description: "Muhammad Yafi's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              className={clsx(
                "flex flex-col md:flex-row lg:w-[1000px] mx-4 lg:mx-auto lg:mt-[100px] mt-8 antialiased max-w-4xl mb-40",
                jakarta.className
              )}
            >
              <Sidebar className="z-50" />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
