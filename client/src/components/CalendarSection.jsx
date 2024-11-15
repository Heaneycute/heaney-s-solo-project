import React, { useState } from 'react';
import Calendar from './Calendar';
import '../styles/CalendarSection.css';
import { toast } from 'react-toastify';

export default function CalendarSection() {
  const [events, setEvents] = useState([]);

  const handleEventAction = (actionType) => {
    if (actionType === 'add') {
      toast.success('Событие успешно добавлено!');
    } else if (actionType === 'edit') {
      toast.success('Событие успешно изменено!');
    } else if (actionType === 'delete') {
      toast.success('Событие успешно удалено!');
    }
  };

  return (
    <section className="calendar-section">
      <div className="calendar-title">Календарь</div>
      <div className="highlight">событий</div>
      <Calendar onAddEvent={handleEventAction} />
    </section>
  );
}
