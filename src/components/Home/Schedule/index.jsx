"use client";

import { lazy, Suspense, useRef, useState } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import DecorativeSvg from "@/components/DecorativeSvg";
import LoadingSuspense from "../../LoadingSuspense";

import { AlertTriangle, ChevronDownIcon, Clock } from "lucide-react";

// lazy loading
const Calendar = lazy(() => import("./components/Calendar"));

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const calendarRef = useRef(null);

  // function to allow to go on a date
  const handleDateChange = (date) => {
    const selectedDate = new Date(date);
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
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="dateOfBirthAdherent"
                      className="text-muted-foreground mb-0 w-full justify-between font-normal"
                    >
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Sélectionnez une date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <CalendarUI
                      mode="single"
                      selected={selectedDate}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        handleDateChange(date);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
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
