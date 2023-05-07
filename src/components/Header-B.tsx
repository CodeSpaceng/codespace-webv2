import { useState, useEffect } from "react";
import HamburgerIcon from "./HamburgerIcon";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router";
import { menuItems } from "../data/menuItems";

const Header = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 42) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavClick = () => {
    setNavOpen(!navOpen);
    setIsAnimating(!isAnimating);
  };
  const navClasses = `fixed top-0 h-full w-full bg-white transform transition-all ease-in-out duration-500 ${
    navOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  }`;

  return (
    <header
      className={`fixed top-0 w-full ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }  transition-all duration-500`}
    >
      <nav>
        <div className="flex justify-between lg:justify-between py-12 max-md:py-8 lg:py-8 items-center px-7 sm:px-[62px] xl:px-[102px] font-poppins mx-auto">
          <img
            src={logo}
            alt="logo"
            className=" h-[31px] cursor-pointer z-40"
            onClick={() => navigate("/")}
          />
          {/* Menu */}
          <div className="menu hidden lg:flex items-center justify-between">
            <div>
              <ul className="flex space-x-10 lg:space-x-6 wideScreen:space-x-[61px] xl:space-x-[30px]">
                {menuItems.map((item) => {
                  return (
                    <li
                      key={item.key}
                      onClick={() => navigate(item.where)}
                      className="cursor-pointer hover:scale-105 transition-all hover:text-primary"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="donate hidden lg:block hover:scale-110 transition-all">
            <button className="bg-primary w-[150px] rounded-[10px] py-3 text-white">
              Donate Now
            </button>
          </div>
          {/* Mobile Menu */}

          <div className="lg:hidden z-40" onClick={handleNavClick}>
            <div className="mobile-icon">
              <HamburgerIcon isOpen={isAnimating} />
            </div>
          </div>
        </div>

        {/* Tab menu */}
        <div className={`lg:hidden z-30 ${navClasses}`}>
          <div className="py-12 lg:py-8 px-7 sm:px-[62px] xl:px-[102px] mx-auto opacity-0">
            <img src={logo} alt="logo" className=" h-[31px]" />
          </div>

          <ul className="px-7 h-[50px] text-left font-poppins">
            {menuItems.map((item) => {
              return (
                <li
                  key={item.key}
                  onClick={() => navigate(item.where)}
                  className={`cursor-pointer hover:scale-105 border-light-purple border-opacity-20 py-3 border-dashed border-t-2 text-2xl ${
                    isAnimating ? "animate-slide-in" : "hidden"
                  }`}
                  style={{
                    animationDelay: `${item.key * 500}ms`,
                  }}
                >
                  <span>
                    <a href="#">{item.name}</a>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="donate absolute bottom-10 hover:scale-110 transition-all px-7 w-full">
            <button className="bg-primary w-full rounded-[10px] py-3 text-white">
              Donate Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;