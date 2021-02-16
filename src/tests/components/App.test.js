import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import { location } from '../../data/forecast.json';

test('renders Weather App link', () => {
  render(<App location={location} />);
  const linkElement = screen.getByText(/Manchester, UK/i);
  expect(linkElement).toBeInTheDocument();
});
