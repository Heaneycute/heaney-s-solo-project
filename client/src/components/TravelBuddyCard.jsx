import React from 'react';
import '../styles/TravelBuddyCard.css';

export default function TravelBuddyCard({ name, country, avatar }) {
  return (
    <div className="travel-buddy-card">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h4>{name}</h4>
      <p>Планирует поехать в: {country}</p>
    </div>
  );
}
