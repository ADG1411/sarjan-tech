import React from 'react';
import styled from 'styled-components';
import { colors, fonts, breakpoints } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${colors.darkGray};
  color: ${colors.white};
  padding: 60px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 15px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const FooterSection = styled(motion.div)`
  h4 {
    font-family: ${fonts.heading};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${colors.white};
  }

  p, a, li {
    color: #B0B0B0;
    line-height: 1.6;
    margin-bottom: 8px;
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${colors.primary};
  }
`;

const Logo = styled.div`
  font-family: ${fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 15px;

  span {
    color: ${colors.primary};
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 25px;
  color: #B0B0B0;
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
  }

  button {
    background: none;
    border: none;
    color: #B0B0B0;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    text-align: left;
    padding: 0;

    &:hover {
      color: ${colors.primary};
      padding-left: 5px;
    }
  }
`;

const ContactInfo = styled.div`
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 15px;

    svg {
      color: ${colors.primary};
      margin-top: 3px;
      flex-shrink: 0;
    }

    div {
      color: #B0B0B0;
      line-height: 1.5;

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: #444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-3px);
  }
`;

const Newsletter = styled.div`
  h4 {
    margin-bottom: 15px;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 12px 15px;
    border: 2px solid #444;
    border-radius: 8px;
    background: transparent;
    color: ${colors.white};
    font-size: 0.9rem;

    &::placeholder {
      color: #B0B0B0;
    }

    &:focus {
      outline: none;
      border-color: ${colors.primary};
    }
  }

  button {
    padding: 12px 20px;
    background: ${colors.primary};
    color: ${colors.white};
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.primaryHover};
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #B0B0B0;
  font-size: 0.9rem;
  margin: 0;

  button {
    background: none;
    border: none;
    color: ${colors.primary};
    text-decoration: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ScrollToTop = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.primaryHover};
    transform: translateY(-3px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
`;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    const email = e.target.email.value;
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  const quickLinks = [
    { name: 'Home', action: () => scrollToSection('home') },
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Services', action: () => scrollToSection('services') },
    { name: 'Portfolio', action: () => scrollToSection('portfolio') },
    { name: 'Testimonials', action: () => scrollToSection('testimonials') },
    { name: 'Contact', action: () => scrollToSection('contact') }
  ];

  const services = [
    'Web Development',
    'E-commerce Solutions',
    'Mobile App Development',
    'SEO Optimization',
    'Digital Marketing',
    'UI/UX Design'
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com/sarjantech', name: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com/sarjantech', name: 'Twitter' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/sarjantech', name: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://instagram.com/sarjantech', name: 'Instagram' },
    { icon: <FaGithub />, url: 'https://github.com/sarjantech', name: 'GitHub' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <FooterContainer>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterContent>
            <FooterSection variants={itemVariants}>
              <Logo>
                Sarjan <span>Tech</span>
              </Logo>
              <Description>
                Engineering the future of the web with innovative solutions, 
                cutting-edge technology, and exceptional user experiences. 
                Your digital transformation partner.
              </Description>
              <SocialLinks>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialLinks>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <h4>Quick Links</h4>
              <QuickLinks>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button onClick={link.action}>
                      {link.name}
                    </button>
                  </li>
                ))}
              </QuickLinks>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <h4>Our Services</h4>
              <QuickLinks>
                {services.map((service, index) => (
                  <li key={index}>
                    <button onClick={() => scrollToSection('services')}>
                      {service}
                    </button>
                  </li>
                ))}
              </QuickLinks>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <h4>Contact Info</h4>
              <ContactInfo>
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <a href="mailto:info@sarjantech.com">
                      info@sarjantech.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <a href="tel:+15551234567">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    123 Tech Street<br />
                    San Francisco, CA 94107
                  </div>
                </div>
              </ContactInfo>

              <Newsletter>
                <h4>Newsletter</h4>
                <p>Subscribe to get updates on our latest projects and tech insights.</p>
                <NewsletterForm onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </NewsletterForm>
              </Newsletter>
            </FooterSection>
          </FooterContent>
        </motion.div>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} <button onClick={scrollToTop}>Sarjan Tech</button>. 
            All rights reserved. | Powered by <button onClick={scrollToTop}>Sarjan Tech</button>
          </Copyright>
          
          <ScrollToTop onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </ScrollToTop>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;