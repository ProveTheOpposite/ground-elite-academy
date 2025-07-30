import { NextResponse } from "next/server";

import { db } from "@/server/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const GET = async () => {
  try {
    const articlesCollection = collection(db, "articles");
    const q = query(articlesCollection, orderBy("dateOfPublication", "asc")); // Tri croissant

    const articlesSnapshot = await getDocs(q);
    const articlesData = articlesSnapshot.docs.map((doc) => doc.data());

    return NextResponse.json(articlesData);
  } catch (e) {
    console.error("Erreur lors de la récupération des articles:", e);
    return NextResponse.json(
      { error: "Une erreur s'est produite lors du chargement des articles" },
      { status: 500 },
    );
  }
};
