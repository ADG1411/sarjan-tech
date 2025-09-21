import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, breakpoints, Button, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaMobile, 
  FaSearch, 
  FaShoppingCart, 
  FaChevronDown, 
  FaPlus, 
  FaCheck, 
  FaShieldAlt, 
  FaClock 
} from 'react-icons/fa';

const ContactContainer = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactForm = styled(motion.form)`
  background: ${colors.lightGray};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 20px;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.darkGray};
  margin-bottom: 25px;
  text-align: center;

  span {
    color: ${colors.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid ${colors.borderGray};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${colors.white};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
  }

  &::placeholder {
    color: ${colors.textGray};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 15px;
  border: 2px solid ${colors.borderGray};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${colors.white};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid ${colors.borderGray};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: "Roboto", sans-serif;
  transition: all 0.3s ease;
  background: ${colors.white};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
  }

  &::placeholder {
    color: ${colors.textGray};
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 10px;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContactCard = styled.div`
  background: ${colors.white};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 25px 20px;
  }
`;

const CalendlyEmbed = styled.div`
  background: ${colors.white};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  text-align: center;

  h4 {
    color: ${colors.darkGray};
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  p {
    color: ${colors.textGray};
    margin-bottom: 25px;
    line-height: 1.6;
  }

  .calendly-inline-widget {
    min-width: 320px;
    height: 400px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colors.darkGray};
    margin-bottom: 5px;
  }

  p {
    color: ${colors.textGray};
    margin: 0;
  }

  a {
    color: ${colors.primary};
    font-weight: 500;

    &:hover {
      color: ${colors.primaryHover};
    }
  }
`;

const AdvancedCalculator = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #E8F4FD;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const CalculatorLeft = styled.div`
  padding: 50px 40px;
  background: #FAFBFC;
  border-right: 1px solid #E8F4FD;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 25px;
  }
`;

const CalculatorRight = styled.div`
  padding: 50px 40px;
  background: ${colors.white};
  position: sticky;
  top: 100px;
  height: fit-content;

  @media (max-width: ${breakpoints.tablet}) {
    position: static;
    border-top: 1px solid #E8F4FD;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 25px;
  }
`;

const CalculatorTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1A202C;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const CalculatorSubtitle = styled.p`
  font-size: 1.1rem;
  color: #64748B;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const AccordionSection = styled.div`
  margin-bottom: 25px;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
  background: ${colors.white};
`;

const AccordionHeader = styled.div`
  padding: 20px 25px;
  background: ${props => props.isOpen ? '#F8FAFC' : colors.white};
  border-bottom: ${props => props.isOpen ? '1px solid #E2E8F0' : 'none'};
  cursor: pointer;
  display: flex;
  justify-content: between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: #F8FAFC;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1A202C;
    flex: 1;
  }

  .toggle-icon {
    font-size: 1.1rem;
    color: #007BFF;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const AccordionContent = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: ${colors.white};
`;

const AccordionInner = styled.div`
  padding: 25px;
  border-top: 1px solid #F1F5F9;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const ServiceItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border: 2px solid #E2E8F0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${colors.white};

  &:hover {
    border-color: #007BFF;
    background: #F8FAFC;
    transform: translateY(-1px);
  }

  &.selected {
    border-color: #007BFF;
    background: #EBF8FF;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.1);
  }

  .service-info {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;

    .service-icon {
      color: #007BFF;
      font-size: 1.1rem;
    }

    .service-details {
      h5 {
        font-size: 1rem;
        font-weight: 600;
        color: #1A202C;
        margin-bottom: 2px;
      }

      p {
        font-size: 0.85rem;
        color: #64748B;
        margin: 0;
      }
    }
  }

  .service-price {
    font-size: 1rem;
    font-weight: 700;
    color: #007BFF;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-left: 15px;
    accent-color: #007BFF;
  }
`;

const InvoiceSidebar = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1A202C;
    margin-bottom: 25px;
    text-align: center;
  }
`;

const BasePrice = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #E2E8F0;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1A202C;
    margin-bottom: 8px;
  }

  .price {
    font-size: 1.3rem;
    font-weight: 700;
    color: #007BFF;
  }
`;

const AddOnsList = styled.div`
  padding: 20px 0;
  border-bottom: 2px solid #E2E8F0;
`;

const AddOnItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 0;

  &:last-child {
    margin-bottom: 0;
  }

  .add-on-name {
    font-size: 0.95rem;
    color: #4A5568;
    display: flex;
    align-items: center;
    gap: 8px;

    .plus-icon {
      color: #22C55E;
      font-weight: bold;
    }
  }

  .add-on-price {
    font-size: 0.95rem;
    font-weight: 600;
    color: #1A202C;
  }
`;

const RunningTotal = styled.div`
  padding: 25px 0 0 0;
  text-align: center;

  h3 {
    font-size: 1.1rem;
    color: #64748B;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .total-amount {
    font-size: 2.2rem;
    font-weight: 800;
    color: #007BFF;
    line-height: 1.2;
  }

  .currency {
    font-size: 1.8rem;
  }
`;

const TrustIndicators = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #F8FAFC;
  border-radius: 10px;
  text-align: center;

  .trust-items {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    color: #64748B;

    .icon {
      color: #22C55E;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 30px;
  color: #64748B;

  .empty-icon {
    font-size: 2.5rem;
    color: #CBD5E0;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #4A5568;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const MultiStepCalculator = styled.div`
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #E8F4FD;
  margin-top: 40px;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: linear-gradient(135deg, #007BFF 0%, #0056b3 100%);
  color: white;

  .steps {
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: ${breakpoints.mobile}) {
      gap: 10px;
    }
  }

  .step {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 0.9rem;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.8rem;
    }

    &.active {
      font-weight: 700;
    }

    &.completed {
      opacity: 0.7;
    }

    .step-number {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: ${props => props.active ? 'white' : 'rgba(255,255,255,0.2)'};
      color: ${props => props.active ? '#007BFF' : 'white'};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.8rem;
    }
  }

  .step-separator {
    width: 30px;
    height: 2px;
    background: rgba(255,255,255,0.3);

    @media (max-width: ${breakpoints.mobile}) {
      width: 20px;
    }
  }
`;

const StepContent = styled.div`
  padding: 50px 40px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 25px;
  }
`;

const ResultsScreen = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ResultsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1A202C;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const PriceRange = styled.div`
  background: linear-gradient(135deg, #EBF8FF 0%, #F0F9FF 100%);
  border: 2px solid #007BFF;
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 40px;

  .price-text {
    font-size: 3.2rem;
    font-weight: 900;
    color: #007BFF;
    line-height: 1.2;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 2.4rem;
    }

    .currency {
      font-size: 2.8rem;
      
      @media (max-width: ${breakpoints.mobile}) {
        font-size: 2rem;
      }
    }
  }

  .price-subtitle {
    font-size: 1.1rem;
    color: #64748B;
    margin-top: 10px;
  }
`;

const ProjectSummaryCard = styled.div`
  background: ${colors.white};
  border: 1px solid #E2E8F0;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  text-align: left;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1A202C;
    margin-bottom: 20px;
    text-align: center;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #F1F5F9;

    &:last-child {
      border-bottom: none;
    }

    .label {
      font-weight: 600;
      color: #4A5568;
    }

    .value {
      color: #1A202C;
      font-weight: 500;
    }
  }
`;

const CustomNoticeBox = styled.div`
  background: linear-gradient(135deg, #FFF3CD 0%, #FCF4D6 100%);
  border: 2px solid #F59E0B;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;

  .notice-icon {
    font-size: 1.5rem;
    color: #F59E0B;
    margin-bottom: 10px;
  }

  .notice-text {
    font-size: 1.1rem;
    font-weight: 600;
    color: #92400E;
    line-height: 1.5;
  }
`;

const LeadCaptureForm = styled.form`
  background: #F8FAFC;
  border-radius: 15px;
  padding: 35px;
  margin-bottom: 30px;

  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1A202C;
    margin-bottom: 25px;
    text-align: center;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    .form-input {
      width: 100%;
      padding: 15px;
      border: 2px solid #E2E8F0;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
      }

      &::placeholder {
        color: #94A3B8;
      }
    }
  }
`;

const FinalCTAButton = styled(Button)`
  width: 100%;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #007BFF 0%, #0056b3 100%);
  border: none;
  border-radius: 12px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 123, 255, 0.4);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    padding: 18px;
  }
`;

const StepNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #E2E8F0;

  .nav-button {
    padding: 12px 30px;
    border: 2px solid #007BFF;
    border-radius: 8px;
    background: transparent;
    color: #007BFF;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #007BFF;
      color: white;
    }

    &.primary {
      background: #007BFF;
      color: white;

      &:hover {
        background: #0056b3;
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [openSections, setOpenSections] = useState(['strategy-design']);
  const [currentStep, setCurrentStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState({
    projectType: '',
    designType: '',
    features: [],
    customRequests: '',
    timeline: '',
    budget: ''
  });
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const basePrice = 25000;

  const serviceSections = [
    {
      id: 'strategy-design',
      title: 'Strategy & Design',
      description: 'Foundation and visual design elements',
      services: [
        { id: 'ui-ux', name: 'Full UI/UX Design', description: 'Complete user interface and experience design', price: 40000, icon: '🎨' },
        { id: 'brand-identity', name: 'Brand Identity Design', description: 'Logo, colors, typography system', price: 25000, icon: '🏷️' },
        { id: 'wireframes', name: 'Wireframes & Prototypes', description: 'Interactive prototypes and wireframes', price: 18000, icon: '📐' },
        { id: 'user-research', name: 'User Research & Testing', description: 'User interviews and usability testing', price: 30000, icon: '🔍' }
      ]
    },
    {
      id: 'core-development',
      title: 'Core Development',
      description: 'Technical implementation and backend',
      services: [
        { id: 'frontend', name: 'Frontend Development', description: 'React/Next.js responsive frontend', price: 60000, icon: '💻' },
        { id: 'backend', name: 'Backend Development', description: 'Node.js/Python API development', price: 80000, icon: '⚙️' },
        { id: 'database', name: 'Database Design', description: 'MongoDB/PostgreSQL database setup', price: 35000, icon: '🗄️' },
        { id: 'api-integration', name: 'API Integration', description: 'Third-party service integrations', price: 45000, icon: '🔌' }
      ]
    },
    {
      id: 'features',
      title: 'Website & App Features',
      description: 'Advanced functionality and integrations',
      services: [
        { id: 'ecommerce', name: 'E-commerce Functionality', description: 'Shopping cart, payments, inventory', price: 75000, icon: '🛒' },
        { id: 'admin-dashboard', name: 'Admin Dashboard', description: 'Content management system', price: 55000, icon: '📊' },
        { id: 'user-auth', name: 'User Authentication', description: 'Login, registration, user management', price: 30000, icon: '🔐' },
        { id: 'payment-gateway', name: 'Payment Gateway', description: 'Stripe, Razorpay integration', price: 25000, icon: '💳' },
        { id: 'seo-optimization', name: 'SEO Optimization', description: 'On-page SEO and performance optimization', price: 20000, icon: '📈' },
        { id: 'mobile-app', name: 'Mobile App (iOS/Android)', description: 'Native or cross-platform mobile app', price: 120000, icon: '📱' }
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleSection = (sectionId) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleServiceChange = (serviceId, price) => {
    let updatedServices;
    let newPrice = estimatedPrice;

    if (selectedServices.includes(serviceId)) {
      updatedServices = selectedServices.filter(id => id !== serviceId);
      newPrice = Math.max(0, estimatedPrice - price);
    } else {
      updatedServices = [...selectedServices, serviceId];
      newPrice = estimatedPrice + price;
    }

    setSelectedServices(updatedServices);
    setEstimatedPrice(newPrice);
  };

  const getSelectedServiceDetails = () => {
    const selectedDetails = [];
    serviceSections.forEach(section => {
      section.services.forEach(service => {
        if (selectedServices.includes(service.id)) {
          selectedDetails.push(service);
        }
      });
    });
    return selectedDetails;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculatePriceRange = () => {
    const total = basePrice + estimatedPrice;
    const lowerBound = total;
    const upperBound = Math.round(total * 1.2);
    return { min: lowerBound, max: upperBound };
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleCalculatorDataChange = (field, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLeadFormChange = (e) => {
    setLeadFormData({
      ...leadFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log('Final submission:', {
      calculatorData,
      selectedServices,
      priceRange: calculatePriceRange(),
      leadFormData
    });
    alert('Thank you! We\'ll send your estimate and book your free consultation within 24 hours.');
  };

  const steps = [
    { number: 1, title: 'Project Type' },
    { number: 2, title: 'Design & Features' },
    { number: 3, title: 'Timeline & Budget' },
    { number: 4, title: 'Custom Requests' },
    { number: 5, title: 'Your Results' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "info@sarjantech.com",
      link: "mailto:info@sarjantech.com"
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: "123 Tech Street, Innovation District, San Francisco, CA 94107"
    }
  ];

  return (
    <ContactContainer id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Let's Start Your Project</SectionTitle>
          <SectionSubtitle>
            Ready to transform your digital presence? Get in touch with us today and let's discuss your project
          </SectionSubtitle>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button 
              onClick={() => setCurrentStep(5)}
              style={{ 
                marginRight: '15px',
                background: 'linear-gradient(135deg, #007BFF 0%, #0056b3 100%)',
                border: 'none'
              }}
            >
              🎯 View Results Demo
            </Button>
            <Button 
              variant="outline"
              onClick={() => setCurrentStep(1)}
            >
              📊 Start Calculator
            </Button>
          </div>
        </motion.div>

        <ContactContent>
          <ContactForm
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Get a <span>Free</span> Quote</FormTitle>
            
            <FormGroup>
              <FormLabel htmlFor="name">Full Name *</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email Address *</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="projectType">Project Type *</FormLabel>
              <FormSelect
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select project type</option>
                <option value="web-design">Web Design</option>
                <option value="ecommerce">E-commerce Development</option>
                <option value="web-app">Web Application</option>
                <option value="mobile-app">Mobile App</option>
                <option value="seo">SEO & Marketing</option>
                <option value="other">Other</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Project Details *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements, timeline, and budget..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>

          <ContactInfo
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactCard>
              <h3 style={{ marginBottom: '25px', color: colors.darkGray, fontWeight: '600' }}>
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <ContactItem key={index}>
                  <ContactIcon>
                    {info.icon}
                  </ContactIcon>
                  <ContactDetails>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>
                        <p>{info.details}</p>
                      </a>
                    ) : (
                      <p>{info.details}</p>
                    )}
                  </ContactDetails>
                </ContactItem>
              ))}
            </ContactCard>

            <CalendlyEmbed>
              <FaCalendarAlt style={{ fontSize: '3rem', color: colors.primary, marginBottom: '20px' }} />
              <h4>Schedule a Discovery Call</h4>
              <p>Book a free 30-minute consultation to discuss your project in detail.</p>
              <Button
                onClick={() => window.open('https://calendly.com/sarjantech', '_blank')}
                style={{ marginBottom: '20px' }}
              >
                Book Now
              </Button>
              <p style={{ fontSize: '0.9rem', color: colors.textGray }}>
                Available Monday - Friday, 9 AM - 6 PM PST
              </p>
            </CalendlyEmbed>

            <MultiStepCalculator>
              <StepIndicator>
                <div className="steps">
                  {steps.map((step, index) => (
                    <React.Fragment key={step.number}>
                      <div className={`step ${currentStep === step.number ? 'active' : currentStep > step.number ? 'completed' : ''}`}>
                        <div className="step-number">
                          {currentStep > step.number ? <FaCheck /> : step.number}
                        </div>
                        <span>{step.title}</span>
                      </div>
                      {index < steps.length - 1 && <div className="step-separator" />}
                    </React.Fragment>
                  ))}
                </div>
              </StepIndicator>

              <StepContent>
                {currentStep === 5 ? (
                  <ResultsScreen>
                    <ResultsTitle>Your Estimated Investment</ResultsTitle>
                    
                    <PriceRange>
                      <div className="price-text">
                        <span className="currency">₹</span>{calculatePriceRange().min.toLocaleString('en-IN')} - <span className="currency">₹</span>{calculatePriceRange().max.toLocaleString('en-IN')}
                      </div>
                      <p className="price-subtitle">Based on your selected requirements</p>
                    </PriceRange>

                    <ProjectSummaryCard>
                      <h3>Project Summary</h3>
                      <div className="summary-item">
                        <span className="label">Service:</span>
                        <span className="value">{calculatorData.projectType || 'Website'}</span>
                      </div>
                      <div className="summary-item">
                        <span className="label">Design:</span>
                        <span className="value">{calculatorData.designType || 'Full Custom Design'}</span>
                      </div>
                      <div className="summary-item">
                        <span className="label">Features:</span>
                        <span className="value">
                          {getSelectedServiceDetails().length > 0 
                            ? getSelectedServiceDetails().slice(0, 2).map(s => s.name).join(', ')
                            : 'Social Media Login, API Integration'
                          }
                          {getSelectedServiceDetails().length > 2 && ` +${getSelectedServiceDetails().length - 2} more`}
                        </span>
                      </div>
                      <div className="summary-item">
                        <span className="label">Timeline:</span>
                        <span className="value">{calculatorData.timeline || '4-6 weeks'}</span>
                      </div>
                    </ProjectSummaryCard>

                    {(calculatorData.customRequests || getSelectedServiceDetails().some(s => s.id === 'ecommerce' || s.id === 'mobile-app')) && (
                      <CustomNoticeBox>
                        <div className="notice-icon">⚠️</div>
                        <p className="notice-text">
                          Your custom features require a detailed review. Let's talk to finalize the details!
                        </p>
                      </CustomNoticeBox>
                    )}

                    <LeadCaptureForm onSubmit={handleFinalSubmit}>
                      <h4>Get Your Detailed Estimate</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Your Full Name"
                            value={leadFormData.name}
                            onChange={handleLeadFormChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Your Email Address"
                            value={leadFormData.email}
                            onChange={handleLeadFormChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          className="form-input"
                          placeholder="Your Phone Number"
                          value={leadFormData.phone}
                          onChange={handleLeadFormChange}
                          required
                        />
                      </div>
                      
                      <FinalCTAButton type="submit">
                        Send My Estimate & Book a Free Consultation
                      </FinalCTAButton>
                    </LeadCaptureForm>
                  </ResultsScreen>
                ) : (
                  <AdvancedCalculator>
                    <CalculatorLeft>
                      <CalculatorTitle>Project Cost Calculator</CalculatorTitle>
                      <CalculatorSubtitle>
                        Get an instant, transparent estimate for your project by selecting the services you need below.
                      </CalculatorSubtitle>

                      {serviceSections.map((section) => (
                        <AccordionSection key={section.id}>
                          <AccordionHeader 
                            isOpen={openSections.includes(section.id)}
                            onClick={() => toggleSection(section.id)}
                          >
                            <div>
                              <h4>{section.title}</h4>
                              <p style={{ fontSize: '0.9rem', color: '#64748B', margin: '4px 0 0 0' }}>
                                {section.description}
                              </p>
                            </div>
                            <FaChevronDown className="toggle-icon" />
                          </AccordionHeader>
                          
                          <AccordionContent isOpen={openSections.includes(section.id)}>
                            <AccordionInner>
                              <ServiceGrid>
                                {section.services.map((service) => (
                                  <ServiceItem 
                                    key={service.id}
                                    className={selectedServices.includes(service.id) ? 'selected' : ''}
                                  >
                                    <div className="service-info">
                                      <span className="service-icon">{service.icon}</span>
                                      <div className="service-details">
                                        <h5>{service.name}</h5>
                                        <p>{service.description}</p>
                                      </div>
                                    </div>
                                    <div className="service-price">
                                      {formatCurrency(service.price)}
                                    </div>
                                    <input
                                      type="checkbox"
                                      checked={selectedServices.includes(service.id)}
                                      onChange={() => handleServiceChange(service.id, service.price)}
                                    />
                                  </ServiceItem>
                                ))}
                              </ServiceGrid>
                            </AccordionInner>
                          </AccordionContent>
                        </AccordionSection>
                      ))}

                      <StepNavigation>
                        <button 
                          className="nav-button"
                          onClick={() => handleStepChange(Math.max(1, currentStep - 1))}
                          disabled={currentStep === 1}
                        >
                          Previous
                        </button>
                        <button 
                          className="nav-button primary"
                          onClick={() => {
                            if (currentStep < 5) {
                              handleStepChange(currentStep + 1);
                            }
                          }}
                        >
                          {currentStep === 4 ? 'View Results' : 'Next Step'}
                        </button>
                      </StepNavigation>
                    </CalculatorLeft>

                    <CalculatorRight>
                      <InvoiceSidebar>
                        <h3>Your Estimated Project Cost</h3>
                        
                        <BasePrice>
                          <h4>Base Price</h4>
                          <div className="price">{formatCurrency(basePrice)}</div>
                        </BasePrice>

                        <AddOnsList>
                          {getSelectedServiceDetails().length > 0 ? (
                            getSelectedServiceDetails().map((service) => (
                              <AddOnItem key={service.id}>
                                <div className="add-on-name">
                                  <FaPlus className="plus-icon" />
                                  {service.name}
                                </div>
                                <div className="add-on-price">
                                  {formatCurrency(service.price)}
                                </div>
                              </AddOnItem>
                            ))
                          ) : (
                            <EmptyState>
                              <div className="empty-icon">📋</div>
                              <h4>No services selected</h4>
                              <p>Select services from the left panel to see them appear here with pricing.</p>
                            </EmptyState>
                          )}
                        </AddOnsList>

                        <RunningTotal>
                          <h3>Running Total:</h3>
                          <div className="total-amount">
                            <span className="currency">₹</span>{(basePrice + estimatedPrice).toLocaleString('en-IN')}
                          </div>
                        </RunningTotal>

                        <TrustIndicators>
                          <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '0' }}>
                            <strong>Transparent Pricing</strong>
                          </p>
                          <div className="trust-items">
                            <div className="trust-item">
                              <FaCheck className="icon" />
                              <span>No Hidden Fees</span>
                            </div>
                            <div className="trust-item">
                              <FaShieldAlt className="icon" />
                              <span>Fixed Price</span>
                            </div>
                            <div className="trust-item">
                              <FaClock className="icon" />
                              <span>30-Day Support</span>
                            </div>
                          </div>
                          <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '15px', lineHeight: '1.4' }}>
                            *Final pricing may vary by ±10% based on specific requirements and project complexity. All prices are in Indian Rupees (INR).
                          </p>
                        </TrustIndicators>
                      </InvoiceSidebar>
                    </CalculatorRight>
                  </AdvancedCalculator>
                )}
              </StepContent>
            </MultiStepCalculator>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
};

export default Contact;