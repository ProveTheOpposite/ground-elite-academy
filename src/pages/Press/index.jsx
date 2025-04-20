// hook
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
// react helmet
import { Helmet } from "react-helmet-async";
// firestore
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "src/server/firebase";
// components
import ArticleItem from "./components/ArticleItem";
// atom
import { languageState } from "src/recoil";
// data
import translations from "src/language/translations";
import { fewDatasArticles } from "./fewDatasArticles";
// skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Press = () => {
  const language = useRecoilValue(languageState);
  // const articlesData = getArticlesData(language);
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticlesFromFirestore = async () => {
      try {
        const articlesCollection = collection(db, "articles");
        const q = query(
          articlesCollection,
          orderBy("dateOfPublication", "asc"),
        ); // Tri croissant

        const articlesSnapshot = await getDocs(q);
        const articlesData = articlesSnapshot.docs.map((doc) => doc.data());
        // console.log(articlesData);

        setArticlesData(articlesData);
      } catch (e) {
        console.error("Erreur lors de la récupération des articles:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticlesFromFirestore();
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 4 }).map((_, i) => (
      <div key={i}>
        <Skeleton
          width={350}
          height={297} // 340 - 43 = 297
          baseColor="#bbb"
          className="mb-3"
        />
        <Skeleton count={1.5} width={350} baseColor="#bbb" />
      </div>
    ));
  };

  return (
    <>
      <Helmet>
        <title>
          Presse - Ground Elite Academy : Découvrez Nos Dernières Actualités
        </title>
      </Helmet>

      <div className="mt-[68px] px-5 pb-8 pt-5 md:px-8 md:pb-10 md:pt-7 xl:mt-[78px] xl:pb-14 xl:pt-10">
        <h1 className="text-center text-3xl font-bold">
          {translations[language].press.title[0]}
          <span className="text-[#b0181c]">
            {" "}
            {translations[language].press.title[1]}
          </span>
        </h1>

        <div
          className={`${articlesData.length > 0 || isLoading ? "mt-8" : ""} flex min-h-[340px] flex-col items-center justify-center gap-y-10 md:w-auto md:flex-row md:flex-wrap md:gap-10 2xl:mt-12 2xl:gap-12 3xl:mx-auto 3xl:w-[1545px]`}
        >
          {/* Articles */}
          {isLoading ? (
            renderSkeletons()
          ) : articlesData.length > 0 ? (
            articlesData.map((article, index) => {
              const bgArticleItem =
                fewDatasArticles.find((articleF) => articleF.id === index)
                  ?.bgArticleItem || null;

              return (
                <ArticleItem
                  key={article.titleArticle}
                  bgArticleItem={bgArticleItem}
                  title={article.titleArticle}
                  articlePath={article.pathArticle}
                />
              );
            })
          ) : (
            <p className="text-center text-xl font-bold 2xl:mt-20">
              Aucun article n&apos;a été crée pour le moment
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Press;
