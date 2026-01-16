import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
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

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.sm};
  }
`;

export const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 1.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.05rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.9rem;
  }
`;

export const ContentSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xs};
  }
`;

export const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xxl};
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xxxl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    gap: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    gap: ${props => props.theme.spacing.md};
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    gap: ${props => props.theme.spacing.sm};
  }
`;

export const StoryContent = styled.div``;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.75rem;
    margin-bottom: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 1.4rem;
  }
`;

export const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.9rem;
  }
`;

export const StoryImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, ${props => props.theme.colors.beige} 0%, ${props => props.theme.colors.lightGray} 100%);
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    height: 300px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    height: 250px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    height: 200px;
  }
`;

export const ValuesSection = styled.div`
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing.xxl};
  margin-bottom: ${props => props.theme.spacing.xxxl};
  border-radius: 4px;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.md};
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
    margin-top: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    gap: ${props => props.theme.spacing.md};
  }
`;

export const ValueCard = styled.div`
  text-align: center;
`;

export const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    width: 55px;
    height: 55px;
    font-size: 1.4rem;
  }
`;

export const ValueTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 1.3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 1rem;
  }
`;

export const ValueDescription = styled.p`
  line-height: 1.8;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.85rem;
  }
`;

export const TeamSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxxl};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    margin-bottom: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
    margin-top: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    gap: ${props => props.theme.spacing.md};
  }
`;

export const TeamCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  transition: all ${props => props.theme.transitions.medium};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const TeamImage = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${props => props.theme.colors.beige};
  border-radius: 50%;
  margin: 0 auto ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    width: 90px;
    height: 90px;
    font-size: 2.25rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

export const TeamName = styled.h3`
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: 1.3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 1rem;
  }
`;

export const TeamRole = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.85rem;
  }
`;

export const TeamBio = styled.p`
  line-height: 1.8;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.85rem;
  }
`;

export const CompanyInfo = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xxl};
  border-radius: 4px;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.md};
    margin-top: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    gap: ${props => props.theme.spacing.sm};
  }
`;

export const InfoItem = styled.div`
  padding: ${props => props.theme.spacing.lg};
  border-left: 3px solid ${props => props.theme.colors.accent};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const InfoLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: ${props => props.theme.spacing.xs};

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.8rem;
  }
`;

export const InfoValue = styled.div`
  color: ${props => props.theme.colors.background};
  font-size: 1.2rem;
  font-weight: 500;
  word-break: break-word;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.95rem;
  }
`;
