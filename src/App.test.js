import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro gate', () => {
  render(<App />);
  expect(screen.getByText(/Begin the journey/i)).toBeInTheDocument();
});
