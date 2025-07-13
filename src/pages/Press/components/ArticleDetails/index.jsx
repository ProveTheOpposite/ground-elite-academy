// hook
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
// firebase
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, storage } from "src/server/firebase";
// atom
import { languageState } from "src/recoil";
// swiper
import { Navigation, Pagination } from "swiper/modules";
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
// skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// css
import "./ArticleDetails.css";
// aos
import Aos from "aos";
import "aos/dist/aos.css";

const ArticleDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayRestCategories, setDisplayRestCategories] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  const [files, setFiles] = useState([]);

  const language = useRecoilValue(languageState);

  const swiperRef = useRef(null);
  const categoryPopupRef = useRef();

  const { articleId } = useParams();

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const fetchArticlesFromFirestore = async () => {
      const articlesCollection = collection(db, "articles");
      const articlesSnapshot = await getDocs(articlesCollection);
      const articlesData = articlesSnapshot.docs.map((doc) => doc.data());

      setArticlesData(articlesData);
    };

    fetchArticlesFromFirestore();
  }, []);

  // masque le bloc de toutes les catégories lorsqu'on clique sur la page
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryPopupRef.current &&
        !categoryPopupRef.current.contains(event.target)
      ) {
        setDisplayRestCategories(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // recupere les fichiers de l'input:file
  const loadFiles = useCallback(async () => {
    if (!articleId) return;
    setIsLoading(true);

    try {
      const folderRef = ref(storage, `articles/${articleId}`);
      const result = await listAll(folderRef);

      const urls = await Promise.all(
        result.items.map((itemRef) => getDownloadURL(itemRef)),
      );

      setFiles(urls);
    } catch (error) {
      console.error("Erreur lors du chargement des images :", error);
    } finally {
      setIsLoading(false);
    }
  }, [articleId]);

  // recupère les fichiers dans linput:file au moment de l'édition
  useEffect(() => {
    loadFiles();
  }, [articleId, loadFiles]);

  // Trouve l'article pour exploiter la date correspondant au slug
  const article = articlesData.find(
    (art) => art.pathArticle === "/" + articleId,
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

  // Affiche la suite des catégories
  const handleClickShowMoreCategories = (e) => {
    e.stopPropagation();
    setDisplayRestCategories(true);
  };

  return (
    <>
      <Helmet>
        <title>{article.titleArticle}</title>
        <meta name="description" content={article.descriptionArticle} />
      </Helmet>

      <div className="mt-[68px] px-5 pt-5 pb-8 md:px-8 md:pt-7 md:pb-10 xl:mt-[78px]">
        <div className="xl:mx-auto xl:w-2/3">
          <BreadCrumb isLoading={isLoading} />
        </div>

        <h1 className="mt-5 text-center text-3xl font-bold md:mt-5">
          {isLoading ? (
            <Skeleton
              baseColor="#ccc"
              width={isMobile ? "100%" : 600}
              duration={3}
              direction="ltr"
            />
          ) : (
            article.titleArticle
          )}
        </h1>

        <div className="3xl:w-[1100px] my-5 lg:mx-auto lg:my-10 lg:w-[980px] lg:px-32 xl:w-[1020px]">
          <div className="flex items-center justify-between">
            <span>
              {isLoading ? (
                <Skeleton
                  baseColor="#ccc"
                  width={240}
                  duration={3}
                  direction="ltr"
                />
              ) : (
                <>
                  <strong>
                    {language === "fr"
                      ? "Date de publication"
                      : "Publication date"}{" "}
                    :
                  </strong>{" "}
                  {formattedDate}
                </>
              )}
            </span>

            <div className="flex max-w-96 flex-wrap justify-end gap-3">
              {isLoading ? (
                <>
                  <Skeleton
                    baseColor="#ccc"
                    width={60}
                    height={25}
                    duration={3}
                    direction="ltr"
                  />
                  <Skeleton
                    baseColor="#ccc"
                    width={60}
                    height={25}
                    duration={3}
                    direction="ltr"
                  />
                  <Skeleton
                    baseColor="#ccc"
                    width={60}
                    height={25}
                    duration={3}
                    direction="ltr"
                  />
                </>
              ) : isMobile ? (
                article.categoriesArticle.slice(0, 1).map((category, index) => (
                  <div key={index} className="flex items-center gap-x-3">
                    <span className="rounded bg-gray-200 px-2 py-1">
                      {category}
                    </span>
                    {article.categoriesArticle.length > 1 && (
                      <button
                        onClick={handleClickShowMoreCategories}
                        className="relative rounded border border-slate-400 bg-zinc-100 px-2 py-1 transition-colors hover:bg-gray-200"
                      >
                        +{article.categoriesArticle.length - 1}
                        {displayRestCategories && (
                          <div
                            ref={categoryPopupRef}
                            data-aos="zoom-in"
                            data-aos-duration="150"
                            className="absolute right-0 bottom-[130%] z-50 w-[300px] rounded-md border border-slate-400 bg-white p-5 text-black" //
                          >
                            <h4 className="mb-4 text-black">
                              Toutes les catégories :
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {article.categoriesArticle.map((category) => (
                                <span
                                  className="rounded bg-gray-200 px-2 py-1"
                                  key={category}
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </button>
                    )}
                  </div>
                ))
              ) : (
                article.categoriesArticle.map((category) => (
                  <span
                    key={category}
                    className="rounded bg-gray-200 px-2 py-1 font-medium text-gray-500"
                  >
                    {category}
                  </span>
                ))
              )}
            </div>
          </div>

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
              className="mySwiper xs:w-[350px] 3xl:h-[810px] 3xl:w-[600px] h-[500px] w-[330px] sm:h-[670px] sm:w-[480px] md:h-[760px] md:w-[550px] lg:h-[740px]"
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[window.innerWidth >= 1024 ? Navigation : Pagination]}
              onSlideChange={handleSlideChange}
            >
              {files.map((url) => {
                const path = decodeURIComponent(
                  url.split("?")[0].split("/").pop(),
                );
                const regex = /([^/]+)$/;
                const matchNameUrl = path.match(regex);

                return (
                  <SwiperSlide
                    className="flex h-full items-center justify-center"
                    key={url}
                  >
                    {isLoading ? (
                      <Skeleton
                        baseColor="#ccc"
                        height="100%"
                        width="100%"
                        duration={3}
                        borderRadius="0.75rem"
                        direction="ltr"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        {getFileType(matchNameUrl[0]) === "image" ? (
                          <img
                            className="rounded-xl md:w-full"
                            src={url}
                            alt={`Image de l'article '${article.titleArticle}'`}
                            loading="lazy"
                          />
                        ) : getFileType(matchNameUrl[0]) === "video" ? (
                          <video className="rounded-xl" preload="auto" controls>
                            <source src={url} />
                          </video>
                        ) : (
                          <p className="text-center xl:text-lg">
                            {translations[language].press.errorLoading}
                          </p>
                        )}
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="group hidden transition-colors hover:border-[#b0181c] hover:bg-[#b0181c] lg:flex lg:h-10 lg:w-10 lg:cursor-pointer lg:items-center lg:justify-center lg:rounded-full lg:border-2 lg:border-black"
            >
              <i className="fa-solid fa-arrow-right group-hover:text-white lg:text-xl lg:text-black"></i>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="xl:mx-auto xl:w-[1100px]">
            <Skeleton
              width="98%"
              baseColor="#ccc"
              duration={3}
              direction="ltr"
            />
            <Skeleton
              width="95%"
              baseColor="#ccc"
              duration={3}
              direction="ltr"
            />
            <Skeleton
              width="97%"
              baseColor="#ccc"
              duration={3}
              direction="ltr"
            />
            <Skeleton
              width="99%"
              baseColor="#ccc"
              duration={3}
              direction="ltr"
            />
            <Skeleton
              width="96%"
              baseColor="#ccc"
              duration={3}
              direction="ltr"
            />
            <Skeleton
              width="94%"
              baseColor="#ccc"
              duration={3}
              direction="ltr"
            />
            <Skeleton
              width="98%"
              baseColor="#ccc"
              duration={3}
              direction="ltr"
            />
          </div>
        ) : (
          <div
            className="content-wrapper 3xl:w-[1300px] lg:text-lg lg:leading-relaxed xl:mx-auto xl:w-[1100px]"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(article.contentArticle),
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default ArticleDetails;
