import React from 'react';

function PlanPage({ planCountries }) {
  return (
    <div className="plan-page">
      <h2>План путешествий</h2>
      {planCountries.length > 0 ? (
        planCountries.map((country, index) => (
          <div key={index} className="country-card">
            <h3>{country.name.common}</h3>
            <img
              src={country.flags.png}
              alt={`${country.name.common} Flag`}
              className="flag-image"
            />
            <p>Регион: {country.region}</p>
            <p>Население: {country.population.toLocaleString()}</p>
            <p>Столица: {country.capital}</p>
          </div>
        ))
      ) : (
        <p>Ваш план путешествий пуст</p>
      )}
    </div>
  );
}

export default PlanPage;
