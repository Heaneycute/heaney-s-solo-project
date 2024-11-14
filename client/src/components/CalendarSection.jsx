import React from 'react';
import Calendar from './Calendar';
import '../styles/CalendarSection.css';

function CalendarSection() {
  return (
    <section className="calendar-section">
      <div className="calendar-title">Календарь</div>
      <div className="highlight">событий</div>
      <Calendar />
    </section>
  );
}

export default CalendarSection;
