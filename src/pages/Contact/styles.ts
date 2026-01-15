import styled from 'styled-components';

export const ContactWrapper = styled.div`
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

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xxl};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    gap: ${props => props.theme.spacing.xl};
  }
`;

export const FormSection = styled.div``;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

export const Input = styled.input`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  transition: all ${props => props.theme.transitions.medium};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(29, 77, 46, 0.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 0.95rem;
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const TextArea = styled.textarea`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  min-height: 150px;
  resize: vertical;
  transition: all ${props => props.theme.transitions.medium};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(29, 77, 46, 0.1);
  }
`;

export const Select = styled.select`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  background-color: ${props => props.theme.colors.background};
  transition: all ${props => props.theme.transitions.medium};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(29, 77, 46, 0.1);
  }
`;

export const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: ${props => props.theme.spacing.md};
  border-radius: 4px;
  border: 1px solid #c3e6cb;
`;

export const InfoSection = styled.div``;

export const InfoBox = styled.div`
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const InfoTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 1.3rem;
`;

export const InfoText = styled.p`
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;
`;

export const ContactDetails = styled.div``;

export const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const ContactValue = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

export const TelegramBox = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
  text-align: center;
  margin-top: ${props => props.theme.spacing.lg};
`;

export const TelegramTitle = styled.h3`
  color: ${props => props.theme.colors.background};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const TelegramText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.8;
`;

export const TelegramButton = styled.a`
  display: inline-block;
  background-color: #0088cc;
  color: white;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: 4px;
  font-weight: 500;
  transition: all ${props => props.theme.transitions.medium};
  text-decoration: none;

  &:hover {
    background-color: #006699;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

export const MapSection = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.beige};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 4px;
`;
