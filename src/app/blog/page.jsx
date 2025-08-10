import ArticlesList from "@/components/ArticlesList";

export const metadata = {
  title: "Découvrez nos dernières actualités - Ground Elite Academy",
  description:
    "Découvrez nos dernières actualités : sport, compétition, etc... sur le club de lutte et grappling Ground Elite Academy.",
  openGraph: {
    title: "Découvrez nos dernières actualités - Ground Elite Academy",
    description:
      "Découvrez nos dernières actualités : sport, compétition, etc... sur le club de lutte et grappling Ground Elite Academy.",
    siteName: "Ground Elite Academy",
    domain: "groundeliteacademy.fr",
    type: "website",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Découvrez nos dernières actualités - Ground Elite Academy",
    description:
      "Découvrez nos dernières actualités : sport, compétition, etc... sur le club de lutte et grappling Ground Elite Academy.",
    images: ["/seo-image.jpg"],
    domain: "groundeliteacademy.fr",
  },
};

const BlogPage = () => {
  return (
    <div className="mt-[68px] xl:mt-[78px]">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            L'Actualité du Club
          </h1>
          <p className="mb-8 text-xl text-gray-600 lg:text-2xl">
            Lutte et Grappling en{" "}
            <span className="font-semibold text-red-600">Pleine Action</span>
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-red-600"></div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ArticlesList />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
