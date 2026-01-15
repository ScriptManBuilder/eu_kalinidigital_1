import React from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config';
import Button from '../../components/Button';
import {
  HomeWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButtons,
  HeroImage,
  ServicesSection,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceLink,
  WhyChooseSection,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  CTASection,
  CTATitle,
  CTADescription,
  CTAButton
} from './styles';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: '📄',
      title: 'Digital Transformation',
      description: `${config.companyName} offers comprehensive digital transformation services to modernize your business operations and enhance efficiency.`,
      link: '/services/digital-transformation'
    },
    {
      icon: '📈',
      title: 'Business Consulting',
      description: 'Strategic consulting services tailored to help your business thrive in today\'s competitive landscape.',
      link: '/services/business-consulting'
    },
    {
      icon: '👥',
      title: 'IT Solutions & Support',
      description: 'Complete IT infrastructure management, technical support, and system integration services for your organization.',
      link: '/services/it-solutions'
    },
    {
      icon: '💼',
      title: 'Cloud Services',
      description: 'Secure cloud migration, infrastructure setup, and ongoing management to scale your business effectively.',
      link: '/services/cloud-services'
    },
    {
      icon: '🏢',
      title: 'Enterprise Solutions',
      description: 'Custom enterprise software development and integration to streamline your business processes.',
      link: '/services/enterprise-solutions'
    }
  ];

  const features = [
    {
      icon: '🎖️',
      title: 'Expert Team',
      description: 'Certified professionals with deep industry knowledge and experience'
    },
    {
      icon: '✓',
      title: 'Proven Results',
      description: 'Track record of delivering measurable outcomes for our clients'
    },
    {
      icon: '⏰',
      title: 'Timely Service',
      description: 'Responsive support and efficient delivery of all our services'
    },
    {
      icon: '🔒',
      title: 'Confidential',
      description: 'Complete discretion and security for all your business information'
    }
  ];

  return (
    <HomeWrapper>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Your Partner in Business Success</HeroTitle>
          <HeroDescription>
            {config.companyName} provides comprehensive business solutions and digital services to help your organization thrive in today's competitive landscape.
          </HeroDescription>
          <HeroButtons>
            <Button size="large" onClick={() => navigate('/contact')}>
              Get Started
            </Button>
            <Button size="large" variant="outline" onClick={() => navigate('/services')}>
              Learn More
            </Button>
          </HeroButtons>
        </HeroContent>
        <HeroImage>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
            alt="Business professionals in meeting"
          />
        </HeroImage>
      </HeroSection>

      <ServicesSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Our Services</SectionTitle>
            <SectionSubtitle>
              Comprehensive business solutions tailored to your needs
            </SectionSubtitle>
          </SectionHeader>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index} onClick={() => navigate(service.link)}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink>
                  Explore {service.title} →
                </ServiceLink>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </SectionContainer>
      </ServicesSection>

      <WhyChooseSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Why Choose {config.companyName}</SectionTitle>
            <SectionSubtitle>
              We deliver exceptional results through expertise, dedication, and innovation
            </SectionSubtitle>
          </SectionHeader>

          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </SectionContainer>
      </WhyChooseSection>

      <CTASection>
        <SectionContainer>
          <CTATitle>Ready to Grow Your Business?</CTATitle>
          <CTADescription>
            Let's discuss how {config.companyName} can help you achieve your business goals with our comprehensive services.
          </CTADescription>
          <CTAButton onClick={() => navigate('/contact')}>
            Schedule a Consultation
          </CTAButton>
        </SectionContainer>
      </CTASection>
    </HomeWrapper>
  );
};

export default Home;
