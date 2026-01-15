import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};
  min-height: 600px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
    min-height: auto;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
    gap: ${props => props.theme.spacing.lg};
  }
`;

export const HeroContent = styled.div``;

export const HeroTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    margin-bottom: ${props => props.theme.spacing.md};
    font-size: 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.75rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  line-height: 1.8;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1rem;
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.95rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};

    button {
      width: 100%;
    }
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, ${props => props.theme.colors.beige} 0%, ${props => props.theme.colors.lightGray} 100%);
  border-radius: 4px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 350px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    height: 250px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    height: 200px;
  }
`;

export const ServicesSection = styled.section`
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  }
`;

export const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.5rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1rem;
    padding: 0 ${props => props.theme.spacing.sm};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.95rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    gap: ${props => props.theme.spacing.lg};
  }
`;

export const ServiceCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all ${props => props.theme.transitions.medium};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.lg};

    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.colors.beige};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

export const ServiceTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.3rem;
  }
`;

export const ServiceDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.8;
`;

export const ServiceLink = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  transition: gap ${props => props.theme.transitions.medium};

  &:hover {
    gap: ${props => props.theme.spacing.sm};
  }
`;

export const WhyChooseSection = styled.section`
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xxl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
    margin-top: ${props => props.theme.spacing.lg};
  }
`;

export const FeatureCard = styled.div`
  text-align: center;
`;

export const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.colors.beige};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

export const FeatureTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 1.3rem;
`;

export const FeatureDescription = styled.p`
  line-height: 1.8;
`;

export const CTASection = styled.section`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  }
`;

export const CTATitle = styled.h2`
  color: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const CTADescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTAButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xxl};
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.medium};

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
    font-size: 1rem;
    width: 100%;
  }
`;
