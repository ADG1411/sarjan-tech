import React from 'react';
import styled from 'styled-components';
import { colors, fonts, breakpoints, Card, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const AboutContainer = styled.section`
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

const FoundersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 50px;
  margin-top: 50px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FounderCard = styled(motion(Card))`
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 40px 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryHover});
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 20px;
  }
`;

const FounderImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 25px;
`;

const FounderImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 3rem;
  font-weight: 700;
  font-family: ${fonts.heading};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.image}) center/cover;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  ${FounderCard}:hover & {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 107, 0, 0.3);
  }

  ${FounderCard}:hover &::before {
    transform: scale(1.1);
  }
`;

const FounderName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.darkGray};
  margin-bottom: 8px;
`;

const FounderTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FounderBio = styled.p`
  color: ${colors.textGray};
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 1rem;
  text-align: left;
`;

const FounderSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 25px;
`;

const Skill = styled.span`
  background: ${colors.lightGray};
  color: ${colors.primary};
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darkGray};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-3px);
  }
`;

const CompanyStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 80px;
  padding-top: 60px;
  border-top: 2px solid ${colors.borderGray};

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 60px;
    padding-top: 40px;
    gap: 20px;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 30px 20px;
  background: ${colors.lightGray};
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.white};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 25px 15px;
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.p`
  color: ${colors.darkGray};
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const About = () => {
  const founders = [
    {
      name: "Tirth Goyani",
      title: "Co-founder & CEO",
      bio: "Visionary leader with 8+ years of experience in web development and business strategy. Tirth specializes in creating innovative digital solutions that drive business growth and user engagement. His expertise in modern technologies and strategic thinking has helped numerous businesses transform their digital presence.",
      skills: ["Business Strategy", "Full-Stack Development", "Team Leadership", "Product Management"],
      image: "/api/placeholder/150/150", // Placeholder for now
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      initials: "TG"
    },
    {
      name: "Abhi Gabani",
      title: "Co-founder & CTO",
      bio: "Technical mastermind with deep expertise in modern web technologies and system architecture. Abhi leads the technical vision of Sarjan Tech, ensuring scalable, secure, and performant solutions. His passion for clean code and innovative problem-solving drives the technical excellence of our projects.",
      skills: ["System Architecture", "React/Node.js", "DevOps", "Database Design"],
      image: "/api/placeholder/150/150", // Placeholder for now
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      initials: "AG"
    }
  ];

  const companyStats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <AboutContainer id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Meet The Founders</SectionTitle>
          <SectionSubtitle>
            The passionate minds behind Sarjan Tech, dedicated to delivering exceptional digital experiences
          </SectionSubtitle>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FoundersGrid>
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <FounderImageContainer>
                  <FounderImage image={founder.image}>
                    {!founder.image && founder.initials}
                  </FounderImage>
                </FounderImageContainer>

                <FounderName>{founder.name}</FounderName>
                <FounderTitle>{founder.title}</FounderTitle>
                <FounderBio>{founder.bio}</FounderBio>

                <FounderSkills>
                  {founder.skills.map((skill, skillIndex) => (
                    <Skill key={skillIndex}>{skill}</Skill>
                  ))}
                </FounderSkills>

                <SocialLinks>
                  <SocialLink 
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink 
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink 
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </SocialLink>
                </SocialLinks>
              </FounderCard>
            ))}
          </FoundersGrid>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CompanyStats>
            {companyStats.map((stat, index) => (
              <StatCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </CompanyStats>
        </motion.div>
      </Container>
    </AboutContainer>
  );
};

export default About;