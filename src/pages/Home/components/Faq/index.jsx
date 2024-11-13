// hook
import { useState } from "react";
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// components
import { Link } from "react-router-dom";
import translations from "src/language/translations";
import Courses from "./components/Courses";
import General from "./components/General";
import NewMembers from "./components/NewMembers";
// assets

const Faq = () => {
  // state to display the different categories
  const [selectedCategory, setSelectedCategory] = useState("Général");
  const language = useRecoilValue(languageState);

  const componentMap = {
    Général: <General />,
    Nouveaux: <NewMembers />,
    Cours: <Courses />,
  };

  const renderContent = () => componentMap[selectedCategory] || <General />;

  return (
    <section
      id="faq"
      className="flex min-h-screen flex-col justify-center bg-white px-5 py-12"
    >
      <h2 className="z-10 mb-4 text-center text-base font-bold md:text-lg xl:mb-6 2xl:mb-8">
        FAQs
      </h2>

      <h2 className="z-10 mb-6 text-center text-3xl font-bold uppercase md:mb-8 lg:text-4xl">
        {translations[language].home.faq.title[0]}{" "}
        <span className="text-[#b0181c]">
          {translations[language].home.faq.title[1]}
        </span>
      </h2>

      <h2 className="z-10 mb-6 text-center text-lg text-gray-600 md:mx-auto md:mb-8 md:w-[650px]">
        {translations[language].home.faq.text[0]}{" "}
        <Link
          className="font-bold text-[#b0181c] underline hover:no-underline"
          to="/contact-us"
        >
          {translations[language].home.faq.text[1]}
        </Link>
        {translations[language].home.faq.text[2]}
      </h2>

      <div className="z-20">
        <div className="mb-10 flex justify-evenly font-bold md:mx-auto md:mb-12 md:w-[350px] md:text-lg">
          <button
            className={`uppercase ${selectedCategory === "Général" ? "text-[#b0181c]" : ""}`}
            onClick={() => setSelectedCategory("Général")}
          >
            {translations[language].home.faq.btnTheme.general}
          </button>

          <button
            className={`uppercase ${selectedCategory === "Nouveaux" ? "text-[#b0181c]" : ""}`}
            onClick={() => setSelectedCategory("Nouveaux")}
          >
            {translations[language].home.faq.btnTheme.new}
          </button>

          <button
            className={`uppercase ${selectedCategory === "Cours" ? "text-[#b0181c]" : ""}`}
            onClick={() => setSelectedCategory("Cours")}
          >
            {translations[language].home.faq.btnTheme.courses}
          </button>
        </div>

        <div className="lg:mx-auto lg:w-[900px] 2xl:w-[1100px]">
          <h2 className="mb-3 text-2xl font-bold uppercase md:mb-4 md:text-center">
            {selectedCategory === "Général"
              ? translations[language].home.faq.btnTheme.general
              : selectedCategory === "Nouveaux"
                ? translations[language].home.faq.btnTheme.new
                : selectedCategory === "Cours"
                  ? translations[language].home.faq.btnTheme.courses
                  : ""}
          </h2>

          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Faq;
