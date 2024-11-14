import React, { useState, useEffect } from 'react';
import '../styles/Calendar.css';

export default function Calendar() {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  useEffect(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  const saveEventsToLocalStorage = (updatedEvents) => {
    localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const handleAddEvent = () => {
    if (!eventTitle) return;
    
    const updatedEvents = {
      ...events,
      [selectedDate]: [
        ...(events[selectedDate] || []),
        { title: eventTitle, description: eventDescription },
      ],
    };
    
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);

    setEventTitle('');
    setEventDescription('');
    setSelectedDate(null);
  };

  const handleDeleteEvent = (day, index) => {
    const updatedEvents = { ...events };
    updatedEvents[day].splice(index, 1);
    if (updatedEvents[day].length === 0) {
      delete updatedEvents[day];
    }
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  };

  return (
    <div className="calendar">
      <div className="month">
        <h2 className="month-title">Ноябрь 2024</h2>
      </div>
      <div className="days">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className="day"
            onClick={() => handleDayClick(day)}
          >
            {day}
            {events[day] && <div className="event-indicator">•</div>}
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="event-modal">
          <h3>Добавить событие на {selectedDate} ноября</h3>
          <input
            type="text"
            placeholder="Название события"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <textarea
            placeholder="Описание"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
          <button onClick={handleAddEvent}>Добавить событие</button>
          <button onClick={() => setSelectedDate(null)}>Отмена</button>
        </div>
      )}

      {Object.keys(events).length > 0 && (
        <div className="event-list">
          <h3>События</h3>
          <div className="event-container">
            {Object.entries(events).map(([date, dayEvents]) =>
              dayEvents.map((event, index) => (
                <div key={`${date}-${index}`} className="event-item">
                  <span>{date} ноября - {event.title}</span>
                  <button onClick={() => handleDeleteEvent(date, index)} className="delete-btn">
                    Удалить
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
