import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Message from "@/components/shared/Message";
import { Axios } from "@/utils/AxiosConfig";
import React from "react";

const getLatestData = async () => {
  try {
    const response = await Axios.get("/get/message");
    const messageData = response.data.length > 0 ? response.data[0] : null;
    return { messageData };
  } catch (error) {
    console.error("Error fetching message data:", error);
    return { messageData: null };
  }
};

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { messageData } = await getLatestData();

  return (
    <>
      <main className="max-w-[1440px] mx-auto sm:px-3 px-1 select-none">
        <Header />
        <Message data={messageData} />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
