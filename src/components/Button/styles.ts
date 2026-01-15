import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const getButtonStyles = (variant: string) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.background};
        
        &:hover {
          background-color: ${props => props.theme.colors.primary};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.background};
        
        &:hover {
          background-color: ${props => props.theme.colors.secondary};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors.dark};
        border: 2px solid ${props => props.theme.colors.dark};
        
        &:hover {
          background-color: ${props => props.theme.colors.dark};
          color: ${props => props.theme.colors.background};
        }
      `;
    default:
      return '';
  }
};

const getButtonSize = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
        font-size: 0.9rem;
      `;
    case 'large':
      return css`
        padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
        font-size: 1.1rem;
      `;
    default:
      return css`
        padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
        font-size: 1rem;
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  ${props => getButtonStyles(props.variant || 'primary')}
  ${props => getButtonSize(props.size || 'medium')}
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.medium};
  font-weight: 400;
  letter-spacing: 0.05em;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
`;
