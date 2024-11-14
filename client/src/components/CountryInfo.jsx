import React from 'react';
import '../styles/CountryInfo.css';

export default function CountryInfo({ country, onClose, onAddToPlan }) {
  if (!country) return null;

  const languages = Object.values(country.languages || {}).join(', ');
  const currencies = Object.values(country.currencies || {})
    .map((currency) => currency.name)
    .join(', ');
  const borders = country.borders ? country.borders.join(', ') : 'Нет данных';
  const demonym = country.demonyms ? country.demonyms.eng.m : 'Нет данных';

  return (
    <div className="country-info-overlay" onClick={onClose}>
      <div className="country-info" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h3>{country.name.common}</h3>
        <img
          className="flag-image"
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
        <p>
          <strong>Регион:</strong> {country.region}
        </p>
        <p>
          <strong>Субрегион:</strong> {country.subregion}
        </p>
        <p>
          <strong>Столица:</strong> {country.capital}
        </p>
        <p>
          <strong>Население:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Площадь:</strong> {country.area.toLocaleString()} км²
        </p>
        <p>
          <strong>Языки:</strong> {languages}
        </p>
        <p>
          <strong>Валюта:</strong> {currencies}
        </p>
        <p>
          <strong>Часовые пояса:</strong> {country.timezones.join(', ')}
        </p>
        <p>
          <strong>Жители:</strong> {demonym}
        </p>
        <p>
          <strong>Границы с:</strong> {borders}
        </p>
        <button className="add-to-plan-btn" onClick={() => onAddToPlan(country)}>
          Добавить в план
        </button>
      </div>
    </div>
  );
}
