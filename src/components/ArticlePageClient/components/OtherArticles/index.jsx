import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { formatDate } from "@/utils/formatDate";

import { useArticleCover } from "@/hooks/useArticleCover";

const OtherArticles = ({ otherArticle, categoryColors }) => {
  const { fileCover } = useArticleCover(otherArticle.pathArticle);

  return (
    <Link href={`/blog/${otherArticle.pathArticle}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
        <Image
          src={fileCover[0] || "/image-placeholder.svg"}
          alt={otherArticle.titleArticle}
          width={300}
          height={200}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4">
          <Badge
            className={`mb-2 ${categoryColors[otherArticle.categoriesArticle[0]] || "bg-gray-100 text-gray-800"}`}
          >
            {otherArticle.categoriesArticle[0]}
          </Badge>
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-red-600">
            {otherArticle.titleArticle}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Publié le {formatDate(otherArticle.dateOfPublication)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OtherArticles;
