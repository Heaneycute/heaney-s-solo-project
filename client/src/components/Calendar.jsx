import React, { useState, useEffect } from 'react';
import '../styles/Calendar.css';

export default function Calendar() {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [editEventIndex, setEditEventIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

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
    setIsEditMode(false);
    setEventTitle('');
    setEventDescription('');
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

  const handleEditEvent = (day, index) => {
    setSelectedDate(day);
    setEventTitle(events[day][index].title);
    setEventDescription(events[day][index].description);
    setEditEventIndex(index);
    setIsEditMode(true);
  };

  const handleSaveEditEvent = () => {
    const updatedEvents = { ...events };
    updatedEvents[selectedDate][editEventIndex] = {
      title: eventTitle,
      description: eventDescription,
    };

    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);

    setEventTitle('');
    setEventDescription('');
    setEditEventIndex(null);
    setIsEditMode(false);
    setSelectedDate(null);
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
            {isEditMode
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
          <button onClick={isEditMode ? handleSaveEditEvent : handleAddEvent}>
            {isEditMode ? 'Сохранить изменения' : 'Добавить событие'}
          </button>
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
