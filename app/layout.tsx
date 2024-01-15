import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";

export const metadata: Metadata = {
  title: "Yusha's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-auto">
        <Navbar />
        <LeftSide />
        <main className="xl:px-28 w-full max-w-contentContainer py-10 mdl:py-24 mdl:px-10 mx-auto">
          {children}
        </main>
        <RightSide />
      </body>
    </html>
  );
}