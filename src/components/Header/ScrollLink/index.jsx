"use client";

import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";

import { useScreenSize } from "@/hooks/useScreenSize";

import { scrollToElement } from "@/utils/scrollToElement";

export default function ScrollLink({
  id,
  label,
  textColorClass,
  setMobileMenuOpen,
  className,
}) {
  const pathname = usePathname();
  const router = useRouter();

  const screenSize = useScreenSize();

  const handleClick = (e) => {
    if (pathname !== "/") {
      e.preventDefault();
      router.push("/");
      setTimeout(() => scrollToElement(id), 500);
    } else {
      e.preventDefault();
      scrollToElement(id);
    }

    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={`transition-colors ${className} ${screenSize === "mobile" || screenSize === "tablet" ? "block" : textColorClass}`}
    >
      {label}
    </Link>
  );
}
