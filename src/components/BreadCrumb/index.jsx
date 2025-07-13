// hook
import { useRecoilValue } from "recoil";
// react router dom
import { Link, useParams } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// langue
import translations from "src/language/translations";
// prop types
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

const BreadCrumb = ({ isLoading }) => {
  const { articleId } = useParams();

  const language = useRecoilValue(languageState);

  const formattedLink = articleId
    .split("-")
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
    )
    .join(" ");

  return (
    <nav className="flex items-center gap-x-3">
      <Link className="text-sm text-[#888] sm:text-base" to="/">
        {isLoading ? (
          <Skeleton baseColor="#ccc" width={50} duration={3} direction="ltr" />
        ) : (
          translations[language].header.headerList.welcome
        )}
      </Link>{" "}
      <i className="fa-solid fa-chevron-right text-xs"></i>
      <Link className="text-sm text-[#888] sm:text-base" to="/press">
        {isLoading ? (
          <Skeleton baseColor="#ccc" width={50} duration={3} direction="ltr" />
        ) : (
          translations[language].header.headerList.press
        )}
      </Link>{" "}
      <i className="fa-solid fa-chevron-right text-xs"></i>
      <span className="text-sm font-semibold text-[#b0181c] sm:text-base">
        {isLoading ? (
          <Skeleton baseColor="#ccc" width={150} duration={3} direction="ltr" />
        ) : (
          formattedLink
        )}
      </span>
    </nav>
  );
};

export default BreadCrumb;

BreadCrumb.propTypes = {
  isLoading: PropTypes.bool,
};
