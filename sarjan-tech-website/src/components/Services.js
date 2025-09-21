import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints, Card, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaShoppingCart, 
  FaMobile, 
  FaSearch,
  FaReact,
  FaNodeJs,
  FaAws,
  FaWordpress,
  FaPython,
  FaJs
} from 'react-icons/fa';
import { 
  SiNextdotjs,
  SiMongodb,
  SiShopify,
  SiTypescript,
  SiTailwindcss,
  SiExpress
} from 'react-icons/si';

const ServicesContainer = styled.section`
  padding: 100px 0;
  background: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 80px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 15px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 60px;
  }
`;

const ServiceCard = styled(motion(Card))`
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryHover});
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 0;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: ${colors.white};
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 10px 25px rgba(255, 107, 0, 0.3);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  color: ${colors.textGray};
  line-height: 1.6;
  font-size: 1rem;
`;

const TechStackSection = styled.div`
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.lightGray};
    transform: translateY(-5px);
  }
`;

const TechIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  color: ${props => props.color || colors.primary};
  transition: all 0.3s ease;

  ${TechItem}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const TechName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.darkGray};
  text-align: center;
`;

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with modern technologies to meet your specific business needs and drive growth."
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment integration, inventory management, and optimized user experience."
    },
    {
      icon: <FaMobile />,
      title: "Responsive Design",
      description: "Mobile-first designs that work flawlessly across all devices and screen sizes for maximum reach."
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Boost your online visibility with technical SEO, performance optimization, and search engine friendly code."
    }
  ];

  const technologies = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
    { name: "Shopify", icon: <SiShopify />, color: "#7AB55C" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <ServicesContainer id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            We provide comprehensive web development services to help your business thrive in the digital world
          </SectionSubtitle>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>

        <TechStackSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle style={{ marginBottom: '20px', fontSize: '2.5rem' }}>
              Technologies We Master
            </SectionTitle>
            <SectionSubtitle>
              Cutting-edge tools and frameworks to build modern, scalable applications
            </SectionSubtitle>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TechGrid>
              {technologies.map((tech, index) => (
                <TechItem
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TechIcon color={tech.color}>
                    {tech.icon}
                  </TechIcon>
                  <TechName>{tech.name}</TechName>
                </TechItem>
              ))}
            </TechGrid>
          </motion.div>
        </TechStackSection>
      </Container>
    </ServicesContainer>
  );
};

export default Services;