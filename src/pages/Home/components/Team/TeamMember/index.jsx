// hook
import { useRecoilValue } from "recoil";
// components
import IconWrapper from "src/components/IconWrapper";
// atom
import { languageState } from "src/recoil";
// prop types
import PropTypes from "prop-types";

const TeamMember = ({
  name,
  imageUrl,
  altText,
  icon1,
  icon2,
  align = "left",
}) => {
  const language = useRecoilValue(languageState);

  return (
    <div
      className={`min-[1920px]:flex ${align === "right" ? "min-[1920px]:flex-row-reverse" : ""} min-[1920px]:items-center min-[1920px]:gap-x-12`}
    >
      <figure className="flex">
        <img
          className="mx-auto w-[80%] min-[460px]:w-[330px] md:w-[370px] min-[1920px]:w-[1000px]"
          src={imageUrl}
          alt={altText}
        />
      </figure>

      <div>
        <h3
          className={`mt-5 text-center text-2xl font-bold min-[1920px]:mt-0 min-[1920px]:text-${align} xl:text-3xl`}
        >
          {name}
        </h3>

        <div className="mt-5">
          <div
            className={`mb-10 ${align === "right" ? "min-[1920px]:items-end" : ""} min-[1000px]:mx-auto min-[1000px]:w-[820px] lg:mb-12 min-[1920px]:mb-16 min-[1920px]:w-auto min-[1920px]:gap-y-3`}
          >
            <IconWrapper align={align} icon={icon1} />
            {name === "Nazim Djamalov" ? (
              <p className="text-justify text-gray-600 xl:text-lg min-[1920px]:mb-7 min-[1920px]:mt-0 min-[1920px]:text-left">
                {language === "fr" ? (
                  <>
                    Nazim Djamalov,{" "}
                    <strong>plusieurs fois champion de France</strong> et ancien
                    membre de <strong>l&apos;équipe nationale</strong>, est un
                    entraîneur dont l&apos;expérience et le talent sont reconnus
                    au-delà des frontières.
                  </>
                ) : (
                  <>
                    Nazim Djamalov,{" "}
                    <strong>multiple-time French champion</strong> and former
                    member of the <strong>national team</strong>, is a coach
                    whose experience and talent are recognized beyond borders.
                  </>
                )}
              </p>
            ) : (
              <p className="text-justify text-gray-600 xl:text-lg min-[1920px]:mb-7 min-[1920px]:mt-0 min-[1920px]:text-right">
                {language === "fr" ? (
                  <>
                    <span>
                      Gaetan Houara,{" "}
                      <strong>
                        plusieurs fois champion d&apos;open de France
                      </strong>
                      , est un expert du <u>grappling</u> et de la <u>lutte</u>.
                      Il est reconnu pour sa maîtrise <strong>technique</strong>{" "}
                      et son sens <strong>stratégique</strong>, des qualités qui
                      en font un coach exceptionnel.
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      Gaetan Houara,{" "}
                      <strong>multiple-time French Open champion</strong>, is an
                      expert in <u>grappling</u> and <u>wrestling</u>. He is
                      renowned for his <strong>technical</strong> mastery and{" "}
                      <strong>strategic</strong> sense, qualities that make him
                      an exceptional coach.
                    </span>
                  </>
                )}
              </p>
            )}
          </div>

          <div
            className={`${align === "right" ? "min-[1920px]:items-end" : ""} min-[1000px]:mx-auto min-[1000px]:w-[820px] min-[1920px]:w-auto min-[1920px]:gap-y-3`}
          >
            <IconWrapper align={align} icon={icon2} />
            {name === "Nazim Djamalov" ? (
              <p className="text-justify text-gray-600 xl:text-lg min-[1920px]:mt-0 min-[1920px]:text-left">
                {language === "fr" ? (
                  <>
                    Avec sa <strong>créativité</strong> et sa{" "}
                    <strong>pédagogie</strong>, il vous guidera pas à pas pour
                    perfectionner votre technique et développer votre potentiel.
                    Que vous soyez débutant ou compétiteur, Nazim saura adapter
                    son enseignement à vos besoins pour vous faire progresser.
                  </>
                ) : (
                  <>
                    With his <strong>creativity</strong> and{" "}
                    <strong>teaching</strong> skills, he will guide you step by
                    step to perfect your technique and develop your potential.
                    Whether you are a beginner or a competitor, Nazim will adapt
                    his teaching to your needs to help you improve.
                  </>
                )}
              </p>
            ) : (
              <p className="text-justify text-gray-600 xl:text-lg min-[1920px]:mt-0 min-[1920px]:text-right">
                {language === "fr" ? (
                  <>
                    Son approche <strong>dynamique</strong> et{" "}
                    <strong>motivante</strong> vous poussera à donner le
                    meilleur de vous-même à chaque entraînement. Grâce à son
                    soutien, vous améliorerez vos compétences et atteindrez de
                    nouveaux sommets dans votre pratique.
                  </>
                ) : (
                  <>
                    His <strong>dynamic</strong> and <strong>motivating</strong>{" "}
                    approach will push you to give your best in every training
                    session. With his support, you will improve your skills and
                    reach new heights in your practice.
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  align: PropTypes.string,
};

export default TeamMember;
