import React from 'react';
import TravelBuddyCard from './TravelBuddyCard';

export default function TravelBuddiesPage() {
  const travelBuddies = [
    { name: 'Анна', country: 'Италия', avatar: 'https://placekitten.com/100/100' },
    { name: 'Максим', country: 'Франция', avatar: 'https://placekitten.com/101/101' },
    { name: 'Ольга', country: 'Япония', avatar: 'https://placekitten.com/102/102' },
  ];

  return (
    <section className="travel-buddies">
      <h2>Попутчики</h2>
      <div className="travel-buddies-list">
        {travelBuddies.map((buddy, index) => (
          <TravelBuddyCard
            key={index}
            name={buddy.name}
            country={buddy.country}
            avatar={buddy.avatar}
          />
        ))}
      </div>
    </section>
  );
}
