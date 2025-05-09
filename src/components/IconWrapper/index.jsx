// Props validation
import PropTypes from "prop-types";

const IconWrapper = ({ align, icon }) => (
  <div
    className={`${align === "right" ? "min-[1920px]:float-right min-[1920px]:ml-3 min-[1920px]:mr-0" : ""} float-left mr-3 flex items-center justify-center rounded-[10px] bg-red-600/10 xl:mt-1.5`}
    style={{ width: "40px", height: "40px" }}
  >
    <span className="text-sm md:text-base">
      <i className={`fa-solid ${icon} text-red-600`}></i>
    </span>
  </div>
);

IconWrapper.propTypes = {
  icon: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};

export default IconWrapper;
