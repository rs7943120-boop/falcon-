import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the About page heading when visiting /about', () => {
  window.history.pushState({}, '', '/about');

  render(<App />);

  expect(screen.getByText(/Connecting Global Orchards With Indian Markets/i)).toBeInTheDocument();
});
