"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import ArticleDetailPageSkeleton from "../ArticlePageSkeleton";
import ArticleShareButtons from "../ArticleShareButtons";
import OtherArticles from "./OtherArticles";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Share2,
  Twitter,
  User,
} from "lucide-react";

import { storage } from "@/server/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

import { useScreenSize } from "@/hooks/useScreenSize";

import { formatDate } from "@/utils/formatDate";

import "./ArticlePageClient.css";

const ArticlePageClient = ({ articleSlug }) => {
  const [articles, setArticles] = useState([]);
  const [files, setFiles] = useState([]);
  const [isFilesLoading, setIsFilesLoading] = useState(false);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);

  const swiperRef = useRef(null);

  const pathname = usePathname();

  const screenSize = useScreenSize();

  useEffect(() => {
    const fetchArticlesFromFirestore = async () => {
      try {
        setIsArticlesLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`,
          {
            next: {
              revalidate: 172800,
            },
          },
        );

        if (!res.ok) throw new Error("Erreur serveur");

        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsArticlesLoading(false);
      }
    };

    fetchArticlesFromFirestore();
  }, []);

  // recupere les fichiers de l'input:file
  const loadFiles = useCallback(async () => {
    if (!articleSlug) return;
    setIsFilesLoading(true);

    try {
      const folderRef = ref(storage, `articles/${articleSlug}`);
      const result = await listAll(folderRef);

      const urls = await Promise.all(
        result.items.map((itemRef) => getDownloadURL(itemRef)),
      );

      setFiles(urls);
    } catch (error) {
      console.error("Erreur lors du chargement des images :", error);
    } finally {
      setIsFilesLoading(false);
    }
  }, [articleSlug]);

  // recupère les fichiers dans linput:file au moment de l'édition
  useEffect(() => {
    loadFiles();
  }, [articleSlug, loadFiles]);

  if (isFilesLoading || isArticlesLoading) {
    return <ArticleDetailPageSkeleton />;
  }

  const article = articles.find((art) => art.pathArticle === `/${articleSlug}`);

  const otherArticles = articles.filter(
    (a) => a.pathArticle !== article.pathArticle,
  );

  if (!article) {
    return <p>Article non trouvé.</p>;
  }

  const categoryColors = {
    Compétition: "bg-pink-100 text-pink-800 hover:bg-pink-200",
    Entraînement: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    Lutte: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Grappling: "bg-red-100 text-red-800 hover:bg-red-200",
    Lifestyle: "bg-teal-100 text-teal-800 hover:bg-teal-200",
    Culture: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
    Erreur: "bg-gray-200 text-gray-600 hover:bg-gray-300",
  };

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

  return (
    <>
      {/* Article Header */}
      <section className="mb-10 text-center">
        <h1 className="mb-4 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl">
          {article.titleArticle}
        </h1>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4 text-red-600" />
            <span>Publié le {formatDate(article.dateOfPublication)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4 text-red-600" />
            <span>{article.readTimeArticle} de lecture</span>
          </div>
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4 text-red-600" />
            <span>Par {article.authorArticle}</span>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {article.categoriesArticle.map((tag) => (
            <Badge
              key={tag}
              className={`font-medium ${categoryColors[tag] || "bg-gray-100 text-gray-800"}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* Image Carousel */}
      <section className="relative mb-12 rounded-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="absolute top-1/2 left-32 hidden -translate-y-1/2 rounded-full border border-black p-2 text-gray-800 shadow-md transition-colors hover:border-[#b0181c] hover:bg-[#b0181c] hover:text-white lg:block xl:left-52"
        >
          <ChevronLeft className="h-24 w-24" />
        </Button>

        <Swiper
          ref={swiperRef}
          className="mySwiper 3xl:h-[810px] 3xl:w-[600px] relative h-[550px] w-[330px] sm:h-[670px] sm:w-[480px] md:h-[760px] md:w-[550px] lg:h-[740px]"
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[screenSize === "mobile" ? Pagination : Navigation]}
          onSlideChange={handleSlideChange}
        >
          {files.map((url) => {
            const path = decodeURIComponent(url.split("?")[0].split("/").pop());
            const regex = /([^/]+)$/;
            const matchNameUrl = path.match(regex);

            return (
              <SwiperSlide
                className="flex h-full items-center justify-center"
                key={url}
              >
                <div className="flex h-full w-full items-center justify-center">
                  {getFileType(matchNameUrl[0]) === "image" ? (
                    <Image
                      src={url}
                      alt={`Image de l'article '${article.titleArticle}'`}
                      width={600}
                      height={500}
                      className="rounded-xl md:w-full"
                      priority
                    />
                  ) : getFileType(matchNameUrl[0]) === "video" ? (
                    <video
                      className="h-full w-full rounded-xl"
                      preload="auto"
                      controls
                    >
                      <source src={url} />
                    </video>
                  ) : (
                    <p className="text-center text-red-600 xl:text-lg">
                      La ressource n'est pas disponible
                    </p>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="absolute top-1/2 right-32 hidden -translate-y-1/2 rounded-full border border-black p-2 text-gray-800 shadow-md transition-colors hover:border-[#b0181c] hover:bg-[#b0181c] hover:text-white lg:block xl:right-52"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </section>

      {/* Article Content */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-md">
        <div
          className="prose prose-lg content-wrapper max-w-none leading-relaxed text-gray-800"
          dangerouslySetInnerHTML={{ __html: article.contentArticle }}
        />
      </section>

      {/* Share and Author Section */}
      <section className="mb-12 flex flex-col items-center justify-between rounded-lg bg-white p-6 shadow-md md:flex-row">
        <div className="mb-4 flex items-center space-x-4 md:mb-0">
          <Share2 className="h-6 w-6 text-gray-700" />
          <span className="font-semibold text-gray-700">
            Partager cet article:
          </span>
          <ArticleShareButtons
            url={`${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`}
          />
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
            {article.authorArticle.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              {article.authorArticle}
            </p>
            <p className="text-sm text-gray-600">Auteur</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Autres Articles
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherArticles.slice(0, 3).map((otherArticle) => (
            <OtherArticles
              key={otherArticle.pathArticle}
              otherArticle={otherArticle}
              categoryColors={categoryColors}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ArticlePageClient;
