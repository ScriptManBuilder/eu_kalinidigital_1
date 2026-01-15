import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.dark} 0%, ${props => props.theme.colors.darkGray} 100%);
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};
  text-align: center;
`;

export const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
`;

export const ContentSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};
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
`;

export const StoryContent = styled.div``;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.md};
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
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
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
`;

export const ValueTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 1.3rem;
`;

export const ValueDescription = styled.p`
  line-height: 1.8;
`;

export const TeamSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxxl};
  text-align: center;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
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
`;

export const TeamName = styled.h3`
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: 1.3rem;
`;

export const TeamRole = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const TeamBio = styled.p`
  line-height: 1.8;
`;

export const CompanyInfo = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xxl};
  border-radius: 4px;
  text-align: center;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

export const InfoItem = styled.div`
  padding: ${props => props.theme.spacing.lg};
  border-left: 3px solid ${props => props.theme.colors.accent};
`;

export const InfoLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const InfoValue = styled.div`
  color: ${props => props.theme.colors.background};
  font-size: 1.2rem;
  font-weight: 500;
`;
