import styled, { createGlobalStyle } from 'styled-components';

// Color Palette
export const colors = {
  primary: '#FF6B00', // Vibrant orange
  primaryHover: '#E55A00', // Darker orange for hover states
  white: '#FFFFFF',
  darkGray: '#333333',
  lightGray: '#F8F8F8',
  textGray: '#666666',
  borderGray: '#E0E0E0'
};

// Typography
export const fonts = {
  heading: '"Poppins", sans-serif',
  body: '"Roboto", sans-serif'
};

// Breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};

// Global Styles
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${fonts.body};
    line-height: 1.6;
    color: ${colors.darkGray};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.heading};
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: ${fonts.body};
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 15px;
    }
  }

  .section-padding {
    padding: 80px 0;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 60px 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding: 40px 0;
    }
  }
`;

// Common styled components
export const Button = styled.button`
  background: ${props => props.variant === 'outline' ? 'transparent' : colors.primary};
  color: ${props => props.variant === 'outline' ? colors.primary : colors.white};
  border: 2px solid ${colors.primary};
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.variant === 'outline' ? colors.primary : colors.primaryHover};
    color: ${colors.white};
    border-color: ${props => props.variant === 'outline' ? colors.primary : colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 25px;
    font-size: 14px;
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.darkGray};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${colors.textGray};
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;