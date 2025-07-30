"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="welcome"
      className={`${isMobile ? "bg-banner-mobile-url" : "bg-banner-desktop-url"} relative flex h-screen items-center justify-center px-5 sm:px-8 md:px-10 lg:px-16 2xl:px-28`}
    >
      <div className="3xl:bottom-28 3xl:left-28 z-10 flex flex-col items-center md:w-[550px] lg:flex-row xl:absolute xl:bottom-20 xl:left-20 2xl:w-[750px]">
        <div className="mt-14 text-center sm:mt-0 xl:text-left">
          <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl lg:leading-tight 2xl:text-5xl 2xl:leading-tight">
            Découvrez la <span className="text-[#b0181c]">Lutte</span> et le{" "}
            <span className="text-[#b0181c]">Grappling</span> à Nice avec les
            experts de Ground Elite Academy
          </h1>

          <Button
            onClick={() => router.push("/contact-us")}
            size="xl"
            className="bg-[#b0181c] font-semibold text-white hover:bg-gray-50 hover:text-[#b0181c] lg:text-base"
          >
            <Phone className="mr-2 h-5 w-5 lg:h-8 lg:w-8" />
            Contactez-nous
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <div className="flex items-center gap-8 rounded-full border border-red-500/30 bg-black/60 px-8 py-3 backdrop-blur-sm lg:px-10 lg:py-4">
          <div className="text-center">
            <div className="text-lg font-bold text-red-500 lg:text-xl">
              LUTTE
            </div>
            <div className="text-xs text-gray-400 lg:text-sm">Libre</div>
          </div>
          <div className="h-8 w-px bg-red-500/30"></div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-500 lg:text-xl">
              GRAPPLING
            </div>
            <div className="text-xs text-gray-400 lg:text-sm">No-Gi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
