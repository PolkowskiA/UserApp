import { Theme } from "@carbon/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { type ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Theme theme="g90" className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </Theme>
  );
};

export default AppLayout;
