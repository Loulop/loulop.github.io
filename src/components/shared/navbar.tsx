import React from "react";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center fixed z-10 bg-white inset-0">
      <div className="flex flex-row items-center justify-between container mx-auto px-5">
        <div>
          <img width="152px" height="40px" src={Logo} />
        </div>
        <ul className="flex flex-row items-center font-bold">
          <li className="px-2">
            <a>Home</a>
          </li>
          <li className="px-2">
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
