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

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalWrapper>
      <HeroSection>
        <HeroTitle>Privacy Policy</HeroTitle>
        <HeroSubtitle>Your privacy is important to us</HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <LastUpdated>Last Updated: January 15, 2026</LastUpdated>

        <HighlightBox>
          <Paragraph>
            <strong>{config.companyName}</strong> ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </Paragraph>
        </HighlightBox>

        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>
          
          <SubTitle>Personal Information</SubTitle>
          <Paragraph>
            We may collect personal information that you voluntarily provide to us when you:
          </Paragraph>
          <List>
            <li>Fill out contact forms or consultation requests</li>
            <li>Subscribe to our newsletters or communications</li>
            <li>Register for our services</li>
            <li>Contact us via Telegram or other channels</li>
          </List>
          <Paragraph>
            This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
          </Paragraph>

          <SubTitle>Automatically Collected Information</SubTitle>
          <Paragraph>
            When you visit our website, we may automatically collect certain information about your device, including:
          </Paragraph>
          <List>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring URLs</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <Paragraph>
            We use the information we collect to:
          </Paragraph>
          <List>
            <li>Provide, operate, and maintain our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyze usage patterns and trends</li>
            <li>Prevent fraudulent activities and enhance security</li>
            <li>Comply with legal obligations</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Legal Basis for Processing (GDPR)</SectionTitle>
          <Paragraph>
            If you are from the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data collected and the context:
          </Paragraph>
          <List>
            <li><strong>Consent:</strong> You have given us permission to process your data</li>
            <li><strong>Contract:</strong> Processing is necessary to provide services you've requested</li>
            <li><strong>Legitimate Interests:</strong> Processing is in our legitimate business interests</li>
            <li><strong>Legal Obligation:</strong> Processing is required by law</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Data Sharing and Disclosure</SectionTitle>
          <Paragraph>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </Paragraph>
          <List>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our business (e.g., hosting providers, analytics services)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Data Security</SectionTitle>
          <Paragraph>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Your Data Rights</SectionTitle>
          <Paragraph>
            Under GDPR and other applicable laws, you have the following rights:
          </Paragraph>
          <List>
            <li><strong>Access:</strong> Request copies of your personal data</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your data</li>
            <li><strong>Restriction:</strong> Request restriction of processing</li>
            <li><strong>Data Portability:</strong> Request transfer of your data</li>
            <li><strong>Objection:</strong> Object to processing of your data</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
          </List>
          <Paragraph>
            To exercise these rights, please contact us via our official Telegram support channel.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Data Retention</SectionTitle>
          <Paragraph>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Cookies and Tracking</SectionTitle>
          <Paragraph>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. Children's Privacy</SectionTitle>
          <Paragraph>
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>10. Changes to This Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
          </Paragraph>
        </Section>

        <ContactInfo>
          <SectionTitle style={{ color: 'white' }}>Contact Us</SectionTitle>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            If you have questions about this Privacy Policy, please contact us:<br /><br />
            <strong>{config.companyName}</strong><br />
            {config.address}<br />
            Phone: {config.phoneNumber}<br />
            Email: {config.supportEmail}<br />
            Telegram: {config.telegramBot}
          </Paragraph>
        </ContactInfo>
      </ContentSection>
    </LegalWrapper>
  );
};

export default PrivacyPolicy;
