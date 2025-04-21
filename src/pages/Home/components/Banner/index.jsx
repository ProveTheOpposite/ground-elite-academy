// hook
// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "src/components/Button";
import translations from "src/language/translations";
// atom
import { languageState } from "src/recoil";

const Banner = () => {
  const language = useRecoilValue(languageState);
  const isMobile = window.innerWidth <= 1080;
  const isDesktop = window.innerWidth > 1080;

  return (
    <section
      id="welcome"
      className={`${isMobile ? "bg-banner-mobile-url" : isDesktop ? "bg-banner-desktop-url" : ""} relative flex h-screen items-center justify-center px-5 sm:px-8 md:px-10 lg:px-16 2xl:px-28`}
    >
      {/* Content */}
      <div className="z-10 flex flex-col items-center md:w-[550px] lg:flex-row xl:absolute xl:bottom-20 xl:left-20 2xl:w-[750px] 3xl:bottom-28 3xl:left-28">
        <div className="mt-14 text-center sm:mt-0 xl:text-left">
          <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl lg:leading-tight 2xl:text-5xl 2xl:leading-tight">
            {translations[language].home.banner.title[0]}{" "}
            <span className="text-[#b0181c]">
              {translations[language].home.banner.title[1]}
            </span>{" "}
            {translations[language].home.banner.title[2]}{" "}
            <span className="text-[#b0181c]">
              {translations[language].home.banner.title[3]}
            </span>{" "}
            {translations[language].home.banner.title[4]}
          </h1>

          <Link className="rounded-full" to="/contact-us">
            <Button className="2xl:px-8! 2xl:py-4! 2xl:text-xl! bg-[#b0181c] text-white hover:bg-[#7d2a2d]">
              {translations[language].home.btnContactUs}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
