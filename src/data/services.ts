export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  pricing: string;
}

export const servicesData: Service[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    icon: '📄',
    shortDescription: 'Comprehensive digital transformation services to modernize your business operations and enhance efficiency.',
    fullDescription: 'Our digital transformation services help organizations navigate the complexities of modern technology adoption. We provide strategic planning, implementation, and ongoing support to ensure your business leverages digital solutions effectively. From legacy system modernization to implementing cutting-edge technologies, we guide you through every step of your digital journey.',
    features: [
      'Digital strategy development and roadmap creation',
      'Legacy system modernization and migration',
      'Process automation and workflow optimization',
      'Data analytics and business intelligence implementation',
      'Change management and staff training programs',
      'Technology stack assessment and recommendations'
    ],
    benefits: [
      'Increased operational efficiency and productivity',
      'Enhanced customer experience and satisfaction',
      'Reduced operational costs through automation',
      'Improved decision-making through data insights',
      'Competitive advantage in digital marketplace',
      'Scalable infrastructure for future growth'
    ],
    pricing: 'Starting from £5,000 - Custom pricing based on project scope'
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    icon: '📈',
    shortDescription: 'Strategic consulting services tailored to help your business thrive in today\'s competitive landscape.',
    fullDescription: 'Our experienced consultants work closely with your organization to identify opportunities, overcome challenges, and develop strategies for sustainable growth. We provide expert guidance on business operations, market expansion, organizational development, and strategic planning to help you achieve your business objectives.',
    features: [
      'Strategic business planning and advisory',
      'Market analysis and competitive intelligence',
      'Organizational structure optimization',
      'Performance management systems',
      'Risk assessment and mitigation strategies',
      'Business process reengineering'
    ],
    benefits: [
      'Clear strategic direction and actionable plans',
      'Improved organizational efficiency',
      'Enhanced market positioning',
      'Risk reduction and better compliance',
      'Increased profitability and growth',
      'Expert guidance from seasoned professionals'
    ],
    pricing: 'Starting from £3,500 per engagement'
  },
  {
    id: 'it-solutions',
    title: 'IT Solutions & Support',
    icon: '👥',
    shortDescription: 'Complete IT infrastructure management, technical support, and system integration services.',
    fullDescription: 'We provide comprehensive IT solutions that keep your business running smoothly. From infrastructure setup and maintenance to 24/7 technical support, our team ensures your technology systems are reliable, secure, and optimized for performance. We handle everything from hardware procurement to software deployment and ongoing system management.',
    features: [
      'IT infrastructure design and implementation',
      '24/7 technical support and helpdesk services',
      'Network security and cybersecurity solutions',
      'System integration and API development',
      'Software licensing and management',
      'Regular maintenance and system updates'
    ],
    benefits: [
      'Minimized downtime and business disruption',
      'Enhanced system security and data protection',
      'Predictable IT costs with managed services',
      'Access to expert technical support',
      'Scalable infrastructure that grows with you',
      'Focus on core business while we handle IT'
    ],
    pricing: 'Starting from £2,500/month for managed services'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    icon: '💼',
    shortDescription: 'Secure cloud migration, infrastructure setup, and ongoing management services.',
    fullDescription: 'Embrace the power of cloud computing with our comprehensive cloud services. We help businesses migrate to the cloud, set up robust cloud infrastructure, and manage cloud resources efficiently. Whether you need public, private, or hybrid cloud solutions, we provide expert guidance and implementation support tailored to your specific needs.',
    features: [
      'Cloud strategy and architecture design',
      'Migration planning and execution',
      'Multi-cloud and hybrid cloud solutions',
      'Cloud security and compliance',
      'Cost optimization and resource management',
      'Disaster recovery and backup solutions'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability and flexibility',
      'Enhanced collaboration capabilities',
      'Better disaster recovery options',
      'Access to latest technologies',
      'Pay-as-you-go pricing models'
    ],
    pricing: 'Starting from £4,000 for migration projects'
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    icon: '🏢',
    shortDescription: 'Custom enterprise software development and integration to streamline business processes.',
    fullDescription: 'Our enterprise solutions are designed to address the complex needs of large organizations. We develop custom software applications, integrate existing systems, and create comprehensive platforms that streamline operations across your entire organization. From ERP systems to custom CRM solutions, we build technology that scales with your business.',
    features: [
      'Custom enterprise software development',
      'ERP and CRM system implementation',
      'Business process management systems',
      'Enterprise application integration',
      'Workflow automation solutions',
      'Mobile enterprise applications'
    ],
    benefits: [
      'Unified business operations',
      'Improved data visibility across departments',
      'Streamlined workflows and processes',
      'Better customer relationship management',
      'Reduced manual work and errors',
      'Competitive advantage through custom solutions'
    ],
    pricing: 'Starting from £15,000 - Custom quotes available'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    icon: '📊',
    shortDescription: 'Advanced data analytics and business intelligence solutions for informed decision-making.',
    fullDescription: 'Transform your data into actionable insights with our data analytics and business intelligence services. We help organizations collect, analyze, and visualize data to make informed business decisions. Our solutions include data warehousing, predictive analytics, real-time reporting, and custom dashboard development.',
    features: [
      'Data warehouse design and implementation',
      'Business intelligence dashboard creation',
      'Predictive analytics and forecasting',
      'Real-time reporting and monitoring',
      'Data visualization and storytelling',
      'Advanced analytics and machine learning'
    ],
    benefits: [
      'Data-driven decision making',
      'Identify trends and opportunities',
      'Improved forecasting accuracy',
      'Better understanding of customer behavior',
      'Competitive intelligence',
      'ROI measurement and optimization'
    ],
    pricing: 'Starting from £6,000 per project'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    icon: '🔒',
    shortDescription: 'Comprehensive cybersecurity solutions to protect your business from digital threats.',
    fullDescription: 'Protect your organization from cyber threats with our comprehensive security services. We provide security assessments, implementation of security controls, monitoring, and incident response services. Our approach includes both preventive measures and response capabilities to keep your business secure.',
    features: [
      'Security assessment and penetration testing',
      'Security policy development',
      'Network and endpoint security',
      'Security monitoring and threat detection',
      'Incident response and recovery',
      'Employee security awareness training'
    ],
    benefits: [
      'Protected business assets and data',
      'Reduced risk of cyber attacks',
      'Regulatory compliance',
      'Customer trust and confidence',
      'Business continuity assurance',
      'Peace of mind for stakeholders'
    ],
    pricing: 'Starting from £3,000 for security assessments'
  },
  {
    id: 'web-development',
    title: 'Web & Mobile Development',
    icon: '💻',
    shortDescription: 'Professional web and mobile application development for modern businesses.',
    fullDescription: 'Create powerful digital experiences with our web and mobile development services. We build responsive websites, progressive web apps, and native mobile applications that engage users and drive business results. Our development process focuses on user experience, performance, and scalability.',
    features: [
      'Custom website development',
      'Mobile app development (iOS & Android)',
      'Progressive web applications',
      'E-commerce platform development',
      'Content management systems',
      'API development and integration'
    ],
    benefits: [
      'Enhanced online presence',
      'Improved customer engagement',
      'Mobile-first approach',
      'Scalable and maintainable code',
      'SEO-optimized solutions',
      'Cross-platform compatibility'
    ],
    pricing: 'Starting from £8,000 for web projects'
  },
  {
    id: 'automation',
    title: 'Process Automation',
    icon: '⚙️',
    shortDescription: 'Intelligent automation solutions to streamline operations and reduce manual work.',
    fullDescription: 'Automate repetitive tasks and streamline business processes with our automation solutions. We implement robotic process automation (RPA), workflow automation, and intelligent automation systems that free up your team to focus on high-value activities. Our solutions reduce errors, increase efficiency, and improve consistency.',
    features: [
      'Robotic process automation (RPA)',
      'Workflow automation systems',
      'Document processing automation',
      'Email and communication automation',
      'Data entry and validation automation',
      'Custom automation solutions'
    ],
    benefits: [
      'Reduced operational costs',
      'Eliminated human errors',
      'Faster processing times',
      'Improved accuracy and consistency',
      'Better resource allocation',
      'Enhanced productivity'
    ],
    pricing: 'Starting from £4,500 per automation project'
  },
  {
    id: 'training',
    title: 'Training & Development',
    icon: '📚',
    shortDescription: 'Professional training programs to upskill your team in modern technologies.',
    fullDescription: 'Invest in your team\'s growth with our comprehensive training and development programs. We offer customized training on various technologies, methodologies, and best practices. Our programs include workshops, hands-on sessions, and ongoing mentorship to ensure your team has the skills needed to succeed.',
    features: [
      'Technology training programs',
      'Digital skills development',
      'Leadership and management training',
      'Custom workshop development',
      'Online and in-person training',
      'Certification preparation courses'
    ],
    benefits: [
      'Improved team capabilities',
      'Higher employee satisfaction',
      'Better project outcomes',
      'Reduced dependency on external resources',
      'Innovation and continuous improvement',
      'Competitive advantage through skills'
    ],
    pricing: 'Starting from £1,500 per training session'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: '📋',
    shortDescription: 'Expert project management services to ensure successful delivery of initiatives.',
    fullDescription: 'Ensure project success with our professional project management services. Our certified project managers use proven methodologies to plan, execute, and deliver projects on time and within budget. We handle everything from project initiation to closure, ensuring stakeholder alignment and quality outcomes.',
    features: [
      'Project planning and scheduling',
      'Resource management and allocation',
      'Risk management and mitigation',
      'Stakeholder communication',
      'Quality assurance and control',
      'Agile and traditional methodologies'
    ],
    benefits: [
      'On-time project delivery',
      'Better budget control',
      'Reduced project risks',
      'Clear communication and reporting',
      'Quality deliverables',
      'Higher success rates'
    ],
    pricing: 'Starting from £2,800/month per project'
  },
  {
    id: 'compliance',
    title: 'Compliance & Governance',
    icon: '⚖️',
    shortDescription: 'Regulatory compliance and governance services for modern businesses.',
    fullDescription: 'Navigate complex regulatory requirements with our compliance and governance services. We help organizations implement frameworks, policies, and controls to meet regulatory requirements such as GDPR, ISO standards, and industry-specific regulations. Our approach ensures you maintain compliance while operating efficiently.',
    features: [
      'Compliance assessment and gap analysis',
      'GDPR and data protection compliance',
      'ISO certification support',
      'Policy and procedure development',
      'Audit preparation and support',
      'Ongoing compliance monitoring'
    ],
    benefits: [
      'Reduced legal and financial risks',
      'Customer trust and confidence',
      'Competitive advantage',
      'Operational efficiency',
      'Better governance structure',
      'Peace of mind for leadership'
    ],
    pricing: 'Starting from £5,500 for compliance projects'
  }
];
