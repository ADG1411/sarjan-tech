import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
    render(<Header />);
    const headerElement = screen.getByText(/header text/i);
    expect(headerElement).toBeInTheDocument();
});

test('Header functions correctly', () => {
    render(<Header />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(screen.getByText(/new text after click/i)).toBeInTheDocument();
});