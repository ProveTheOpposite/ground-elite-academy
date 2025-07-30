import { ChevronDown } from "lucide-react";

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left transition-colors hover:bg-slate-50/50"
      >
        <h3 className="pr-4 text-xl font-semibold text-slate-900">
          {question}
        </h3>

        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-4">
          <div className="border-t border-slate-100 pt-4">
            <p className="leading-relaxed text-slate-600">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
