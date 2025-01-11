// hook
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// Fullcalendar
import enLocale from "@fullcalendar/core/locales/en-gb";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/server/firebase";

// atom
import { eventsScheduleState, languageState } from "src/recoil";

// component
import { StyleWrapper } from "../StyleWrapper";

// Props validation
import PropTypes from "prop-types";

const Calendar = ({ calendarRef }) => {
  const language = useRecoilValue(languageState);

  const [eventsSchedule, setEventsSchedule] =
    useRecoilState(eventsScheduleState);

  // effect to get events from db
  useEffect(() => {
    const fetchEventsFromFirestore = async () => {
      const eventsCollection = collection(db, "courses");
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsData = eventsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setEventsSchedule(eventsData);
    };

    fetchEventsFromFirestore();
  }, [setEventsSchedule]);

  return (
    <div>
      <StyleWrapper>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          views={{
            customTwoDay: {
              type: "timeGrid",
              duration: { days: 2 },
            },
          }}
          initialView={
            window.innerWidth < 768
              ? "timeGridDay"
              : window.innerWidth < 1024
                ? "customTwoDay"
                : "timeGridWeek"
          }
          height={"650px"}
          fixedWeekCount={false}
          showNonCurrentDates={false}
          headerToolbar={{
            start: window.innerWidth >= 768 ? "timeGridWeek" : "timeGridDay",
            center: "title",
            end: "today prev,next",
          }}
          events={eventsSchedule}
          eventColor="#b0181c"
          slotMinTime="12:00:00"
          slotMaxTime="21:30:00"
          locale={language === "fr" ? frLocale : enLocale}
          timeZone="UTC"
        />
      </StyleWrapper>
    </div>
  );
};

Calendar.propTypes = {
  calendarRef: PropTypes.object.isRequired,
};

export default Calendar;
