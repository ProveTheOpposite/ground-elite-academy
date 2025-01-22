// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// prop types
import PropTypes from "prop-types";
import translations from "src/language/translations";

const SubscriptionCard = ({ title, description, price }) => {
  const language = useRecoilValue(languageState);

  return (
    <div className="rounded-xl border border-gray-300 px-5 py-7 last:mt-7 min-[375px]:p-8 min-[425px]:w-[350px] lg:last:mt-0">
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-4 text-lg">{description}</p>
      <div className="leading-loose">
        <span className="mr-2 text-3xl font-bold">{price}</span>
        <span className="mr-2 text-lg text-gray-700">
          {price === "75,00" ? {translations[language].home.rates.card.perTrimestrial} : {translations[language].home.rates.card.perMonth}}
        </span>
        <span className="text-lg">
          {language === "fr" ? (
            <>
              <strong>+50,00€</strong> de frais d&apos;adhésion
            </>
          ) : (
            <>
              <strong>+50,00€</strong> membership fee
            </>
          )}
        </span>
      </div>

      {/* <ul className="mt-3 flex flex-col gap-y-5 pl-5 text-lg">
        <li className="before:mr-2 before:content-['✅']">Accès à l'eau</li>
        <li className="before:mr-2 before:content-['✅']">Accès à l'eau</li>
        <li className="before:mr-2 before:content-['✅']">Accès à l'eau</li>
      </ul> */}
    </div>
  );
};

SubscriptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default SubscriptionCard;
