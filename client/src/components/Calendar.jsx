import React, { useState, useEffect } from 'react';
import '../styles/Calendar.css';

export default function Calendar({ onAddEvent }) {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [editEventIndex, setEditEventIndex] = useState(null);

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
    setEventTitle('');
    setEventDescription('');
    setEditEventIndex(null);
  };

  const handleSaveEvent = () => {
    if (!eventTitle) return;

    const updatedEvents = { ...events };
    const newEvent = { title: eventTitle, description: eventDescription };

    if (editEventIndex !== null) {
      updatedEvents[selectedDate][editEventIndex] = newEvent;
      onAddEvent('edit');
    } else {
      updatedEvents[selectedDate] = [...(updatedEvents[selectedDate] || []), newEvent];
      onAddEvent('add');
    }

    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    resetModal();
  };

  const handleDeleteEvent = (day, index) => {
    const updatedEvents = { ...events };
    updatedEvents[day].splice(index, 1);
    if (updatedEvents[day].length === 0) {
      delete updatedEvents[day];
    }
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);

    onAddEvent('delete');
  };

  const handleEditEvent = (day, index) => {
    const event = events[day][index];
    setSelectedDate(day);
    setEventTitle(event.title);
    setEventDescription(event.description);
    setEditEventIndex(index);
  };

  const resetModal = () => {
    setEventTitle('');
    setEventDescription('');
    setSelectedDate(null);
    setEditEventIndex(null);
  };

  return (
    <div className="calendar">
      <div className="month">
        <h2 className="month-title">Ноябрь 2024</h2>
      </div>
      <div className="days">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
          <div key={day} className="day" onClick={() => handleDayClick(day)}>
            {day}
            {events[day] && <div className="event-indicator">•</div>}
          </div>
        ))}
      </div>
      {selectedDate !== null && (
        <div className="event-modal">
          <h3>
            {editEventIndex !== null
              ? 'Редактировать событие'
              : `Добавить событие на ${selectedDate} ноября`}
          </h3>
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
          <button onClick={handleSaveEvent}>
            {editEventIndex !== null ? 'Сохранить изменения' : 'Добавить событие'}
          </button>
          <button onClick={resetModal}>Отмена</button>
        </div>
      )}
      {Object.keys(events).length > 0 && (
        <div className="event-list">
          <h3>События</h3>
          <div className="event-container">
            {Object.entries(events).map(([date, dayEvents]) =>
              dayEvents.map((event, index) => (
                <div key={`${date}-${index}`} className="event-item">
                  <span>
                    {date} ноября - {event.title}
                  </span>
                  <p className="event-description">{event.description}</p>
                  <button
                    onClick={() => handleEditEvent(date, index)}
                    className="edit-btn"
                  >
                    Изменить
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(date, index)}
                    className="delete-btn"
                  >
                    Удалить
                  </button>
                </div>
              )),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
