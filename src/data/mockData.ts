
import { Company, Capability, ServiceItem, MediaEvent, BlogPost, Testimonial, FaqItem, CountryImpact, TradeRoute } from '../types';
import pakcisImage from "../assets/company-images/pakcis-image.jpeg";
import travelImage from "../assets/company-images/traveloperations-image.jpg";
import chickenCharcoImage from "../assets/company-images/chicken-charco-image.png";
import fintechImage from "../assets/company-images/fintech_edge_institutes_image.jpg";
import vadesImage from "../assets/company-images/vade-image.png";
import artelImage from "../assets/company-images/artel-image-1.png";
import psaImage from "../assets/company-images/psa-uzbekistan.jpg";
import metroImage from "../assets/company-images/metro-city-lab.jpg";



import pakcisVideo from "../assets/company-videos/pakcis-video.mp4";
import travelVideo from "../assets/company-videos/traveloperations-video.mp4";
import chickenVideo from "../assets/company-videos/chicken-charco.mp4";
import fintechVideo from "../assets/company-videos/fintech-edge-video.mp4";
import psaVideo from "../assets/company-videos/traveloperations-video.mp4";
import vadesVideo from "../assets/company-videos/vades-group-video.mp4";
import artelVideo from "../assets/company-videos/artel-video.mp4";
import metroVideo from "../assets/company-videos/metro-city-lab.mp4";



import uzbekistanDelVisit from '../assets/images/uzbekistan-delegations.png';
import uzbekistanDelVisit3 from '../assets/images/m3.png';
import uzbekistanDelVisit2 from '../assets/images/m2.png';
import uzbekistanDelVisit1 from '../assets/images/m1.png';
import uzbedelvisit from '../assets/images/uzbe-del-visit.jpeg';
import uzbedelvisit1 from '../assets/images/uzbe-del-visit1.jpeg';
import kyrgyzstanVisit from '../assets/images/kyrgyzstanVisit.jpeg';
import kyrgyzstanVisit1 from '../assets/images/kyrgyzstanVisit1.jpeg';
import kyrgyzstanVisit2 from '../assets/images/kyrgyzstanVisit2.jpeg';
import chickenCharco from '../assets/images/chicken-charco-image.png';
import chickenCharco1 from '../assets/images/chicken-charco-image1.png';
import chickenCharco2 from '../assets/images/chicken-charco-image2.png';





export const COMPANIES: Company[] = [
  {
    id: '1',
    slug: 'pakcis-trade',
    name: 'PakCIS Trade',
    tagline: 'Bridging Eurasia & Global Trade Corridors',
    description: 'Premier B2B trade & international logistics ecosystem facilitating multi-modal transport, customs clearing, and supply chain trade finance between Central Asia, CIS, and global markets.',
    longDescription: 'PakCIS Trade operates at the forefront of Eurasian commerce. By combining state-of-the-art customs clearing tech, multi-modal transport routing, and strategic bilateral trade agreements, PakCIS Trade empowers manufacturers and distributors to seamlessly scale their supply chains across emerging and established international trade corridors.',
    industry: 'Trade & Logistics',
    logoText: 'PakCIS',
    logoBg: 'from-slate-900 to-blue-950',
    coverImage: pakcisImage,
    videoUrl: pakcisVideo,
    foundedYear: '2016',
    headquarters: 'Tashkent & Dubai',
    employeeCount: '250+',
    keyServices: ['B2B Freight Logistics', 'Customs Clearance & Compliance', 'Eurasian Trade Finance', 'Bonded Warehousing'],
    techStack: ['Automated Tracking Portal', 'Customs ERP Integrations', 'Real-Time Telematics'],
    websiteUrl: 'https://pakcistrade.com',
    stats: [
      { label: 'Annual Tonnage', value: '1.2M+ Tons' },
      { label: 'Trade Routes', value: '38 Countries' },
      { label: 'Customs Clearance', value: '99.8%' }
    ]
  },
  {
    id: '2',
    slug: 'travel-operations',
    name: 'Travel Operations',
    tagline: 'Next-Gen Global Mobility & Flight Operations',
    description: 'Enterprise corporate travel management platform, destination management solutions, and luxury charter flight operations serving multinational executives and trade delegations.',
    longDescription: 'Travel Operations redefines corporate travel and aviation support. Managing high-stakes executive travel, state visits, VIP charters, and complex group logistics with round-the-clock concierge services, Travel Operations ensures maximum safety, speed, and comfort for international business leaders.',
    industry: 'Travel & Aviation',
    logoText: 'TO',
    logoBg: 'from-slate-900 to-blue-900',
    coverImage: travelImage,
    videoUrl: travelVideo,
    foundedYear: '2018',
    headquarters: 'Istanbul & Tashkent',
    employeeCount: '180+',
    keyServices: ['Corporate Travel Management', 'Private Jet Charters', 'MICE & Delegation Hosting', 'VIP Flight Concierge'],
    techStack: ['GDS API Engine', 'Real-Time Flight Tracker', 'VIP Booking Portal'],
    websiteUrl: 'https://traveloperations.com',
    stats: [
      { label: 'Flights Booked', value: '85,000+' },
      { label: 'Delegations Hosted', value: '450+' },
      { label: 'Partner Airlines', value: '120+' }
    ]
  },
   {
    id: '3',
    slug: 'chicken-charco',
    name: 'Chicken Charco',
    tagline: 'Turkish Charcoal-Grilled Culinary Excellence',
    description: 'International fast-casual restaurant chain famous for authentic Turkish wood-charcoal grilled chicken, farm-to-table sourcing, and automated kitchen operations.',
    longDescription: 'Chicken Charco is one of the fastest growing food & beverage brands in Central Asia and the Middle East. Combining traditional charcoal grilling techniques with automated kitchen workflows, mobile ordering, and strict quality control standards, Chicken Charco delivers unmatched culinary satisfaction.',
    industry: 'Hospitality & F&B',
    logoText: 'Charco',
    logoBg: 'from-amber-950 to-orange-900',
    coverImage: chickenCharcoImage,
    videoUrl: chickenVideo,
    foundedYear: '2019',
    headquarters: 'Tashkent & Dubai',
    employeeCount: '450+',
    keyServices: ['Franchise Operations', 'Turkish Charcoal Grill', 'Farm-to-Table Logistics', 'Central Kitchen Supply'],
    techStack: ['POS Cloud Ecosystem', 'Kitchen AI Inventory System', 'Customer Rewards App'],
    websiteUrl: 'https://chickencharco.com',
    stats: [
      { label: 'Active Outlets', value: '42 Stores' },
      { label: 'Meals Served / Yr', value: '3.5M+' },
      { label: 'Franchise Rating', value: '4.9/5' }
    ]
  },
  {
    id: '4',
    slug: 'psa-uzbekistan',
    name: 'PSA for Uzbekistan',
    tagline: 'Passenger & Passenger Sales General Agency',
    description: 'Authorized Passenger Sales Agency (PSA) and General Sales & Service Agent for Uzbekistan Airways, managing ticket distribution, passenger charters, and flight operations.',
    longDescription: 'PSA for Uzbekistan Airways serves as an essential commercial aviation partner, delivering seamless ticket reservation networks, international travel agency partnerships, passenger charter flights, and regional flight management services.',
    industry: 'Travel & Aviation',
    logoText: 'PSA',
    logoBg: 'from-slate-900 to-blue-900',
    coverImage: psaImage,
    videoUrl: psaVideo,
    foundedYear: '2015',
    headquarters: 'Tashkent & London',
    employeeCount: '110+',
    keyServices: ['Airline Passenger Sales', 'Charter Flight Distribution', 'GSA Aviation Operations', 'Global Travel Ticketing'],
    techStack: ['Amadeus & Sabre GDS', 'IATA Ticketing Engine', 'Agency Partner Portal'],
    websiteUrl: 'https://uzbekistanairways.com',
    stats: [
      { label: 'Tickets Issued / Yr', value: '320,000+' },
      { label: 'Global Agency Network', value: '450+' },
      { label: 'Aviation Routes', value: '55+' }
    ]
  },
  {
    id: '5',
    slug: 'fintech-edge-institute',
    name: 'FinTech Edge Institute',
    tagline: 'Empowering Next-Gen Financial Technologists',
    description: 'Official accredited academy and research hub training banking professionals, quantitative developers, and financial engineers in algorithmic trading, AI finance, and compliance.',
    longDescription: 'FinTech Edge Institute bridges academia and financial engineering. With industry-validated certifications and hands-on simulation labs, the institute equips enterprise teams and ambitious graduates with deep mastery of algorithmic trading, decentralized finance, risk modeling, and regulatory compliance.',
    industry: 'Education & FinTech',
    logoText: 'FEI',
    logoBg: 'from-slate-900 to-teal-950',
    coverImage: fintechImage,
    videoUrl: fintechVideo,
    foundedYear: '2020',
    headquarters: 'Singapore & Tashkent',
    employeeCount: '120+',
    keyServices: ['Quant Banking Bootcamps', 'Executive FinTech Training', 'Algorithmic Risk Workshops', 'FinTech Accreditation'],
    techStack: ['Interactive Simulation Lab', 'LMS Cloud Platform', 'Python & Rust Quant Engines'],
    websiteUrl: 'https://fintechedge.org',
    stats: [
      { label: 'Certified Alumni', value: '14,000+' },
      { label: 'Corporate Partners', value: '65+' },
      { label: 'Graduate Placement', value: '94%' }
    ]
  },
  
  {
    id: '6',
    slug: 'vades-group',
    name: 'Vades Group',
    tagline: 'Enterprise Technology & Strategic Software Solutions',
    description: 'Digital transformation consultancy engineering cloud architectures, enterprise software, AI workflow automation, and scalable platforms for global enterprises.',
    longDescription: 'Vades Group serves as the core technology and digital venture engine. Specializing in cloud infrastructure, cybersecurity, microservices architecture, and enterprise automation, Vades turns complex legacy operations into slick, high-speed digital assets.',
    industry: 'Soul Distributor',
    logoText: 'Vades',
    logoBg: 'from-zinc-950 to-neutral-900',
    coverImage: vadesImage,
    videoUrl: vadesVideo,
    foundedYear: '2021',
    headquarters: 'London & Tashkent',
    employeeCount: '160+',
    keyServices: ['Enterprise Web & Mobile', 'Agentic AI Systems', 'Cloud DevOps & Security', 'IT Consultancy'],
    techStack: ['React/Next.js', 'Python PyTorch', 'Kubernetes', 'Google Cloud Platform'],
    websiteUrl: 'https://vadesgroup.com',
    stats: [
      { label: 'Apps Deployed', value: '180+' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Process Efficiency', value: '+65%' }
    ]
  },
  {
    id: '7',
    slug: 'artel-services',
    name: 'Artel Services',
    tagline: 'Industrial Engineering & Facility Maintenance',
    description: 'Comprehensive industrial support, technical services, smart appliance infrastructure maintenance, and commercial facility operations across Central Asia.',
    longDescription: 'Artel Services delivers premier industrial technical support, HVAC engineering, appliance service networks, and facility operations for corporate campuses and commercial infrastructure.',
    industry: 'Soul Distributor',
    logoText: 'Artel',
    logoBg: 'from-slate-950 to-indigo-950',
    coverImage: artelImage,
    videoUrl: artelVideo,
    foundedYear: '2012',
    headquarters: 'Tashkent & Munich',
    employeeCount: '1,400+',
    keyServices: ['Commercial HVAC Maintenance', 'Smart Appliance Services', 'Industrial Facility Management', 'Technical Support SLA'],
    techStack: ['Smart IoT Diagnostics', 'Field Service Management ERP', 'Automated Dispatch'],
    websiteUrl: 'https://artelservices.com',
    stats: [
      { label: 'Service Hubs', value: '120+' },
      { label: 'Annual Tickets', value: '500k+' },
      { label: 'Client Satisfaction', value: '98.5%' }
    ]
  },
 
  
  
  {
    id: '8',
    slug: 'metro-city-lab',
    name: 'Metro City Lab',
    tagline: 'High Quality Testing at Affordable Price',
    description: 'Modern diagnostic pathology laboratory network delivering reliable medical testing, preventive health screenings, clinical diagnostics, and automated patient portal reporting.',
    longDescription: 'Metro City Lab is dedicated to accessible healthcare diagnostic excellence. Equipped with fully automated immunoassay and molecular testing equipment, Metro City Lab provides fast, precise, and affordable medical test results for patients and hospital networks.',
    industry: 'Healthcare & Diagnostics',
    logoText: 'MetroLab',
    logoBg: 'from-slate-900 to-slate-950',
    coverImage: metroImage,
    videoUrl: metroVideo,
    foundedYear: '2017',
    headquarters: 'Tashkent',
    employeeCount: '210+',
    keyServices: ['Clinical Pathology Testing', 'Automated Patient Portal', 'Corporate Health Screenings', 'Diagnostic Express Reports'],
    techStack: ['Automated LIS Software', 'Barcode Sample Tracking', 'Digital Patient App'],
    websiteUrl: 'https://metrocitylab.com',
    stats: [
      { label: 'Annual Tests', value: '1.8M+' },
      { label: 'Diagnostic Hubs', value: '28' },
      { label: 'Accuracy Rating', value: '99.9%' }
    ]
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'c1',
    title: 'Business Strategy',
    description: 'Data-backed market positioning, competitive intelligence, cross-border merger structuring, and venture building.',
    iconName: 'TrendingUp',
    category: 'Corporate Growth'
  },
  {
    id: 'c2',
    title: 'Software Development',
    description: 'Scalable microservice architectures, enterprise web applications, native mobile apps, and robust API ecosystems.',
    iconName: 'Code2',
    category: 'Technology'
  },
  {
    id: 'c3',
    title: 'AI & Automation',
    description: 'Integrating agentic LLM workflows, predictive analytics, natural language intelligence, and robotic process automation.',
    iconName: 'Cpu',
    category: 'Technology'
  },
  {
    id: 'c4',
    title: 'Cloud Solutions',
    description: 'High-availability Kubernetes deployment, multi-cloud strategy, serverless pipelines, and zero-trust security frameworks.',
    iconName: 'Cloud',
    category: 'Infrastructure'
  },
  {
    id: 'c5',
    title: 'FinTech & Banking',
    description: 'Core banking integration, automated payment gateways, fraud detection engines, and regulatory compliance tech.',
    iconName: 'CreditCard',
    category: 'Finance'
  },
  {
    id: 'c6',
    title: 'International Trade',
    description: 'Eurasian supply chain optimization, customs brokerage compliance, container logistics, and trade financing.',
    iconName: 'Globe2',
    category: 'Logistics'
  },
  {
    id: 'c7',
    title: 'Digital Marketing',
    description: 'Omnichannel growth campaigns, programmatic performance advertising, brand architecture, and global PR strategy.',
    iconName: 'Megaphone',
    category: 'Growth'
  },
  {
    id: 'c8',
    title: 'Education & Training',
    description: 'Custom corporate academies, hands-on technology bootcamps, executive leadership workshops, and LMS platforms.',
    iconName: 'GraduationCap',
    category: 'Human Capital'
  }
];

export const INDUSTRIES = [
  { name: 'Technology & SaaS', icon: 'Laptop', count: '45+ Projects' },
  { name: 'FinTech & Banking', icon: 'Coins', count: '30+ Projects' },
  { name: 'Healthcare & Pharma', icon: 'Activity', count: '18+ Projects' },
  { name: 'Education & Academies', icon: 'BookOpen', count: '25+ Projects' },
  { name: 'Travel & Aviation', icon: 'Plane', count: '40+ Projects' },
  { name: 'Hospitality & F&B', icon: 'Utensils', count: '50+ Outlets' },
  { name: 'Government & Public Sector', icon: 'Building2', count: '14+ Initiatives' },
  { name: 'Manufacturing & Hardware', icon: 'Factory', count: '2.8M Units' },
  { name: 'Import & Export Trade', icon: 'Ship', count: '1.2M Tons' },
  { name: 'Retail & E-Commerce', icon: 'ShoppingBag', count: '100+ Brands' },
  { name: 'Real Estate & Infrastructure', icon: 'Home', count: '12 Megaprojects' },
  { name: 'Startups & Incubators', icon: 'Rocket', count: '60+ Cohorts' }
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Discover', desc: 'In-depth audit of business opportunities, market feasibility, and global trends.' },
  { step: '02', title: 'Strategy', desc: 'Formulating robust execution blueprints, ROI targets, and risk mitigation models.' },
  { step: '03', title: 'Planning', desc: 'Structuring capital allocation, cross-functional teams, and timeline milestones.' },
  { step: '04', title: 'Design', desc: 'Crafting world-class user experiences, brand identities, and enterprise UI systems.' },
  { step: '05', title: 'Development', desc: 'Engineering robust cloud software, supply chain routes, or manufacturing pipelines.' },
  { step: '06', title: 'Testing', desc: 'Rigorous quality assurance, stress testing, ISO security compliance, and user trial runs.' },
  { step: '07', title: 'Launch', desc: 'Seamless global go-to-market rollout with real-time analytics monitoring.' },
  { step: '08', title: 'Scale', desc: 'Continuous expansion into new geographical markets, capital raising, and automated scaling.' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Business Consulting & Advisory',
    description: 'End-to-end strategic guidance for corporations expanding into international markets or undergoing digital restructuring.',
    benefits: ['Market Entry Feasibility', 'Regulatory Compliance Blueprint', 'Mergers & Acquisitions Structuring', 'Venture Growth Strategy'],
    iconName: 'Briefcase'
  },
  {
    id: 's2',
    title: 'Digital Transformation & AI Integration',
    description: 'Modernizing legacy enterprise systems with modern cloud infrastructure, agentic LLM assistants, and automated workflows.',
    benefits: ['Legacy Migration to Cloud', 'Custom Agentic AI Bots', 'Real-Time Executive Dashboards', 'Cybersecurity Hardening'],
    iconName: 'Zap'
  },
  {
    id: 's3',
    title: 'Global Supply Chain & Trade Logistics',
    description: 'Comprehensive freight forwarding, customs clearance, and trade finance management connecting Eurasian and global ports.',
    benefits: ['Door-to-Door Freight Shipping', 'Bonded Warehousing', 'Trade Tariff Optimization', 'Customs Clearing SLA guarantee'],
    iconName: 'Truck'
  },
  {
    id: 's4',
    title: 'Corporate Travel & Flight Operations',
    description: 'Tailored VIP flight arrangements, delegation hosting, hotel block bookings, and 24/7 executive concierge services.',
    benefits: ['Private Jet Charters', 'Diplomatic VIP Hosting', 'Dedicated Travel Concierge', 'Corporate Expense Controls'],
    iconName: 'Navigation'
  }
];

export const MEDIA_EVENTS: MediaEvent[] = [
  {
    id: 'm1',
    slug: 'uzbekistan-delegation-project-visit',
    title: 'International Collaboration & Project Visit',
    category: 'International Collaboration',
    date: 'June 14, 2026',
    location: 'Fintech Edge Institue, Lahore',
    shortDesc: 'Delegates from Uzbekistan visited our office to explore our ongoing projects, discuss potential collaboration opportunities, and strengthen professional relations between Pakistan and Uzbekistan.',
    fullStory: 'TOP GROUP was pleased to welcome a delegation from Uzbekistan to our Lahore office. During the visit, the delegation explored our ongoing projects and interacted with our team to gain insights into our operations, capabilities, and areas of expertise. The meeting also provided an opportunity to discuss potential collaborations and future business opportunities.',

     coverImage: uzbekistanDelVisit,
    galleryImages: [
      uzbekistanDelVisit1,
      uzbekistanDelVisit2,
      uzbekistanDelVisit3,

    
    ],
    keyGuests: ['Ambassador of Trade & Logistics', 'CEO of Eurasian Shipping Lines', 'Director General of FinTech Alliance'],
    certificates: ['International Business Collaboration',
    'Pakistan–Uzbekistan Business Relations']
  },
  {
    id: 'm2',
    slug: 'uzbekistan-delegation-official-visit-2026',
    title: 'Uzbekistan Delegation Official Visit',
    category: 'International Collaboration',
    date: 'June 14, 2026',
    location: 'TOP GROUP Office, Lahore',
    shortDesc:  'TOP GROUP welcomed a delegation from Uzbekistan during an official visit focused on exploring business opportunities, ongoing projects, and future collaboration between Pakistan and Uzbekistan.',

    fullStory:  'TOP GROUP had the pleasure of welcoming a delegation from Uzbekistan to its Lahore office. The visit provided an opportunity for the delegation to meet with the TOP GROUP team, explore our ongoing projects, and learn more about our diverse group of companies and services. The meeting also focused on identifying potential areas of cooperation and developing stronger business relationships between Pakistan and Uzbekistan. The delegation was warmly welcomed by the team, marking another step toward building meaningful international partnerships.',

    coverImage: uzbedelvisit,
    galleryImages: [
      uzbedelvisit1,],
    keyGuests: [
    'Uzbekistan Delegation Members',
    'TOP GROUP Management',
    'Project & Business Development Team'
  ],
   certificates: [
    'International Business Collaboration',
    'Pakistan–Uzbekistan Business Relations'
  ]
  },
  {
  id: 'm3',

  slug: 'kyrgyzstan-delegation-visit-2026',

  title: 'Kyrgyzstan Delegation Visit',

  category: 'International Visits',

  date: 'April 12, 2026',

  location: 'TOP GROUP Office, Lahore',

  shortDesc:
    'TOP GROUP welcomed a delegation from Kyrgyzstan for a meaningful meeting focused on strengthening international relations and exploring opportunities for future cooperation.',

  fullStory:
    'TOP GROUP had the honor of welcoming a delegation from Kyrgyzstan during an official visit. The meeting provided an opportunity to exchange ideas, discuss potential areas of cooperation, and strengthen professional and business relations between Pakistan and Kyrgyzstan. As part of the visit, the delegation was warmly welcomed by TOP GROUP leadership, with a commemorative gift presented as a gesture of friendship and mutual respect.',

  coverImage: kyrgyzstanVisit,

  galleryImages: [
      kyrgyzstanVisit1,
      kyrgyzstanVisit2,
  ],

  keyGuests: [
    'Kyrgyzstan Delegation Representative',
    'TOP GROUP Leadership',
    'Business & Project Development Team'
  ],

  certificates: [
    'International Business Collaboration',
    'Pakistan–Kyrgyzstan Relations'
  ]
},
 {
  id: 'm4',

  slug: 'chicken-charco-restaurant-launch',

  title: 'Chicken Charco Restaurant Launch',

  category: 'Project Launches',

  date: 'March 05, 2026',

  location: 'Pakistan',

  shortDesc:
    'Chicken Charco unveils its modern restaurant concept, combining premium charcoal-grilled cuisine with a contemporary dining experience.',

  fullStory:
    'Chicken Charco has introduced its modern restaurant concept with a distinctive charcoal-inspired identity and contemporary dining environment. The new outlet showcases the brand’s focus on quality grilled food, memorable customer experiences, and modern hospitality. With its bold visual identity, warm ambience, and dedicated dining space, Chicken Charco represents the growing hospitality portfolio of TOP GROUP.',

  coverImage: chickenCharco,

  galleryImages: [
    chickenCharco1,
    chickenCharco2
  ],

  keyGuests: [
    'TOP GROUP Leadership',
    'Chicken Charco Management Team',
    'Hospitality & Operations Team'
  ]
},
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'future-of-eurasian-trade-corridors-2026',
    title: 'The Future of Eurasian Trade Corridors: Technology, Customs & Automation',
    excerpt: 'How multi-modal digital logistics platforms are cutting cross-border transit times by up to 40% between Central Asia, Europe, and Asia.',
    content: `Cross-border international trade is undergoing a fundamental transformation. For decades, supply chains between Eurasia and Western Europe relied on paper-heavy customs documentation, fragmented freight brokers, and unpredictable border wait times.

Today, integrated ecosystems like **PakCIS Trade** under TOP GROUP are combining automated IoT container tracking, AI customs declaration validation, and digital trade finance to streamline global movement of goods.

### Key Drivers of Modern Eurasian Trade:
1. **Digital Customs Declarations**: Instant paperless clearance across multi-country transit hubs.
2. **Predictive AI Logistics**: Rerouting shipments dynamically in response to weather or port congestion.
3. **Green Supply Chain Corridors**: Transitioning freight fleets to hybrid and electrified transport options.

As regional commerce scales, businesses that adopt unified logistics infrastructure will enjoy lower costs, superior reliability, and faster time-to-market.`,
    category: 'International Trade',
    author: {
      name: 'Farrukh Usmanov',
      role: 'Head of Global Supply Chain, PakCIS',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    publishedDate: 'July 28, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Logistics', 'Trade Finance', 'Supply Chain', 'Automation']
  },
  {
    id: 'b2',
    slug: 'agentic-ai-in-enterprise-architecture',
    title: 'Building Agentic AI Platforms for Corporate Workflows',
    excerpt: 'Why single-prompt LLMs are yielding to multi-agent autonomous systems that execute complex business tasks with zero friction.',
    content: `Generative AI has evolved from a conversational curiosity into a mission-critical enterprise runtime. At **Vades Digital**, we are building agentic workflows that allow autonomous software agents to inspect ERP data, draft financial forecasts, and orchestrate customer support without manual intervention.

### Core Architectural Components:
- **Task Orchestrator**: Distributes high-level objectives into granular sub-tasks.
- **Tool Sandbox**: Grants secure execution access to database queries, email APIs, and cloud microservices.
- **Verification Engine**: Validates code outputs and schema adherence before committing changes to production.

Integrating agentic systems into your enterprise software reduces human error while accelerating decision velocity by an order of magnitude.`,
    category: 'Technology & AI',
    author: {
      name: 'Elena Rostova',
      role: 'Chief AI Officer, Vades Digital',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    publishedDate: 'July 15, 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI', 'Agentic Workflows', 'Enterprise Tech', 'Cloud']
  },
  {
    id: 'b3',
    slug: 'fintech-skills-gap-financial-engineering',
    title: 'Bridging the FinTech Skills Gap: Quantitative Training for Banks',
    excerpt: 'Traditional banking software requires urgent modernization. How FinTech Edge Institute is preparing 15,000+ engineers for algorithmic finance.',
    content: `The intersection of finance and software engineering demands a new breed of professional: the Financial Technologist. Understanding traditional accounting is no longer sufficient when dealing with microsecond algorithmic execution, decentralized liquidity pools, and automated risk engines.

At **FinTech Edge Institute**, our hands-on simulation labs enable students to construct high-frequency trading bots and stress-test risk models in real time.

By partnering directly with central banks and private equity institutions, TOP GROUP ensures our talent pipeline is continuously matched with global market demands.`,
    category: 'Education & FinTech',
    author: {
      name: 'Dr. Shahzod Alimov',
      role: 'Academic Director, FinTech Edge Institute',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    publishedDate: 'June 30, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    tags: ['FinTech', 'Education', 'Algorithmic Trading', 'Finance']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Alexander Wright',
    position: 'Chief Operations Officer',
    company: 'Eurasia Logistics Corp (London)',
    rating: 5,
    review: 'TOP GROUP transformed our Eurasian freight routing completely. Through PakCIS Trade, our cargo clearance times were slashed by half, saving us over $4.2M in annual holding costs.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    hasVideo: true
  },
  {
    id: 't2',
    clientName: 'Sofia Chen',
    position: 'VP of Digital Banking',
    company: 'Horizon Capital Partners (Singapore)',
    rating: 5,
    review: 'The custom executive AI training provided by FinTech Edge Institute equipped our core quant team with cutting-edge algorithmic risk tools. Truly world-class instruction and execution.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    clientName: 'Tahir Karimov',
    position: 'Managing Director',
    company: 'SilkRoad Aviation Holdings',
    rating: 5,
    review: 'Travel Operations handles all our high-profile executive charters with absolute discretion and speed. Whenever diplomatic delegations visit, they are our first call.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    hasVideo: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'Company',
    question: 'What is TOP GROUP and what industries does it operate in?',
    answer: 'TOP GROUP is a diversified global business ecosystem operating parent companies across International Trade & Logistics, Corporate Travel & Aviation, FinTech Education & Research, Food & Hospitality Franchising, Smart Appliance Manufacturing, and Enterprise Cloud & AI Software.'
  },
  {
    id: 'f2',
    category: 'Services',
    question: 'How does TOP GROUP partner with external corporations?',
    answer: 'We engage via Strategic Joint Ventures, Technology Licensing, Enterprise Software Development, Global Freight Concierge Services, and Corporate Talent Acceleration through our sister academies.'
  },
  {
    id: 'f3',
    category: 'Projects',
    question: 'Can TOP GROUP assist with cross-border trade between Europe and Central Asia?',
    answer: 'Yes! PakCIS Trade specializes in cross-border customs compliance, multi-modal container transport, and trade financing across Eurasia, Europe, the Middle East, and Asia.'
  },
  {
    id: 'f4',
    category: 'Pricing',
    question: 'How are advisory and software development projects structured?',
    answer: 'We provide transparent milestone-based engagements, retainer agreements for managed logistics/IT services, and joint venture equity-building models tailored to client scope.'
  },
  {
    id: 'f5',
    category: 'Partnerships',
    question: 'Is TOP GROUP open to international franchise inquiries for Chicken Charco?',
    answer: 'Absolutely. We offer complete franchise packages including automated POS software, kitchen R&D, master supply chain distribution, and staff onboarding.'
  },
  {
    id: 'f6',
    category: 'Support',
    question: 'What level of support is provided for Vades Digital cloud solutions?',
    answer: 'Vades Digital provides 24/7/365 enterprise SLA support with guaranteed response times, proactive zero-trust monitoring, and dedicated DevOps engineers.'
  }
];

export const IMPACT_COUNTRIES: CountryImpact[] = [
  {
    id: '1',
    isoNumeric: '860',
    country: 'Uzbekistan',
    region: 'Central Asia',
    status: 'Global HQ',
    clients: '850+ Enterprise Clients',
    description:
      'Global Operational Headquarters. Tashkent anchors every TOP GROUP division — trade, aviation, hospitality, education, technology, industrial services and diagnostics.',
    coordinates: [64.0, 41.6],
    cities: [{ name: 'Tashkent', coordinates: [69.24, 41.3], type: 'capital' }],
    divisions: [
      'PakCIS Trade',
      'Travel Operations',
      'PSA for Uzbekistan',
      'Chicken Charco',
      'FinTech Edge Institute',
      'Vades Group',
      'Artel Services',
      'Metro City Lab',
    ],
  },
  {
    id: '2',
    isoNumeric: '586',
    country: 'Pakistan',
    region: 'South Asia',
    status: 'Active Hub',
    clients: '640+ Trade Clients',
    description:
      'Southern gateway of the corridor. Corporate offices in Lahore and Islamabad, with sea freight moving through Karachi Port and Gwadar Port into Central Asia.',
    coordinates: [69.5, 29.2],
    cities: [
      { name: 'Peshawar', coordinates: [71.58, 34.01], type: 'city' },
      { name: 'Islamabad', coordinates: [73.04, 33.68], type: 'capital' },
      { name: 'Lahore', coordinates: [74.34, 31.55], type: 'city' },
      { name: 'Quetta', coordinates: [67.0, 30.18], type: 'city' },
      { name: 'Karachi Port', coordinates: [67.0, 24.86], type: 'port' },
      { name: 'Gwadar Port', coordinates: [62.33, 25.12], type: 'port' },
    ],
    divisions: ['PakCIS Trade', 'Travel Operations', 'FinTech Edge Institute'],
  },
  {
    id: '3',
    isoNumeric: '398',
    country: 'Kazakhstan',
    region: 'Central Asia',
    status: 'Active Hub',
    clients: '410+ Distribution Partners',
    description:
      'Largest market on the northern corridor. Almaty serves as the commercial hub while Nur-Sultan handles administrative and customs gateway operations.',
    coordinates: [67.0, 48.2],
    cities: [
      { name: 'Nur-Sultan', coordinates: [71.43, 51.13], type: 'capital' },
      { name: 'Almaty', coordinates: [76.89, 43.24], type: 'city' },
    ],
    divisions: ['PakCIS Trade', 'Artel Services'],
  },
  {
    id: '4',
    isoNumeric: '156',
    country: 'China',
    region: 'East Asia',
    status: 'Active Hub',
    clients: '380+ Sourcing Partners',
    description:
      'Primary sourcing origin. Kashgar anchors the western overland gateway feeding both the Karakoram route and the wider Central Asian corridor.',
    coordinates: [86.0, 37.0],
    cities: [{ name: 'Kashgar', coordinates: [75.99, 39.47], type: 'city' }],
    divisions: ['PakCIS Trade', 'Artel Services'],
  },
  {
    id: '5',
    isoNumeric: '031',
    country: 'Azerbaijan',
    region: 'Caucasus',
    status: 'Gateway Port',
    clients: '220+ Freight Clients',
    description:
      'Westbound gateway across the Caspian. Baku links Central Asian freight onward to Turkish and European markets via the Trans-Caspian corridor.',
    coordinates: [47.4, 40.4],
    cities: [{ name: 'Baku', coordinates: [49.87, 40.41], type: 'capital' }],
    divisions: ['PakCIS Trade', 'Travel Operations'],
  },
  {
    id: '6',
    isoNumeric: '417',
    country: 'Kyrgyzstan',
    region: 'Central Asia',
    status: 'Trade Corridor',
    clients: '160+ Transit Clients',
    description:
      'Key transit link between Kashgar and the Fergana Valley, routing Chinese overland freight into the wider Central Asian network.',
    coordinates: [74.6, 41.3],
    cities: [{ name: 'Bishkek', coordinates: [74.6, 42.87], type: 'capital' }],
    divisions: ['PakCIS Trade'],
  },
  {
    id: '7',
    isoNumeric: '795',
    country: 'Turkmenistan',
    region: 'Central Asia',
    status: 'Trade Corridor',
    clients: '130+ Corridor Clients',
    description:
      'The land bridge to the Caspian. Cargo routed through Ashgabat connects onward to Baku and the Trans-Caspian shipping lanes.',
    coordinates: [58.5, 39.2],
    cities: [{ name: 'Ashgabat', coordinates: [58.38, 37.95], type: 'capital' }],
    divisions: ['PakCIS Trade'],
  },
  {
    id: '8',
    isoNumeric: '762',
    country: 'Tajikistan',
    region: 'Central Asia',
    status: 'Emerging Market',
    clients: '95+ Clients',
    description:
      'Emerging corridor market reached overland via Afghanistan and the Pamir routes, with rising demand for consumer goods and textiles.',
    coordinates: [71.2, 38.6],
    cities: [],
    divisions: ['PakCIS Trade'],
  },
  {
    id: '9',
    isoNumeric: '004',
    country: 'Afghanistan',
    region: 'South & Central Asia',
    status: 'Trade Corridor',
    clients: '110+ Corridor Clients',
    description:
      'Overland bridge between Pakistan and Central Asia. Cargo moves via Peshawar and Quetta through Kabul toward the northern borders.',
    coordinates: [65.8, 33.2],
    cities: [{ name: 'Kabul', coordinates: [69.17, 34.53], type: 'capital' }],
    divisions: ['PakCIS Trade'],
  },
  {
    id: '10',
    isoNumeric: '364',
    country: 'Iran',
    region: 'Middle East',
    status: 'Trade Corridor',
    clients: '140+ Transit Clients',
    description:
      'Alternate westbound land corridor connecting Pakistani ports to the Caspian basin and onward to Turkey and the Gulf.',
    coordinates: [54.0, 32.0],
    cities: [],
    divisions: ['PakCIS Trade'],
  },
  {
    id: '11',
    isoNumeric: '643',
    country: 'Russia',
    region: 'Eurasia',
    status: 'Emerging Market',
    clients: '175+ Importers',
    description:
      'Northern extension of the CIS network, reached via the Kazakhstan corridor for onward distribution into the Russian Federation.',
    coordinates: [56.0, 55.5],
    cities: [],
    divisions: ['PakCIS Trade', 'Artel Services'],
  },
];

/** Dashed trade lines drawn between hubs on the map */
export const TRADE_ROUTES: TradeRoute[] = [
  { id: 'khi-tas', from: [67.0, 24.86], to: [69.24, 41.3], label: 'Karachi → Tashkent', accent: 'orange' },
  { id: 'gwd-ash', from: [62.33, 25.12], to: [58.38, 37.95], label: 'Gwadar → Ashgabat', accent: 'blue' },
  { id: 'tas-alm', from: [69.24, 41.3], to: [76.89, 43.24], label: 'Tashkent → Almaty', accent: 'orange' },
  { id: 'alm-nur', from: [76.89, 43.24], to: [71.43, 51.13], label: 'Almaty → Nur-Sultan', accent: 'orange' },
  { id: 'ash-bak', from: [58.38, 37.95], to: [49.87, 40.41], label: 'Ashgabat → Baku', accent: 'blue' },
  { id: 'isb-kbl', from: [73.04, 33.68], to: [69.17, 34.53], label: 'Islamabad → Kabul', accent: 'orange' },
  { id: 'kbl-tas', from: [69.17, 34.53], to: [69.24, 41.3], label: 'Kabul → Tashkent', accent: 'blue' },
  { id: 'kas-bis', from: [75.99, 39.47], to: [74.6, 42.87], label: 'Kashgar → Bishkek', accent: 'blue' },
];

/** Only these countries are rendered on the map */
export const VISIBLE_ISO: string[] = IMPACT_COUNTRIES.map((c) => c.isoNumeric);
export const CERTIFICATIONS = [
  { name: 'ISO 9001:2025', desc: 'Quality Management System', badge: 'Certified' },
  { name: 'GDPR & PDPA', desc: 'Global Data Privacy Compliance', badge: 'Verified' },
  { name: 'CAN-SPAM Act', desc: 'Compliant Communication Architecture', badge: 'Approved' },
  { name: 'AWS Premier Partner', desc: 'Cloud Infrastructure & DevOps', badge: 'Tier 1' },
  { name: 'Google Cloud Partner', desc: 'Enterprise AI & Data Analytics', badge: 'Certified' },
  { name: 'Microsoft Enterprise', desc: 'Solution Partner & Software Integration', badge: 'Global' }
];

export const RESOURCE_ITEMS: import('../types').ResourceItem[] = [
  {
    id: 'r1',
    slug: 'eurasian-trade-corridors-report-2026',
    title: 'Eurasian Trade Corridors: 2026 Executive Outlook & Logistics Intelligence',
    subtitle: 'Comprehensive analysis of cross-border customs digital workflows, multimodal freight transit times, and trade finance innovations across Central Asia, Europe, and Asia.',
    type: 'Market Report',
    category: 'Trade & Logistics',
    industry: 'Logistics & Trade',
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 2026',
    author: {
      name: 'Farrukh Usmanov',
      role: 'Head of Supply Chain, PakCIS Trade',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    fileSize: '4.8 MB PDF',
    pages: '42 Pages',
    downloadCount: '3,420+',
    featured: true,
    description: 'This landmark executive report delivers quantitative insights into Eurasian trade routes. Discover how automated customs declarations and smart container telematics are reducing shipping transit times by 38% across Central Asian corridors.',
    keyTakeaways: [
      'Comparative transit metrics across 12 major Eurasian rail & road freight corridors.',
      'Customs clearance automation benchmarks and paperless trade compliance guidelines.',
      'Trade finance risk mitigation frameworks for international B2B exporters.',
      'Forecasts on hybrid and green logistics fleet adoption through 2030.'
    ],
    tableOfContents: [
      'Executive Summary & Eurasian Macro Metrics',
      'Digital Customs Corridors & Paperless Portals',
      'Multimodal Freight Optimization Case Studies',
      'Risk Mitigation in Cross-Border Trade Financing',
      'Strategic Recommendations for Enterprise Logistics'
    ],
    tags: ['Logistics', 'Customs', 'Trade Finance', 'Eurasia', 'Supply Chain']
  },
  {
    id: 'r2',
    slug: 'agentic-ai-enterprise-architecture-guide',
    title: 'Agentic AI in Enterprise Software: Architectural Framework & Deployment Blueprint',
    subtitle: 'A technical and strategic playbook for CTOs and software engineering leaders building autonomous multi-agent LLM systems.',
    type: 'Whitepaper',
    category: 'Technology & AI',
    industry: 'Technology',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'July 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Chief AI Officer, Vades Group',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    fileSize: '6.2 MB PDF',
    pages: '36 Pages',
    downloadCount: '5,180+',
    featured: true,
    description: 'Written by Vades Group AI architects, this whitepaper breaks down how enterprise organizations transition from simple conversational chatbots to autonomous agentic pipelines that inspect ERP data, generate analytics, and auto-reconcile transactions.',
    keyTakeaways: [
      'Multi-agent orchestrator design patterns with tool-sandboxing and guardrails.',
      'Enterprise security, zero-trust data privacy, and role-based access for LLM tools.',
      'Production deployment metrics showing 65% reduction in operational manual effort.',
      'Step-by-step code architecture using Python, PyTorch, and Google Cloud Vertex.'
    ],
    tableOfContents: [
      'Evolution from Chatbots to Agentic Runtimes',
      'Core Multi-Agent Orchestration Architecture',
      'Tool Execution, Sandboxing & Zero-Trust Security',
      'Real-world Case Studies: ERP & Financial Automation',
      'Future Roadmap & Scaling Agentic Systems'
    ],
    tags: ['Agentic AI', 'Cloud', 'Enterprise Architecture', 'DevOps', 'Vades']
  },
  {
    id: 'r3',
    slug: 'fintech-banking-quant-education-playbook',
    title: 'Building Modern Quantitative Engineering Capability in Commercial Banking',
    subtitle: 'How tier-1 banking institutions are re-skilling tech workforces for algorithmic trading, digital currencies, and AI risk engines.',
    type: 'Executive Guide',
    category: 'FinTech Education',
    industry: 'Banking & Finance',
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'July 2026',
    author: {
      name: 'Dr. Shahzod Alimov',
      role: 'Academic Director, FinTech Edge Institute',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fileSize: '3.5 MB PDF',
    pages: '28 Pages',
    downloadCount: '2,890+',
    featured: false,
    description: 'An essential guide for bank executives and HR leaders seeking to bridge the financial technology talent gap. Learn how simulation labs and hands-on bootcamps accelerate quantitative engineering skills.',
    keyTakeaways: [
      'Curriculum framework for quantitative algorithmic trading and risk modeling.',
      'Measuring ROI on executive technology upskilling and talent retention.',
      'Establishing internal corporate innovation hubs and quantitative sandboxes.'
    ],
    tableOfContents: [
      'The Modern FinTech Talent Imperative',
      'Designing High-Impact Simulation Bootcamps',
      'Case Study: 14,000+ Certified Graduates Impact',
      'Implementation Checklist for Banking Executives'
    ],
    tags: ['FinTech', 'Banking', 'Quant', 'Education', 'Risk Management']
  },
  {
    id: 'r4',
    slug: 'global-aviation-corporate-mobility-2026',
    title: 'Global Corporate Mobility & Flight Operations Efficiency Case Study',
    subtitle: 'How Travel Operations streamlined executive charter flight management and VIP diplomatic hosting across 450+ global delegations.',
    type: 'Case Study',
    category: 'Travel & Aviation',
    industry: 'Aviation',
    coverImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'June 2026',
    author: {
      name: 'Tahir Karimov',
      role: 'Global Mobility Director, Travel Operations',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    fileSize: '2.9 MB PDF',
    pages: '22 Pages',
    downloadCount: '1,940+',
    featured: false,
    description: 'In-depth case study analyzing high-stakes corporate flight logistics, diplomatic delegation hosting, and VIP airport terminal handling with 99.8% on-time flight completion.',
    keyTakeaways: [
      'Real-time flight tracking API integration with global GDS reservation systems.',
      'Diplomatic protocol and VIP security coordination protocols for state visits.',
      'Optimizing corporate jet fuel and charter route allocation.'
    ],
    tableOfContents: [
      'Corporate Aviation Market Trends',
      'Logistics Framework for Diplomatic Delegations',
      'Tech Infrastructure: GDS & Real-time Concierge',
      'Client Impact Metrics & Feedback Analysis'
    ],
    tags: ['Aviation', 'Charter Flights', 'VIP Mobility', 'Delegation']
  },
  {
    id: 'r5',
    slug: 'fnb-franchise-automation-chicken-charco',
    title: 'Scalable F&B Franchising: Cloud Kitchen Operations & Automated Supply Chains',
    subtitle: 'Discover the operational technology blueprint behind Chicken Charco’s expansion into 42+ stores across Central Asia & Middle East.',
    type: 'Case Study',
    category: 'Hospitality & F&B',
    industry: 'Hospitality',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'May 2026',
    author: {
      name: 'Murat Yilmaz',
      role: 'VP of Culinary & Franchise Operations, Chicken Charco',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    fileSize: '3.1 MB PDF',
    pages: '24 Pages',
    downloadCount: '2,450+',
    featured: false,
    description: 'A deep dive into how Chicken Charco maintains authentic wood-charcoal grilling quality across international franchises using automated POS systems, central prep kitchens, and cloud inventory AI.',
    keyTakeaways: [
      'Standardizing quality across multi-region franchise outlets.',
      'Integrating POS cloud inventory with automated supplier dispatch.',
      'Customer loyalty retention strategies driving 4.9/5 satisfaction ratings.'
    ],
    tableOfContents: [
      'The Charcoal Grill Innovation Model',
      'Central Kitchen Logistics & Farm-to-Table Supply',
      'Cloud POS & AI Inventory Control',
      'International Franchise Scaling Playbook'
    ],
    tags: ['Hospitality', 'F&B', 'Franchise', 'Automation', 'Chicken Charco']
  },
  {
    id: 'r6',
    slug: 'industrial-facility-maintenance-smart-diagnostics',
    title: 'Smart Industrial Diagnostics & Commercial Facility Maintenance SLA Standard',
    subtitle: 'Engineering guidelines for commercial HVAC, appliance infrastructure, and automated field dispatch.',
    type: 'Research Paper',
    category: 'Industrial Services',
    industry: 'Industrial Services',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'April 2026',
    author: {
      name: 'Otabek Nizamov',
      role: 'Chief Technical Engineer, Artel Services',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    fileSize: '5.0 MB PDF',
    pages: '34 Pages',
    downloadCount: '1,630+',
    featured: false,
    description: 'Technical whitepaper detailing IoT diagnostic telemetry for commercial HVAC units, predictive maintenance algorithms, and dispatch optimization for 1,400+ field technicians.',
    keyTakeaways: [
      'Predictive failure analysis for commercial HVAC and refrigeration.',
      'Automated technician dispatch routing achieving 98.5% SLA satisfaction.',
      'Energy efficiency benchmarks for large-scale corporate campuses.'
    ],
    tableOfContents: [
      'Industrial Infrastructure Modernization',
      'IoT Sensor Telemetry & Diagnostics',
      'Field Workforce Management ERP Architecture',
      'Energy Savings & Maintenance Case Results'
    ],
    tags: ['Industrial', 'Engineering', 'IoT', 'Facility Management']
  }
];
