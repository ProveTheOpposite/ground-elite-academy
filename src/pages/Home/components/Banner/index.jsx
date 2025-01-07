// hook
// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "src/components/Button";
import translations from "src/language/translations";
// atom
import { languageState } from "src/recoil";

const Banner = () => {
  //   const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const language = useRecoilValue(languageState);

  //   const videoRef = useRef(null);

  //   const toggleStateVideo = () => {
  //     const videoElement = videoRef.current;

  //     if (videoElement.paused) {
  //       videoElement.play();
  //       setIsVideoPlaying(true);
  //     } else {
  //       videoElement.pause();
  //       setIsVideoPlaying(false);
  //     }
  //   };

  const isMobile = window.innerWidth <= 1080;
  const isDesktop = window.innerWidth > 1080;

  return (
    <section
      id="welcome"
      className={`${isMobile ? "bg-banner-mobile-url" : isDesktop ? "bg-banner-desktop-url" : ""} relative flex h-screen items-center justify-center px-5 sm:px-8 md:px-10 lg:px-16 2xl:px-28`}
    >
      {/* Video Background */}
      {/* <video
        ref={videoRef}
        className="absolute h-screen w-screen bg-cover object-cover md:block"
        autoPlay={isVideoPlaying}
        loop
      >
        <source src="/src/assets/videos/video-banner.mp4" type="video/mp4" />
        {translations[language].home.banner.videoNotSupported}
      </video> */}

      {/* Overlay */}
      {/* <div className="absolute h-full w-full bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="3xl:bottom-28 3xl:left-28 z-10 flex flex-col items-center md:w-[550px] lg:flex-row xl:absolute xl:bottom-20 xl:left-20 2xl:w-[750px]">
        {/* <div className="text-center lg:flex-[0.55] lg:text-left 2xl:flex-[0.4]"> */}
        <div className="mt-14 text-center sm:mt-0 xl:text-left">
          <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl lg:leading-tight 2xl:text-5xl 2xl:leading-tight">
            {translations[language].home.banner.title[0]}{" "}
            <span className="text-[#b0181c]">
              {translations[language].home.banner.title[1]}
            </span>{" "}
            {translations[language].home.banner.title[2]}{" "}
            <span className="text-[#b0181c]">
              {translations[language].home.banner.title[3]}
            </span>{" "}
            {translations[language].home.banner.title[4]}
          </h1>

          <Link className="rounded-full" to="/contact-us">
            <Button className="bg-[#b0181c] text-white hover:bg-[#7d2a2d] 2xl:!px-8 2xl:!py-4 2xl:!text-xl">
              {translations[language].home.btnContactUs}
            </Button>
          </Link>
        </div>

        {/* <div className="pt-16 md:flex md:items-center md:justify-center lg:flex-[0.45] 2xl:flex-[0.6]">
          <div>
            <button
              onClick={toggleStateVideo}
              className="w-[78px] rounded-md border border-white px-4 py-2 text-white"
            >
              {isVideoPlaying
                ? translations[language].home.banner.buttonVideo.pause
                : translations[language].home.banner.buttonVideo.play}
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
