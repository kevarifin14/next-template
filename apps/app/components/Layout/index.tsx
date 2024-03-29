import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {children}
      </div>

      <Footer />
    </main>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
