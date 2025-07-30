import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = ({ align, icon }) => (
  <div
    className={`${align === "right" ? "min-[1920px]:float-right min-[1920px]:mr-0 min-[1920px]:ml-3" : ""} float-left mr-3 flex items-center justify-center rounded-[10px] bg-red-600/10 xl:mt-1.5`}
    style={{ width: "40px", height: "40px" }}
  >
    <span className="text-sm md:text-base">
      <FontAwesomeIcon icon={icon} className="text-red-600" />
    </span>
  </div>
);

export default IconWrapper;
