import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Calendar, Clock, Mail, MessageCircle } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import ScrollLink from "@/components/Header/ScrollLink";
import Link from "next/link";

export const metadata = {
  title: "Contactez-nous | Ground Elite Academy",
  description:
    "Notre équipe est là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais.",
  openGraph: {
    title: "Contactez-nous | Ground Elite Academy",
    description:
      "Notre équipe est là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais.",
  },
};

const ContactUsPage = () => {
  return (
    <div className="mt-[68px] flex flex-1 flex-col items-start justify-center gap-8 px-5 py-8 lg:flex-row lg:py-14 xl:mt-[78px]">
      <Card className="w-full shadow-xl lg:sticky lg:top-28 lg:max-w-[440px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <MessageCircle className="h-6 w-6 text-red-600" />
            Informations de contact
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4 rounded-lg border border-red-100 bg-red-50 p-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                <Mail className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-1 font-medium text-gray-900">Email</p>
              <p className="text-sm font-medium text-red-600">
                geanice934@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-1 font-medium text-gray-900">Délai de réponse</p>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Sous 24h ouvrées
              </Badge>
            </div>
          </div>

          <div className="flex items-start space-x-4 rounded-lg border border-green-100 bg-green-50 p-4">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600">
                <Calendar className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-1 font-medium text-gray-900">Disponibilité</p>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                7j/7 pour vous répondre
              </Badge>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="leading-relaxed text-gray-600">
              Notre équipe est là pour vous accompagner dans tous vos projets.
              N'hésitez pas à nous contacter pour toute question ou demande
              d'information.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full shadow-xl lg:max-w-2xl">
        <CardHeader className="space-y-4 pb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">
            Restons en contact
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Ou contactez-nous simplement à{" "}
            <a
              href="mailto:geanice934@gmail.com"
              className="font-medium text-red-600 transition-colors hover:text-red-700"
            >
              geanice934@gmail.com
            </a>
          </CardDescription>
          <CardDescription className="text-lg text-gray-600">
            Avant de nous contacter, vous pouvez consulter notre{" "}
            <ScrollLink
              id="faq"
              label="FAQ"
              className="text-blue-600 underline hover:no-underline"
            >
              FAQ
            </ScrollLink>{" "}
            pour répondre à vos questions. <br /> Sinon, utilisez notre
            formulaire de contact.
          </CardDescription>
        </CardHeader>

        <ContactForm />
      </Card>
    </div>
  );
};

export default ContactUsPage;
