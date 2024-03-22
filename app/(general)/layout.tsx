import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="max-w-[1440px] mx-auto sm:px-3 px-1 select-none">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
