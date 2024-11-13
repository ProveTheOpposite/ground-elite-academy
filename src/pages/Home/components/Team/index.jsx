// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// components
import DecorativeSvg from "src/components/DecorativeSvg";
import TeamMember from "./TeamMember";
// assets
import { memo } from "react";
import { imageUrl } from "src/assets/images/imageList";
import translations from "src/language/translations";

const Team = () => {
  const language = useRecoilValue(languageState);

  return (
    <section
      id="team"
      className="relative flex min-h-screen flex-col bg-[#fbfcfd] px-5 py-20 xl:gap-y-10 xl:pt-24"
    >
      <div className="xl:basis-[88px]">
        <h2 className="mb-5 text-center text-3xl font-bold uppercase lg:text-4xl">
          {translations[language].home.team.title[0]}{" "}
          <span className="text-[#b0181c]">
            {translations[language].home.team.title[1]}
          </span>
        </h2>

        <p className="text-center text-lg text-gray-600 lg:mx-auto lg:w-[60%]">
          {translations[language].home.team.subTitle}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-y-16 md:mt-14 md:px-8 min-[1920px]:flex-1 min-[1920px]:flex-row min-[1920px]:justify-between min-[1920px]:gap-x-[200px] min-[1920px]:gap-y-0">
        {/* Nazim */}
        <TeamMember
          name="Nazim Djamalov"
          imageUrl={imageUrl.home.nazim}
          altText="Photo de Nazim Djamalov"
          textNazim={[
            <>
              {translations[language].home.team.nazim.textOne[0]}
              <strong>
                {translations[language].home.team.nazim.textOne[1]}
              </strong>
              {translations[language].home.team.nazim.textOne[2]}
              <strong>
                {translations[language].home.team.nazim.textOne[3]}
              </strong>
              {translations[language].home.team.nazim.textOne[4]}
            </>,
            <>
              {translations[language].home.team.nazim.textTwo[0]}
              <strong>
                {translations[language].home.team.nazim.textTwo[1]}
              </strong>
              {translations[language].home.team.nazim.textTwo[2]}
              <strong>
                {translations[language].home.team.nazim.textTwo[3]}
              </strong>
              {translations[language].home.team.nazim.textTwo[4]}
            </>,
          ]}
          icon1="fa-medal"
          icon2="fa-chalkboard-teacher"
        />

        {/* Gaetan */}
        <TeamMember
          name="Gaetan Houara"
          imageUrl={imageUrl.home.gaetan}
          altText="Photo de Gaetan Houara"
          textGaetan={[
            <>
              {translations[language].home.team.gaetan.textOne[0]}
              <strong>
                {translations[language].home.team.gaetan.textOne[1]}
              </strong>
              {translations[language].home.team.gaetan.textOne[2]}
              <strong>
                {translations[language].home.team.gaetan.textOne[3]}
              </strong>
              {translations[language].home.team.gaetan.textOne[4]}
              <strong>
                {translations[language].home.team.gaetan.textOne[5]}
              </strong>
              {translations[language].home.team.gaetan.textOne[6]}
            </>,
            <>
              {translations[language].home.team.gaetan.textTwo[0]}
              <strong>
                {translations[language].home.team.gaetan.textTwo[1]}
              </strong>
              {translations[language].home.team.gaetan.textTwo[2]}
              <strong>
                {translations[language].home.team.gaetan.textTwo[3]}
              </strong>
              {translations[language].home.team.gaetan.textTwo[4]}
            </>,
          ]}
          icon1="fa-user-tie"
          icon2="fa-dumbbell"
          align="right"
        />
      </div>

      <DecorativeSvg fillColor="#fbfcfd" />
    </section>
  );
};

export default memo(Team);
