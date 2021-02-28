import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: '', country: '' });
  const [selectedDate, setSelectedDate] = useState([]);

  const getForecast = () => {
    const endpoint = 'https://mcr-codes-weather-app.herokuapp.com/forecast';

    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
