import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  width: 100%;
`;

export const PageHeader = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.dark} 0%, ${props => props.theme.colors.darkGray} 100%);
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

export const PageTitle = styled.h1`
  color: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
`;

export const ServicesContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xl};
  transition: all ${props => props.theme.transitions.medium};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.large};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${props => props.theme.colors.beige};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

export const ServiceTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 1.5rem;
`;

export const ServiceDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.8;
  min-height: 80px;
`;

export const ServicePrice = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: ${props => props.theme.spacing.md};
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
