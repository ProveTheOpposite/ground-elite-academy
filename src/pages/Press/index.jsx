// hook
import { useRecoilValue } from "recoil";
// react helmet
import { Helmet } from "react-helmet-async";
// components
import ArticleItem from "./components/ArticleItem";
// atom
import { languageState } from "src/recoil";
// data
import translations from "src/language/translations";
import { getArticlesData } from "./articlesData";

const Press = () => {
  const language = useRecoilValue(languageState);
  const articlesData = getArticlesData(language);

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

        <div className="mt-8 flex flex-col items-center justify-center gap-y-10 md:w-auto md:flex-row md:flex-wrap md:gap-10 2xl:mt-12 2xl:gap-12 3xl:mx-auto 3xl:w-[1500px]">
          {/* articles */}
          {articlesData.map((article) => (
            <ArticleItem
              key={article.id}
              bgArticleItem={article.bgArticleItem}
              title={article.title}
              articlePath={article.articlePath}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Press;
