"use client";

import { useEffect, useState } from "react";

import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Faq from "@/components/Home/Faq";
import PopupNewDomain from "@/components/Home/PopupNewDomain";
import RequestForInformations from "@/components/Home/RequestForInformations";
import Schedule from "@/components/Home/Schedule";
import Subscriptions from "@/components/Home/Subscriptions";
import Team from "@/components/Home/Team";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasClosedPopup = localStorage.getItem("domain-popup-closed");

    setShowPopup(hasClosedPopup !== "true");
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem("domain-popup-closed", "true");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <PopupNewDomain onClose={handleClosePopup} />}
      <Banner />
      <AboutUs />
      <Team />
      <Schedule />
      <Subscriptions />
      <Faq />
      <RequestForInformations />
    </>
  );
}
