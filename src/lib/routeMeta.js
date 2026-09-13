// Per-route head data and background key, replacing the $pageTitle / $pageDescription /
// $pageKey variables each PHP page used to set before including includes/header.php.

export const SITE_URL = 'https://irahsolution.com'

export const DEFAULT_DESCRIPTION =
  'IRAH Solution designs enterprise AI, blockchain, Redis and software platforms for governments, PSUs and growth-led businesses.'

// Ported from $videoMap in includes/header.php.
export const videoMap = {
  home: 'irah-bg.mp4',
  platform: 'irah-platform.mp4',
  ai: 'irah-ai.mp4',
  blockchain: 'irah-blockchain.mp4',
  redis: 'irah-redis.mp4',
  affiliate: 'irah-affiliate.mp4',
  traceability: 'irah-traceability.mp4',
  contact: 'irah-contact.mp4',
  government: 'irah-government.mp4',
  services: 'irah-ai.mp4',
  products: 'irah-traceability.mp4',
  industries: 'irah-industries.mp4',
  labs: 'irah-labs.mp4',
  resources: 'irah-resources.mp4',
  careers: 'irah-careers.mp4',
  'case-redis': 'irah-case-redis.mp4',
  'case-affiliate': 'irah-case-affiliate.mp4',
  architect: 'irah-platform.mp4',
  search: 'irah-resources.mp4',
}

export const routeMeta = {
  '/': {
    pageKey: 'home',
    title: 'IRAH Solution | Enterprise AI, Blockchain, Redis & Software',
    description:
      'Enterprise AI, blockchain, Redis and software platforms for governments, PSUs and growth-led businesses.',
  },
  '/platform': {
    pageKey: 'platform',
    title: 'IRAH Platform | Enterprise Architecture',
    description:
      'Unified enterprise architecture across AI, Redis, blockchain, software and operations.',
  },
  '/services': {
    pageKey: 'software',
    title: 'Enterprise Software Development | IRAH Solution',
    description:
      'Custom software, web and mobile apps, APIs, data engineering, cloud, DevOps and application modernisation.',
  },
  '/ai-ml': {
    pageKey: 'ai',
    title: 'AI/ML Engineering for Government & Enterprise | IRAH Solution',
    description:
      'Production AI/ML platforms, document intelligence, computer vision, RAG, predictive analytics and decision systems.',
  },
  '/blockchain': {
    pageKey: 'blockchain',
    title: 'Blockchain Platforms & Traceability | IRAH Solution',
    description:
      'Permissioned blockchain, provenance, certificate verification, supply-chain traceability and tamper-evident registries.',
  },
  '/redis-government': {
    pageKey: 'redis',
    title: 'Redis for India Government | IRAH Solution',
    description:
      'Redis PoCs, application acceleration, high availability and implementation support for India government platforms.',
  },
  '/government-solutions': {
    pageKey: 'government',
    title: 'Government & PSU Technology Solutions | IRAH Solution',
    description:
      'AI, blockchain, Redis and enterprise software solutions for state governments, PSUs and public institutions.',
  },
  '/industries': {
    pageKey: 'industries',
    title: 'Industries | IRAH Solution',
    description:
      'Industry solutions for education, agriculture, health, utilities, smart cities and enterprise sectors.',
  },
  '/affiliate-marketing': {
    pageKey: 'affiliate',
    title: 'Affiliate & Performance Marketing | IRAH Solution',
    description:
      'Affiliate marketing, publisher management, S2S attribution, fraud controls and performance growth services.',
  },
  '/products': {
    pageKey: 'products',
    title: 'AI & Blockchain Products | IRAH Solution',
    description:
      'Bharat Food Assure and Seed Traceability platforms using AI/ML, blockchain and field-ready applications.',
  },
  '/bharat-food-assure': {
    pageKey: 'traceability',
    title: 'Bharat Food Assure | AI & Blockchain Food Traceability',
    description:
      'Food authenticity, traceability, counterfeit detection and consumer verification platform by IRAH Solution.',
  },
  '/seed-traceability': {
    pageKey: 'traceability',
    title: 'Seed Traceability Platform | IRAH Solution',
    description:
      'AI and blockchain seed lineage, certification, distribution and farmer verification platform.',
  },
  '/case-studies': {
    pageKey: 'cases',
    title: 'Case Studies | IRAH Solution',
    description:
      'Government, Redis, affiliate, AI and blockchain solution case studies and implementation blueprints.',
  },
  '/case-redis-government': {
    pageKey: 'case-redis',
    title: 'Redis for Government | Case Framework',
    description:
      'A detailed Redis government performance framework covering baseline, PoC, architecture, security, operations and scale.',
  },
  '/case-affiliate-scale': {
    pageKey: 'case-affiliate',
    title: 'Affiliate Scale | Case Framework',
    description:
      'A detailed affiliate growth framework covering partner quality, attribution, fraud controls, reconciliation and cohort economics.',
  },
  '/resources': {
    pageKey: 'resources',
    title: 'Knowledge Hub | IRAH Solution',
    description:
      'Practical resources on AI, Redis, blockchain, government platforms and growth systems.',
  },
  '/blogs': {
    pageKey: 'blogs',
    title: 'Insights | IRAH Solution',
    description:
      'Articles on Redis, AI/ML, blockchain, government software, traceability and affiliate growth.',
  },
  '/downloads': {
    pageKey: 'resources',
    title: 'Download Centre | IRAH Solution',
    description:
      'Download IRAH capability briefs for AI, Redis, government platforms and affiliate growth.',
  },
  '/irah-labs': {
    pageKey: 'labs',
    title: 'IRAH Labs | Research & Prototypes',
    description:
      'IRAH Labs explores AI agents, digital twins, Redis architectures and government accelerators.',
  },
  '/careers': {
    pageKey: 'careers',
    title: 'Careers | IRAH Solution',
    description:
      'Careers in enterprise AI, blockchain, Redis and software engineering at IRAH Solution.',
  },
  '/solution-architect': {
    pageKey: 'architect',
    title: 'IRAH Solution Architect | Find the Right Platform',
    description:
      'A guided solution finder for government, PSU and enterprise technology programmes.',
  },
  '/search': {
    pageKey: 'search',
    title: 'Search | IRAH Solution',
    description: 'Search IRAH Solution platforms, solutions, products, work and resources.',
  },
  '/about': {
    pageKey: 'about',
    title: 'About IRAH Solution',
    description:
      'IRAH Solution builds AI/ML, blockchain, Redis, enterprise software and performance growth systems.',
  },
  '/contact': {
    pageKey: 'contact',
    title: 'Contact IRAH Solution',
    description:
      'Discuss enterprise software, AI, Redis, blockchain or affiliate growth with IRAH Solution.',
  },
  '/thank-you': {
    pageKey: 'contact',
    title: 'Thank you | IRAH Solution',
    description: 'Your enquiry has been received.',
    noindex: true,
  },
  '/privacy-policy': {
    pageKey: 'legal',
    title: 'Privacy Policy | IRAH Solution',
    description: 'IRAH Solution website privacy policy.',
  },
  '/terms': {
    pageKey: 'legal',
    title: 'Terms of Use | IRAH Solution',
    description: 'Terms of use for the IRAH Solution website.',
  },
  '/post-redis-government-performance': {
    pageKey: 'article',
    title: 'Where Redis creates value in government applications | IRAH Solution',
    description:
      'Redis is most useful when matched to a specific workload rather than added as a generic speed layer.',
  },
  '/post-ai-counterfeit-detection': {
    pageKey: 'article',
    title: 'AI for counterfeit detection | IRAH Solution',
    description:
      'AI should prioritise suspicious activity for human review rather than make unsupported enforcement decisions.',
  },
  '/post-modeling-seed-supply-chain': {
    pageKey: 'article',
    title: 'Modeling the seed supply chain | IRAH Solution',
    description:
      'Traceability begins with a clear representation of lineage, lots, transformations and authorised actors.',
  },
  '/post-offline-first-scan-apps': {
    pageKey: 'article',
    title: 'Offline-first scan applications | IRAH Solution',
    description: 'Field applications must remain useful when network coverage is inconsistent.',
  },
  '/post-server-side-tracking-2025': {
    pageKey: 'article',
    title: 'Server-side tracking for resilient attribution | IRAH Solution',
    description:
      'Browser-only tracking is increasingly incomplete. Server-side event flow can improve reliability when implemented with consent and governance.',
  },
  '/post-affiliate-without-leakage': {
    pageKey: 'article',
    title: 'Affiliate programmes without leakage | IRAH Solution',
    description:
      'Growth requires a partner model that rewards approved value and makes every conversion explainable.',
  },
}

export const notFoundMeta = {
  pageKey: 'error',
  title: 'Page Not Found | IRAH Solution',
  description: 'The requested page could not be found.',
}

export function getRouteMeta(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return routeMeta[clean] || notFoundMeta
}
