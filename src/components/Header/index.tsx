import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  CTAButton,
  MobileMenuButton,
  Dropdown,
  DropdownContent,
  DropdownItem
} from './styles';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/">
          <Logo>{config.companyName}</Logo>
        </Link>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>

        <Nav isOpen={isMenuOpen}>
          <Link to="/">
            <NavLink as="span">Home</NavLink>
          </Link>
          
          <Link to="/about">
            <NavLink as="span">About Us</NavLink>
          </Link>

          <Dropdown>
            <NavLink as="span" style={{ cursor: 'pointer' }}>
              <span className="desktop-only">Services ▾</span>
              <span className="mobile-only">Services</span>
            </NavLink>
            <DropdownContent>
              <Link to="/services">
                <DropdownItem as="span">All Services</DropdownItem>
              </Link>
              <Link to="/services/digital-transformation">
                <DropdownItem as="span">Digital Transformation</DropdownItem>
              </Link>
              <Link to="/services/business-consulting">
                <DropdownItem as="span">Business Consulting</DropdownItem>
              </Link>
              <Link to="/services/it-solutions">
                <DropdownItem as="span">IT Solutions</DropdownItem>
              </Link>
            </DropdownContent>
          </Dropdown>

          <Link to="/contact">
            <NavLink as="span">Contact</NavLink>
          </Link>

          <Link to="/contact">
            <CTAButton>Get Started</CTAButton>
          </Link>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
