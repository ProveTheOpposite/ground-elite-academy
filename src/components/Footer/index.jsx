import { imageUrl } from "@/assets/images/imageList";

import Image from "next/image";
import Link from "next/link";

import ContactItem from "./components/ContactItem";
import FooterLink from "./components/FooterLink";

import {
  Building2,
  FileUp,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 min-[890px]:grid-cols-4">
          <div className="col-span-1 min-[890px]:col-span-2">
            <Link href="/">
              <Image
                width={110}
                className="w-[110px] md:w-[120px]"
                src={imageUrl.footer.logoWhite}
                alt="Logo de Ground Elite Academy"
              />
            </Link>

            <p className="mt-2 mb-6 max-w-md text-slate-400">
              Ground Elite Academy, nouveau club de lutte et grappling à Nice,
              ouvert récemment avec Nazim et Gaetan comme entraineurs.
              Rejoignez-nous !
            </p>

            <div className="flex items-center space-x-2 text-slate-400">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Nice, France</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold uppercase">
              À propos de nous
            </h3>
            <div className="flex flex-col space-y-4 text-slate-400">
              <FooterLink href="/">Accueil</FooterLink>

              <FooterLink href="/blog">Blog</FooterLink>

              <FooterLink href="/contact-us">Contactez-nous</FooterLink>

              <FooterLink href="/privacy-policy">
                Politique de confidentialité
              </FooterLink>

              <FooterLink href="/terms-and-conditions">
                Termes et Conditions
              </FooterLink>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold uppercase">Contact</h3>
            <div className="flex flex-col space-y-4 text-slate-400">
              <ContactItem icon={<Building2 width={18} height={18} />}>
                Ground Elite Academy
              </ContactItem>

              <ContactItem
                icon={
                  <MapPin width={18} height={18} className="min-w-[18px]" />
                }
              >
                10 Bd Comte de Falicon, 06100 Nice
              </ContactItem>

              <ContactItem
                icon={<Phone width={18} height={18} />}
                link="tel:0621786274"
              >
                06 21 78 62 74
              </ContactItem>

              <ContactItem
                icon={<Mail width={18} height={18} className="min-w-[18px]" />}
                link="mailto:geanice934@gmail.com"
              >
                geanice934@gmail.com
              </ContactItem>

              <ContactItem
                icon={<Instagram width={18} height={18} />}
                link="https://www.instagram.com/geanice06/"
              >
                @geanice06
              </ContactItem>

              <ContactItem
                icon={<FileUp width={18} height={18} />}
                link="/fiche_d_inscription_gea.pdf"
                download={true}
              >
                Fiche d&apos;inscription (PDF)
              </ContactItem>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 Ground Elite Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
