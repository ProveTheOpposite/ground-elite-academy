// hooks
import { useEffect, useRef, useState } from "react";
// Props validation
import PropTypes from "prop-types";

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  const [maxHeight, setMaxHeight] = useState(0);

  const contentRef = useRef(null);

  // effect to open/close an accordion
  useEffect(() => {
    if (isOpen) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-white px-4 py-5 transition-all lg:px-6 2xl:px-8 2xl:py-6`}
    >
      <button
        onClick={onToggle}
        className="outline-hidden group flex items-center justify-between gap-x-3"
      >
        <h3 className="text-left text-xl font-bold text-[#333030] hover:underline lg:text-2xl">
          {question}
        </h3>

        {isOpen ? (
          <i
            className={`fa-solid fa-minus inline-flex! h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-[#333030] p-2.5 transition-all group-hover:bg-[#333030] group-hover:text-white ${isOpen ? "rotate-180" : ""}`}
          ></i>
        ) : (
          <i
            className={`fa-solid fa-plus inline-flex! h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-[#333030] p-2.5 transition-all group-hover:bg-[#333030] group-hover:text-white ${isOpen ? "rotate-180" : ""}`}
          ></i>
        )}
      </button>

      <div
        ref={contentRef}
        className={`${isOpen ? "mt-5" : ""} overflow-hidden transition-all duration-200 ease-in-out`}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <p className="text-base text-zinc-600 md:text-lg">{answer}</p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Accordion;
