import logoFooter from "./footer/logo-white.png";
import englandFlag from "./header/england-flag.png";
import logoHeaderBlack from "./header/logo-black.png";
import logoHeaderWhite from "./header/logo-white.png";
import gaetanDesktop from "./home/gaetanHouara.png";
import nazimDesktop from "./home/nazimDjamalov.png";
import nazimMobile from "./home/nazim.png";
import gaetanMobile from "./home/gaetan.png";
// article 1
import gaetanCombatFinalisation from "./press/article1/combat-finalisation.mp4";
import gaetanCombat1 from "./press/article1/combat-image-1.jpg";
import gaetanCombat2 from "./press/article1/combat-image-2.jpg";
import gaetanCombat3 from "./press/article1/combat-image-3.jpg";
import gaetanCombatVideo from "./press/article1/gaetan-combat.mp4";
import gaetanVictory from "./press/article1/gaetan-victoire.jpg";
// article 2
import image1 from "./press/article2/image1.jpg";
import image10 from "./press/article2/image10.jpg";
import image2 from "./press/article2/image2.jpg";
import image3 from "./press/article2/image3.jpg";
import image4 from "./press/article2/image4.jpg";
import image5 from "./press/article2/image5.jpg";
import image6 from "./press/article2/image6.jpg";
import image7 from "./press/article2/image7.jpg";
import image8 from "./press/article2/image8.jpg";
import image9 from "./press/article2/image9.jpg";
import video from "./press/article2/video.mp4";

export const imageUrl = {
  header: {
    englandFlag,
    logoHeaderBlack,
    logoHeaderWhite,
  },

  home: {
    nazimMobile,
    gaetanMobile,
    nazimDesktop,
    gaetanDesktop,
  },

  press: {
    articleOne: {
      gaetanCombatVideo,
      gaetanCombatFinalisation,
      gaetanCombat1,
      gaetanCombat2,
      gaetanCombat3,
      gaetanVictory,
    },
    articleTwo: {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      video,
    },
  },

  footer: {
    logoFooter,
  },
};
