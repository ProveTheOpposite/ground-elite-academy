// components
import IconWrapper from "src/components/IconWrapper";
// prop types
import PropTypes from "prop-types";

const TeamMember = ({
  name,
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
                {textNazim[0]}
              </p>
            ) : (
              <p className="text-justify text-gray-600 xl:text-lg min-[1920px]:mb-7 min-[1920px]:mt-0 min-[1920px]:text-right">
                {textGaetan[0]}
              </p>
            )}
          </div>

          <div
            className={`${align === "right" ? "min-[1920px]:items-end" : ""} min-[1000px]:mx-auto min-[1000px]:w-[820px] min-[1920px]:w-auto min-[1920px]:gap-y-3`}
          >
            <IconWrapper align={align} icon={icon2} />
            {name === "Nazim Djamalov" ? (
              <p className="text-justify text-gray-600 xl:text-lg min-[1920px]:mt-0 min-[1920px]:text-left">
                {textNazim[1]}
              </p>
            ) : (
              <p className="text-justify text-gray-600 xl:text-lg min-[1920px]:mt-0 min-[1920px]:text-right">
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
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  textNazim: PropTypes.array,
  textGaetan: PropTypes.array,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  align: PropTypes.string,
};

export default TeamMember;
