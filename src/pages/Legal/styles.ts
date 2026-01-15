import styled from 'styled-components';

export const LegalWrapper = styled.div`
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
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
`;

export const ContentSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  }
`;

export const LastUpdated = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-style: italic;
`;

export const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.md};
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 2px solid ${props => props.theme.colors.border};
`;

export const SubTitle = styled.h3`
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

export const Paragraph = styled.p`
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const List = styled.ul`
  margin-left: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.md};
  
  li {
    margin-bottom: ${props => props.theme.spacing.sm};
    line-height: 1.8;
  }
`;

export const HighlightBox = styled.div`
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing.lg};
  border-left: 4px solid ${props => props.theme.colors.primary};
  margin: ${props => props.theme.spacing.lg} 0;
`;

export const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.xl};
  text-align: center;
`;
