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

const RefundPolicy: React.FC = () => {
  return (
    <LegalWrapper>
      <HeroSection>
        <HeroTitle>Refund & Returns Policy</HeroTitle>
        <HeroSubtitle>Understanding our refund and cancellation terms</HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <LastUpdated>Last Updated: January 15, 2026</LastUpdated>

        <HighlightBox>
          <Paragraph>
            <strong>{config.companyName}</strong> is committed to client satisfaction. This Refund & Returns Policy outlines our policies regarding refunds, cancellations, and service adjustments for our B2B professional services.
          </Paragraph>
        </HighlightBox>

        <Section>
          <SectionTitle>1. Nature of Services</SectionTitle>
          <Paragraph>
            As a B2B professional services provider, we deliver:
          </Paragraph>
          <List>
            <li>Consulting and advisory services</li>
            <li>Custom software development and IT solutions</li>
            <li>Project-based engagements</li>
            <li>Ongoing managed services and support</li>
            <li>Training and professional development programs</li>
          </List>
          <Paragraph>
            Due to the nature of professional services, our refund policy differs from traditional product returns.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Consultation and Discovery Phase</SectionTitle>
          <SubTitle>2.1 Initial Consultations</SubTitle>
          <Paragraph>
            Initial consultation calls and discovery sessions are typically provided at no charge or at a nominal fee to assess project fit and requirements.
          </Paragraph>
          
          <SubTitle>2.2 Proposal Stage</SubTitle>
          <Paragraph>
            Clients may decline our proposals without obligation. No refund is necessary as no payment has been made.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3. Deposit and Advance Payments</SectionTitle>
          <SubTitle>3.1 Project Deposits</SubTitle>
          <Paragraph>
            Many projects require an upfront deposit (typically 25-50% of project value) to:
          </Paragraph>
          <List>
            <li>Secure resources and schedule project timeline</li>
            <li>Cover initial planning and setup costs</li>
            <li>Demonstrate commitment from both parties</li>
          </List>
          
          <SubTitle>3.2 Deposit Refunds</SubTitle>
          <Paragraph>
            Deposits are generally non-refundable once work has commenced. However, we will consider deposit refunds in the following circumstances:
          </Paragraph>
          <List>
            <li><strong>Before Work Begins:</strong> 100% refund if requested before any work has started</li>
            <li><strong>Within 7 Days:</strong> Partial refund (75%) if cancellation occurs within 7 days and minimal work has been performed</li>
            <li><strong>Force Majeure:</strong> Full refund if we are unable to deliver services due to circumstances beyond our control</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Service Cancellations</SectionTitle>
          <SubTitle>4.1 Client-Initiated Cancellation</SubTitle>
          <Paragraph>
            Clients may cancel services at any time with written notice via our Telegram support channel. Upon cancellation:
          </Paragraph>
          <List>
            <li>All work completed to date will be invoiced at agreed rates</li>
            <li>Non-recoverable costs incurred will be charged</li>
            <li>Deposits applied to work performed are non-refundable</li>
            <li>Any remaining balance may be refunded for unused services</li>
          </List>
          
          <SubTitle>4.2 Our Cancellation Rights</SubTitle>
          <Paragraph>
            We reserve the right to cancel or suspend services for:
          </Paragraph>
          <List>
            <li>Non-payment of invoices</li>
            <li>Material breach of service agreement</li>
            <li>Circumstances making service delivery impractical or impossible</li>
          </List>
          <Paragraph>
            In such cases, fees for work completed remain payable, with any advance payments refunded for undelivered services.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Milestone-Based Projects</SectionTitle>
          <SubTitle>5.1 Payment Structure</SubTitle>
          <Paragraph>
            Many projects are structured with milestone-based payments. Each milestone payment is:
          </Paragraph>
          <List>
            <li>Tied to specific deliverables or project phases</li>
            <li>Due upon completion and client approval of the milestone</li>
            <li>Non-refundable once the milestone is approved</li>
          </List>
          
          <SubTitle>5.2 Incomplete Milestones</SubTitle>
          <Paragraph>
            If a project is terminated mid-milestone:
          </Paragraph>
          <List>
            <li>Partial work will be assessed and billed proportionally</li>
            <li>Clients receive all work products completed to date</li>
            <li>No refund for previous completed milestones</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Recurring Services and Subscriptions</SectionTitle>
          <SubTitle>6.1 Monthly Managed Services</SubTitle>
          <Paragraph>
            For ongoing managed services or monthly retainers:
          </Paragraph>
          <List>
            <li>Services are billed monthly in advance</li>
            <li>Cancellation requires 30 days written notice</li>
            <li>No refunds for partial months unless service failure on our part</li>
            <li>Final month's payment covers the notice period</li>
          </List>
          
          <SubTitle>6.2 Annual Agreements</SubTitle>
          <Paragraph>
            Annual service agreements may include:
          </Paragraph>
          <List>
            <li>Discounted rates compared to monthly billing</li>
            <li>Early termination fees as specified in contract</li>
            <li>Pro-rated refunds only in exceptional circumstances</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Service Quality and Satisfaction</SectionTitle>
          <SubTitle>7.1 Our Commitment</SubTitle>
          <Paragraph>
            We are committed to delivering high-quality services that meet agreed specifications. If you are unsatisfied:
          </Paragraph>
          <List>
            <li>Contact us immediately via Telegram support</li>
            <li>We will work with you to address concerns</li>
            <li>Reasonable revisions are included in project scope</li>
            <li>We aim to resolve issues without need for refunds</li>
          </List>
          
          <SubTitle>7.2 Material Non-Performance</SubTitle>
          <Paragraph>
            If we materially fail to deliver agreed services:
          </Paragraph>
          <List>
            <li>We will first attempt to rectify the situation</li>
            <li>If rectification is not possible, partial or full refunds may be considered</li>
            <li>Refund decisions are made on a case-by-case basis</li>
            <li>Clients must provide evidence of material non-performance</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Training and Development Programs</SectionTitle>
          <SubTitle>8.1 Scheduled Training</SubTitle>
          <Paragraph>
            For scheduled training sessions and workshops:
          </Paragraph>
          <List>
            <li><strong>14+ Days Notice:</strong> Full refund or rescheduling</li>
            <li><strong>7-14 Days Notice:</strong> 50% refund or free rescheduling</li>
            <li><strong>Less than 7 Days:</strong> No refund, but may reschedule with fee</li>
            <li><strong>No-Show:</strong> No refund</li>
          </List>
          
          <SubTitle>8.2 On-Demand Training</SubTitle>
          <Paragraph>
            Digital training materials and on-demand courses are non-refundable once access has been granted.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. Third-Party Costs and Licenses</SectionTitle>
          <Paragraph>
            Certain services may require third-party software licenses, cloud resources, or external services:
          </Paragraph>
          <List>
            <li>These costs are typically passed through to clients</li>
            <li>Third-party costs are subject to those providers' refund policies</li>
            <li>We are not responsible for refunds of third-party charges</li>
            <li>Unused licenses may be transferable subject to vendor terms</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Refund Process</SectionTitle>
          <SubTitle>10.1 How to Request a Refund</SubTitle>
          <Paragraph>
            To request a refund:
          </Paragraph>
          <List>
            <li>Contact us via official Telegram support: {config.telegramBot}</li>
            <li>Provide your project/service details and invoice number</li>
            <li>Explain the reason for the refund request</li>
            <li>Allow up to 10 business days for review</li>
          </List>
          
          <SubTitle>10.2 Refund Timeline</SubTitle>
          <Paragraph>
            Approved refunds will be processed:
          </Paragraph>
          <List>
            <li>Within 14 business days of approval</li>
            <li>To the original payment method</li>
            <li>Bank processing may take additional 5-10 business days</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>11. Dispute Resolution</SectionTitle>
          <Paragraph>
            If you disagree with a refund decision:
          </Paragraph>
          <List>
            <li>Request escalation to senior management</li>
            <li>We will review the case independently</li>
            <li>A final decision will be provided within 15 business days</li>
            <li>Legal recourse available under UK law if unresolved</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>12. Exceptions and Special Circumstances</SectionTitle>
          <Paragraph>
            We understand that exceptional circumstances may arise. We will consider refunds outside this policy for:
          </Paragraph>
          <List>
            <li>Medical emergencies or serious illness</li>
            <li>Business closure or bankruptcy</li>
            <li>Force majeure events</li>
            <li>Other extraordinary situations</li>
          </List>
          <Paragraph>
            Each case is evaluated individually and may require supporting documentation.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>13. Policy Updates</SectionTitle>
          <Paragraph>
            We reserve the right to update this policy. Changes apply to new engagements and do not affect existing contracts unless mutually agreed.
          </Paragraph>
        </Section>

        <ContactInfo>
          <SectionTitle style={{ color: 'white' }}>Questions About Refunds?</SectionTitle>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            For questions about this refund policy or to request a refund:<br /><br />
            <strong>{config.companyName}</strong><br />
            {config.address}<br />
            Phone: {config.phoneNumber}<br />
            Email: {config.supportEmail}<br />
            Telegram Support: {config.telegramBot}
          </Paragraph>
        </ContactInfo>
      </ContentSection>
    </LegalWrapper>
  );
};

export default RefundPolicy;
