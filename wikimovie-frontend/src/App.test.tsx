import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('The app is rendered without problem', () => {
  const { getByText } = render(<App />);
  const title = getByText(/WIKI Movies/i);
  expect(title).toBeInTheDocument();
});
