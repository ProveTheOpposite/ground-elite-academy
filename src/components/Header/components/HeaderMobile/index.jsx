// React & Hooks
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

// State Management
import { languageState, scrollToElementSelector } from "src/recoil";

// Components
import Button from "src/components/Button";

// PropTypes
import PropTypes from "prop-types";

// Assets & Translations
import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

const HeaderMobile = ({ setShowMenu, showMenu }) => {
  const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);

  const [language, setLanguage] = useRecoilState(languageState);

  const scrollToElement = useRecoilValue(scrollToElementSelector);

  const location = useLocation();

  const menuItems = [
    { key: "welcome", icon: "fa-house" },
    { key: "aboutUs", icon: "fa-address-card" },
    { key: "team", icon: "fa-users" },
    { key: "schedule", icon: "fa-calendar-days" },
    { key: "rates", icon: "fa-hand-holding-dollar" },
    { key: "faq", icon: "fa-circle-question" },
    { key: "press", icon: "fa-newspaper" },
  ];
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageMenuVisible(false);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } fixed left-0 top-0 flex min-h-full w-full flex-col justify-evenly bg-white px-8 transition-transform duration-300 ease-out md:px-16 xl:hidden`}
    >
      <ul className="flex flex-col justify-center gap-y-7 text-2xl font-medium">
        {menuItems.map(({ key, icon }) => (
          <li
            key={key}
            className="tracking-wide transition-colors hover:text-[#b0181c]"
          >
            <i className={`fa-solid ${icon} mr-4 w-[30px]`}></i>
            <Link
              to={key === "press" ? "/press" : isHomePage ? "" : "/"}
              className="cursor-pointer"
              onClick={() => {
                scrollToElement(key);
                setShowMenu(false);
              }}
            >
              {translations[language].header.headerList[key]}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start gap-y-4">
        <span
          onClick={() => setIsLanguageMenuVisible(!isLanguageMenuVisible)}
          className="cursor-pointer text-lg"
        >
          {language === "fr" ? (
            <>
              Modifier la <strong className="text-[#b0181c]">langue</strong>
            </>
          ) : (
            <>
              Change the <strong className="text-[#b0181c]">language</strong>
            </>
          )}
          <i
            className={`fa-solid fa-chevron-right ml-3 text-xs transition-transform ${
              isLanguageMenuVisible ? "rotate-90" : ""
            }`}
          ></i>
        </span>

        {isLanguageMenuVisible && (
          <ul className="flex flex-col gap-y-2 transition-opacity">
            {["fr", "en"].map((lang) => (
              <li
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`${
                  language === lang ? "bg-red-100 font-bold" : ""
                } flex cursor-pointer items-center rounded-2xl px-3 py-1 transition-colors hover:bg-red-100`}
                aria-label={`Switch to ${lang === "fr" ? "French" : "English"}`}
              >
                {lang === "fr" ? (
                  <svg
                    className="mr-2 h-4 w-6 rounded-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="French flag"
                  >
                    <rect className="h-4 w-6" fill="#ED2939" />
                    <rect className="h-4 w-4" fill="#fff" />
                    <rect className="h-4 w-2" fill="#002395" />
                  </svg>
                ) : (
                  <img
                    className="mr-2 w-7"
                    src={imageUrl.header.englandFlag}
                    alt="British flag"
                  />
                )}
                <span>
                  {translations[language].header.btnTranslation[lang]}
                </span>
              </li>
            ))}
          </ul>
        )}

        <Link
          className="mt-5"
          onClick={() => setShowMenu(false)}
          to="/contact-us"
        >
          <Button className="bg-[#b0181c] !text-lg text-white">
            {translations[language].header.btnContactUs}
          </Button>
        </Link>
      </div>

      <i
        onClick={() => setShowMenu(false)}
        className="fa-solid fa-xmark absolute right-3 top-3 flex w-[48px] cursor-pointer items-center justify-center rounded-full py-1 text-3xl transition-colors hover:bg-slate-100"
      ></i>
    </nav>
  );
};

HeaderMobile.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
  openSignOutModal: PropTypes.func,
};

export default HeaderMobile;
