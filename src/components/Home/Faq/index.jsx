"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Mail, Phone } from "lucide-react";

import Courses from "./components/Courses";
import General from "./components/General";
import NewMembers from "./components/NewMembers";

import { scrollToElement } from "@/utils/scrollToElement";

const questions = [
  [
    {
      question: "Quelles sont les disciplines enseignées dans votre club ?",
      answer: "Nous enseignons la lutte libre et le grappling.",
      indexQuestion: 0,
    },
    {
      question: "Quels sont les horaires de votre club ?",
      answer: (
        <>
          Les horaires du club sont disponibles{" "}
          <span
            onClick={() => scrollToElement("schedule")}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            ici
          </span>
          .
        </>
      ),
      indexQuestion: 1,
    },
    {
      question: "Quels sont les frais d'adhésion et d'abonnement ?",
      answer: (
        <>
          Les frais d'adhésion et d'abonnement sont disponibles{" "}
          <span
            onClick={() => scrollToElement("subscriptions")}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            ici
          </span>
          .
        </>
      ),
      indexQuestion: 2,
    },
    {
      question: "Offrez-vous une séance d'essai gratuite ?",
      answer:
        "Oui, nous offrons une séance d'essai gratuite pour les deux disciplines.",
      indexQuestion: 3,
    },
    {
      question: "Quels sont vos moyens de paiements ?",
      answer:
        "Nous acceptons les paiements par chèque, espèces, pass sport et coupon sport.",
      indexQuestion: 4,
    },
  ],
  [
    {
      question: "Comment puis-je m'inscrire ?",
      answer:
        "Pour s'inscrire, il suffit de suivre les étapes suivantes : téléchargez et imprimez la fiche d'inscription disponible en bas de cette page, puis remplissez-la soigneusement. Enfin, présentez-vous au club pour régler l'abonnement correspondant à votre formule (adulte ou enfant). N'hésitez pas à nous contacter si vous avez des questions.",
      indexQuestion: 0,
    },
    {
      question:
        "Dois-je avoir une expérience préalable pour rejoindre le club ?",
      answer:
        "Non, si vous débutez les sports de combat ou même dans le sport en général, vous êtes tout de même la bienvenu chez nous. Il n'est jamais trop tard pour apprendre un sport de combat comme la lutte et le grappling.",
      indexQuestion: 1,
    },
    {
      question: "Quels équipements sont nécessaires pour commencer ?",
      answer:
        "Des chaussures de lutte sont conseillés, mis à part cela, rien n'est nécessaire excepté votre détermination 😉.",
      indexQuestion: 2,
    },
    {
      question: "Proposez-vous des cours pour les débutants ?",
      answer:
        "Oui, les débutants sont les bienvenus à la Ground Elite Academy. Nos cours sont là pour que vous puissiez progresser pour devenir plus fort que vous êtes actuellement, quel que soit votre niveau initial. Cependant, il est important de noter que nous avançons progressivement dans les techniques, et les entraînements deviennent de plus en plus intensifs avec le temps. Cela vous permettra de développer vos compétences à votre rythme tout en relevant des défis adaptés à votre évolution. Nous sommes là pour vous accompagner dans votre apprentissage et votre progression, que vous débutiez ou que vous ayez déjà une expéience préalable.",
      indexQuestion: 3,
    },
    {
      question:
        "Quels sont les avantages de rejoindre un club de lutte et grappling ?",
      answer:
        "La pratique de la lutte et du grappling est bénéfique pour tout le monde, peu importe l'âge ou le sexe, en raison des nombreux avantages physiques, mentaux et sociaux qu'ils apportent. Ces sports permettent un développement physique complet, en améliorant la force, l'endurance, la flexibilité et la coordination. Que vous soyez enfant ou adulte, la lutte et le grappling renforcent l'ensemble du corps tout en offrant une excellente condition cardiovasculaire.",
      indexQuestion: 4,
    },
  ],
  [
    {
      question: "Comment les cours sont-ils structurés ?",
      answer:
        "Les cours sont structurés de la façon suivante : échauffement, technique, sparring. Chacune de ces parties peuvent durées plus longtemps que d'autres.",
      indexQuestion: 0,
    },
    {
      question: "Combien de temps dure une séance d'entraînement ?",
      answer:
        "Une séance d'entraînement dure une 1h pour les enfants et 2h pour les adultes.",
      indexQuestion: 1,
    },
    {
      question: "Les cours sont-ils mixtes ou séparés par sexe ?",
      answer:
        "La plupart de nos cours sont mixtes, favorisant un environnement d'entraînement dynamique et inclusif.",
      indexQuestion: 2,
    },
    {
      question:
        "Proposez-vous des cours particuliers ou des entraînements en petit groupe ?",
      answer:
        "Pour le moment, nous ne proposons pas de cours particuliers, seulement des entraînements d'un seul groupe.",
      indexQuestion: 3,
    },
  ],
];

const Faq = () => {
  // state to display the different categories
  const [selectedCategory, setSelectedCategory] = useState("general");

  const router = useRouter();

  const componentMap = {
    general: <General questions={questions[0]} />,
    nouveaux: <NewMembers questions={questions[1]} />,
    cours: <Courses questions={questions[2]} />,
  };

  const renderContent = () => componentMap[selectedCategory] || <General />;

  const btnsNav = [
    { key: "general", label: "Général", count: questions[0].length },
    { key: "nouveaux", label: "Nouveaux", count: questions[1].length },
    { key: "cours", label: "Cours", count: questions[2].length },
  ];

  return (
    <section
      id="faq"
      className="relative flex min-h-screen flex-col justify-center bg-white px-5 py-12"
    >
      <div className="z-10 mb-12 text-center">
        <Badge
          variant="secondary"
          className="mb-4 border-red-200 bg-red-50 text-red-700"
        >
          FAQs
        </Badge>
        <h2 className="mb-6 text-4xl font-bold text-slate-900 uppercase lg:text-5xl">
          Foire aux <span className="text-[#b0181c]">questions</span>
        </h2>
        <p className="text-lg leading-relaxed text-slate-600 md:mx-auto md:w-[650px]">
          Vous trouverez ici les réponses à vos questions. Si, malgré cela, vous
          ne trouvez pas la réponse que vous cherchez ou que vous avez une autre
          question,{" "}
          <Link
            className="font-bold text-[#b0181c] underline hover:no-underline"
            href="/contact-us"
          >
            contactez-nous
          </Link>
          .
        </p>
      </div>

      <div className="z-10 mb-10 flex flex-col justify-center gap-5 font-bold md:mb-12 md:flex-row">
        {btnsNav.map((btn) => (
          <button
            key={btn.key}
            onClick={() => setSelectedCategory(btn.key)}
            className={`flex items-center justify-center gap-2 space-x-2 rounded-full px-6 py-3 font-medium transition-all md:w-[160px] ${
              selectedCategory === btn.key
                ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {btn.label}
            <Badge
              variant="secondary"
              className={`text-xs ${
                selectedCategory === btn.key
                  ? "border-white/20 bg-white/20 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {btn.count}
            </Badge>
          </button>
        ))}
      </div>

      <div className="z-20 lg:mx-auto lg:w-[900px] 2xl:w-[1100px]">
        {renderContent()}
      </div>

      {/* Contact CTA */}
      <div className="z-20 mt-16 flex items-center justify-center">
        <div className="rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 to-red-50/50 p-8 text-center lg:w-[800px]">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="mx-auto mb-6 max-w-[450px] text-slate-600">
            Notre équipe est là pour vous aider. Contactez-nous et nous vous
            répondrons dans les plus brefs délais.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+33612345678"
              className="flex items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <Phone className="mr-2 h-4 w-4" />
              Nous appeler
            </a>

            <Button
              onClick={() => router.push("/contact-us")}
              variant="outline"
              className="border-red-200 bg-transparent text-sm text-red-700 hover:bg-red-50"
            >
              <Mail className="h-4 w-4" />
              Nous écrire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
