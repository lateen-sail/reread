import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const GuestLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="grow flex flex-col items-center justify-center px-5 pt-28 pb-20">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GuestLayout;
