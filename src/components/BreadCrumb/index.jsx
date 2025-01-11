// hook
import { useRecoilValue } from "recoil";
// react router dom
import { Link, useParams } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// langue
import translations from "src/language/translations";

const BreadCrumb = () => {
  const { articleId } = useParams();

  const language = useRecoilValue(languageState);

  const formattedLink = articleId
    .split("-")
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
    )
    .join(" ");

  return (
    <nav className="flex items-center gap-x-2">
      <Link className="text-sm text-[#666] hover:underline sm:text-base" to="/">
        {translations[language].header.headerList.welcome}
      </Link>{" "}
      <i className="fa-solid fa-chevron-right text-xs"></i>
      <Link
        className="text-sm text-[#666] hover:underline sm:text-base"
        to="/press"
      >
        {translations[language].header.headerList.press}
      </Link>{" "}
      <i className="fa-solid fa-chevron-right text-xs"></i>
      <span className="text-sm font-semibold text-[#b0181c] sm:text-base">
        {formattedLink}
      </span>
    </nav>
  );
};

export default BreadCrumb;
