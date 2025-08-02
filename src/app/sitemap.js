import { db } from "@/server/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://groundeliteacademy.fr";

  let articles = [];

  try {
    const articlesCollection = collection(db, "articles");
    const q = query(articlesCollection, orderBy("dateOfPublication", "asc")); // Tri croissant
    const articlesSnapshot = await getDocs(q);
    articles = articlesSnapshot.docs.map((doc) => doc.data());
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
    url: `${baseUrl}/blog${a.pathArticle}`,
    lastModified: new Date(a.dateOfPublication.seconds * 1000 || now),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
