import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Faq from "@/components/Home/Faq";
import RequestForInformations from "@/components/Home/RequestForInformations";
import Schedule from "@/components/Home/Schedule";
import Subscriptions from "@/components/Home/Subscriptions";
import Team from "@/components/Home/Team";

export default function HomePage() {
  return (
    <>
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
