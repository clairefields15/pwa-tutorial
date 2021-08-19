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
  };

  return (
    <main>
      <header>
        <h1>Weatherly</h1>
      </header>
      <section>
        <form>
          <label htmlFor='town'>Enter a town or zip to get weather</label>
          <input
            id='town'
            type='text'
            placeholder='Town or zip'
            onChange={e => setTown(e.target.value)}
            value={town}
          />
          <button onClick={e => handleClick(e)}>Get Weather</button>
        </form>
      </section>
    </main>
  );
};
