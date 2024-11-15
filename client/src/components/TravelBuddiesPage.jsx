import React from 'react';
import TravelBuddyCard from './TravelBuddyCard';
import '../styles/TravelBuddiesPage.css';

export default function TravelBuddiesPage() {
  const travelBuddies = [
    { name: 'Анна', country: 'Италия', avatar: 'https://www.gravatar.com/avatar/b985085e28ac666182f643124b11414c?s=200&d=mm&r=g', plannedDate: '15 ноября 2024', interests: 'Любит горы и море,  хочет попробовать экстремальные виды спорта.' },
    { name: 'Максим', country: 'Франция', avatar: 'https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=200&d=mm&r=g', plannedDate: '25 декабря 2024', interests: 'Интересуется историей и архитектурой, любит посещать музеи.' },
    { name: 'Ольга', country: 'Япония', avatar: 'https://www.gravatar.com/avatar/03ac67328e0b450e079217125d89a596?s=200&d=mm&r=g', plannedDate: '5 января 2025', interests: 'Любит японскую кухню и культуру,  хочет посетить традиционные храмы.' },
    { name: 'Иван', country: 'США', avatar: 'https://www.gravatar.com/avatar/8f8d4601a17804b1037d21983078325e?s=200&d=mm&r=g', plannedDate: '10 февраля 2025', interests: 'Интересуется технологиями и наукой, хочет посетить Кремниевую долину.' },
    { name: 'Екатерина', country: 'Индия', avatar: 'https://www.gravatar.com/avatar/51a859364d726506640716a698a4c25d?s=200&d=mm&r=g', plannedDate: '20 марта 2025', interests: 'Любит йогу и медитацию, хочет посетить священные места Индии.' },
    { name: 'Дмитрий', country: 'Австралия', avatar: 'https://www.gravatar.com/avatar/b985085e28ac666182f643124b11414c?s=200&d=mm&r=g', plannedDate: '30 апреля 2025', interests: 'Любит серфинг и дикую природу, хочет посетить Большой Барьерный риф.' },
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
            plannedDate={buddy.plannedDate}
            interests={buddy.interests}
          />
        ))}
      </div>
    </section>
  );
}
