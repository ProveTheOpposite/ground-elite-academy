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
      <Link className="text-[#666] hover:underline" to="/">
        {translations[language].header.headerList.welcome}
      </Link>{" "}
      <i className="fa-solid fa-chevron-right text-xs"></i>
      <Link className="text-[#666] hover:underline" to="/press">
        {translations[language].header.headerList.press}
      </Link>{" "}
      <i className="fa-solid fa-chevron-right text-xs"></i>
      <span className="font-semibold text-[#b0181c]">{formattedLink}</span>
    </nav>
  );
};

export default BreadCrumb;
