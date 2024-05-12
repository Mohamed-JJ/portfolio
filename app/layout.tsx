import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryComponent from "@/components/queryProvider/QueryProvider";
import { AuroraBackgroundDemo } from "@/components/background/rootBackground";
import ContextProvider from "@/components/contextProvider/themeProvider";
import NavBar from "@/components/navBar/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mohamed's portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextProvider>
        <QueryComponent>
          <body className={inter.className + " overflow-hidden border-white border"}>
            <AuroraBackgroundDemo>
              <NavBar/>
              {children}
            </AuroraBackgroundDemo>
          </body>
        </QueryComponent>
      </ContextProvider>
    </html>
  );
}
