/**
 * Primary and footer menus as served by rebit.org.in (/web/api/menu_items/*).
 * Used only for the standalone preview shell; on the live site the shared
 * header/footer components load these from the CMS.
 */
export interface MenuLink { readonly title: string; readonly url: string; }
export interface MenuGroup { readonly title: string; readonly url?: string; readonly children: readonly MenuLink[]; }
export interface MenuSection {
  readonly title: string;
  readonly description: string;
  readonly groups: readonly MenuGroup[];
  readonly careers?: boolean;
}

export const PRIMARY_MENU: readonly MenuSection[] = [
  {
    title: 'Who We Are',
    description: "Learn about ReBIT's mission, leadership, governance framework and our role in strengthening India's central banking technology ecosystem.",
    groups: [
      { title: 'About ReBIT', children: [
        { title: 'Our Story', url: '/our-story' },
        { title: 'Vision, Mission & Core Values', url: '/vision-mission' },
        { title: 'Our Offices', url: '/our-offices' },
      ] },
      { title: 'Leadership', children: [
        { title: 'Board of Directors', url: '/leadership' },
        { title: 'Executive Team', url: '/executive-team' },
        { title: 'Committee Members', url: '/committee-members' },
      ] },
      { title: 'CSR & Sustainability', children: [{ title: 'CSR Overview', url: '/csr' }] },
    ],
  },
  {
    title: 'Products',
    description: "ReBIT's enterprise technology products powering India's central banking and financial institutions.",
    groups: [
      { title: 'Enterprise Products', url: '/products/enterprise-products', children: [
        { title: 'Enterprise Platform', url: '/products/enterprise-platform' },
        { title: 'Next Generation Audit Automation System', url: '/products/ngaas' },
        { title: 'Next Generation Central Banking', url: '/products/ngcb' },
        { title: 'Enterprise Content Management', url: '/products/ecm' },
      ] },
    ],
  },
  {
    title: 'Services',
    description: "End-to-end services safeguarding India's banking and financial infrastructure with cutting-edge technology solutions.",
    groups: [
      { title: 'Enterprise Services', url: '/services/enterprise-services', children: [
        { title: 'AI Services', url: '/services/ai-enterprise' },
        { title: 'Enterprise IT Services', url: '/services/it-examination' },
        { title: 'Cybersecurity', url: '/services/cybersecurity' },
        { title: 'Systems Audit', url: '/services/system-audits' },
        { title: 'Enterprise Platform Services', url: '/services/enterprise-platform' },
      ] },
    ],
  },
  {
    title: 'Insights',
    description: "Explore ReBIT's thought leadership, innovation initiatives, and knowledge resources driving excellence in central banking technology.",
    groups: [
      { title: 'Centres of Excellence', url: '/insights/centres-of-excellence', children: [
        { title: 'Enterprise Architecture CoE', url: '/insights/centres-of-excellence/ux?coe_term=75' },
        { title: 'User Experience CoE', url: '/insights/centres-of-excellence/ux?coe_term=74' },
        { title: 'Quality Engineering CoE', url: '/insights/centres-of-excellence/qa?coe_term=76' },
        { title: 'Product Management CoE', url: '/insights/centres-of-excellence/product-management?coe_term=77' },
        { title: 'Software Engineering CoE', url: '/insights/centres-of-excellence/software-engineering?coe_term=79' },
        { title: 'Data Science CoE', url: '/insights/centres-of-excellence/data-science?coe_term=80' },
        { title: 'Application Value Engineering CoE', url: '/insights/centres-of-excellence/app-value-engg?coe_term=81' },
      ] },
      { title: 'Publications', children: [
        { title: 'Global Standards', url: '/insights/publications/global-standards' },
        { title: 'Cyber Pulse', url: '/insights/publications/cyber-pulse' },
      ] },
      { title: 'Events', children: [{ title: 'Hackathon 2026', url: '/insights/events/hackathon-2026' }] },
    ],
  },
  {
    title: 'Careers',
    description: 'Explore opportunities, hear from our leaders, and discover a workplace driven by innovation, collaboration, and impact.',
    careers: true,
    groups: [
      { title: 'Explore Opportunities', children: [
        { title: 'Open Positions', url: '/careers#jobs' },
        { title: 'Life at ReBIT', url: '/careers#life' },
        { title: 'Campus Programs', url: '/careers#campus' },
      ] },
    ],
  },
];

export const FOOTER_MENU: readonly MenuGroup[] = [
  { title: 'COMPANY', children: [
    { title: 'Our Offices', url: '/our-offices' },
    { title: 'Leadership', url: '/leadership' },
    { title: 'CSR Overview', url: '/csr' },
    { title: 'Procurement', url: '/procurement' },
  ] },
  { title: 'PRODUCTS & SERVICES', children: [
    { title: 'Account Aggregator Ecosystem', url: 'https://api.rebit.org.in/' },
    { title: 'Enterprise Products', url: '/products/enterprise-products' },
    { title: 'Enterprise Services', url: '/services/enterprise-services' },
  ] },
  { title: 'INSIGHTS', children: [
    { title: 'Centres of Excellence', url: '/insights/centres-of-excellence' },
    { title: 'Global Standards', url: '/insights/publications/global-standards' },
    { title: 'Cyber Pulse', url: '/insights/publications/cyber-pulse' },
  ] },
];
