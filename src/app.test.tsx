import test from 'ava';
import { render, screen } from '@testing-library/react';
import App from './app';

test('should render hello world', t => {
  render(<App />);

  t.not(screen.queryByText('Hello, world!'), null);
});
