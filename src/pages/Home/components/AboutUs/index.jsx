// hook
import { useRecoilValue } from "recoil";
// react router dom
import { Link } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// components
import Button from "src/components/Button";
// assets
import translations from "src/language/translations";

const AboutUs = () => {
  const language = useRecoilValue(languageState);

  const sections = [
    {
      icon: "medal",
      title: translations[language].home.aboutUs.list.itemOne.title,
      text: (
        <>
          {translations[language].home.aboutUs.list.itemOne.text[0]}
          <strong>
            {translations[language].home.aboutUs.list.itemOne.text[1]}
          </strong>
          {translations[language].home.aboutUs.list.itemOne.text[2]}
        </>
      ),
    },
    {
      icon: "handshake",
      title: translations[language].home.aboutUs.list.itemTwo.title,
      text: (
        <>
          {translations[language].home.aboutUs.list.itemTwo.text[0]}
          <strong>
            {translations[language].home.aboutUs.list.itemTwo.text[1]}
          </strong>
          {translations[language].home.aboutUs.list.itemTwo.text[2]}
        </>
      ),
    },
    {
      icon: "users",
      title: translations[language].home.aboutUs.list.itemThree.title,
      text: (
        <>
          {translations[language].home.aboutUs.list.itemThree.text[0]}
          <strong>
            {translations[language].home.aboutUs.list.itemThree.text[1]}
          </strong>
          {translations[language].home.aboutUs.list.itemThree.text[2]}
          <strong>
            {translations[language].home.aboutUs.list.itemThree.text[3]}
          </strong>
          {translations[language].home.aboutUs.list.itemThree.text[4]}
        </>
      ),
    },
    {
      icon: "bullseye",
      title: translations[language].home.aboutUs.list.itemFour.title,
      text: (
        <>
          {translations[language].home.aboutUs.list.itemFour.text[0]}
          <strong>
            {translations[language].home.aboutUs.list.itemFour.text[1]}
          </strong>
          {translations[language].home.aboutUs.list.itemFour.text[2]}
        </>
      ),
    },
  ];

  return (
    <section
      id="aboutUs"
      className="flex min-h-screen flex-col justify-center bg-white px-5 py-16 md:bg-[url('src/assets/images/home/bgAboutUs.svg')] md:bg-[top_650px_left_300px] lg:bg-[top_550px_left_350px] lg:px-12 xl:bg-[top_300px_left_700px] 2xl:bg-[left_1350px_top_300px]"
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col gap-x-20 rounded-xl xl:flex-row">
        <div className="px-3 py-4 sm:px-6 md:mb-12 xl:flex-1">
          <h2 className="mb-5 text-left text-3xl font-bold uppercase xl:text-4xl">
            {translations[language].home.aboutUs.title[0]}{" "}
            <span className="text-[#b0181c]">
              {translations[language].home.aboutUs.title[1]}
            </span>
          </h2>

          <div className="flex flex-col">
            <h2 className="text-lg text-gray-600">
              {translations[language].home.aboutUs.subTitle[0]}
              <strong>{translations[language].home.aboutUs.subTitle[1]}</strong>
              {translations[language].home.aboutUs.subTitle[2]}
              <strong>{translations[language].home.aboutUs.subTitle[3]}</strong>
              {translations[language].home.aboutUs.subTitle[4]}
              <strong>{translations[language].home.aboutUs.subTitle[5]}</strong>
              {translations[language].home.aboutUs.subTitle[6]}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-rows-2 md:gap-10">
              {sections.map(({ icon, title, text }, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div
                      className="flex items-center justify-center rounded-[10px] bg-red-600 bg-opacity-10"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <span className="text-sm md:text-base">
                        <i className={`fa-solid fa-${icon} text-red-600`}></i>
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold text-gray-600">
                      {title}
                    </h3>

                    <p className="mt-2 text-gray-600 xl:leading-relaxed">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Link className="mt-10 rounded-full" to="/contact-us">
                <Button className="bg-[#b0181c] text-white hover:bg-[#7d2a2d]">
                  {translations[language].home.btnContactUs}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block xl:flex-1">
          <iframe
            className="h-[230px] w-full rounded-ee-xl rounded-es-xl border border-slate-400 md:h-[350px] lg:h-[450px] xl:h-[100%] xl:rounded-es-none xl:rounded-se-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.7949860491581!2d7.255945928606331!3d43.72758859818614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdcff1863bfd43%3A0xeb78956f41959d12!2s10%20Bd%20Comte%20de%20Falicon%2C%2006100%20Nice!5e0!3m2!1sfr!2sfr!4v1722622448878!5m2!1sfr!2sfr"
            loading="lazy"
            title={
              language === "fr"
                ? "Emplacement de Ground Elite Academy - GEA sur Google maps"
                : "Location of Ground Elite Academy - GEA on Google Maps"
            }
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
