import React from 'react';
import '../styles/AdventureSection.css';
import adventureImg from '../images/adventure-img.jpg';

export default function AdventureSection() {
  return (
    <section className="adventure">
      <div className="container">
        <h1>
          <div className="adventure-highlight-top">Ищущие</div>
          <div className="highlight-club">клуб</div>
          <div className="adventure-highlight">приключения</div>
        </h1>
        <div className="image-container">
          <img
            src={adventureImg}
            alt="Иллюстрация приключений"
            className="adventure-img"
          />
          <div className="buttons">
            <button>
              <a
                className="googlemaps"
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                Карта мира
              </a>
            </button>
            <button>
              <a
                className="googlemaps"
                href="https://forumplanet.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Форум энтузиастов
              </a>
            </button>
            <div className="buttons-bot">
              <button>Календарь событий</button>
            </div>
          </div>
          <div className="adventure-text">
            Помни: мир полон неизвестного и волнующего. Присоединяйтесь, путешествуйте,
            открывайте новые горизонты, делитесь впечатлениями!
          </div>
        </div>
        <div className="under-text">Исследуй</div>
        <div className="under-text1">мир с нами</div>
      </div>
    </section>
  );
}
