import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, breakpoints, Button, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const PortfolioContainer = styled.section`
  padding: 100px 0;
  background: ${colors.lightGray};

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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
    margin-bottom: 40px;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 10px 25px;
  border: 2px solid ${props => props.active ? colors.primary : colors.borderGray};
  background: ${props => props.active ? colors.primary : colors.white};
  color: ${props => props.active ? colors.white : colors.darkGray};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.primary};
    background: ${colors.primary};
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 250px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover});
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bg || `linear-gradient(135deg, ${colors.primary}20, ${colors.primaryHover}20)`};
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 25px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: ${colors.textGray};
  line-height: 1.5;
  margin-bottom: 15px;
  font-size: 0.95rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const ProjectTag = styled.span`
  background: ${colors.lightGray};
  color: ${colors.primary};
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features including inventory management, payment integration, and analytics dashboard.",
      category: "E-Commerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: `url('/projects/ecommerce.png')`,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Professional corporate website with content management system, SEO optimization, and responsive design.",
      category: "Web Design",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: `url('/projects/corporate.png')`,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Comprehensive SaaS application with real-time analytics, user management, and subscription billing.",
      category: "Web App",
      tags: ["React", "Express", "PostgreSQL", "AWS"],
      image: `url('/projects/saas.png')`,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Restaurant App",
      description: "Mobile-first restaurant application with online ordering, table booking, and payment processing.",
      category: "Mobile App",
      tags: ["React Native", "Firebase", "Stripe"],
      image: `url('/projects/restaurant.png')`,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Creative portfolio website for a digital agency with stunning animations and interactive elements.",
      category: "Web Design",
      tags: ["React", "Framer Motion", "Styled Components"],
      image: `url('/projects/portfolio.png')`,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Learning Platform",
      description: "Online learning platform with video streaming, progress tracking, and interactive quizzes.",
      category: "Web App",
      tags: ["Vue.js", "Python", "Django", "PostgreSQL"],
      image: `url('/projects/learning.png')`,
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = ['All', 'Web Design', 'E-Commerce', 'Web App', 'Mobile App'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioContainer id="portfolio">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Our Portfolio</SectionTitle>
          <SectionSubtitle>
            Explore our latest projects and see how we bring ideas to life with cutting-edge technology
          </SectionSubtitle>
        </motion.div>

        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImageContainer>
                <ProjectImage bg={project.image} />
              </ProjectImageContainer>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </PortfolioContainer>
  );
};

export default Portfolio;