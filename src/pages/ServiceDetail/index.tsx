import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/services';
import Button from '../../components/Button';
import {
  ServiceDetailWrapper,
  HeroSection,
  HeroContainer,
  BackLink,
  ServiceIcon,
  ServiceTitle,
  ServiceSubtitle,
  ContentSection,
  ContentGrid,
  MainContent,
  Sidebar,
  SectionTitle,
  Description,
  FeaturesSection,
  FeaturesList,
  FeatureItem,
  BenefitsSection,
  BenefitsList,
  BenefitItem,
  CTABox,
  CTATitle,
  CTAText,
  PriceBox,
  PriceLabel,
  Price,
  PriceNote,
  ContactBox,
  ContactTitle,
  ContactText
} from './styles';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <ServiceDetailWrapper>
        <ContentSection>
          <h1>Service not found</h1>
          <Button onClick={() => navigate('/services')}>
            Back to Services
          </Button>
        </ContentSection>
      </ServiceDetailWrapper>
    );
  }

  return (
    <ServiceDetailWrapper>
      <HeroSection>
        <HeroContainer>
          <BackLink onClick={() => navigate('/services')}>
            ← Back to All Services
          </BackLink>
          <ServiceIcon>{service.icon}</ServiceIcon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceSubtitle>{service.shortDescription}</ServiceSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContentSection>
        <ContentGrid>
          <MainContent>
            <Description>
              <SectionTitle>Overview</SectionTitle>
              <p>{service.fullDescription}</p>
            </Description>

            <FeaturesSection>
              <SectionTitle>What's Included</SectionTitle>
              <FeaturesList>
                {service.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </FeaturesSection>

            <BenefitsSection>
              <SectionTitle>Key Benefits</SectionTitle>
              <BenefitsList>
                {service.benefits.map((benefit, index) => (
                  <BenefitItem key={index}>{benefit}</BenefitItem>
                ))}
              </BenefitsList>
            </BenefitsSection>
          </MainContent>

          <Sidebar>
            <CTABox>
              <CTATitle>Ready to Get Started?</CTATitle>
              <CTAText>
                Contact us today to discuss how this service can help your business grow.
              </CTAText>
              <Button 
                variant="secondary" 
                fullWidth 
                onClick={() => navigate('/contact')}
              >
                Request Consultation
              </Button>
            </CTABox>

            <PriceBox>
              <PriceLabel>Investment</PriceLabel>
              <Price>{service.pricing}</Price>
              <PriceNote>
                Custom solutions available. Contact us for a detailed quote tailored to your needs.
              </PriceNote>
            </PriceBox>

            <ContactBox>
              <ContactTitle>Have Questions?</ContactTitle>
              <ContactText>
                Our team is here to help. Reach out to discuss your specific requirements.
              </ContactText>
              <Button 
                variant="outline" 
                fullWidth 
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </ContactBox>
          </Sidebar>
        </ContentGrid>
      </ContentSection>
    </ServiceDetailWrapper>
  );
};

export default ServiceDetail;
