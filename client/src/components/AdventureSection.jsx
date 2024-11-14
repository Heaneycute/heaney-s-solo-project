import React from 'react';
import '../styles/AdventureSection.css';
import adventureImg from '../images/adventure-img.jpg';

function AdventureSection() {
  return (
    <section className="adventure">
      <div className="container">
        <h1>
          <div className="adventure-highlight-top">Ищущие</div>
          <div className="adventure-highlight">приключения</div>
        </h1>
        <div className="image-container">
          <img
            src={adventureImg}
            alt="Иллюстрация приключений"
            className="adventure-img"
          />
          <div className="buttons">
            <button>Карта мира</button>
            <button>Форум энтузиастов</button>
            <div className="buttons-bot">
              <button>Календарь событий</button>
            </div>
          </div>
          <div className="adventure-text">
            Помни: мир полон неизвестного и волнующего. Присоединяйтесь, путешествуйте,
            открывайте новые горизонты, делитесь впечатлениями!
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdventureSection;
