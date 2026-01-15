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
  FooterLink,
  FooterBottom,
  Copyright,
  LegalLinks,
  LegalLink,
  ContactInfo,
  ContactItem,
  SupportNote,
  TelegramButton
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
            <Link to="/services/digital-transformation">
              <FooterLink as="span">Digital Transformation</FooterLink>
            </Link>
            <Link to="/services/business-consulting">
              <FooterLink as="span">Business Consulting</FooterLink>
            </Link>
            <Link to="/services/it-solutions">
              <FooterLink as="span">IT Solutions</FooterLink>
            </Link>
            <Link to="/services/cloud-services">
              <FooterLink as="span">Cloud Services</FooterLink>
            </Link>
            <Link to="/services">
              <FooterLink as="span">View All Services →</FooterLink>
            </Link>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Company</FooterTitle>
            <Link to="/about">
              <FooterLink as="span">About Us</FooterLink>
            </Link>
            <Link to="/contact">
              <FooterLink as="span">Contact</FooterLink>
            </Link>
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

            <SupportNote>
              <FooterText style={{ marginBottom: '0.5rem' }}>
                <strong>Official Support Channel:</strong>
              </FooterText>
              <FooterText style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                All customer support requests must be handled via our official Telegram support bot.
              </FooterText>
              <TelegramButton href={config.telegramBot} target="_blank" rel="noopener noreferrer">
                Contact Support on Telegram
              </TelegramButton>
            </SupportNote>
          </FooterColumn>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {currentYear} {config.companyName}. All rights reserved. | Registered in {config.country}
          </Copyright>
          <LegalLinks>
            <Link to="/privacy-policy">
              <LegalLink as="span">Privacy Policy</LegalLink>
            </Link>
            <Link to="/terms-conditions">
              <LegalLink as="span">Terms & Conditions</LegalLink>
            </Link>
            <Link to="/refund-policy">
              <LegalLink as="span">Refund Policy</LegalLink>
            </Link>
            <Link to="/digital-products-terms">
              <LegalLink as="span">Digital Products Terms</LegalLink>
            </Link>
          </LegalLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
