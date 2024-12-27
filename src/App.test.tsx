import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Registration } from './pages/Registration';

test('initial test', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

  const linkElement = screen.getByText(/What is your name?/i);
  expect(linkElement).toBeInTheDocument();
});