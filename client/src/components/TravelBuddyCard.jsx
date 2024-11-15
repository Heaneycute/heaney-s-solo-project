import React from 'react';
import '../styles/TravelBuddyCard.css';

export default function TravelBuddyCard({
  name,
  country,
  avatar,
  plannedDate,
  interests,
}) {
  return (
    <div className="travel-buddy-card">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h4>{name}</h4>
      <p>Планирует поехать в: {country}</p>
      <p>Дата поездки: {plannedDate}</p>
      <p>Интересы: {interests}</p>
      <button className="contact-button" disabled>
        Связаться
      </button>
    </div>
  );
}
