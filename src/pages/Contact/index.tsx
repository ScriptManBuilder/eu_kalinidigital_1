import React, { useState } from 'react';
import { config } from '../../config';
import Button from '../../components/Button';
import {
  ContactWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  ContactGrid,
  FormSection,
  SectionTitle,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  SuccessMessage,
  InfoSection,
  InfoBox,
  InfoTitle,
  InfoText,
  ContactInfoList,
  ContactInfoItem,
  ContactIcon,
  ContactDetails,
  ContactLabel,
  ContactValue,
  TelegramBox,
  TelegramTitle,
  TelegramText,
  TelegramButton,
  MapSection
} from './styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Формируем сообщение для Telegram
      const message = `
🔔 New inquiry from the website

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🏢 Company: ${formData.company}
🔧 Service: ${formData.service}

💬 Message:
${formData.message}
      `.trim();

      // Отправка в Telegram
      const telegramUrl = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: config.telegramChatId,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
      }

      console.log('Form submitted successfully to Telegram');
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      }, 5000);
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      alert('Error sending message. Please try again or contact us via Telegram directly.');
    }
  };

  return (
    <ContactWrapper>
      <HeroSection>
        <HeroTitle>Get In Touch</HeroTitle>
        <HeroSubtitle>
          Let's discuss how we can help transform your business
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <ContactGrid>
          <FormSection>
            <SectionTitle>Request a Consultation</SectionTitle>
            
            {submitted ? (
              <SuccessMessage>
                <strong>Thank you for your inquiry!</strong>
                <br />
                We have received your message and will contact you via Telegram shortly.
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.smith@company.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+44 20 1234 5678"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="service">Service of Interest *</Label>
                  <Select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="business-consulting">Business Consulting</option>
                    <option value="it-solutions">IT Solutions & Support</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="enterprise-solutions">Enterprise Solutions</option>
                    <option value="data-analytics">Data Analytics & BI</option>
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="web-development">Web & Mobile Development</option>
                    <option value="automation">Process Automation</option>
                    <option value="training">Training & Development</option>
                    <option value="project-management">Project Management</option>
                    <option value="compliance">Compliance & Governance</option>
                    <option value="other">Other / General Inquiry</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or inquiry..."
                  />
                </FormGroup>

                <Button type="submit" size="large" fullWidth>
                  Submit Inquiry
                </Button>

                <InfoText style={{ fontSize: '0.9rem', color: '#666', marginTop: '-0.5rem' }}>
                  * Required fields. By submitting this form, you agree to be contacted by our team via Telegram.
                </InfoText>
              </Form>
            )}
          </FormSection>

          <InfoSection>
            <InfoBox>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoText>
                We're here to help. Reach out to us through any of the following channels:
              </InfoText>
              
              <ContactInfoList>
                <ContactInfoItem>
                  <ContactIcon>📍</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Address</ContactLabel>
                    <ContactValue>{config.address}</ContactValue>
                  </ContactDetails>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactIcon>📞</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>{config.phoneNumber}</ContactValue>
                  </ContactDetails>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactIcon>📧</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>{config.supportEmail}</ContactValue>
                  </ContactDetails>
                </ContactInfoItem>
              </ContactInfoList>
            </InfoBox>

            <MapSection>
              <InfoTitle>Business Hours</InfoTitle>
              <InfoText>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM GMT<br />
                <strong>Saturday:</strong> 10:00 AM - 2:00 PM GMT<br />
                <strong>Sunday:</strong> Closed
              </InfoText>
              <InfoText>
                Emergency support available 24/7 via Telegram for existing clients.
              </InfoText>
            </MapSection>
          </InfoSection>
        </ContactGrid>
      </ContentSection>
    </ContactWrapper>
  );
};

export default Contact;
