"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, Home, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardContent className="p-8 text-center md:p-12">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-slate-200 select-none md:text-9xl">
              404
            </h1>
            <div className="relative -mt-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-800 md:text-3xl">
                Page Introuvable
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 space-y-3">
            <p className="text-lg text-slate-600">
              Oups ! La page que vous recherchez semble s'être égarée.
            </p>
            <p className="text-slate-500">
              Ne vous inquiétez pas, cela arrive aux meilleurs d'entre nous.
              Remettons-vous sur la bonne voie.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="flex items-center gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Accueil
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent"
              >
                <Link href="/blog">
                  <FileText className="h-4 w-4" />
                  Parcourir les Articles
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent"
              >
                <Link href="/contact-us">
                  <Mail className="h-4 w-4" />
                  Nous Contacter
                </Link>
              </Button>
            </div>

            {/* Back Button */}
            <div className="pt-4">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => router.back()}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-400">
              Perdu ? Notre navigation ci-dessus vous aidera à retrouver votre
              chemin.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
