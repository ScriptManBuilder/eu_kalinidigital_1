import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import {
  FooterWrapper,
  FooterContainer,
  FooterTop,
  FooterColumn,
  FooterTitle,
  FooterText,
  StyledLink,
  FooterBottom,
  Copyright,
  LegalLinks,
  StyledLegalLink,
  ContactInfo,
  ContactItem
} from './styles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          <FooterColumn>
            <FooterTitle>{config.companyName}</FooterTitle>
            <FooterText>
              Empowering businesses through innovative digital solutions and strategic consulting services across the United Kingdom and Europe.
            </FooterText>
            <FooterText>
              <strong>Established:</strong> {config.companyBirth}
            </FooterText>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <StyledLink as={Link} to="/services/digital-transformation">
              Digital Transformation
            </StyledLink>
            <StyledLink as={Link} to="/services/business-consulting">
              Business Consulting
            </StyledLink>
            <StyledLink as={Link} to="/services/it-solutions">
              IT Solutions
            </StyledLink>
            <StyledLink as={Link} to="/services/cloud-services">
              Cloud Services
            </StyledLink>
            <StyledLink as={Link} to="/services">
              View All Services →
            </StyledLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Company</FooterTitle>
            <StyledLink as={Link} to="/about">
              About Us
            </StyledLink>
            <StyledLink as={Link} to="/contact">
              Contact
            </StyledLink>
            <FooterText style={{ marginTop: '1rem' }}>
              <strong>Director:</strong><br />
              {config.owner}
            </FooterText>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact Information</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <span>📍</span>
                <span>{config.address}</span>
              </ContactItem>
              <ContactItem>
                <span>📞</span>
                <span>{config.phoneNumber}</span>
              </ContactItem>
              <ContactItem>
                <span>📧</span>
                <span>{config.supportEmail}</span>
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {currentYear} {config.companyName}. All rights reserved. | Registered in {config.country}
          </Copyright>
          <LegalLinks>
            <StyledLegalLink as={Link} to="/privacy-policy">
              Privacy Policy
            </StyledLegalLink>
            <StyledLegalLink as={Link} to="/terms-conditions">
              Terms & Conditions
            </StyledLegalLink>
            <StyledLegalLink as={Link} to="/refund-policy">
              Refund Policy
            </StyledLegalLink>
            <StyledLegalLink as={Link} to="/digital-products-terms">
              Digital Products Terms
            </StyledLegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
