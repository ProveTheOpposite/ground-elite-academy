import logoFooter from "./footer/logo-white.png";
import englandFlag from "./header/england-flag.png";
import logoHeaderBlack from "./header/logo-black.png";
import logoHeaderWhite from "./header/logo-white.png";
import gaetan from "./home/gaetanHouara.png";
import nazim from "./home/nazimDjamalov.png";
// article 1
import gaetanCombatFinalisation from "./press/article1/combat-finalisation.mp4";
import gaetanCombat1 from "./press/article1/combat-image-1.jpg";
import gaetanCombat2 from "./press/article1/combat-image-2.jpg";
import gaetanCombat3 from "./press/article1/combat-image-3.jpg";
import gaetanCombatVideo from "./press/article1/gaetan-combat.mp4";
import gaetanVictory from "./press/article1/gaetan-victoire.jpg";

export const imageUrl = {
  header: {
    englandFlag,
    logoHeaderBlack,
    logoHeaderWhite,
  },

  home: {
    nazim,
    gaetan,
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
  },

  footer: {
    logoFooter,
  },
};
