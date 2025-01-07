// React & Hooks

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

// State Management
import { languageState, scrollToElementSelector } from "src/recoil";

// Components
import Button from "../Button";
import HeaderMobile from "./components/HeaderMobile";

// PropTypes
import PropTypes from "prop-types";

// Assets & Translations

import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

const Header = ({ openChangeLanguageModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const language = useRecoilValue(languageState);

  const scrollToElement = useRecoilValue(scrollToElementSelector);

  const location = useLocation();

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const isHomePage = location.pathname === "/";
  const headerBackgroundClass =
    isScrolled || !isHomePage ? "bg-white shadow-lg" : "bg-transparent";
  const textColorClass =
    isScrolled || !isHomePage ? "text-black" : "text-white";
  const logoSrc =
    isScrolled || !isHomePage
      ? imageUrl.header.logoHeaderBlack
      : imageUrl.header.logoHeaderWhite;

  return (
    <header
      className={`${headerBackgroundClass} 3xl:px-44 fixed left-0 top-0 z-40 flex h-[68px] w-full items-center justify-between px-5 lg:pl-10 xl:h-[78px] xl:justify-between xl:px-14 2xl:px-32`}
    >
      <h2>
        <Link to="/">
          <img
            className="w-[85px] md:w-[90px]"
            src={logoSrc}
            alt="Logo de Ground Elite Academy"
          />
        </Link>
      </h2>

      <nav className="hidden xl:block">
        <ul
          className={`lg:gap-x-10 xl:flex xl:gap-x-10 2xl:gap-x-14 ${textColorClass}`}
        >
          {Object.keys(translations[language].header.headerList).map((key) => (
            <li
              key={key}
              className={`tracking-wide transition-colors hover:text-red-600 ${textColorClass}`}
            >
              <Link
                to={key === "press" ? "/press" : isHomePage ? "" : "/"}
                className="cursor-pointer"
                onClick={() => scrollToElement(key)}
              >
                {translations[language].header.headerList[key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden xl:flex xl:items-center xl:gap-x-9">
        <div className="flex items-center">
          <button
            onClick={openChangeLanguageModal}
            className={`relative rounded-full p-1 pl-2 transition-colors ${isScrolled || !isHomePage ? "hover:bg-red-100" : "hover:bg-slate-500"}`}
            type="button"
            aria-label={
              language === "fr"
                ? "Changer la langue, actuellement en français"
                : "Change the language, currently in English"
            }
          >
            <svg
              className="w-7"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                fill={isScrolled || !isHomePage ? "black" : "white"}
                d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03c1.74-1.94 2.98-4.17 3.71-6.53h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18C11.5 7.92 10.44 9.75 9 11.35c-.81-.89-1.49-1.86-2.06-2.88-.16-.29-.45-.47-.78-.47-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87c-.4.39-.4 1.03 0 1.42.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7 1.62-4.33L19.12 17h-3.24z"
              ></path>
            </svg>

            {language === "fr" ? (
              <svg
                className="absolute bottom-1 left-5 h-4 w-6 rounded-sm"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect className="h-4 w-6" fill="#ED2939" />
                <rect className="h-4 w-4" fill="#fff" />
                <rect className="h-4 w-2" fill="#002395" />
              </svg>
            ) : (
              <img
                className="absolute bottom-1 left-5 h-4 w-6 rounded-sm"
                src={imageUrl.header.englandFlag}
                alt="Drapeau de l'angleterre"
              />
            )}
          </button>
        </div>

        <Link className="rounded-full" to="/contact-us">
          <Button className="bg-[#b0181c] text-white hover:bg-[#7d2a2d]">
            {translations[language].header.btnContactUs}
          </Button>
        </Link>
      </div>

      <i
        onClick={toggleMenu}
        className={`fa-solid fa-bars ${textColorClass} cursor-pointer text-2xl xl:hidden`}
      ></i>

      <HeaderMobile showMenu={isMenuVisible} setShowMenu={setIsMenuVisible} />
    </header>
  );
};

// Props Validation
Header.propTypes = {
  openChangeLanguageModal: PropTypes.func.isRequired,
};

export default Header;
