import React, { useState } from 'react';
import { fetchWeather } from '../../api/apiCalls';
import './App.css';

export const App = () => {
  const [town, setTown] = useState('');
  const [weather, setWeather] = useState({});

  const handleClick = async e => {
    e.preventDefault();
    let data = await fetchWeather(town);
    setWeather(data);
    setTown('');
  };

  return (
    <main className='main-bg'>
      <header>
        <h1>Weatherly</h1>
      </header>
      <form>
        <label htmlFor='town'>Enter a town name to get weather</label>
        <input
          id='town'
          type='text'
          placeholder='New York'
          onChange={e => setTown(e.target.value)}
          value={town}
        />
        <button onClick={e => handleClick(e)}>Get Weather</button>
      </form>
      {weather.main && (
        <section className='weather-result'>
          <h2 className='cityName'>
            {weather.name},
            <span className='country'>{weather.sys.country}</span>
          </h2>
          <div>{Math.round(weather.main.temp)}&deg;F</div>
        </section>
      )}
    </main>
  );
};
