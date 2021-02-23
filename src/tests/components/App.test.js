import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import { location, forecasts } from '../../data/forecast.json';

test('renders Weather App link', () => {
  render(<App forecasts={forecasts} location={location} />);
  const linkElement = screen.getByText(/Manchester, UK/i);
  expect(linkElement).toBeInTheDocument();
});
