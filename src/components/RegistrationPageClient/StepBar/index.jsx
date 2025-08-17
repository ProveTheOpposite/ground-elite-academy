import { useAtomValue } from "jotai";

import { currentStepAtom } from "@/state/atoms/currentStep";

import { CheckCircle } from "lucide-react";

const StepBar = ({ steps }) => {
  const currentStep = useAtomValue(currentStepAtom);

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between gap-x-4">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                currentStep > step.id
                  ? "border-green-500 bg-green-500 text-white"
                  : currentStep === step.id
                    ? "border-[#b0181c] bg-[#b0181c] text-white"
                    : "border-gray-300 bg-white text-gray-400"
              }`}
            >
              {currentStep > step.id ? (
                <CheckCircle className="h-6 w-6" />
              ) : (
                <step.icon className="h-6 w-6" />
              )}
            </div>

            <h2
              className={`mt-2 text-center font-semibold sm:text-lg ${
                currentStep >= step.id ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {step.title}
            </h2>
            <p className="hidden text-sm text-gray-500 sm:block">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-muted h-1.5 w-full rounded-full">
        <div
          className="h-1.5 rounded-full bg-[#b0181c] transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default StepBar;
