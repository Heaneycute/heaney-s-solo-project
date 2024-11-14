import React from 'react';
import Calendar from './Calendar';
import '../styles/CalendarSection.css';

function CalendarSection() {
  return (
    <section className="calendar-section">
      <h2 className='what'>Календарь <span className="highlight">событий</span></h2>
      <Calendar />
    </section>
  );
}

export default CalendarSection;
