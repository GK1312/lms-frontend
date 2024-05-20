import type { Metadata } from "next";
import { Quicksand, Poppins } from "next/font/google";
import "../globals.css";
import PrimaryHeaderBar from "../components/dashboard/PrimaryHeaderBar";
import SessionAuthProvider from "@/providers/SessionProvider";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-quicksand",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${quicksand.variable} font-quicksand`}
      >
        <SessionAuthProvider>
          <PrimaryHeaderBar>{children}</PrimaryHeaderBar>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
