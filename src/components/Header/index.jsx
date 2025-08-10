"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { imageUrl } from "@/assets/images/imageList";

import { scrollToElement } from "@/utils/scrollToElement";

import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";
import ScrollLink from "./ScrollLink";

// header link items
const headerList = {
  welcome: "Accueil",
  aboutUs: "À propos de nous",
  team: "Équipe",
  schedule: "Planning",
  subscriptions: "Abonnements",
  faq: "FAQ",
  blog: "Blog",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = pathname === "/";

  const headerBackgroundClass = isScrolled || !isHomePage ? "shadow-lg" : "";

  const textColorClass =
    isScrolled || !isHomePage ? "text-black" : "text-white";

  const logoSrc =
    isScrolled || !isHomePage
      ? imageUrl.header.logoBlack
      : imageUrl.header.logoWhite;

  return (
    <header
      className={`${headerBackgroundClass} 3xl:px-44 fixed top-0 z-50 flex h-[68px] w-full items-center justify-between backdrop-blur-md xl:h-[78px] xl:px-14 xl:pl-10 2xl:px-32`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h2>
            <Link href="/">
              <Image
                width={85}
                src={logoSrc}
                priority
                alt="Logo de Ground Elite Academy"
              />
            </Link>
          </h2>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-10 lg:flex">
            {Object.keys(headerList).map((item) =>
              item === "blog" ? (
                <Link
                  key={item}
                  href="/blog"
                  className={`transition-colors hover:text-red-600 ${textColorClass}`}
                >
                  {headerList[item]}
                </Link>
              ) : (
                <ScrollLink
                  key={item}
                  id={item}
                  label={headerList[item]}
                  textColorClass={textColorClass}
                  className="hover:text-red-600"
                />
              ),
            )}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4 lg:space-x-0">
            <Link href="/contact-us">
              <Button
                size="xl"
                className="hidden bg-[#b0181c] px-6 text-white hover:bg-[#7d2a2d] md:block"
              >
                Contactez-nous
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 lg:hidden ${textColorClass}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-full w-full border-t border-slate-200 bg-white lg:hidden`}
        >
          <div className="space-y-3 px-4 py-4">
            {Object.keys(headerList).map((key) =>
              key === "blog" ? (
                <Link
                  key={key}
                  href="/blog"
                  className="block transition-colors hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {headerList[key]}
                </Link>
              ) : (
                <ScrollLink
                  key={key}
                  id={key}
                  label={headerList[key]}
                  className="hover:text-red-600"
                  textColorClass={textColorClass}
                  setMobileMenuOpen={setMobileMenuOpen} // lowercase pour eviter une erreur
                />
              ),
            )}
            <Link href="/contact-us">
              <Button
                className="mt-4 w-full bg-[#b0181c] py-5 text-white hover:bg-[#7d2a2d]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
