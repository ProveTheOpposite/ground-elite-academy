import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useScreenSize } from "@/hooks/useScreenSize";

// Fullcalendar
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { StyleWrapper } from "../StyleWrapper";

const Calendar = ({ calendarRef }) => {
  const [errorFetch, setErrorFetch] = useState(null);

  const [eventsSchedule, setEventsSchedule] = useState([]);

  const router = useRouter();

  const screenSize = useScreenSize();

  // effect to change view
  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (!calendarApi) return;

    if (screenSize === "mobile") {
      calendarApi.changeView("timeGridDay");
    } else if (screenSize === "tablet") {
      calendarApi.changeView("customTwoDay");
    } else {
      calendarApi.changeView("timeGridWeek");
    }
  }, [screenSize]);

  // effect to get events from db
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses`,
          {
            next: {
              revalidate: 172800,
            },
          },
        );

        if (!res.ok) throw new Error("Erreur serveur");

        const data = await res.json();
        setEventsSchedule(data);

        router.prefetch("/");
      } catch (error) {
        console.error(error);
        setErrorFetch(error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <StyleWrapper>
        {errorFetch && (
          <Alert className="mb-10 flex items-center gap-2 rounded-md border border-red-200 bg-red-50 text-sm text-red-800">
            <AlertTriangle className="h-4 w-4 flex-shrink-0" />
            <AlertDescription className="flex-1">{errorFetch}</AlertDescription>
          </Alert>
        )}

        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          views={{
            customTwoDay: {
              type: "timeGrid",
              duration: { days: 2 },
            },
          }}
          initialView={"timeGridWeek"}
          height={"650px"}
          fixedWeekCount={false}
          showNonCurrentDates={false}
          headerToolbar={{
            start: screenSize === "mobile" ? "timeGridDay" : "timeGridWeek",
            center: "title",
            end: "today prev,next",
          }}
          events={eventsSchedule}
          eventColor="#b0181c"
          slotMinTime="12:00:00"
          slotMaxTime="21:30:00"
          locale={frLocale}
          timeZone="UTC"
        />
      </StyleWrapper>
    </div>
  );
};

export default Calendar;
