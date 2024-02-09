import { Outlet, useNavigate } from "react-router-dom";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import { NextUIProvider } from "@nextui-org/react";

const Root = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow py-4 space-y-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </NextUIProvider>
  );
};

export default Root;
