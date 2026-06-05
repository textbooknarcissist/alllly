import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-surface">{children}</main>
      <Footer />
    </>
  );
}
