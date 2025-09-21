import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { colors, breakpoints, fonts } from '../styles/GlobalStyles';
import { Button } from '../styles/GlobalStyles';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.white} 0%, ${colors.lightGray} 100%);
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, rgba(255, 107, 0, 0.12) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(255, 139, 51, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 50% 10%, rgba(255, 107, 0, 0.05) 0%, transparent 40%);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, transparent 30%, rgba(255, 107, 0, 0.02) 50%, transparent 70%);
    animation: shimmer 8s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 140px 20px 100px;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 120px 18px 80px;
    max-width: 700px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 100px 16px 60px;
    max-width: 100%;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${fonts.heading};
  font-size: 4.8rem;
  font-weight: 800;
  color: ${colors.darkGray};
  margin-bottom: 32px;
  line-height: 1.15;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  position: relative;

  .company-name {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover}, #ff8533);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: block;
    margin-bottom: 8px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 4px;
      background: linear-gradient(90deg, transparent, ${colors.primary}, ${colors.primaryHover}, transparent);
      border-radius: 2px;
      animation: glow 2s ease-in-out infinite alternate;
    }
    
    @keyframes glow {
      from { opacity: 0.6; }
      to { opacity: 1; }
    }
  }

  .tagline {
    display: block;
    font-size: 0.75em;
    font-weight: 500;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover}, #ff8533);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0 2px 8px rgba(255, 107, 0, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${colors.primary}, transparent);
      border-radius: 1px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3.5rem;
    
    .tagline {
      font-size: 0.65em;
      margin-top: 16px;
      letter-spacing: 1.2px;
      
      &::before {
        width: 45px;
        top: -6px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.8rem;
    margin-bottom: 20px;
    
    .tagline {
      font-size: 0.58em;
      margin-top: 14px;
      letter-spacing: 1px;
      
      &::before {
        width: 35px;
        top: -5px;
        height: 1.5px;
      }
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.35rem;
  color: ${colors.textGray};
  margin-bottom: 50px;
  line-height: 1.7;
  font-weight: 400;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  position: relative;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.15rem;
    margin-bottom: 35px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 65px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 18px;
    margin-bottom: 40px;
  }
`;

const CTAButton = styled(Button)`
  padding: 18px 42px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 25px rgba(255, 107, 0, 0.25);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 107, 0, 0.35);
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px 36px;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primary};
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-3px);
  }

  span {
    font-size: 0.9rem;
    margin-bottom: 12px;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1.3rem;
    animation: bounce 2s infinite;
    filter: drop-shadow(0 2px 4px rgba(255, 107, 0, 0.2));
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 20px;
  }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const StatItem = styled.div`
  text-align: center;

  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 5px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: ${colors.textGray};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <HeroBackground />
      
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="company-name">Sarjan Tech</span>
          <span className="tagline">Web Development and Software Solutions</span>
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We craft cutting-edge web solutions that drive business growth. 
          From stunning designs to robust development, we bring your digital vision to life.
        </HeroSubtitle>

        <HeroButtons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CTAButton onClick={() => scrollToSection('contact')}>
            Start Your Project
          </CTAButton>
          <CTAButton 
            variant="outline" 
            onClick={() => scrollToSection('portfolio')}
          >
            View Our Work
          </CTAButton>
        </HeroButtons>

        <StatsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <StatItem>
            <h3>50+</h3>
            <p>Projects Completed</p>
          </StatItem>
          <StatItem>
            <h3>30+</h3>
            <p>Happy Clients</p>
          </StatItem>
          <StatItem>
            <h3>5+</h3>
            <p>Years Experience</p>
          </StatItem>
        </StatsContainer>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => scrollToSection('services')}
      >
        <span>Scroll Down</span>
        <FaArrowDown />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;