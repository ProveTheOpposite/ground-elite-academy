"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { ShieldAlert } from "lucide-react";
import { Copy } from "lucide-react";
import { Check } from "lucide-react";
import { X } from "lucide-react";

const PopupNewDomain = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const officialDomain = "https://geanice.fr";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(officialDomain);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la copie :", error);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 z-999 flex h-screen w-full items-center justify-center bg-black/50 px-5"
    >
      <Card
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl border shadow-none"
      >
        <div
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer rounded-full border border-black p-0.5 transition duration-100 hover:opacity-50"
        >
          <X className="size-4.5" />
        </div>

        <CardContent className="space-y-4 p-4 sm:py-6">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-orange-500" />

              <span className="font-semibold">Information importante</span>
            </div>

            <Badge
              variant="outline"
              className="rounded-full border-0 bg-orange-100 text-orange-600 hover:bg-orange-100"
            >
              Vigilance
            </Badge>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold tracking-tight">
            Notre site officiel a changé d'adresse !
          </h2>

          {/* Description */}
          <p className="leading-7">
            Afin de garantir <strong>votre sécurité</strong>, nous vous
            informons que{" "}
            <strong className="text-[#b0181c]">Ground Elite Academy</strong>{" "}
            utilise désormais une nouvelle adresse officielle.
          </p>

          {/* Official domain */}
          <div className="space-y-1 px-3 pt-2">
            <p className="text-xs font-medium tracking-wide uppercase">
              Notre nouveau site officiel
            </p>

            <a
              href={officialDomain}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium break-all hover:underline"
            >
              {officialDomain}
            </a>
          </div>

          {/* Warning */}
          <p className="text-muted-foreground text-sm leading-5">
            <strong>Attention</strong> : notre ancienne adresse internet ne nous
            appartient plus et n'est plus gérée par le club. Nous vous invitons
            à ne <strong>plus l'utiliser</strong> et à vérifier que vous
            consultez bien notre nouveau site officiel.
          </p>

          {/* Copy button */}
          <Button
            onClick={handleCopy}
            className="w-full rounded-full bg-black text-sm text-white hover:bg-black/90 md:text-base"
          >
            {copied ? (
              <>
                <Check className="mr-2 size-4" />
                Adresse copiée !
              </>
            ) : (
              <>
                <Copy className="mr-2 size-4" />
                Copier notre adresse officielle
              </>
            )}
          </Button>

          {/* Footer */}
          <p className="text-muted-foreground text-center text-xs">
            Merci pour votre confiance et votre vigilance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopupNewDomain;
