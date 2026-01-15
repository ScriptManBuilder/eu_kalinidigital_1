import React from 'react';
import { config } from '../../config';
import {
  AboutWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  StorySection,
  StoryContent,
  SectionTitle,
  StoryText,
  StoryImage,
  ValuesSection,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  TeamSection,
  TeamGrid,
  TeamCard,
  TeamImage,
  TeamName,
  TeamRole,
  TeamBio,
  CompanyInfo,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue
} from './styles';

const About: React.FC = () => {
  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to drive business transformation.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical standards in all our business relationships.'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality services and exceeding client expectations.'
    },
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that contribute to our clients\' success and growth.'
    }
  ];

  const team = [
    {
      icon: '👔',
      name: config.owner,
      role: 'Director & Founder',
      bio: 'Leading the company with a vision for digital excellence and strategic business growth.'
    },
    {
      icon: '💼',
      name: 'Strategic Advisors',
      role: 'Consulting Team',
      bio: 'Experienced professionals providing expert guidance across various business domains.'
    },
    {
      icon: '💻',
      name: 'Technical Team',
      role: 'Technology Specialists',
      bio: 'Skilled engineers and developers delivering innovative solutions and technical excellence.'
    }
  ];

  return (
    <AboutWrapper>
      <HeroSection>
        <HeroTitle>About {config.companyName}</HeroTitle>
        <HeroSubtitle>
          Empowering businesses through innovative digital solutions and strategic consulting
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <StorySection>
          <StoryContent>
            <SectionTitle>Our Story</SectionTitle>
            <StoryText>
              Founded in {config.companyBirth}, {config.companyName} was established with a clear mission: to help businesses navigate the complexities of digital transformation and achieve sustainable growth.
            </StoryText>
            <StoryText>
              Based in {config.country}, we serve clients across Europe, providing comprehensive business solutions that combine strategic thinking with technical expertise. Our team brings together years of experience in consulting, technology, and business development.
            </StoryText>
            <StoryText>
              We believe that every business is unique, and we take pride in developing tailored solutions that address specific challenges and opportunities. Our client-centric approach ensures that we deliver value at every stage of engagement.
            </StoryText>
          </StoryContent>
          <StoryImage>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop" 
              alt="Business team collaboration"
            />
          </StoryImage>
        </StorySection>

        <ValuesSection>
          <SectionTitle style={{ textAlign: 'center' }}>Our Core Values</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <TeamSection>
          <SectionTitle>Our Leadership</SectionTitle>
          <TeamGrid>
            {team.map((member, index) => (
              <TeamCard key={index}>
                <TeamImage>{member.icon}</TeamImage>
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamBio>{member.bio}</TeamBio>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>

        <CompanyInfo>
          <SectionTitle style={{ color: 'white', textAlign: 'center' }}>
            Company Information
          </SectionTitle>
          <InfoGrid>
            <InfoItem>
              <InfoLabel>Legal Name</InfoLabel>
              <InfoValue>{config.companyName}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Country</InfoLabel>
              <InfoValue>{config.country}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Established</InfoLabel>
              <InfoValue>{config.companyBirth}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Registered Address</InfoLabel>
              <InfoValue style={{ fontSize: '1rem' }}>{config.address}</InfoValue>
            </InfoItem>
          </InfoGrid>
        </CompanyInfo>
      </ContentSection>
    </AboutWrapper>
  );
};

export default About;
