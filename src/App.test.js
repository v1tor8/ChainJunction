// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainJunction title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainJunction/i);
    expect(titleElement).toBeInTheDocument();
});
