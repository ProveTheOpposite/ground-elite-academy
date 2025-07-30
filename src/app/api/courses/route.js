import { NextResponse } from "next/server";

import { db } from "@/server/firebase";
import { collection, getDocs } from "firebase/firestore";

export const GET = async () => {
  try {
    const eventsCollection = collection(db, "courses");
    const eventsSnapshot = await getDocs(eventsCollection);
    const eventsData = eventsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return NextResponse.json(eventsData);
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur s'est produite lors du chargement des cours" },
      { status: 500 },
    );
  }
};
