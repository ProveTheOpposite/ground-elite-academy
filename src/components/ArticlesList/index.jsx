"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";

import ArticlesListSkeleton from "./components/ArticlesListSkeleton";
import ArticleCard from "./components/ArticleCard";
import ErrorFetchArticlesData from "./components/ErrorFetchArticlesData";

const ArticlesList = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [errorFetch, setErrorFetch] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/articles", {
          next: {
            revalidate: 172800,
          },
        });

        if (!res.ok) throw new Error("Erreur serveur");

        const data = await res.json();
        setArticlesData(data);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération des articles coté client.",
        );
        setErrorFetch(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    router.prefetch("/blog");
  }, [router]);

  const articles = articlesData.filter(
    (article) => article.status === "Publié",
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ArticlesListSkeleton />
      </div>
    );
  }

  if (errorFetch) {
    return <ErrorFetchArticlesData />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <Link key={article.pathArticle} href={`/blog/${article.pathArticle}`}>
          <ArticleCard article={article} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default ArticlesList;
