"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import Link from "next/link";

import { ChevronRightIcon, Home } from "lucide-react";

const BlogLayout = ({ children }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="mt-[68px] xl:mt-[78px]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          className="mb-6 flex items-center space-x-2 text-sm text-gray-500"
          aria-label="Breadcrumb"
        >
          <Home className="h-4 w-4" />
          <Link href="/" className="hover:text-red-600">
            Accueil
          </Link>
          <ChevronRightIcon className="h-4 w-4" />
          <Link href="/blog" className="hover:text-red-600">
            Blog
          </Link>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="line-clamp-1 font-medium text-gray-700">
            {segment
              .split("-")
              .map((word, index) =>
                index === 0
                  ? word.charAt(0).toUpperCase() + word.slice(1)
                  : word,
              )
              .join(" ")}
          </span>
        </nav>

        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
