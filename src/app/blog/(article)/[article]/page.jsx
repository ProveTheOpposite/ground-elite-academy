import ArticlePageClient from "@/components/ArticlePageClient";

export const generateMetadata = async ({ params }) => {
  const { article } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Impossible de récupérer les articles");
    }

    const articles = await res.json();

    const currentArticle = articles.find(
      (a) => a.pathArticle.slice(1) === article,
    );

    if (currentArticle) {
      return {
        title: `${currentArticle.titleArticle}`,
        description:
          currentArticle.descriptionArticle ||
          `Découvrez notre article sur ${currentArticle.titleArticle}, au club de lutte et grappling Ground Elite Academy (Nice).`,
        openGraph: {
          title: `${currentArticle.titleArticle}`,
          description:
            currentArticle.descriptionArticle ||
            `Découvrez notre article sur ${currentArticle.titleArticle}, au club de lutte et grappling Ground Elite Academy (Nice).`,
          siteName: "Ground Elite Academy",
          domain: "groundeliteacademy.fr",
          type: "website",
          images: [
            {
              url: currentArticle.urlCover,
              width: 1200,
              height: 630,
              alt: currentArticle.titleArticle,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: `${currentArticle.titleArticle}`,
          description:
            currentArticle.descriptionArticle ||
            `Découvrez notre article sur ${currentArticle.titleArticle}, au club de lutte et grappling Ground Elite Academy (Nice).`,
          images: [currentArticle.urlCover],
          domain: "groundeliteacademy.fr",
        },
      };
    }

    return {
      title: "Erreur lors du chargement de l'article",
      description:
        "L'article que vous recherchez est introuvable ou une erreur est survenue. Découvrez nos autres articles sur la lutte et le grappling au club Ground Elite Academy à Nice.",
    };
  } catch (err) {
    console.error(err);
    return {
      title: "Erreur lors du chargement de l'article",
      description:
        "L'article que vous recherchez est introuvable ou une erreur est survenue. Découvrez nos autres articles sur la lutte et le grappling au club Ground Elite Academy à Nice.",
    };
  }
};

const ArticlePage = async ({ params }) => {
  const { article } = await params;

  return <ArticlePageClient articleSlug={article} />;
};

export default ArticlePage;
