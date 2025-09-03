"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Clock,
  FileUp,
  FileUpIcon,
  Heart,
  MapPin,
  Phone,
  Target,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "entraineur",
    icon: <Users className="h-6 w-6 text-red-600" />,
    title: "Entraîneur et Expertise",
    text: (
      <>
        Avec deux entraîneurs <strong>professionnels</strong>, chacun expert
        dans sa discipline, nous offrons un encadrement de qualité pour tous les
        niveaux, du débutant au compétiteur.
      </>
    ),
  },
  {
    id: "philosophie",
    icon: <Heart className="h-6 w-6 text-blue-600" />,
    title: "Philosophie du Club",
    text: (
      <>
        Notre club se distingue par une ambiance conviviale où l'entraide et le{" "}
        <strong>respect</strong> sont au cœur de notre philosophie.
      </>
    ),
  },
  {
    id: "enfants",
    icon: <Users className="h-6 w-6 text-green-600" />,
    title: "Accueil des Enfants",
    text: (
      <>
        Les enfants sont également les bienvenus chez nous, où ils peuvent non
        seulement développer leurs compétences physiques, mais aussi apprendre
        des valeurs essentielles comme le <strong>respect</strong> et la{" "}
        <strong>discipline</strong>, et l'entraide.
      </>
    ),
  },
  {
    id: "objectifs",
    icon: <Target className="h-6 w-6 text-purple-600" />,
    title: "Objectifs pour les Membres",
    text: (
      <>
        Que vous cherchiez à améliorer votre forme physique, à apprendre un
        nouvel art martial, ou à vous préparer pour la{" "}
        <strong>compétition</strong>, vous trouverez chez nous un cadre
        accueillant et stimulant.
      </>
    ),
  },
];

const AboutUs = () => {
  const router = useRouter();

  return (
    <section
      id="aboutUs"
      className="relative flex min-h-screen flex-col justify-center bg-white"
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-[#b0181c] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-5 py-20 xl:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold uppercase lg:text-5xl">
              À propos de <span className="text-red-200">nous</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-red-100 lg:text-xl">
              Bienvenue chez <strong>Ground Elite Academy</strong>, votre
              destination pour la lutte et le grappling à Nice, située au 10
              Boulevard Comte de Falicon.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                onClick={() => router.push("/contact-us")}
                size="xl"
                className="bg-white font-semibold text-red-700 hover:bg-red-50 lg:text-base"
              >
                <Phone className="mr-2 h-5 w-5 lg:h-8 lg:w-8" />
                Contactez-nous
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-red-700 lg:text-base"
              >
                <a
                  className="flex items-center"
                  href="https://maps.app.goo.gl/Yix5K5dRhGv8wRuG7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5 lg:h-8 lg:w-8" />
                  Voir sur la carte
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Content Cards */}
          <div className="space-y-8 lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {sections.map((section) => (
                <Card
                  key={section.id}
                  className="group border-0 bg-gradient-to-br from-white to-slate-50 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center">
                      <div
                        className={`mr-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${section.id === "entraineur" ? "bg-red-100 group-hover:bg-red-200" : section.id === "philosophie" ? "bg-blue-100 group-hover:bg-blue-200" : section.id === "enfants" ? "bg-green-100 group-hover:bg-green-200" : section.id === "objectifs" ? "bg-purple-100 group-hover:bg-purple-200" : ""}`}
                      >
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {section.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-slate-600">
                      {section.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <Card className="border-0 bg-gradient-to-r from-red-700 to-[#b0181c] text-white shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-bold">
                    Prêt à commencer votre parcours ?
                  </h3>
                  <p className="mb-6 text-lg text-red-100">
                    Rejoignez notre communauté et découvrez l'excellence du
                    grappling à Nice.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button
                      onClick={() => router.push("/contact-us")}
                      size="xl"
                      className="bg-white font-semibold text-red-700 hover:bg-red-50 lg:text-base"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Contactez-nous
                    </Button>
                    <Button
                      size="xl"
                      className="border border-white bg-transparent text-white hover:bg-white hover:text-red-700 lg:text-base"
                    >
                      <a
                        className="flex items-center"
                        href="/fiche_d_inscription_gea.pdf"
                        download
                      >
                        <FileUp className="mr-2 h-5 w-5" />
                        Fiche d'inscription
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Info Sidebar */}
          <div className="space-y-6">
            {/* Location Card */}
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-bold text-slate-800">
                    Notre Localisation
                  </h3>
                </div>
                <p className="mb-4 text-slate-600">
                  10 Boulevard Comte de Falicon
                  <br />
                  06100 Nice, France
                </p>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Lun & Jeu : 17h30 - 20h30</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Mercredi : 19h00 - 20h30</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Samedi : 15h30 - 17h30</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden border-0 bg-black p-0 shadow-lg">
              <iframe
                className="aspect-square w-full rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d720.7930058021581!2d7.255961548404546!3d43.72775315859408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdcb15e420b485%3A0xa6165b4703441340!2sGround%20Elite%20Academy!5e0!3m2!1sfr!2sfr!4v1752611474769!5m2!1sfr!2sfr"
                loading="lazy"
                title="Emplacement de Ground Elite Academy - GEA sur Google maps"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-slate-800">
                  Pourquoi nous choisir ?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                    <span className="text-slate-600">
                      Entraineurs professionnels
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                    <span className="text-slate-600">Ambiance conviviale</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                    <span className="text-slate-600">
                      Tous niveaux acceptés
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                    <span className="text-slate-600">
                      Cours enfants et adultes
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
