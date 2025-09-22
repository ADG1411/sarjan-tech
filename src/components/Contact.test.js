import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact component', () => {
	render(<Contact />);
	const linkElement = screen.getByText(/Contact/i);
	expect(linkElement).toBeInTheDocument();
});