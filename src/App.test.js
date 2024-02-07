import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn save to reload', () => {
  render(<App />);
  const linkElement = screen.getByText(/save to reload/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check durga is presetn', () => {
  render(<App />);
  const linkElement = screen.getByText(/durga/i);
  expect(linkElement).toBeInTheDocument();
});