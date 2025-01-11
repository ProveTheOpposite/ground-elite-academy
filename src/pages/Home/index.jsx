// react helmet
import { Helmet } from "react-helmet-async";
// components
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Rates from "./components/Rates";
import RequestForInformations from "./components/RequestForInformations";
import Schedule from "./components/Schedule";
import Team from "./components/Team";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Ground Elite Academy - Club de lutte et grappling à Nice |
          Rejoignez-nous !
        </title>
        <meta
          name="description"
          content="Ground Elite Academy, nouveau club de lutte et grappling à Nice, ouvert récemment avec Nazim et Gaetan comme entraineurs. Rejoignez-nous !"
        />
      </Helmet>

      <Banner />
      <AboutUs />
      <Team />
      <Schedule />
      <Rates />
      <Faq />
      <RequestForInformations />
    </>
  );
};

export default Home;
