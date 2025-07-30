import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useArticleCover } from "@/hooks/useArticleCover";

import { ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";

import { formatDate } from "@/utils/formatDate";

const ArticleCard = ({ article, index }) => {
  const { fileCover } = useArticleCover(article.pathArticle);

  const categoryColors = {
    Compétition: "bg-pink-100 text-pink-800 hover:bg-pink-200",
    Entraînement: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    Lutte: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Grappling: "bg-red-100 text-red-800 hover:bg-red-200",
    Lifestyle: "bg-teal-100 text-teal-800 hover:bg-teal-200",
    Culture: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
    Erreur: "bg-gray-200 text-gray-600 hover:bg-gray-300",
  };

  return (
    <Card
      key={article.pathArticle}
      className="group transform cursor-pointer gap-0 overflow-hidden border-0 bg-white py-0 shadow-lg transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={fileCover[0] || "/image-placeholder.svg"}
          alt={article.titleArticle}
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <Badge
          variant="secondary"
          className={`absolute top-4 left-4 ${categoryColors[article.categoriesArticle[0]]} border-0 font-medium`}
        >
          <Tag className="mr-1 h-3 w-3" />
          {article.categoriesArticle[0]}
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {formatDate(article.dateOfPublication)}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {article.readTimeArticle}
          </div>
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600 hover:underline">
          {article.titleArticle}
        </h3>

        <p className="mb-4 line-clamp-3 leading-relaxed text-gray-600">
          {article.descriptionArticle}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <User className="mr-1 h-4 w-4" />
            {article.authorArticle}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="group/btn p-2 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            Lire plus
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
