import * as React from "react";
import Logo from "@/svg/Logo";

const Header = () => (
  <header className="flex items-center h-14 py-1 px-5 md:px-4 py bg-header-background border-b border-header-border">
    <Logo />
  </header>
);

export default Header;
