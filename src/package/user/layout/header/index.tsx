import React from "react";
import HeaderDesktops from "./headerDesktop";
import HeaderUserMobile from "./headerMobile";

const Header = () => (
  <div className="bg-dpblue pb-32">
    <nav className="bg-dpblue">
      <HeaderDesktops />
      <HeaderUserMobile />
    </nav>
    <header className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
      </div>
    </header>
  </div>
);

export default Header;
