// hook
import { useEffect, useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// storage
import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { storage } from "src/server/firebase";
// prop types
import PropTypes from "prop-types";
// skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleItem = ({ title, articlePath }) => {
  const [isArticleHover, setIsArticleHover] = useState(false);
  const [fileCover, setFileCover] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // recupère les fichiers dans linput:file au moment de l'édition
  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);

        const folderRef = ref(storage, `articles/${articlePath}`);
        const result = await listAll(folderRef);

        const urls = [];

        for (const itemRef of result.items) {
          const metadata = await getMetadata(itemRef);
          const isCover = metadata.customMetadata?.type === "cover";

          if (isCover) {
            const url = await getDownloadURL(itemRef);
            urls.push(url);
          }
        }

        setFileCover(urls);
      } catch (error) {
        console.error("Erreur lors du chargement des images :", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadImages();
  }, [articlePath]);

  const handleMouseEnter = () => {
    setIsArticleHover(true);
  };

  const handleMouseLeave = () => {
    setIsArticleHover(false);
  };

  return (
    <Link to={"/press" + articlePath}>
      {isLoading ? (
        <Skeleton
          width={350}
          height={382} // 340 + padding
          baseColor="#ccc"
          borderRadius="0.75rem"
        />
      ) : (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative flex h-[340px] w-full max-w-[350px] min-w-[350px] items-end rounded-xl border border-black p-3 lg:h-96"
          style={{
            backgroundSize: isArticleHover ? "380px" : "350px",
            transition: "background-size 300ms",
            backgroundImage: fileCover[0] ? `url("${fileCover[0]}")` : "none",
          }}
        >
          <p
            className={`text peer z-10 text-white transition-opacity duration-300 ${isArticleHover ? "opacity-100" : "opacity-0"}`}
          >
            {title}
          </p>
          <div className="absolute top-0 left-0 h-full w-full rounded-xl transition-colors duration-300 peer-hover:bg-black/40 hover:bg-black/40" />
        </div>
      )}
    </Link>
  );
};

ArticleItem.propTypes = {
  title: PropTypes.string.isRequired,
  articlePath: PropTypes.string.isRequired,
};

export default ArticleItem;
