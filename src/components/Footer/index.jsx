// hook
import { useRecoilValue } from "recoil";
// react  router dom
import { Link } from "react-router-dom";
// atom
import { languageState } from "src/recoil";
// component
import Button from "../Button";
import ContactItem from "./ContactItem";
import FooterLink from "./FooterLink";
// assets
import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

const Footer = () => {
  const language = useRecoilValue(languageState);

  return (
    <footer className="flex bg-gray-800 px-5 py-8 text-slate-300 sm:px-7 lg:justify-center lg:py-16">
      <div className="flex w-full flex-col sm:grid sm:grid-cols-2 sm:grid-rows-[1fr_auto] sm:gap-x-4 sm:gap-y-8 md:gap-10 lg:w-[95%] lg:grid-cols-3 lg:grid-rows-1 2xl:w-[1200px]">
        <div className="mb-8 flex flex-col gap-y-6 sm:mb-0 sm:items-start sm:pl-2 lg:pl-0 xl:flex-wrap xl:content-start">
          <Link to="/">
            <img
              className="w-[110px] md:w-[120px]"
              src={imageUrl.footer.logoFooter}
              alt="Logo de Ground Elite Academy"
            />
          </Link>

          <span className="">&copy; 2025 Ground Elite Academy - GEA Nice</span>

          <Link className="rounded-full" to="/contact-us">
            <Button className="bg-[#b0181c] text-white">
              {translations[language].footer.btnContactUs}
            </Button>
          </Link>
        </div>

        {/* About Us */}
        <div className="mb-10 flex flex-col gap-y-5 sm:mb-0 sm:flex-wrap sm:content-center sm:justify-end lg:justify-start">
          <h3 className="mb-1 text-xl font-bold uppercase">
            {translations[language].footer.aboutUs}
          </h3>

          <FooterLink to="/">{translations[language].footer.home}</FooterLink>

          <FooterLink to="/contact-us">
            {translations[language].footer.contactUs}
          </FooterLink>

          <FooterLink to="/privacy-policy">
            {translations[language].footer.privacyAndPolicy}
          </FooterLink>

          <FooterLink to="/terms-and-conditions">
            {translations[language].footer.termsAndConditions}
          </FooterLink>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-y-4 sm:col-span-2 lg:col-auto lg:justify-center">
          <h3 className="mb-1 text-xl font-bold uppercase">Contact</h3>

          <div className="flex flex-col gap-y-5 sm:grid sm:grid-cols-2 sm:grid-rows-3 lg:flex">
            <ContactItem
              icon="fa-brands fa-instagram"
              link="https://www.instagram.com/geanice06/"
            >
              Instagram
            </ContactItem>

            <ContactItem
              className="justify-self-center"
              icon="fa-solid fa-envelope"
              link="mailto:geanice934@gmail.com"
            >
              geanice934@gmail.com
            </ContactItem>

            <ContactItem icon="fa-solid fa-phone" link="tel:0621786274">
              06 21 78 62 74
            </ContactItem>

            <a
              className="justify-self-center hover:underline"
              target="_blank"
              href="/src/assets/pdfs/fiche_d_inscription_gea.pdf"
              download
            >
              <i className="fa-solid fa-file-arrow-down mr-4"></i>
              Fiche d&apos;inscription (PDF)
            </a>

            <ContactItem icon="fa-solid fa-location-dot">
              10 Bd Comte de Falicon, 06100 Nice
            </ContactItem>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
