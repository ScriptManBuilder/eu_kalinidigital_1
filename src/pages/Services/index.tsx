import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/services';
import {
  ServicesWrapper,
  PageHeader,
  PageTitle,
  PageSubtitle,
  ServicesContainer,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServicePrice,
  ServiceLink
} from './styles';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ServicesWrapper>
      <PageHeader>
        <PageTitle>Our Services</PageTitle>
        <PageSubtitle>
          Comprehensive business solutions tailored to your needs
        </PageSubtitle>
      </PageHeader>

      <ServicesContainer>
        <ServicesGrid>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} onClick={() => navigate(`/services/${service.id}`)}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.shortDescription}</ServiceDescription>
              <ServicePrice>{service.pricing}</ServicePrice>
              <ServiceLink>
                Learn more about {service.title} →
              </ServiceLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
