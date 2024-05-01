import LeftSide from "@/components/left-side";
import Navbar from "@/components/navbar";
import RightSide from "@/components/right-side";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yusha Tahlil",
  description: "The Portfolio Website of Yusha Tahlil.",
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
        <main className="max-w-6xl mx-auto mdl:px-10 xl:px-20 px-4">
          {children}
        </main>
        <RightSide />
      </body>
    </html>
  );
}
