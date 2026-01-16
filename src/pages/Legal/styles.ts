import styled from 'styled-components';

export const LegalWrapper = styled.div`
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
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.9rem;
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xs};
  }
`;

export const LastUpdated = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-style: italic;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.9rem;
    margin-bottom: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.85rem;
  }
`;

export const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    margin-bottom: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.md};
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 2px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 1.4rem;
  }
`;

export const SubTitle = styled.h3`
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1.1rem;
    margin-top: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 1rem;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.md};
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.85rem;
  }
`;

export const List = styled.ul`
  margin-left: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.md};
  
  li {
    margin-bottom: ${props => props.theme.spacing.sm};
    line-height: 1.8;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    margin-left: ${props => props.theme.spacing.md};
    font-size: 0.95rem;

    li {
      line-height: 1.7;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    margin-left: ${props => props.theme.spacing.sm};
    font-size: 0.9rem;

    li {
      line-height: 1.6;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.85rem;
  }
`;

export const HighlightBox = styled.div`
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing.lg};
  border-left: 4px solid ${props => props.theme.colors.primary};
  margin: ${props => props.theme.spacing.lg} 0;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.sm};
    margin: ${props => props.theme.spacing.md} 0;
  }
`;

export const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.xl};
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.md};
    font-size: 0.95rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.sm};
    font-size: 0.9rem;
    margin-top: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileS}) {
    font-size: 0.85rem;
  }
`;
