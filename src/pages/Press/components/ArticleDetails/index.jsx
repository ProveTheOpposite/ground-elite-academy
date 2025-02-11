// hook
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/server/firebase";
// atom
import { languageState } from "src/recoil";
// swiper
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// marked
import DOMPurify from "dompurify";
import { marked } from "marked";
// components
import { Helmet } from "react-helmet-async";
import BreadCrumb from "src/components/BreadCrumb";
// data
import translations from "src/language/translations";
import { fewDatasArticles } from "../../fewDatasArticles";
// css
import "./ArticleDetails.css";

const ArticleDetails = () => {
  const language = useRecoilValue(languageState);
  const [articlesData, setArticlesData] = useState([]);

  const swiperRef = useRef(null);

  const { articleId } = useParams();

  useEffect(() => {
    const fetchArticlesFromFirestore = async () => {
      const articlesCollection = collection(db, "articles");
      const articlesSnapshot = await getDocs(articlesCollection);
      const articlesData = articlesSnapshot.docs.map((doc) => doc.data());

      setArticlesData(articlesData);
    };

    fetchArticlesFromFirestore();
  }, []);

  // Trouve l'article pour exploiter la date correspondant au slug
  const article = articlesData.find(
    (article) => article.pathArticle === "/" + articleId,
  );

  // Trouve l'article correspondant au slug
  const fewDatasArticle = fewDatasArticles.find(
    (article) => article.path === "/" + articleId,
  );

  if (!article) {
    return <p>Ressources introuvables.</p>;
  }

  const getFileType = (filePath) => {
    const regexImage = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;
    const regexVideo = /\.(mp4|avi|mov|mkv|webm|flv)$/i;

    if (regexImage.test(filePath)) {
      return "image";
    } else if (regexVideo.test(filePath)) {
      return "video";
    } else {
      return "unknown";
    }
  };

  const handleSlideChange = (swiper) => {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      const video = slide.querySelector("video");

      if (video) {
        if (index === swiper.activeIndex) {
          video.play();
          video.volume = 0.5;
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  };

  // convert mardown to html
  const getHtmlFromMarkdown = (markdownText) => {
    const rawHtml = marked.parse(markdownText);
    return DOMPurify.sanitize(rawHtml);
  };

  // convert timestamp to a date
  const timestampInMs =
    article.dateOfPublication.seconds * 1000 +
    article.dateOfPublication.nanoseconds / 1e6;

  const date = new Date(timestampInMs);

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("fr-FR", options);

  return (
    <>
      <Helmet>
        <title>{fewDatasArticle.titlePage}</title>
        <meta name="description" content={fewDatasArticle.metaDescription} />
      </Helmet>

      <div className="mt-[68px] px-5 pb-8 pt-5 md:px-8 md:pb-10 md:pt-7 xl:mt-[78px]">
        <div className="xl:mx-auto xl:w-2/3">
          <BreadCrumb />
        </div>

        <h1 className="mt-5 text-center text-3xl font-bold md:mt-5">
          {article.titleArticle}
        </h1>

        <div className="my-5 lg:mx-auto lg:my-10 lg:w-[980px] lg:px-32 xl:w-[1020px] 3xl:w-[1100px]">
          <span>
            <strong>
              {language === "fr" ? "Date de publication" : "Publication date"} :
            </strong>{" "}
            {formattedDate}
          </span>

          <div className="mt-4 lg:flex lg:items-center">
            {/* prev button */}
            <div
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="group hidden transition-colors hover:border-[#b0181c] hover:bg-[#b0181c] lg:flex lg:h-10 lg:w-10 lg:cursor-pointer lg:items-center lg:justify-center lg:rounded-full lg:border-2 lg:border-black"
            >
              <i className="fa-solid fa-arrow-left group-hover:text-white lg:text-xl lg:text-black"></i>
            </div>

            <Swiper
              ref={swiperRef}
              className="mySwiper h-[500px] w-[330px] xs:w-[350px] sm:h-[670px] sm:w-[480px] md:h-[760px] md:w-[550px] lg:h-[740px] 3xl:h-[810px] 3xl:w-[600px]"
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Navigation]}
              onSlideChange={handleSlideChange}
            >
              {fewDatasArticle.imagesSlide.map((elem) => (
                <SwiperSlide
                  className="flex flex-col justify-center"
                  key={elem}
                >
                  {getFileType(elem) === "image" ? (
                    <img
                      className="rounded-xl md:w-full"
                      src={elem}
                      alt={`Image de l'article '${article.titleArticle}'`}
                      loading="lazy"
                    />
                  ) : getFileType(elem) === "video" ? (
                    <video
                      className="rounded-xl"
                      // onCanPlay={() => console.log("Vidéo chargée")}
                      // onError={() =>
                      //   console.error("Erreur lors du chargement de la vidéo")
                      // }
                      preload="auto"
                      controls
                    >
                      <source src={elem} />
                    </video>
                  ) : (
                    <p className="flex w-full flex-1 items-center justify-center text-center">
                      {translations[language].press.errorLoading}
                    </p>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="group hidden transition-colors hover:border-[#b0181c] hover:bg-[#b0181c] lg:flex lg:h-10 lg:w-10 lg:cursor-pointer lg:items-center lg:justify-center lg:rounded-full lg:border-2 lg:border-black"
            >
              <i className="fa-solid fa-arrow-right group-hover:text-white lg:text-xl lg:text-black"></i>
            </div>
          </div>
        </div>

        <div
          className="content-wrapper lg:text-lg lg:leading-relaxed xl:mx-auto xl:w-[1100px] 3xl:w-[1300px]"
          dangerouslySetInnerHTML={{
            __html: getHtmlFromMarkdown(article.contentArticle),
          }}
        ></div>
      </div>
    </>
  );
};

export default ArticleDetails;
