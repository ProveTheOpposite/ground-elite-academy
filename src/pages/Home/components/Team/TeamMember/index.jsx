// components
import IconWrapper from "src/components/IconWrapper";
// prop types
import PropTypes from "prop-types";

const TeamMember = ({
  name,
  imageMobile,
  imageUrl,
  altText,
  textNazim,
  textGaetan,
  icon1,
  icon2,
  align = "left",
}) => {
  return (
    <div
      className={`3xl:flex ${align === "right" ? "3xl:flex-row-reverse" : ""} 3xl:items-center 3xl:gap-x-12`}
    >
      <figure className="flex">
        <img
          className="mx-auto w-[80%] min-[460px]:w-[330px] md:w-[450px] 3xl:w-[1000px]"
          src={window.innerWidth >= 1920 ? imageUrl : imageMobile}
          alt={altText}
        />
      </figure>

      <div>
        <h3
          className={`mt-5 text-center text-2xl font-bold 3xl:mt-0 3xl:text-${align} xl:text-3xl`}
        >
          {name}
        </h3>

        <div className="mt-5">
          <div
            className={`mb-10 ${align === "right" ? "3xl:items-end" : ""} min-[1000px]:mx-auto min-[1000px]:w-[820px] lg:mb-12 3xl:mb-16 3xl:w-auto 3xl:gap-y-3`}
          >
            <IconWrapper align={align} icon={icon1} />
            {name === "Nazim Djamalov" ? (
              <p className="text-justify text-gray-600 xl:text-lg 3xl:mb-7 3xl:mt-0 3xl:text-left">
                {textNazim[0]}
              </p>
            ) : (
              <p className="text-justify text-gray-600 xl:text-lg 3xl:mb-7 3xl:mt-0 3xl:text-right">
                {textGaetan[0]}
              </p>
            )}
          </div>

          <div
            className={`${align === "right" ? "3xl:items-end" : ""} min-[1000px]:mx-auto min-[1000px]:w-[820px] 3xl:w-auto 3xl:gap-y-3`}
          >
            <IconWrapper align={align} icon={icon2} />
            {name === "Nazim Djamalov" ? (
              <p className="text-justify text-gray-600 xl:text-lg 3xl:mt-0 3xl:text-left">
                {textNazim[1]}
              </p>
            ) : (
              <p className="text-justify text-gray-600 xl:text-lg 3xl:mt-0 3xl:text-right">
                {textGaetan[1]}
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
  imageMobile: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  textNazim: PropTypes.array,
  textGaetan: PropTypes.array,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  align: PropTypes.string,
};

export default TeamMember;
