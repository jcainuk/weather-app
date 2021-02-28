/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format('ddd Do MMM')}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => console.log('Hello!')}>
        More details
      </button>
    </div>
  );
};

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
