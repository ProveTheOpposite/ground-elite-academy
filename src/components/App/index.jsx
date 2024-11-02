// hook
import { useEffect, useState } from "react";
// react router dom
import { Route, Routes } from "react-router-dom";
// atom
// javascript
import { initEmailJs } from "src/assets/javascript/emailJs/emailJs";
// components
import { useSetRecoilState } from "recoil";
import ContactUs from "src/pages/ContactUs";
import Home from "src/pages/Home";
import PrivacyAndPolicy from "src/pages/PrivacyAndPolicy";
import TermsAndConditions from "src/pages/TermsAndConditions";
import { languageState } from "src/recoil";
import ErrorElement from "../../pages/ErrorElement";
import Footer from "../Footer";
import Header from "../Header";
import ChangeLanguage from "../Header/components/ChangeLanguage";
import Modal from "../Modal";
import ScrollToTop from "../ScrollToTop";

// Table of routes with paths and components
const ROUTES = [
  { path: "/", element: <Home /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
  { path: "/privacy-policy", element: <PrivacyAndPolicy /> },
  { path: "*", element: <ErrorElement /> },
];

const App = () => {
  // state to handle opening of modals
  const [openModal, setOpenModal] = useState(null);
  // state to set the natif language of the browser of the user
  const setLanguage = useSetRecoilState(languageState);

  // function to open/close a modal with a type
  const toggleModal = (modalType) => setOpenModal(modalType);

  useEffect(() => {
    initEmailJs();
  }, []);

  // effect to set the language according to the language of the user
  useEffect(() => {
    const lang = navigator.language;
    setLanguage(lang.slice(0, 2));
  }, [setLanguage]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header openChangeLanguageModal={() => toggleModal("changeLanguage")} />

      {openModal === "changeLanguage" && (
        <Modal
          onClick={() => toggleModal(null)}
          className="bg-modal-change-language"
        >
          <ChangeLanguage closeModal={() => toggleModal(null)} />
        </Modal>
      )}

      <ScrollToTop />

      <main className="flex flex-1 flex-col overflow-y-auto">
        <Routes>
          {ROUTES.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
