// hook
import { useRecoilValue } from "recoil";
// react router dom
import { Link } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// component
import Button from "src/components/Button";
import DecorativeSvg from "src/components/DecorativeSvg";
import SubscriptionCard from "./SubscriptionCard";
// assets
import translations from "src/language/translations";

const Rates = () => {
  const language = useRecoilValue(languageState);

  return (
    <section
      id="rates"
      className="relative flex min-h-screen flex-col justify-center bg-[#fbfcfd] px-5 py-20"
    >
      <h2 className="z-20 mb-5 text-center text-3xl font-bold uppercase lg:text-4xl">
        {language === "fr" ? (
          <>
            Nos <span className="text-[#b0181c]">tarifs</span>
          </>
        ) : (
          <>
            Our <span className="text-[#b0181c]">prices</span>
          </>
        )}
      </h2>

      <div className="z-20">
        <div className="mb-8 sm:flex sm:justify-center">
          <p className="text-center text-lg text-gray-600 sm:w-[90%] md:w-[575px]">
            {translations[language].home.rates.content}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="mb-10 text-center text-2xl font-medium underline lg:mb-16">
            {translations[language].home.rates.subTitle}
          </h3>

          <div className="lg:flex lg:items-center lg:gap-x-16">
            <SubscriptionCard
              title={translations[language].home.rates.card.kids.title}
              description={translations[language].home.rates.card.kids.who}
              price="25,00"
            />

            <SubscriptionCard
              title={translations[language].home.rates.card.adults.title}
              description={translations[language].home.rates.card.adults.who}
              price="40,00"
            />
          </div>
        </div>

        <div className="mt-10 text-center lg:mt-12">
          <Link className="rounded-full" to="/contact-us">
            <Button className="bg-[#b0181c] text-white hover:bg-[#7d2a2d]">
              {translations[language].header.btnContactUs}
            </Button>
          </Link>
        </div>
      </div>

      <DecorativeSvg fillColor="#fbfcfd" />
    </section>
  );
};

export default Rates;
