// hook
import { useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// prop types
import PropTypes from "prop-types";

const ArticleItem = ({ bgArticleItem, title, articlePath }) => {
  const [isArticleHover, setIsArticleHover] = useState(false);

  const handleMouseEnter = () => {
    setIsArticleHover(true);
  };

  const handleMouseLeave = () => {
    setIsArticleHover(false);
  };

  return (
    <Link to={"/press" + articlePath}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`bg-${bgArticleItem}-article relative flex h-[340px] w-full min-w-[350px] max-w-[350px] items-end rounded-xl border border-black p-3 lg:h-96`}
        style={{
          backgroundSize: isArticleHover ? "380px" : "350px",
          transition: "background-size 300ms",
        }}
      >
        <p
          className={`text peer z-10 text-white transition-opacity duration-300 ${isArticleHover ? "opacity-100" : "opacity-0"}`}
        >
          {title}
        </p>
        <div className="absolute left-0 top-0 h-full w-full rounded-xl transition-colors duration-300 hover:bg-black/40 peer-hover:bg-black/40" />
      </div>
    </Link>
  );
};

ArticleItem.propTypes = {
  bgArticleItem: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  articlePath: PropTypes.string.isRequired,
};

export default ArticleItem;
