"use client";

import { lazy, Suspense, useRef, useState } from "react";

import "flatpickr/dist/flatpickr.min.css";
import { French } from "flatpickr/dist/l10n/fr";
import Flatpickr from "react-flatpickr";

import DecorativeSvg from "@/components/DecorativeSvg";
import LoadingSuspense from "../../LoadingSuspense";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { AlertTriangle, Clock } from "lucide-react";

// lazy loading
const Calendar = lazy(() => import("./components/Calendar"));

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const calendarRef = useRef(null);

  // function to allow to go on a date
  const handleDateChange = (date) => {
    const selectedDate = new Date(date[0]);
    setSelectedDate(selectedDate);

    const calendarApi = calendarRef.current.getApi();

    const utcDate = new Date(
      Date.UTC(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      ),
    );
    calendarApi.gotoDate(utcDate);
  };

  return (
    <section
      id="schedule"
      className="relative flex min-h-screen flex-col justify-center bg-white px-5 py-20 lg:py-24"
    >
      <div className="z-10 flex flex-col gap-10 md:mx-auto md:w-[90%] lg:w-[95%] 2xl:w-[1430px]">
        <Card className="bg-[#fbfcfd]/80 shadow-lg">
          <CardHeader className="pb-4">
            <h2 className="mb-5 text-4xl font-bold uppercase lg:text-5xl">
              Nos <span className="text-[#b0181c]">horaires</span>
            </h2>

            <div className="lg:flex lg:items-start lg:justify-between">
              <div className="mb-7 flex flex-col gap-5 lg:mb-0 lg:flex-[0.75]">
                <p className="text-lg text-gray-600">
                  Les entraînements ont lieu le lundi, mercredi et jeudi. Les
                  cours de lutte et de grappling s'alternent chaque semaine pour
                  les adultes. Consultez régulièrement notre planning pour être
                  au courant des futurs changements.
                </p>

                <ul className="space-y-2 text-[15px]">
                  <li className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span className="font-medium">Lundi & Jeudi : </span> 18h30
                    - 20h30
                  </li>
                  <li className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span className="font-medium">Mercredi : </span> 19h00 -
                    20h30
                  </li>
                </ul>
              </div>

              <div className="relative lg:flex-[0.25] lg:pr-0">
                <div className="pl-3.5">
                  <svg
                    className="absolute top-[28%] h-4 w-4 text-gray-500 xl:top-[28%] dark:text-gray-400"
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
                  options={{ dateFormat: "Y-m-d", locale: French }}
                  placeholder="Sélectionner une date"
                  className="h-10 w-full rounded-xl border border-gray-300 pr-3.5 pl-10 shadow-md"
                />
              </div>
            </div>
          </CardHeader>
        </Card>

        <Alert className="border-red-200 bg-red-50/80 backdrop-blur-sm">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="flex text-red-800">
            <span className="font-medium">Important :</span> Le mercredi, les
            cours se déroulent au 63 Bd Gorbella, 06100 Nice, à la place de 10
            boulevard Comte de Falicon, 06100 Nice.
          </AlertDescription>
        </Alert>

        {/* <Card className="rounded-md border border-gray-200 bg-gray-50 text-gray-800">
          <CardHeader>
            <h3 className="text-lg font-semibold">
              Horaires des entraînements :
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <span className="font-medium">Lundi & Jeudi :</span> 18h30 -
                20h30
              </li>
              <li>
                <span className="font-medium">Mercredi :</span> 19h00 - 20h30
              </li>
            </ul>
          </CardContent>
        </Card> */}

        <Suspense fallback={<LoadingSuspense height={"650px"} />}>
          <Calendar calendarRef={calendarRef} />
        </Suspense>
      </div>

      <DecorativeSvg fillColor="#fff" />
    </section>
  );
};

export default Schedule;
