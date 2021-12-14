import React, { FC } from "react";
import Logo from "../../assets/logo.svg";
import useYScroll from "../../hooks/useYScroll";

interface Props {
  activeNavId: string | null;
}

const Navbar: FC<Props> = ({ activeNavId }) => {
  const scroll = useYScroll();

  React.useEffect(() => {
    if (window.history.pushState) {
      window.history.pushState(null, "", `#${activeNavId || ""}`);
    } else {
      window.location.hash = `#${activeNavId || ""}`;
    }
  }, [activeNavId]);

  return (
    <nav
      className={`flex items-center fixed z-10 bg-white inset-0 ${
        (scroll.isScrolled && "shadow-md") || ""
      }`}
    >
      <div className="flex flex-row items-center justify-between container mx-auto px-5">
        <div>
          <img width="152px" height="40px" src={Logo} alt="logo" />
        </div>
        <ul className="flex flex-row items-center font-bold">
          <li className="px-2 md:px-4">
            <a
              href="#home"
              className={
                activeNavId === "home" || activeNavId === null ? "active" : ""
              }
            >
              Home
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href="#about-us"
              className={activeNavId === "about-us" ? "active" : ""}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
