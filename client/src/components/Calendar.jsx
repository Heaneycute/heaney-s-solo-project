import React from 'react';
import '../styles/Calendar.css';

function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <div className="month"><span className='month-title'>Ноябрь 2024</span></div>
      <div className="days">
        {days.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
