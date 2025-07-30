export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://groundeliteacademy.fr";

  let articles = [];

  try {
    const res = await fetch(`${baseUrl}/api/articles`, {
      next: { revalidate: 172800 },
    });
    if (res.ok) {
      articles = await res.json();
    }
  } catch (err) {
    console.error("Erreur récupération articles pour sitemap", err);
  }

  const now = new Date();

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const articlePages = articles.map((a) => ({
    url: `${baseUrl}${a.pathArticle}`,
    lastModified: new Date(a.dateOfPublication.seconds * 1000 || now),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
