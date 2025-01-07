import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

export const getArticlesData = (language) => [
  {
    id: 0,
    bgArticleItem: "first", // first-article-bg-url => second-article-bg-url => ...
    title: translations[language].press.articleOne.title,
    textEntire: translations[language].press.articleOne.text,
    imagesSlide: [
      imageUrl.press.articleOne.gaetanCombat2,
      imageUrl.press.articleOne.gaetanCombat1,
      imageUrl.press.articleOne.gaetanCombat3,
      imageUrl.press.articleOne.gaetanCombatVideo,
      imageUrl.press.articleOne.gaetanCombatFinalisation,
      imageUrl.press.articleOne.gaetanVictory,
    ],
    articlePath: "/victoire-de-gaetan-au-cfjjb",
    date: "05 Jan. 2024",
  },
];
