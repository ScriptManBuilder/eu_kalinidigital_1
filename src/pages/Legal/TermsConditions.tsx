import React from 'react';
import { config } from '../../config';
import {
  LegalWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  LastUpdated,
  Section,
  SectionTitle,
  SubTitle,
  Paragraph,
  List,
  HighlightBox,
  ContactInfo
} from './styles';

const TermsConditions: React.FC = () => {
  return (
    <LegalWrapper>
      <HeroSection>
        <HeroTitle>Terms & Conditions</HeroTitle>
        <HeroSubtitle>Please read these terms carefully before using our services</HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <LastUpdated>Last Updated: January 15, 2026</LastUpdated>

        <HighlightBox>
          <Paragraph>
            <strong>Important:</strong> These Terms and Conditions ("Terms") govern your use of services provided by <strong>{config.companyName}</strong>, a company registered in {config.country} at {config.address}. By accessing our website or using our services, you agree to be bound by these Terms.
          </Paragraph>
        </HighlightBox>

        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <Paragraph>
            By accessing or using our services, you confirm that:
          </Paragraph>
          <List>
            <li>You are at least 18 years of age</li>
            <li>You have the legal capacity to enter into binding contracts</li>
            <li>You represent a business entity authorized to procure our services</li>
            <li>You have read, understood, and agree to these Terms</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Description of Services</SectionTitle>
          <Paragraph>
            {config.companyName} provides B2B professional services including but not limited to:
          </Paragraph>
          <List>
            <li>Digital transformation consulting</li>
            <li>Business consulting and strategy</li>
            <li>IT solutions and technical support</li>
            <li>Cloud services and infrastructure</li>
            <li>Enterprise software solutions</li>
            <li>Data analytics and business intelligence</li>
            <li>Cybersecurity services</li>
            <li>Web and mobile development</li>
            <li>Process automation</li>
            <li>Training and professional development</li>
            <li>Project management services</li>
            <li>Compliance and governance consulting</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Service Engagement Process</SectionTitle>
          <SubTitle>3.1 Consultation and Proposal</SubTitle>
          <Paragraph>
            All service engagements begin with a consultation to understand your requirements. We will provide a detailed proposal outlining scope, timeline, and investment.
          </Paragraph>
          
          <SubTitle>3.2 Agreement and Contract</SubTitle>
          <Paragraph>
            Services commence upon execution of a formal service agreement. Each project may have specific terms detailed in individual contracts.
          </Paragraph>
          
          <SubTitle>3.3 Communication</SubTitle>
          <Paragraph>
            Official support and communication are conducted exclusively through our Telegram support channel: {config.telegramBot}
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>4. Pricing and Payment</SectionTitle>
          <SubTitle>4.1 Pricing</SubTitle>
          <Paragraph>
            Service pricing is provided on a project-by-project basis. All prices are quoted in GBP unless otherwise specified and are exclusive of applicable taxes.
          </Paragraph>
          
          <SubTitle>4.2 Payment Terms</SubTitle>
          <List>
            <li>Payment terms are specified in individual service agreements</li>
            <li>Typical terms include deposits, milestone payments, or monthly retainers</li>
            <li>Late payments may incur interest charges as permitted by law</li>
            <li>We reserve the right to suspend services for non-payment</li>
          </List>
          
          <SubTitle>4.3 Taxes</SubTitle>
          <Paragraph>
            Clients are responsible for all applicable taxes, duties, and governmental charges. UK VAT will be applied where applicable.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Client Responsibilities</SectionTitle>
          <Paragraph>
            Clients agree to:
          </Paragraph>
          <List>
            <li>Provide accurate and complete information</li>
            <li>Grant necessary access to systems, data, and personnel</li>
            <li>Respond to queries in a timely manner</li>
            <li>Review and approve deliverables as specified</li>
            <li>Maintain confidentiality of any proprietary information shared</li>
            <li>Ensure proper authorization for work performed</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Intellectual Property</SectionTitle>
          <SubTitle>6.1 Client Materials</SubTitle>
          <Paragraph>
            Clients retain ownership of all materials, data, and content provided to us.
          </Paragraph>
          
          <SubTitle>6.2 Deliverables</SubTitle>
          <Paragraph>
            Upon full payment, clients receive ownership rights to custom deliverables as specified in the service agreement. We retain rights to:
          </Paragraph>
          <List>
            <li>Pre-existing materials and methodologies</li>
            <li>General knowledge and experience gained</li>
            <li>Tools and frameworks developed independently</li>
          </List>
          
          <SubTitle>6.3 Third-Party Components</SubTitle>
          <Paragraph>
            Third-party software, licenses, and components remain the property of their respective owners.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Confidentiality</SectionTitle>
          <Paragraph>
            Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of services.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Warranties and Disclaimers</SectionTitle>
          <SubTitle>8.1 Our Warranties</SubTitle>
          <Paragraph>
            We warrant that:
          </Paragraph>
          <List>
            <li>Services will be performed with professional skill and care</li>
            <li>We have the right and authority to provide services</li>
            <li>Services will substantially conform to agreed specifications</li>
          </List>
          
          <SubTitle>8.2 Disclaimer</SubTitle>
          <Paragraph>
            EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. Limitation of Liability</SectionTitle>
          <Paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
          </Paragraph>
          <List>
            <li>Our total liability shall not exceed the fees paid for the specific service</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>We are not liable for losses due to circumstances beyond our control</li>
            <li>Claims must be brought within 12 months of the incident</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Termination</SectionTitle>
          <SubTitle>10.1 By Client</SubTitle>
          <Paragraph>
            Clients may terminate services with written notice. Fees for work completed and committed costs remain payable.
          </Paragraph>
          
          <SubTitle>10.2 By Us</SubTitle>
          <Paragraph>
            We may terminate services for:
          </Paragraph>
          <List>
            <li>Non-payment of fees</li>
            <li>Material breach of terms</li>
            <li>Circumstances making performance impractical</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>11. Governing Law and Jurisdiction</SectionTitle>
          <Paragraph>
            These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>12. Changes to Terms</SectionTitle>
          <Paragraph>
            We reserve the right to modify these Terms at any time. Continued use of services after changes constitutes acceptance of modified Terms. Material changes will be communicated via Telegram.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>13. General Provisions</SectionTitle>
          <SubTitle>13.1 Entire Agreement</SubTitle>
          <Paragraph>
            These Terms, together with service-specific agreements, constitute the entire agreement between parties.
          </Paragraph>
          
          <SubTitle>13.2 Severability</SubTitle>
          <Paragraph>
            If any provision is found unenforceable, remaining provisions remain in effect.
          </Paragraph>
          
          <SubTitle>13.3 No Waiver</SubTitle>
          <Paragraph>
            Failure to enforce any right does not constitute a waiver of that right.
          </Paragraph>
          
          <SubTitle>13.4 Assignment</SubTitle>
          <Paragraph>
            Clients may not assign rights without written consent. We may assign rights with notice.
          </Paragraph>
        </Section>

        <ContactInfo>
          <SectionTitle style={{ color: 'white' }}>Contact Information</SectionTitle>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            For questions about these Terms, contact us:<br /><br />
            <strong>{config.companyName}</strong><br />
            Company Number: [Registration Number]<br />
            Registered Address: {config.address}<br />
            Phone: {config.phoneNumber}<br />
            Email: {config.supportEmail}<br />
            Telegram Support: {config.telegramBot}<br />
            Director: {config.owner}
          </Paragraph>
        </ContactInfo>
      </ContentSection>
    </LegalWrapper>
  );
};

export default TermsConditions;
