import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all ${props => props.theme.transitions.medium};
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${props => props.theme.colors.heading};
  cursor: pointer;
  transition: color ${props => props.theme.transitions.medium};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileM}) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.background};
    flex-direction: column;
    padding: ${props => props.theme.spacing.lg};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    display: ${props => props.isOpen ? 'flex' : 'none'};
    gap: ${props => props.theme.spacing.md};
  }
`;

export const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  position: relative;
  transition: color ${props => props.theme.transitions.medium};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${props => props.theme.colors.primary};
    transition: width ${props => props.theme.transitions.medium};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const CTAButton = styled.button`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-size: 1rem;
  transition: all ${props => props.theme.transitions.medium};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobileL}) {
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
    font-size: 0.9rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const Dropdown = styled.div`
  position: relative;

  &:hover > div {
    display: block;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.background};
  min-width: 200px;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid ${props => props.theme.colors.border};
  margin-top: ${props => props.theme.spacing.sm};
  z-index: 1000;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background-color: ${props => props.theme.colors.beige};
    color: ${props => props.theme.colors.primary};
  }
`;
