import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders Hero component', () => {
    render(<Hero />);
    const heroElement = screen.getByText(/hero/i);
    expect(heroElement).toBeInTheDocument();
});

test('checks Hero component behavior', () => {
    render(<Hero />);
    // Add specific behavior checks here
});