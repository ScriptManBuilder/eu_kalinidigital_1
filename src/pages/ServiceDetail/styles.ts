import styled from 'styled-components';

export const ServiceDetailWrapper = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.dark} 0%, ${props => props.theme.colors.darkGray} 100%);
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};
`;

export const HeroContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const BackLink = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${props => props.theme.spacing.lg};
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.medium};

  &:hover {
    color: ${props => props.theme.colors.accent};
    gap: ${props => props.theme.spacing.sm};
  }
`;

export const ServiceIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const ServiceTitle = styled.h1`
  color: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const ServiceSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
`;

export const ContentSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${props => props.theme.spacing.xxl};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    gap: ${props => props.theme.spacing.xl};
  }
`;

export const MainContent = styled.div``;

export const Sidebar = styled.div`
  position: sticky;
  top: 100px;
  height: fit-content;
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.lg};
  padding-bottom: ${props => props.theme.spacing.md};
  border-bottom: 2px solid ${props => props.theme.colors.border};
`;

export const Description = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

export const FeaturesSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

export const FeaturesList = styled.ul`
  display: grid;
  gap: ${props => props.theme.spacing.md};
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.beige};
  border-left: 3px solid ${props => props.theme.colors.primary};
  
  &::before {
    content: '✓';
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const BenefitsSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

export const BenefitsList = styled.ul`
  display: grid;
  gap: ${props => props.theme.spacing.md};
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  
  &::before {
    content: '→';
    color: ${props => props.theme.colors.accent};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const CTABox = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const CTATitle = styled.h3`
  color: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const CTAText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.8;
`;

export const PriceBox = styled.div`
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const PriceLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const PriceNote = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
`;

export const ContactBox = styled.div`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
`;

export const ContactTitle = styled.h4`
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const ContactText = styled.p`
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.8;
`;
