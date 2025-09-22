import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

test('renders Testimonials component', () => {
	render(<Testimonials />);
	const testimonialsElement = screen.getByText(/testimonials/i);
	expect(testimonialsElement).toBeInTheDocument();
});