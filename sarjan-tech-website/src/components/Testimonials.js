import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints, Card, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';

const TestimonialsContainer = styled.section`
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

const TestimonialSlider = styled(Slider)`
  .slick-dots {
    bottom: -50px;

    li {
      margin: 0 5px;

      button {
        &:before {
          color: ${colors.primary};
          font-size: 12px;
          opacity: 0.5;
        }
      }

      &.slick-active button:before {
        opacity: 1;
      }
    }
  }

  .slick-arrow {
    z-index: 2;
    
    &:before {
      color: ${colors.primary};
      font-size: 24px;
    }

    &.slick-prev {
      left: -50px;

      @media (max-width: ${breakpoints.tablet}) {
        left: -30px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        left: 10px;
        top: -60px;
      }
    }

    &.slick-next {
      right: -50px;

      @media (max-width: ${breakpoints.tablet}) {
        right: -30px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        right: 10px;
        top: -60px;
      }
    }

    @media (max-width: ${breakpoints.mobile}) {
      top: -40px;
    }
  }
`;

const TestimonialCard = styled(motion(Card))`
  margin: 20px 15px;
  text-align: center;
  position: relative;
  padding: 40px 30px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 20px 5px;
    padding: 30px 20px;
    min-height: 320px;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -15px;
  left: 30px;
  width: 40px;
  height: 40px;
  background: ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;

  svg {
    color: #ffd700;
    font-size: 1.2rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${colors.darkGray};
  font-style: italic;
  margin-bottom: 30px;
  flex-grow: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 25px;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ClientDetails = styled.div`
  text-align: left;
`;

const ClientName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 5px;
`;

const ClientCompany = styled.p`
  font-size: 0.9rem;
  color: ${colors.primary};
  font-weight: 500;
`;

const TestimonialsStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 60px;
    gap: 20px;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  background: ${colors.white};
  padding: 30px 20px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
  color: ${colors.textGray};
  font-weight: 500;
  font-size: 1rem;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Sarjan Tech transformed our online presence completely. Their attention to detail and technical expertise is outstanding. The team delivered exactly what we envisioned and more!",
      clientName: "Sarah Johnson",
      clientCompany: "TechStartup Inc.",
      clientInitials: "SJ",
      rating: 5
    },
    {
      id: 2,
      text: "Working with Tirth and Abhi was a game-changer for our business. They built us a robust e-commerce platform that increased our sales by 300%. Highly recommended!",
      clientName: "Michael Chen",
      clientCompany: "Fashion Forward",
      clientInitials: "MC",
      rating: 5
    },
    {
      id: 3,
      text: "The professionalism and quality of work from Sarjan Tech is exceptional. They understood our requirements perfectly and delivered a solution that exceeded our expectations.",
      clientName: "Emily Rodriguez",
      clientCompany: "Creative Agency",
      clientInitials: "ER",
      rating: 5
    },
    {
      id: 4,
      text: "Sarjan Tech didn't just build us a website; they built us a digital experience. The modern design and seamless functionality have impressed all our clients.",
      clientName: "David Thompson",
      clientCompany: "Consulting Group",
      clientInitials: "DT",
      rating: 5
    },
    {
      id: 5,
      text: "From concept to launch, the team at Sarjan Tech was with us every step of the way. Their technical skills and creative vision brought our ideas to life perfectly.",
      clientName: "Lisa Wang",
      clientCompany: "Health & Wellness",
      clientInitials: "LW",
      rating: 5
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "50+", label: "Successful Projects" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "On-Time Delivery" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
    <TestimonialsContainer id="testimonials">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us
          </SectionSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: '60px' }}
        >
          <TestimonialSlider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <TestimonialCard
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <QuoteIcon>
                    <FaQuoteLeft />
                  </QuoteIcon>

                  <div>
                    <StarRating>
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </StarRating>

                    <TestimonialText>
                      "{testimonial.text}"
                    </TestimonialText>
                  </div>

                  <ClientInfo>
                    <ClientImage>
                      {testimonial.clientInitials}
                    </ClientImage>
                    <ClientDetails>
                      <ClientName>{testimonial.clientName}</ClientName>
                      <ClientCompany>{testimonial.clientCompany}</ClientCompany>
                    </ClientDetails>
                  </ClientInfo>
                </TestimonialCard>
              </div>
            ))}
          </TestimonialSlider>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialsStats>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </TestimonialsStats>
        </motion.div>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;