"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import {
  Award,
  ChevronLeft,
  ChevronRight,
  Link as LinkIcon,
} from "lucide-react";

import { imageUrl } from "@/assets/images/imageList";

const trainers = [
  {
    id: 1,
    name: "Nazim Djamalov",
    title: "Entraîneur de Lutte",
    link: "https://www.instagram.com/naazaaa06/",
    image: imageUrl.home.nazimMobile,
    imagePlaceholder: "/image-placeholder.svg",
    achievements: [
      "Plusieurs fois champion de France",
      "Ancien membre de l'équipe nationale",
      "Expert en lutte libre",
    ],
    specialties: ["Créativité", "Pédagogie", "Technique"],
    experience: "15+ ans",
    description:
      "Nazim Djamalov, plusieurs fois champion de France et ancien membre de l'équipe nationale, est un entraîneur dont l'expérience et le talent sont reconnus au-delà des frontières.",
    fullDescription:
      "Avec sa créativité et sa pédagogie, il vous guidera pas à pas pour perfectionner votre technique et développer votre potentiel. Que vous soyez débutant ou compétiteur, Nazim saura adapter son enseignement à vos besoins pour vous faire progresser.",
    stats: {
      students: "100+",
      championships: "5+",
      years: "15",
    },
  },
  {
    id: 2,
    name: "Gaetan Houara",
    title: "Entraîneur de Grappling",
    link: "https://www.instagram.com/gh__bjj/",
    image: imageUrl.home.gaetanMobile,
    imagePlaceholder: "/image-placeholder.svg",
    achievements: [
      "Multiple Champion de France",
      "Vainqueur de la Coupe de France",
      "Expert en grappling et lutte",
    ],
    specialties: ["Grappling", "Lutte", "Stratégie"],
    experience: "7+ ans",
    description:
      "Gaetan Houara, multiple champion de France et plusieurs fois champion d'Open de France, est un expert du grappling et de la lutte. Il est reconnu pour sa maîtrise technique et son sens stratégique.",
    fullDescription:
      "Son approche dynamique et motivante vous poussera à donner le meilleur de vous-même à chaque entraînement. Grâce à son soutien, vous améliorerez vos compétences et atteindrez de nouveaux sommets dans votre pratique.",
    stats: {
      students: "100+",
      championships: "5+",
      years: "7",
    },
  },
];

const TeamMember = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(0);

  const nextTrainer = () => {
    setSelectedTrainer((prev) => (prev + 1) % trainers.length);
  };

  const prevTrainer = () => {
    setSelectedTrainer(
      (prev) => (prev - 1 + trainers.length) % trainers.length,
    );
  };

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-2">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className={`${index % 2 === 1 ? "lg:order-1" : ""} `}
            >
              <Card className="overflow-hidden border-0 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative">
                  <Image
                    src={trainer.image || trainer.imagePlaceholder}
                    alt={trainer.name}
                    width={400}
                    height={400}
                    className="h-96 w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute right-4 bottom-4 left-4">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          className="border-0 bg-red-600 text-white"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="mb-1 flex items-center gap-3 text-2xl font-bold text-slate-900">
                        {trainer.name}
                        <Link
                          href={trainer.link}
                          target="_blank"
                          className="text-blue-600"
                        >
                          <LinkIcon width={18} height={18} />
                        </Link>
                      </h3>
                      <p className="font-semibold text-red-600">
                        {trainer.title}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">
                        {trainer.experience}
                      </div>
                      <div className="text-sm text-slate-500">d'expérience</div>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    {trainer.description}
                  </p>
                  <p className="mb-6 leading-relaxed text-slate-600">
                    {trainer.fullDescription}
                  </p>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-slate-50 p-3 text-center">
                      <div className="text-xl font-bold text-slate-900">
                        {trainer.stats.students}
                      </div>
                      <div className="text-sm text-slate-500">Élèves</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-3 text-center">
                      <div className="text-xl font-bold text-slate-900">
                        {trainer.stats.championships}
                      </div>
                      <div className="text-sm text-slate-500">Titres</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-3 text-center">
                      <div className="text-xl font-bold text-slate-900">
                        {trainer.stats.years}
                      </div>
                      <div className="text-sm text-slate-500">Années</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {trainer.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 flex-shrink-0 text-red-600" />
                        <span className="text-sm text-slate-600">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <Card className="overflow-hidden border-0 bg-white shadow-2xl">
              <div className="relative">
                <Image
                  src={trainers[selectedTrainer].image || "/placeholder.svg"}
                  alt={trainers[selectedTrainer].name}
                  width={400}
                  height={400}
                  className="h-80 w-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute right-4 bottom-4 left-4">
                  <div className="flex flex-wrap gap-2">
                    {trainers[selectedTrainer].specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        className="border-0 bg-red-600 text-white"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="mb-1 flex items-center gap-3 text-2xl font-bold text-slate-900">
                      {trainers[selectedTrainer].name}
                      <Link
                        href={trainers[selectedTrainer].link}
                        target="_blank"
                        className="text-blue-600"
                      >
                        <LinkIcon width={18} height={18} />
                      </Link>
                    </h3>
                    <p className="font-semibold text-red-600">
                      {trainers[selectedTrainer].title}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-900">
                      {trainers[selectedTrainer].experience}
                    </div>
                    <div className="text-sm text-slate-500">d'expérience</div>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-slate-600">
                  {trainers[selectedTrainer].description}
                </p>
                <p className="mb-6 leading-relaxed text-slate-600">
                  {trainers[selectedTrainer].fullDescription}
                </p>

                <div className="mb-6 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                    <div className="text-xl font-bold text-slate-900">
                      {trainers[selectedTrainer].stats.students}
                    </div>
                    <div className="text-sm text-slate-500">Élèves</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                    <div className="text-xl font-bold text-slate-900">
                      {trainers[selectedTrainer].stats.championships}
                    </div>
                    <div className="text-sm text-slate-500">Titres</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3 text-center">
                    <div className="text-xl font-bold text-slate-900">
                      {trainers[selectedTrainer].stats.years}
                    </div>
                    <div className="text-sm text-slate-500">Années</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {trainers[selectedTrainer].achievements.map(
                    (achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 flex-shrink-0 text-red-600" />
                        <span className="text-sm text-slate-600">
                          {achievement}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTrainer}
              className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6 text-slate-700" />
            </button>
            <button
              onClick={nextTrainer}
              className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronRight className="h-6 w-6 text-slate-700" />
            </button>

            {/* Dots Indicator */}
            <div className="mt-6 flex justify-center space-x-2">
              {trainers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTrainer(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === selectedTrainer ? "bg-red-600" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
