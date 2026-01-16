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

const DigitalProductsTerms: React.FC = () => {
  return (
    <LegalWrapper>
      <HeroSection>
        <HeroTitle>Digital Products Terms of Sale</HeroTitle>
        <HeroSubtitle>Terms governing digital products and services</HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <LastUpdated>Last Updated: January 15, 2026</LastUpdated>

        <HighlightBox>
          <Paragraph>
            <strong>{config.companyName}</strong> may provide digital products including software, documentation, templates, training materials, and digital deliverables. These terms govern the sale and use of all digital products.
          </Paragraph>
        </HighlightBox>

        <Section>
          <SectionTitle>1. Types of Digital Products</SectionTitle>
          <Paragraph>
            Our digital products may include:
          </Paragraph>
          <List>
            <li>Custom software applications and solutions</li>
            <li>Digital documentation and technical specifications</li>
            <li>Templates, frameworks, and boilerplates</li>
            <li>Training materials and educational content</li>
            <li>Digital reports and analysis documents</li>
            <li>Configuration files and scripts</li>
            <li>Digital assets and design files</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Licenses and Usage Rights</SectionTitle>
          <SubTitle>2.1 Custom Developed Products</SubTitle>
          <Paragraph>
            For custom software and solutions developed specifically for clients:
          </Paragraph>
          <List>
            <li>Upon full payment, clients receive ownership of custom code</li>
            <li>License includes right to use, modify, and distribute internally</li>
            <li>We retain rights to underlying frameworks and pre-existing components</li>
            <li>Documentation provided is for client's internal use</li>
          </List>
          
          <SubTitle>2.2 Pre-Existing Products and Tools</SubTitle>
          <Paragraph>
            For existing products, templates, or tools:
          </Paragraph>
          <List>
            <li>Clients receive a non-exclusive, non-transferable license</li>
            <li>Use is limited to the purchasing organization</li>
            <li>Resale or distribution to third parties is prohibited</li>
            <li>We retain all ownership rights</li>
          </List>
          
          <SubTitle>2.3 Open Source Components</SubTitle>
          <Paragraph>
            Digital products may include open-source components:
          </Paragraph>
          <List>
            <li>These remain subject to their original licenses</li>
            <li>We provide attribution and license information</li>
            <li>Clients must comply with open-source license terms</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Delivery and Access</SectionTitle>
          <SubTitle>3.1 Delivery Methods</SubTitle>
          <Paragraph>
            Digital products are delivered via:
          </Paragraph>
          <List>
            <li>Secure download links</li>
            <li>Cloud repository access (GitHub, GitLab, etc.)</li>
            <li>Cloud storage platforms</li>
            <li>Direct installation or deployment</li>
            <li>Access credentials to online platforms</li>
          </List>
          
          <SubTitle>3.2 Delivery Timeline</SubTitle>
          <Paragraph>
            Most digital products are delivered within:
          </Paragraph>
          <List>
            <li>24-48 hours for existing products</li>
            <li>As specified in project timeline for custom development</li>
            <li>Immediately upon payment for automated deliveries</li>
          </List>
          
          <SubTitle>3.3 Download Limits</SubTitle>
          <Paragraph>
            Download links typically remain active for 30 days. After this period:
          </Paragraph>
          <List>
            <li>Clients must request renewal of access</li>
            <li>A nominal fee may apply for extended access</li>
            <li>Clients are responsible for creating backups</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Technical Requirements</SectionTitle>
          <Paragraph>
            Clients are responsible for ensuring:
          </Paragraph>
          <List>
            <li>Compatible hardware and software environment</li>
            <li>Adequate storage and processing capacity</li>
            <li>Proper security configurations</li>
            <li>Network connectivity as required</li>
            <li>Installation and maintenance capabilities</li>
          </List>
          <Paragraph>
            We provide technical requirements documentation with each product. Installation support may be available as a separate service.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Quality Assurance</SectionTitle>
          <SubTitle>5.1 Testing and Quality Control</SubTitle>
          <Paragraph>
            All digital products undergo:
          </Paragraph>
          <List>
            <li>Internal quality assurance testing</li>
            <li>Functional verification</li>
            <li>Documentation review</li>
            <li>Security scanning (for software products)</li>
          </List>
          
          <SubTitle>5.2 Defects and Issues</SubTitle>
          <Paragraph>
            If you discover defects or issues:
          </Paragraph>
          <List>
            <li>Report via Telegram support within 30 days of delivery</li>
            <li>We will investigate and provide fixes or workarounds</li>
            <li>Critical bugs are addressed as priority</li>
            <li>Minor issues may be included in future updates</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Updates and Maintenance</SectionTitle>
          <SubTitle>6.1 Custom Developed Products</SubTitle>
          <Paragraph>
            For custom software:
          </Paragraph>
          <List>
            <li>Initial warranty period includes bug fixes (typically 90 days)</li>
            <li>Ongoing maintenance available under separate agreement</li>
            <li>Major updates and new features require additional engagement</li>
            <li>Security patches provided during warranty period</li>
          </List>
          
          <SubTitle>6.2 Pre-Existing Products</SubTitle>
          <Paragraph>
            For templated products:
          </Paragraph>
          <List>
            <li>Updates provided at our discretion</li>
            <li>Clients notified of significant updates</li>
            <li>Updated versions available for download</li>
            <li>No obligation to provide updates beyond initial delivery</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Restrictions and Prohibited Uses</SectionTitle>
          <Paragraph>
            Clients may NOT:
          </Paragraph>
          <List>
            <li>Resell, redistribute, or sublicense products</li>
            <li>Reverse engineer proprietary components</li>
            <li>Remove or modify copyright notices</li>
            <li>Use products for illegal purposes</li>
            <li>Share access credentials with unauthorized parties</li>
            <li>Create derivative works for commercial distribution</li>
            <li>Use products in ways that harm others</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Support and Training</SectionTitle>
          <SubTitle>8.1 Included Support</SubTitle>
          <Paragraph>
            Basic support includes:
          </Paragraph>
          <List>
            <li>Installation guidance via documentation</li>
            <li>Answers to technical questions (email/Telegram)</li>
            <li>Bug reporting and tracking</li>
            <li>Access to knowledge base and FAQs</li>
          </List>
          
          <SubTitle>8.2 Extended Support</SubTitle>
          <Paragraph>
            Available as separate service:
          </Paragraph>
          <List>
            <li>Dedicated technical support hours</li>
            <li>Priority response times</li>
            <li>Custom training sessions</li>
            <li>Implementation assistance</li>
            <li>Ongoing maintenance and updates</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Data and Privacy</SectionTitle>
          <Paragraph>
            For digital products that process data:
          </Paragraph>
          <List>
            <li>Clients retain ownership of their data</li>
            <li>We do not access or collect client data unless authorized</li>
            <li>Products designed with privacy and security in mind</li>
            <li>Clients responsible for complying with data protection laws</li>
            <li>Analytics and usage data may be collected (anonymized)</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Warranties and Disclaimers</SectionTitle>
          <SubTitle>10.1 Limited Warranty</SubTitle>
          <Paragraph>
            We warrant that digital products will:
          </Paragraph>
          <List>
            <li>Substantially conform to documentation</li>
            <li>Function as described in specifications</li>
            <li>Be free from material defects</li>
          </List>
          <Paragraph>
            Warranty period is 90 days from delivery unless otherwise specified.
          </Paragraph>
          
          <SubTitle>10.2 Disclaimer</SubTitle>
          <Paragraph>
            EXCEPT AS EXPRESSLY STATED:
          </Paragraph>
          <List>
            <li>Products provided "AS IS" without warranty</li>
            <li>No guarantee of uninterrupted or error-free operation</li>
            <li>No warranty of merchantability or fitness for particular purpose</li>
            <li>Not responsible for data loss or business interruption</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>11. Refunds and Returns</SectionTitle>
          <Paragraph>
            Digital products are generally non-refundable once delivered. However:
          </Paragraph>
          <List>
            <li><strong>Before Delivery:</strong> Full refund if cancelled before access granted</li>
            <li><strong>Material Defects:</strong> Refund considered if product materially defective and unfixable</li>
            <li><strong>Wrong Product:</strong> Exchange or refund if wrong product delivered</li>
            <li><strong>Non-Delivery:</strong> Full refund if product not delivered within agreed timeline</li>
          </List>
          <Paragraph>
            See our full Refund Policy for complete terms.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>12. Liability Limitations</SectionTitle>
          <Paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
          </Paragraph>
          <List>
            <li>Total liability limited to fees paid for the specific product</li>
            <li>Not liable for indirect or consequential damages</li>
            <li>Not responsible for losses from improper use or configuration</li>
            <li>Not liable for third-party components or integrations</li>
            <li>Clients responsible for testing in their environment</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>13. Termination of Access</SectionTitle>
          <Paragraph>
            We may terminate access to digital products if:
          </Paragraph>
          <List>
            <li>License terms are violated</li>
            <li>Products used for prohibited purposes</li>
            <li>Non-payment for subscription-based products</li>
            <li>Required by law or regulation</li>
          </List>
          <Paragraph>
            Upon termination, clients must cease use and delete all copies.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>14. Export Compliance</SectionTitle>
          <Paragraph>
            Digital products may be subject to export controls:
          </Paragraph>
          <List>
            <li>Clients responsible for complying with export laws</li>
            <li>Products may not be exported to restricted countries</li>
            <li>Encryption technology subject to specific regulations</li>
            <li>Clients must not violate trade sanctions</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>15. Governing Law</SectionTitle>
          <Paragraph>
            These terms are governed by the laws of England and Wales. Disputes subject to exclusive jurisdiction of English courts.
          </Paragraph>
        </Section>

        <ContactInfo>
          <SectionTitle style={{ color: 'white' }}>Questions About Digital Products?</SectionTitle>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            For questions about digital products or these terms:<br /><br />
            <strong>{config.companyName}</strong><br />
            {config.address}<br />
            Phone: {config.phoneNumber}<br />
            Email: {config.supportEmail}<br />
            For support inquiries, please use the contact form on our website.
          </Paragraph>
        </ContactInfo>
      </ContentSection>
    </LegalWrapper>
  );
};

export default DigitalProductsTerms;
