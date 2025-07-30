"use client";

import { useEffect, useState } from "react";

import { storage } from "@/server/firebase";
import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";

export function useArticleCover(articlePath) {
  const [fileCover, setFileCover] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!articlePath) return;

    const findImageCover = async () => {
      try {
        setLoading(true);
        const folderRef = ref(storage, `articles/${articlePath}`);
        const result = await listAll(folderRef);

        const urls = [];

        for (const itemRef of result.items) {
          const metadata = await getMetadata(itemRef);
          if (metadata.customMetadata?.type === "cover") {
            const url = await getDownloadURL(itemRef);
            urls.push(url);
          }
        }

        setFileCover(urls);
      } catch (error) {
        console.error("Erreur lors du chargement des images :", error);
      } finally {
        setLoading(false);
      }
    };

    findImageCover();
  }, [articlePath]);

  return { fileCover, loading };
}
