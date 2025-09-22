import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/footer content/i);
    expect(linkElement).toBeInTheDocument();
});

test('checks interactive elements in Footer', () => {
    render(<Footer />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
});