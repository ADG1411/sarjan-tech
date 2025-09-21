import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, breakpoints, Button, SectionTitle, SectionSubtitle } from '../styles/GlobalStyles';
import { motion } from 'framer-motion';
import { 
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaShoppingCart,
  FaMobile,
  FaBullhorn,
  FaUser,
  FaCog,
  FaCamera,
  FaClipboardList,
  FaCalculator,
  FaChartLine,
  FaTasks
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
`;

// Calculator Container - Enhanced Modern Design
const CalculatorContainer = styled.div`
  background: ${colors.white};
  border-radius: 24px;
  box-shadow: 
    0 32px 64px rgba(0, 0, 0, 0.12),
    0 16px 32px rgba(255, 107, 53, 0.08),
    0 0 0 1px rgba(255, 107, 53, 0.06);
  overflow: hidden;
  margin: 80px auto;
  max-width: 950px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 50%, #ff6b35 100%);
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    0% { opacity: 0.8; }
    100% { opacity: 1; }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 40px auto;
    border-radius: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 20px auto;
    border-radius: 16px;
  }
`;

// Step Indicator - Modern Professional Design
const StepIndicator = styled.div`
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 30%, #e55a00 70%, #d14900 100%);
  padding: 50px 30px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%);
    animation: shimmer 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.02) 2px,
        rgba(255, 255, 255, 0.02) 4px
      );
    pointer-events: none;
  }

  @keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
  }

  .steps {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 25px;
    }
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    padding: 20px 15px;
    border-radius: 16px;
    position: relative;
    min-width: 120px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: row;
      min-width: auto;
      width: 90%;
      padding: 15px 25px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    &:hover:not(.active) {
      color: rgba(255, 255, 255, 0.9);
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      
      .step-number {
        border-color: rgba(255, 107, 53, 0.6);
        background: rgba(255, 107, 53, 0.2);
        transform: scale(1.05);
      }
    }

    &.active {
      color: #ff6b35;
      transform: translateY(-6px);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 107, 53, 0.3);
      box-shadow: 0 15px 40px rgba(255, 107, 53, 0.2), 0 5px 20px rgba(0, 0, 0, 0.1);
      
      .step-number {
        background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
        color: white;
        box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
        transform: scale(1.1);
        border: none;
      }

      span {
        font-weight: 700;
        color: #ff6b35;
        text-shadow: none;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 140, 66, 0.05) 100%);
        border-radius: 16px;
        border: 2px solid rgba(255, 107, 53, 0.3);
      }
    }

    &.completed {
      color: rgba(255, 255, 255, 0.8);
      
      .step-number {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
        border: none;
      }
    }

    .step-number {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.1rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 3;
      
      @media (max-width: ${breakpoints.mobile}) {
        width: 44px;
        height: 44px;
        font-size: 1rem;
      }
    }

    span {
      font-size: 0.95rem;
      font-weight: 600;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      z-index: 3;
      letter-spacing: 0.5px;
      
      @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
        margin-left: 10px;
      }
    }
  }

  .step-separator {
    flex: 1;
    height: 4px;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 107, 53, 0.4) 30%, 
      rgba(255, 140, 66, 0.6) 50%,
      rgba(255, 107, 53, 0.4) 70%, 
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 3px;
    margin: 0 20px;
    position: relative;
    overflow: hidden;
    
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      animation: progress-flow 3s ease-in-out infinite;
    }
  }

  @keyframes progress-flow {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

// Step Content Container
const StepContent = styled.div`
  padding: 70px 60px;
  min-height: 600px;
  background: linear-gradient(135deg, #fefefe 0%, #f8fafb 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 140, 66, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 50px 40px;
    min-height: 500px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 25px;
    min-height: 450px;
  }
`;

const StepTitle = styled.h2`
  font-family: 'Inter', 'Poppins', sans-serif;
  font-size: 2.6rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%);
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const StepSubtitle = styled.p`
  font-family: 'Inter', 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #64748B;
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.7;
  font-weight: 500;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

// Project Type Cards
const ProjectTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

// Unified Card Style for all steps
const UnifiedCard = styled.div`
  background: ${props => props.selected ? 'linear-gradient(135deg, #FFF5F0 0%, #FFEEE5 100%)' : colors.white};
  border: 3px solid ${props => props.selected ? '#ff6b35' : '#E2E8F0'};
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    border-color: #ff6b35;
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 107, 53, 0.2);
  }

  .checkbox {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 20px;
    height: 20px;
    accent-color: #ff6b35;
    cursor: pointer;
    z-index: 2;
  }

  .icon {
    font-size: 2.5rem;
    color: ${props => props.selected ? '#ff6b35' : '#64748B'};
    margin-bottom: 15px;
    transition: all 0.3s ease;
  }

  .title {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #1A202C;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .subtitle {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 0.95rem;
    color: #64748B;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .price, .multiplier, .range {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: #ff6b35;
  }

  .badge {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: #ff6b35;
    background: rgba(255, 107, 53, 0.1);
    padding: 6px 14px;
    border-radius: 20px;
    display: inline-block;
    margin-top: 8px;
  }

  ${props => props.selected && `
    &::after {
      content: '✓';
      position: absolute;
      top: 12px;
      right: 15px;
      background: #ff6b35;
      color: white;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
    }
  `}
`;

// Use UnifiedCard for Project Types
const ProjectCard = styled(UnifiedCard)``;

// Features Section (unused styled components removed)

const FeatureItem = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid #F1F5F9;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(0, 123, 255, 0.05);
    padding-left: 8px;
    border-radius: 6px;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #ff6b35;
    cursor: pointer;
  }

  .feature-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .feature-name {
      font-family: 'Inter', 'Poppins', sans-serif;
      font-weight: 500;
      color: #374151;
      font-size: 0.95rem;
    }

    .feature-price {
      font-family: 'Inter', 'Poppins', sans-serif;
      font-weight: 700;
      color: #ff6b35;
      font-size: 0.9rem;
    }
  }
`;

// Timeline Options
const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Use UnifiedCard for Timeline
const TimelineCard = styled(UnifiedCard)``;

// Support Policy Options
const PolicyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const PolicyCard = styled(UnifiedCard)`
  position: relative;
  padding: 25px 20px;
  
  &.popular {
    border-color: #ff6b35;
    background: linear-gradient(135deg, #FFF5F0 0%, #FFEEE5 100%);
    
    &::before {
      content: 'Most Popular';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: #ff6b35;
      color: white;
      padding: 6px 16px;
      border-radius: 16px;
      font-size: 0.75rem;
      font-weight: 700;
      z-index: 2;
    }
  }

  .policy-header {
    text-align: center;
    margin-bottom: 20px;
    
    .policy-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 5px;
    }
    
    .policy-duration {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 10px;
    }
    
    .policy-price {
      font-size: 1.8rem;
      font-weight: 800;
      color: #ff6b35;
      
      .price-note {
        font-size: 0.8rem;
        color: #666;
        font-weight: 400;
      }
    }
  }

  .policy-features {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    
    li {
      padding: 6px 0;
      font-size: 0.9rem;
      color: #555;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      
      &::before {
        content: '✓';
        color: #ff6b35;
        font-weight: bold;
        flex-shrink: 0;
      }
    }
  }

  .policy-description {
    text-align: center;
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
    margin-top: 15px;
  }
`;

// Budget Options
const BudgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Use UnifiedCard for Budget
const BudgetCard = styled(UnifiedCard)``;

// Results Screen Components
const ResultsContainer = styled.div`
  text-align: center;
`;

// Project Summary Box
const ProjectSummaryBox = styled.div`
  background: linear-gradient(135deg, #FFF5F0 0%, #FFEEE5 100%);
  border: 2px solid #ff6b35;
  border-radius: 16px;
  padding: 25px;
  margin: 25px 0;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.1);

  .summary-title {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ff6b35;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }

  .summary-item {
    background: white;
    padding: 15px;
    border-radius: 10px;
    border-left: 4px solid #ff6b35;

    .item-label {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 5px;
    }

    .item-value {
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
    }
  }
`;

// Cost Breakdown Box
const CostBreakdownBox = styled.div`
  background: white;
  border: 2px solid #E2E8F0;
  border-radius: 16px;
  padding: 25px;
  margin: 25px 0;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);

  .breakdown-title {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .breakdown-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #F1F5F9;

    &:last-child {
      border-bottom: none;
      border-top: 2px solid #ff6b35;
      padding-top: 15px;
      margin-top: 10px;
      font-weight: 700;
      font-size: 1.1rem;
    }

    .item-description {
      color: #666;
    }

    .item-amount {
      color: #ff6b35;
      font-weight: 600;
    }
  }
`;

// Package Comparison Box
const PackageComparisonBox = styled.div`
  background: white;
  border: 2px solid #E2E8F0;
  border-radius: 16px;
  padding: 25px;
  margin: 25px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  .comparison-title {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .packages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .package-card {
    border: 2px solid #E2E8F0;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;

    &.recommended {
      border-color: #ff6b35;
      background: linear-gradient(135deg, #FFF5F0 0%, #FFEEE5 100%);
      position: relative;

      &::before {
        content: 'Recommended';
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: #ff6b35;
        color: white;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }

    .package-name {
      font-size: 1.2rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 10px;
    }

    .package-price {
      font-size: 1.5rem;
      font-weight: 800;
      color: #ff6b35;
      margin-bottom: 15px;
    }

    .package-features {
      text-align: left;
      
      li {
        padding: 4px 0;
        font-size: 0.9rem;
        color: #666;
      }
    }
  }
`;

// Progress Tracker Box
const ProgressTrackerBox = styled.div`
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
  border: 2px solid #CBD5E1;
  border-radius: 16px;
  padding: 25px;
  margin: 25px 0;

  .progress-title {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .progress-bar {
    background: #E2E8F0;
    height: 12px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;

    .progress-fill {
      background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%);
      height: 100%;
      border-radius: 10px;
      transition: width 0.3s ease;
    }
  }

  .progress-text {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }
`;

// Feature Category Box
const FeatureCategoryBox = styled.div`
  background: white;
  border: 2px solid #E2E8F0;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  .category-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f1f5f9;

    .category-title {
      font-family: 'Inter', 'Poppins', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: #333;
    }

    .category-count {
      background: #ff6b35;
      color: white;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  }

  .features-grid {
    display: grid;
    gap: 12px;
  }
`;

const EstimatedCost = styled.div`
  background: linear-gradient(135deg, #FFF5F0 0%, #FFEEE5 100%);
  border: 3px solid #ff6b35;
  border-radius: 20px;
  padding: 40px 30px;
  margin-bottom: 35px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%);
  }

  .cost-title {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 15px;
  }

  .cost-range {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    color: #ff6b35;
    line-height: 1.1;
    margin-bottom: 10px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }

  .cost-note {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 0.95rem;
    color: #64748B;
  }
`;

const BudgetComparison = styled.div`
  background: ${props => props.isOverBudget ? 'linear-gradient(135deg, #FEF3C7 0%, #FDF4C7 100%)' : 'linear-gradient(135deg, #D1FAE5 0%, #ECFDF5 100%)'};
  border: 2px solid ${props => props.isOverBudget ? '#F59E0B' : '#10B981'};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;

  .comparison-message {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: ${props => props.isOverBudget ? '#92400E' : '#047857'};
    line-height: 1.5;
  }
`;

const ProjectSummary = styled.div`
  background: ${colors.white};
  border: 2px solid #E2E8F0;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  text-align: left;

  .summary-title {
    font-family: 'Inter', 'Poppins', sans-serif;
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
      font-family: 'Inter', 'Poppins', sans-serif;
      font-weight: 600;
      color: #4A5568;
    }

    .value {
      font-family: 'Inter', 'Poppins', sans-serif;
      color: #1A202C;
      font-weight: 500;
    }
  }
`;

const LeadForm = styled.form`
  background: #F8FAFC;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;

  .form-title {
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #1A202C;
    margin-bottom: 20px;
    text-align: center;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;

    @media (max-width: ${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }

  .form-input {
    width: 100%;
    padding: 15px;
    border: 2px solid #E2E8F0;
    border-radius: 10px;
    font-family: 'Inter', 'Poppins', sans-serif;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #ff6b35;
    }

    &::placeholder {
      color: #94A3B8;
    }
  }
`;

const ProposalButton = styled(Button)`
  width: 100%;
  padding: 18px 30px;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(255, 107, 53, 0.3);
  }
`;

// Navigation
const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 60px;
  background: linear-gradient(135deg, #f8fafb 0%, #ffffff 100%);
  border-top: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6b35, #ff8c42) 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 25px 30px;
    flex-direction: column;
    gap: 20px;
  }
`;

const NavButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  font-weight: 700;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  position: relative;
  overflow: hidden;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none !important;
  }

  &.secondary {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafb 100%);
    color: #475569;
    border: 2px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
      border-color: #cbd5e1;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.5s;
    }

    &:hover::before {
      left: 100%;
    }
  }

  &.primary {
    background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);
    color: white;
    border: none;
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.25);

    &:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(255, 107, 53, 0.4);
      background: linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%);
    }

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

    &:hover::before {
      left: 100%;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const Contact = () => {
  // Calculator State
  const [currentStep, setCurrentStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState({
    projectTypes: [], // Changed to array for multiple selections
    features: [],
    timeline: null,
    supportPolicy: null, // New field for support policy selection
    budget: null
  });

  // Lead Form State
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Project Types with base pricing
  const projectTypes = [
    {
      id: 'business',
      title: 'Standard Business Website',
      icon: <FaGlobe />,
      basePrice: 50000,
      description: 'Professional website for your business'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Platform',
      icon: <FaShoppingCart />,
      basePrice: 100000,
      description: 'Online store with payment integration'
    },
    {
      id: 'mobile',
      title: 'Mobile App (iOS/Android/Both)',
      icon: <FaMobile />,
      basePrice: 150000,
      description: 'Native or cross-platform mobile app'
    },
    {
      id: 'marketing',
      title: 'SEO & Digital Marketing Campaign',
      icon: <FaBullhorn />,
      basePrice: 40000,
      description: 'Comprehensive digital marketing strategy'
    }
  ];

  // Features with pricing
  const featureCategories = [
    {
      title: 'User Features',
      icon: <FaUser />,
      features: [
        { id: 'user_login', name: 'User Login & Profiles', price: 15000 },
        { id: 'admin_dashboard', name: 'Admin Dashboard', price: 20000 },
        { id: 'reviews', name: 'Customer Reviews & Ratings', price: 10000 }
      ]
    },
    {
      title: 'E-commerce Features',
      icon: <FaShoppingCart />,
      features: [
        { id: 'cart_payment', name: 'Shopping Cart & Online Payments', price: 25000 },
        { id: 'wishlist', name: 'Product Wishlist & Comparisons', price: 12000 }
      ]
    },
    {
      title: 'Content & Interaction',
      icon: <FaCamera />,
      features: [
        { id: 'blog', name: 'Blog / News Section', price: 8000 },
        { id: 'gallery', name: 'Photo / Video Gallery', price: 10000 },
        { id: 'live_chat', name: 'Live Chat Integration', price: 12000 }
      ]
    },
    {
      title: 'Advanced',
      icon: <FaCog />,
      features: [
        { id: 'booking', name: 'Booking / Appointment System', price: 20000 },
        { id: 'api_integration', name: 'Third-Party API Integration', price: 25000 }
      ]
    }
  ];

  // Timeline options with multipliers
  const timelineOptions = [
    {
      id: 'flexible',
      title: 'Flexible',
      duration: '3+ Months',
      multiplier: 1.0,
      description: 'Standard development pace'
    },
    {
      id: 'standard',
      title: 'Standard',
      duration: '1-2 Months',
      multiplier: 1.25,
      description: 'Accelerated development'
    },
    {
      id: 'urgent',
      title: 'Urgent',
      duration: 'Under 1 Month',
      multiplier: 1.5,
      description: 'Rush delivery'
    }
  ];

  // Budget ranges
  const budgetRanges = [
    { id: 'budget_50k', min: 0, max: 50000, label: 'Up to ₹50,000', description: 'Starter projects' },
    { id: 'budget_150k', min: 50000, max: 150000, label: '₹50,000 - ₹1,50,000', description: 'Standard projects' },
    { id: 'budget_300k', min: 150000, max: 300000, label: '₹1,50,000 - ₹3,00,000', description: 'Premium projects' },
    { id: 'budget_300k_plus', min: 300000, max: Infinity, label: '₹3,00,000+', description: 'Enterprise projects' }
  ];

  // Policy & Support Options
  const supportPolicies = [
    {
      id: 'basic_support',
      title: 'Basic Support',
      duration: '3 Months',
      price: 0,
      features: [
        'Bug fixes and technical issues',
        'Email support (48h response)',
        'Basic maintenance',
        'Security updates'
      ],
      description: 'Essential support for 3 months'
    },
    {
      id: 'standard_support',
      title: 'Standard Support',
      duration: '1 Year',
      price: 15000,
      features: [
        'Everything in Basic Support',
        'Priority email support (24h response)',
        'Phone support (business hours)',
        'Content updates (up to 5/month)',
        'Performance monitoring',
        'Monthly backup & restore'
      ],
      description: 'Comprehensive 1-year support package',
      popular: true
    },
    {
      id: 'premium_support',
      title: 'Premium Support',
      duration: '2 Years',
      price: 25000,
      features: [
        'Everything in Standard Support',
        'Priority phone support (4h response)',
        'Live chat support',
        'Unlimited content updates',
        'Feature enhancements',
        'Server management',
        'SEO monitoring & optimization',
        'Advanced analytics reporting'
      ],
      description: 'Premium 2-year support with advanced features'
    },
    {
      id: 'enterprise_support',
      title: 'Enterprise Support',
      duration: '3+ Years',
      price: 40000,
      features: [
        'Everything in Premium Support',
        'Dedicated account manager',
        '24/7 emergency support',
        'Custom development hours (20h/year)',
        'Third-party integrations',
        'Advanced security monitoring',
        'Compliance reporting',
        'Training sessions for your team'
      ],
      description: 'Enterprise-grade support for mission-critical projects'
    }
  ];

  // Formatting function for currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Pricing calculation engine
  const calculatePrice = () => {
    if (calculatorData.projectTypes.length === 0 || !calculatorData.timeline) return { min: 0, max: 0 };

    // Calculate combined base price for multiple project types
    const selectedProjectTypes = projectTypes.filter(type => calculatorData.projectTypes.includes(type.id));
    const basePrice = selectedProjectTypes.reduce((total, project) => total + project.basePrice, 0);
    
    const featuresPrice = calculatorData.features.reduce((total, featureId) => {
      const allFeatures = featureCategories.flatMap(cat => cat.features);
      const feature = allFeatures.find(f => f.id === featureId);
      return total + (feature ? feature.price : 0);
    }, 0);

    // Add support policy cost
    const selectedSupport = supportPolicies.find(p => p.id === calculatorData.supportPolicy);
    const supportPrice = selectedSupport ? selectedSupport.price : 0;

    const selectedTimeline = timelineOptions.find(t => t.id === calculatorData.timeline);
    const multiplier = selectedTimeline ? selectedTimeline.multiplier : 1;

    const totalPrice = (basePrice + featuresPrice + supportPrice) * multiplier;
    const minPrice = totalPrice * 0.9; // -10%
    const maxPrice = totalPrice * 1.1; // +10%

    return { min: minPrice, max: maxPrice, base: totalPrice };
  };

  // Handle project type selection (multiple choice)
  const handleProjectTypeToggle = (projectId) => {
    setCalculatorData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(projectId)
        ? prev.projectTypes.filter(id => id !== projectId)
        : [...prev.projectTypes, projectId]
    }));
  };

  // Handle feature selection
  const handleFeatureToggle = (featureId) => {
    setCalculatorData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  // Handle timeline selection
  const handleTimelineSelect = (timelineId) => {
    setCalculatorData(prev => ({ ...prev, timeline: timelineId }));
  };

  // Handle budget selection
  const handleBudgetSelect = (budgetId) => {
    setCalculatorData(prev => ({ ...prev, budget: budgetId }));
  };

  // Handle support policy selection
  const handleSupportPolicySelect = (policyId) => {
    setCalculatorData(prev => ({ ...prev, supportPolicy: policyId }));
  };

  // Handle lead form input
  const handleLeadChange = (e) => {
    setLeadData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle lead form submission
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    console.log('Lead form submitted:', leadData);
    alert('Thank you! We will contact you within 24 hours with your official proposal.');
  };

  // Navigation handlers
  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Check if current step is valid for navigation
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return calculatorData.projectTypes.length > 0;
      case 2:
        return true; // Features are optional
      case 3:
        return calculatorData.timeline !== null;
      case 4:
        return calculatorData.supportPolicy !== null;
      case 5:
        return calculatorData.budget !== null;
      default:
        return false;
    }
  };

  // Render step indicator
  const renderStepIndicator = () => (
    <StepIndicator>
      <div className="steps">
        {[1, 2, 3, 4, 5, 6].map((step, index) => (
          <React.Fragment key={step}>
            <div className={`step ${currentStep === step ? 'active' : currentStep > step ? 'completed' : ''}`}>
              <div className="step-number">
                {currentStep > step ? <FaCheck /> : step}
              </div>
              <span>
                {step === 1 && 'Project Type'}
                {step === 2 && 'Features'}
                {step === 3 && 'Timeline'}
                {step === 4 && 'Support'}
                {step === 5 && 'Budget'}
                {step === 6 && 'Results'}
              </span>
            </div>
            {index < 5 && <div className="step-separator"></div>}
          </React.Fragment>
        ))}
      </div>
    </StepIndicator>
  );

  // Helper Functions
  const calculateProgress = () => {
    let progress = 0;
    if (calculatorData.projectTypes.length > 0) progress += 16.67; // 100/6 steps
    if (calculatorData.features.length > 0) progress += 16.67;
    if (calculatorData.timeline) progress += 16.67;
    if (calculatorData.supportPolicy) progress += 16.67;
    if (calculatorData.budget) progress += 16.67;
    if (leadData.name && leadData.email) progress += 16.65; // Slight adjustment for rounding
    return Math.round(progress);
  };

  const getSelectedProjectNames = () => {
    return projectTypes
      .filter(p => calculatorData.projectTypes.includes(p.id))
      .map(p => p.name)
      .join(', ');
  };

  const getSelectedTimeline = () => {
    return timelineOptions.find(t => t.id === calculatorData.timeline)?.duration || 'Not selected';
  };

  const getBasePrice = () => {
    return projectTypes
      .filter(p => calculatorData.projectTypes.includes(p.id))
      .reduce((total, p) => total + p.basePrice, 0);
  };

  const getFeatureCost = () => {
    const allFeatures = featureCategories.flatMap(cat => cat.features);
    return allFeatures
      .filter(f => calculatorData.features.includes(f.id))
      .reduce((total, f) => total + f.price, 0);
  };

  const getTimelineMultiplier = () => {
    const timeline = timelineOptions.find(t => t.id === calculatorData.timeline);
    return timeline ? timeline.multiplier : 1;
  };

  const getSupportPolicyDetails = () => {
    const policy = supportPolicies.find(p => p.id === calculatorData.supportPolicy);
    return policy ? { title: policy.title, price: policy.price } : { title: 'Not selected', price: 0 };
  };

  // Render Step 1: Project Type
  const renderStep1 = () => (
    <StepContent>
      <StepTitle>What kind of projects do you need?</StepTitle>
      <StepSubtitle>Select all project types that match your requirements (you can choose multiple)</StepSubtitle>
      
      <ProjectTypeGrid>
        {projectTypes.map((project) => (
          <ProjectCard
            key={project.id}
            selected={calculatorData.projectTypes.includes(project.id)}
            onClick={() => handleProjectTypeToggle(project.id)}
          >
            <input
              type="checkbox"
              className="checkbox"
              checked={calculatorData.projectTypes.includes(project.id)}
              onChange={() => handleProjectTypeToggle(project.id)}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="icon">{project.icon}</div>
            <div className="title">{project.title}</div>
            <div className="price">{formatCurrency(project.basePrice)}</div>
          </ProjectCard>
        ))}
      </ProjectTypeGrid>
      
      {calculatorData.projectTypes.length > 0 && (
        <ProjectSummaryBox>
          <div className="summary-title">
            <FaClipboardList />
            Project Summary
          </div>
          <div className="summary-grid">
            <div className="summary-item">
              <div className="item-label">Selected Projects</div>
              <div className="item-value">{calculatorData.projectTypes.length} Projects</div>
            </div>
            <div className="summary-item">
              <div className="item-label">Project Types</div>
              <div className="item-value">{getSelectedProjectNames()}</div>
            </div>
            <div className="summary-item">
              <div className="item-label">Base Investment</div>
              <div className="item-value">{formatCurrency(getBasePrice())}</div>
            </div>
            <div className="summary-item">
              <div className="item-label">Progress</div>
              <div className="item-value">{calculateProgress()}% Complete</div>
            </div>
          </div>
        </ProjectSummaryBox>
      )}

      {calculatorData.projectTypes.length > 0 && (
        <ProgressTrackerBox>
          <div className="progress-title">
            <FaTasks />
            Calculator Progress
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${calculateProgress()}%` }}></div>
          </div>
          <div className="progress-text">
            {calculateProgress()}% complete - {calculateProgress() < 100 ? 'Continue to next step' : 'Ready to submit!'}
          </div>
        </ProgressTrackerBox>
      )}
    </StepContent>
  );

  // Render Step 2: Features
  const renderStep2 = () => (
    <StepContent>
      <StepTitle>Which features are essential for your project?</StepTitle>
      <StepSubtitle>Select all the features you need (optional step)</StepSubtitle>
      
      {calculatorData.features.length > 0 && (
        <ProjectSummaryBox>
          <div className="summary-title">
            <FaCheck />
            Selected Features Summary
          </div>
          <div className="summary-grid">
            <div className="summary-item">
              <div className="item-label">Features Selected</div>
              <div className="item-value">{calculatorData.features.length} Features</div>
            </div>
            <div className="summary-item">
              <div className="item-label">Additional Cost</div>
              <div className="item-value">{formatCurrency(getFeatureCost())}</div>
            </div>
            <div className="summary-item">
              <div className="item-label">Progress</div>
              <div className="item-value">{calculateProgress()}% Complete</div>
            </div>
          </div>
        </ProjectSummaryBox>
      )}
      
      {featureCategories.map((category) => (
        <FeatureCategoryBox key={category.title}>
          <div className="category-header">
            <span className="category-icon">{category.icon}</span>
            <span className="category-title">{category.title}</span>
            <span className="category-count">
              {category.features.filter(f => calculatorData.features.includes(f.id)).length} / {category.features.length}
            </span>
          </div>
          <div className="features-grid">
            {category.features.map((feature) => (
              <FeatureItem key={feature.id}>
                <input
                  type="checkbox"
                  checked={calculatorData.features.includes(feature.id)}
                  onChange={() => handleFeatureToggle(feature.id)}
                />
                <div className="feature-info">
                  <span className="feature-name">{feature.name}</span>
                  <span className="feature-price">+{formatCurrency(feature.price)}</span>
                </div>
              </FeatureItem>
            ))}
          </div>
        </FeatureCategoryBox>
      ))}
    </StepContent>
  );

  // Render Step 3: Timeline
  const renderStep3 = () => (
    <StepContent>
      <StepTitle>How soon do you need this project completed?</StepTitle>
      <StepSubtitle>Timeline affects the final pricing due to resource allocation</StepSubtitle>
      
      <TimelineGrid>
        {timelineOptions.map((timeline) => (
          <TimelineCard
            key={timeline.id}
            selected={calculatorData.timeline === timeline.id}
            onClick={() => handleTimelineSelect(timeline.id)}
          >
            <div className="title">{timeline.title}</div>
            <div className="subtitle">{timeline.duration}</div>
            <div className="badge">{timeline.multiplier}x pricing</div>
          </TimelineCard>
        ))}
      </TimelineGrid>
    </StepContent>
  );

  // Render Step 4: Support Policy
  const renderStep4 = () => (
    <StepContent>
      <StepTitle>Choose your support & maintenance plan</StepTitle>
      <StepSubtitle>Select the support package that best fits your ongoing needs</StepSubtitle>
      
      <PolicyGrid>
        {supportPolicies.map((policy) => (
          <PolicyCard
            key={policy.id}
            selected={calculatorData.supportPolicy === policy.id}
            onClick={() => handleSupportPolicySelect(policy.id)}
            className={policy.popular ? 'popular' : ''}
          >
            <div className="policy-header">
              <div className="policy-title">{policy.title}</div>
              <div className="policy-duration">{policy.duration}</div>
              <div className="policy-price">
                {policy.price === 0 ? 'FREE' : formatCurrency(policy.price)}
                <div className="price-note">
                  {policy.price === 0 ? 'Included with project' : 'Per year'}
                </div>
              </div>
            </div>
            
            <ul className="policy-features">
              {policy.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <div className="policy-description">{policy.description}</div>
          </PolicyCard>
        ))}
      </PolicyGrid>
    </StepContent>
  );

  // Render Step 5: Budget  
  const renderStep5 = () => (
    <StepContent>
      <StepTitle>What is your approximate budget for this project?</StepTitle>
      <StepSubtitle>This helps us understand your expectations and provide suitable solutions</StepSubtitle>
      
      <BudgetGrid>
        {budgetRanges.map((budget) => (
          <BudgetCard
            key={budget.id}
            selected={calculatorData.budget === budget.id}
            onClick={() => handleBudgetSelect(budget.id)}
          >
            <div className="title">{budget.label}</div>
            <div className="subtitle">{budget.description}</div>
          </BudgetCard>
        ))}
      </BudgetGrid>
    </StepContent>
  );

  // Render Step 6: Results
  const renderStep6 = () => {
    const pricing = calculatePrice();
    const selectedBudget = budgetRanges.find(b => b.id === calculatorData.budget);
    const isOverBudget = selectedBudget && pricing.max > selectedBudget.max;
    
    const selectedProjectTypes = projectTypes.filter(p => calculatorData.projectTypes.includes(p.id));
    const selectedTimeline = timelineOptions.find(t => t.id === calculatorData.timeline);
    
    return (
      <StepContent>
        <ResultsContainer>
          <StepTitle>Your Project Estimate</StepTitle>
          
          <EstimatedCost>
            <div className="cost-title">Estimated Cost</div>
            <div className="cost-range">
              {formatCurrency(pricing.min)} – {formatCurrency(pricing.max)}
            </div>
            <div className="cost-note">Final pricing may vary based on specific requirements</div>
          </EstimatedCost>

          <CostBreakdownBox>
            <div className="breakdown-title">
              <FaCalculator />
              Cost Breakdown
            </div>
            <div className="breakdown-item">
              <span className="item-description">Base Project Cost</span>
              <span className="item-amount">{formatCurrency(getBasePrice())}</span>
            </div>
            <div className="breakdown-item">
              <span className="item-description">Additional Features ({calculatorData.features.length} selected)</span>
              <span className="item-amount">{formatCurrency(getFeatureCost())}</span>
            </div>
            <div className="breakdown-item">
              <span className="item-description">Support & Maintenance ({getSupportPolicyDetails().title})</span>
              <span className="item-amount">{formatCurrency(getSupportPolicyDetails().price)}</span>
            </div>
            <div className="breakdown-item">
              <span className="item-description">Timeline Adjustment ({getSelectedTimeline()})</span>
              <span className="item-amount">×{getTimelineMultiplier()}</span>
            </div>
            <div className="breakdown-item">
              <span className="item-description">Total Project Investment</span>
              <span className="item-amount">{formatCurrency(pricing.min)} – {formatCurrency(pricing.max)}</span>
            </div>
          </CostBreakdownBox>

          {selectedBudget && (
            <BudgetComparison isOverBudget={isOverBudget}>
              <div className="comparison-message">
                {isOverBudget
                  ? `The features you've selected typically require a budget in the ${formatCurrency(pricing.min)} – ${formatCurrency(pricing.max)} range. Let's talk to find a solution that works for you!`
                  : `Great! Your estimated cost falls within your budget range of ${selectedBudget.label}.`
                }
              </div>
            </BudgetComparison>
          )}

          <PackageComparisonBox>
            <div className="comparison-title">
              <FaChartLine />
              Package Recommendations
            </div>
            <div className="packages-grid">
              <div className={`package-card ${pricing.max <= 50000 ? 'recommended' : ''}`}>
                <div className="package-name">Starter Package</div>
                <div className="package-price">₹25,000 - ₹50,000</div>
                <ul className="package-features">
                  <li>✓ Single project type</li>
                  <li>✓ Basic features</li>
                  <li>✓ Standard timeline</li>
                  <li>✓ Basic support</li>
                </ul>
              </div>
              <div className={`package-card ${pricing.max > 50000 && pricing.max <= 150000 ? 'recommended' : ''}`}>
                <div className="package-name">Professional Package</div>
                <div className="package-price">₹50,000 - ₹1,50,000</div>
                <ul className="package-features">
                  <li>✓ Multiple project types</li>
                  <li>✓ Advanced features</li>
                  <li>✓ Flexible timeline</li>
                  <li>✓ Priority support</li>
                  <li>✓ Regular updates</li>
                </ul>
              </div>
              <div className={`package-card ${pricing.max > 150000 ? 'recommended' : ''}`}>
                <div className="package-name">Enterprise Package</div>
                <div className="package-price">₹1,50,000+</div>
                <ul className="package-features">
                  <li>✓ All project types</li>
                  <li>✓ Premium features</li>
                  <li>✓ Rush delivery</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Custom solutions</li>
                  <li>✓ Maintenance included</li>
                </ul>
              </div>
            </div>
          </PackageComparisonBox>

          <ProjectSummary>
            <div className="summary-title">Project Summary</div>
            <div className="summary-item">
              <span className="label">Project Types:</span>
              <span className="value">
                {selectedProjectTypes.length > 0 
                  ? selectedProjectTypes.map(p => p.title).join(', ')
                  : 'Not selected'
                }
              </span>
            </div>
            <div className="summary-item">
              <span className="label">Selected Features:</span>
              <span className="value">{calculatorData.features.length} features</span>
            </div>
            <div className="summary-item">
              <span className="label">Timeline:</span>
              <span className="value">{selectedTimeline ? `${selectedTimeline.title} (${selectedTimeline.duration})` : 'Not selected'}</span>
            </div>
            <div className="summary-item">
              <span className="label">Budget Range:</span>
              <span className="value">{selectedBudget ? selectedBudget.label : 'Not specified'}</span>
            </div>
          </ProjectSummary>

          <LeadForm onSubmit={handleLeadSubmit}>
            <div className="form-title">Get Your Official Proposal</div>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={leadData.name}
                onChange={handleLeadChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={leadData.email}
                onChange={handleLeadChange}
                className="form-input"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={leadData.phone}
              onChange={handleLeadChange}
              className="form-input"
              required
            />
            <ProposalButton type="submit">
              Get My Official Proposal
            </ProposalButton>
          </LeadForm>
        </ResultsContainer>
      </StepContent>
    );
  };

  return (
    <ContactContainer id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Project Cost Calculator</SectionTitle>
          <SectionSubtitle>
            Get an accurate estimate for your project in just a few steps
          </SectionSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CalculatorContainer>
            {renderStepIndicator()}
            
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
            {currentStep === 5 && renderStep5()}
            {currentStep === 6 && renderStep6()}

            <NavigationButtons>
              <NavButton
                className="secondary"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <FaArrowLeft /> Previous
              </NavButton>
              
              {currentStep < 6 ? (
                <NavButton
                  className="primary"
                  onClick={nextStep}
                  disabled={!canProceed()}
                >
                  Next Step <FaArrowRight />
                </NavButton>
              ) : (
                <NavButton
                  className="secondary"
                  onClick={() => {
                    setCurrentStep(1);
                    setCalculatorData({
                      projectTypes: [],
                      features: [],
                      timeline: null,
                      supportPolicy: null,
                      budget: null
                    });
                    setLeadData({ name: '', email: '', phone: '' });
                  }}
                >
                  Start Over
                </NavButton>
              )}
            </NavigationButtons>
          </CalculatorContainer>
        </motion.div>
      </Container>
    </ContactContainer>
  );
};

export default Contact;