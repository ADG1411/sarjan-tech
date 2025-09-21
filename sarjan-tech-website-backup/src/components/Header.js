import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, fonts, breakpoints, Button } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? `1px solid ${colors.borderGray}` : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '15px 0' : '20px 0'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 15px;
  }
`;

const Logo = styled(motion.div)`
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.darkGray};
  cursor: pointer;

  span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 500;
  color: ${colors.darkGray};
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.darkGray};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: ${colors.white};
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  padding: 80px 30px 30px;
  z-index: 1001;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const MobileNavLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${colors.darkGray};
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.borderGray};

  &:hover {
    color: ${colors.primary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.darkGray};
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Nav>
          <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Sarjan <span>Tech</span>
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button onClick={() => scrollToSection('contact')}>
              Get a Quote
            </Button>
          </NavLinks>

          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <FaBars />
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      {mobileMenuOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <MobileMenu
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <CloseButton onClick={() => setMobileMenuOpen(false)}>
              <FaTimes />
            </CloseButton>
            
            {navItems.map((item) => (
              <MobileNavLink
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </MobileNavLink>
            ))}
            
            <Button 
              style={{ marginTop: '20px' }}
              onClick={() => scrollToSection('contact')}
            >
              Get a Quote
            </Button>
          </MobileMenu>
        </>
      )}
    </>
  );
};

export default Header;