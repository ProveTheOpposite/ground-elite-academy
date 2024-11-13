// hook
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// Flatpickr
import "flatpickr/dist/flatpickr.min.css";
import { English } from "flatpickr/dist/l10n/default";
import { French } from "flatpickr/dist/l10n/fr";
import Flatpickr from "react-flatpickr";
// atom
import { languageState } from "src/recoil";

// components
import DecorativeSvg from "src/components/DecorativeSvg";
import Calendar from "./components/Calendar";

// assets
import translations from "src/language/translations";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const language = useRecoilValue(languageState);

  const calendarRef = useRef(null);

  const locale = language === "fr" ? French : English;

  // function to allow to go on a date
  const handleDateChange = (date) => {
    setSelectedDate(date[0]);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(date[0]);
  };

  return (
    <section
      id="schedule"
      className="relative flex min-h-screen flex-col justify-center bg-white px-5 py-20"
    >
      <div className="z-10 md:mx-auto md:w-[90%] lg:w-[95%] xl:w-[1230px]">
        <h2 className="mb-5 text-3xl font-bold uppercase lg:text-4xl">
          {translations[language].home.schedule.title[0]}{" "}
          <span className="text-[#b0181c]">
            {translations[language].home.schedule.title[1]}
          </span>
        </h2>

        <div className="mb-7 lg:flex lg:items-start lg:justify-between">
          <h2 className="mb-7 text-lg text-gray-600 md:mb-5 lg:mb-0 lg:flex-[0.75] lg:pr-10">
            {translations[language].home.schedule.subTitle}
            <p className="mt-4 text-red-600">
              <i className="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
              {translations[language].home.schedule.warning}
            </p>
          </h2>

          <div className="relative lg:flex-[0.25]">
            <div className="pl-3.5">
              <svg
                className="absolute top-[32%] h-4 w-4 text-gray-500 xl:top-[32%] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>

            <Flatpickr
              value={selectedDate}
              onChange={handleDateChange}
              options={{ dateFormat: "Y-m-d", locale }}
              placeholder={
                language === "fr" ? "Sélectionner une date" : "Select date"
              }
              className="w-full min-w-full rounded-xl border border-gray-300 p-2.5 pl-10 shadow-md"
            />
          </div>
        </div>

        <Calendar calendarRef={calendarRef} />
      </div>

      <DecorativeSvg fillColor="#fff" />
    </section>
  );
};

export default Schedule;
