"use client";

import useAuthState from "@/hooks/useAuthState";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { imageUrl } from "@/assets/images/imageList";

import { ChevronDown, ChevronUp, LogOut, Menu, User, X } from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar";

import RegistrationPopup from "../RegistrationPopup";
import ScrollLink from "./ScrollLink";

import { auth } from "@/server/firebase";
import { signOut } from "firebase/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

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
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const pathname = usePathname();

  const router = useRouter();

  const { loading, isLogin } = useAuthState();

  const isHomePage = pathname === "/";

  const headerBackgroundClass = isScrolled || !isHomePage ? "shadow-lg" : "";

  const textColorClass =
    isScrolled || !isHomePage ? "text-black" : "text-white";

  const logoSrc =
    isScrolled || !isHomePage
      ? imageUrl.header.logoBlack
      : imageUrl.header.logoWhite;

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
      console.log("user logout");
      setShowDropdown(false);
    } catch (error) {
      console.error("Error logging out:", error);
      console.log(error.code);
    }
  };

  const handleClickNavigateTo = (path) => {
    router.push(path);
    setShowDropdown(false);
  };

  return (
    <header
      className={`${headerBackgroundClass} 3xl:px-44 fixed top-0 left-0 z-50 flex h-[68px] w-full items-center justify-between backdrop-blur-md xl:h-[78px] xl:px-14 xl:pl-10 2xl:px-32`}
    >
      <div className="w-full px-4">
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
          <div className="flex items-center gap-x-5">
            <Link href="/contact-us">
              <Button
                size="xl"
                className="hidden w-full border border-transparent bg-[#b0181c] text-white hover:bg-[#7d2a2d] xl:block"
              >
                Contactez-nous
              </Button>
            </Link>

            <div ref={dropdownRef} className="relative">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 rounded-full p-2 transition-colors hover:bg-gray-50"
                onClick={handleClickShowDropdown}
              >
                <Avatar className="h-8 w-8 border-2 border-gray-200 transition-colors hover:border-red-600">
                  <AvatarFallback className="bg-gray-100 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                {showDropdown ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </Button>

              {!loading
                ? showDropdown && (
                    <div className="absolute top-[110%] right-0 z-50 flex w-40 flex-col gap-y-1.5 rounded-md bg-white p-1 shadow-lg">
                      {isLogin ? (
                        <>
                          <button
                            onClick={() => handleClickNavigateTo("/profile")}
                            className="flex items-center gap-x-2 rounded-md p-2 text-sm transition-colors hover:bg-gray-100"
                          >
                            <User className="h-4 w-4" />
                            Mon profil
                          </button>
                          <button
                            onClick={() => setIsLogoutClicked(true)}
                            className="flex items-center gap-x-2 rounded-md p-2 text-sm text-red-600 transition-colors hover:bg-[#fef2f2]"
                          >
                            <LogOut className="h-4 w-4" />
                            Se déconnecter
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleClickNavigateTo("/login")}
                            className="flex rounded-md p-2 text-sm transition-colors hover:bg-gray-100"
                          >
                            Se connecter
                          </button>

                          <button
                            className="flex rounded-md p-2 text-sm transition-colors hover:bg-gray-100"
                            onClick={() => {
                              setShowPopup(true);
                              setMobileMenuOpen(false);
                            }}
                          >
                            Rejoignez-nous
                          </button>
                        </>
                      )}
                    </div>
                  )
                : null}
            </div>

            {showPopup && (
              <RegistrationPopup open={showPopup} onOpenChange={setShowPopup} />
            )}

            {isLogoutClicked && (
              <AlertDialog
                open={isLogoutClicked}
                onOpenChange={setIsLogoutClicked}
              >
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Êtes-vous sûr de vouloir vous déconnecter ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Voulez-vous vraiment vous déconnecter ?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={logOut}>
                      Se déconnecter
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}

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
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              ),
            )}
            <div className="mt-4">
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="w-full border bg-[#b0181c] text-white hover:bg-[#7d2a2d]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
