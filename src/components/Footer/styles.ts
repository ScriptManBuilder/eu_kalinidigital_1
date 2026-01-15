import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xxxl} 0 ${props => props.theme.spacing.lg};
`;

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: 0 ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.xl};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    gap: ${props => props.theme.spacing.md};
    padding-bottom: ${props => props.theme.spacing.lg};
  }
`;

export const FooterColumn = styled.div``;

export const FooterTitle = styled.h4`
  color: ${props => props.theme.colors.background};
  font-size: 1.25rem;
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: 400;
`;

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  transition: color ${props => props.theme.transitions.medium};

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const FooterBottom = styled.div`
  padding-top: ${props => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: color ${props => props.theme.transitions.medium};

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const ContactInfo = styled.div`
  margin-top: ${props => props.theme.spacing.sm};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    flex-direction: row;
    align-items: flex-start;
    font-size: 0.85rem;
    word-break: break-word;
  }
`;

export const SupportNote = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: ${props => props.theme.spacing.md};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.md};
  border-left: 3px solid ${props => props.theme.colors.accent};
`;

export const TelegramButton = styled.a`
  display: inline-block;
  background-color: #0088cc;
  color: white;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.sm};
  transition: all ${props => props.theme.transitions.medium};

  &:hover {
    background-color: #006699;
    transform: translateY(-2px);
  }
`;
