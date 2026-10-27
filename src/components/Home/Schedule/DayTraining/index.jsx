const DayTraining = ({ day }) => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-red-700 p-4 text-center text-white">
        <h2 className="mb-1 text-xl font-bold">{day.day}</h2>
        <p className="text-sm opacity-90">{day.address}</p>
      </div>

      {day.sessions.map((session, index) => (
        <div key={index} className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {session.who}
            </span>
            <span
              className={`${session.sport === "Lutte" ? "bg-blue-500" : "bg-red-600"} rounded px-2 py-1 text-xs font-medium text-white`}
            >
              {session.sport}
            </span>
          </div>
          <div className="text-center text-xl font-bold text-gray-900 md:text-center">
            {session.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayTraining;
