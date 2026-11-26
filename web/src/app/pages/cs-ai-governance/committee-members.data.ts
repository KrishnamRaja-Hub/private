/**
 * AI CS Sub Committee membership (source: committee agenda deck, slide 6).
 * Names, titles, photographs and bios are as published on rebit.org.in
 * (/leadership, /executive-team, /committee-members). Bios are verbatim.
 * Shri. Niju Mohan is from /executive-team. Shri. Anurag Deep (Head of AI Delivery) has a
 * supplied photograph (real wall extended on the left to frame him wider; the photo itself is untouched) and a bio drafted from his
 * welcome announcement, until his profile is on the site.
 * Smt. Darshana Kulkarni has no photograph or bio on the site, so the card uses
 * initials, matching how /committee-members shows her.
 */
import { CommitteeMember } from './committee.model';

export const COMMITTEE_MEMBERS: readonly CommitteeMember[] = [
  {
    id: 'sandeep-kumar-shukla',
    name: "Prof. Sandeep Kumar Shukla",
    committeeRole: 'CHAIR',
    title: "Director, IIIT Hyderabad",
    initials: 'PSKS',
    photo: '/assets/people/sandeep-kumar-shukla.webp',
    banner: '/assets/people/sandeep-kumar-shukla-banner.webp',
    bio: [
      "Prof. Sandeep Kumar Shukla is currently a professor and the director of the International Institute of Information Technology (IIIT), Hyderabad. Before joining IIIT Hyderabad, he was the Rajiv and Ritu Batra Chair Professor in Cyber Security, and professor (HAG) of Computer Science and Engineering department at IIT Kanpur (IITK). He headed the Computer Science and Engineering department at IIT Kanpur between 2017 and 2020 and was the Poonam and Prabhu Goel Chair Professor between 2016-2019. He was the founder and joint coordinator of the National Interdisciplinary Centre for Cyber Security and Cyber Defense of Critical Infrastructures (C3i Centre) at IIT Kanpur. He was also a joint-coordinator of the National Blockchain Project funded by the National Security Council under the PMO. He was also a co-founder and program director of C3i Hub, a Technology Innovation Hub on Cyber Security created by the DST, Government of India.Prof. Shukla completed his Bachelors in Computer Science and Engineering at Jadavpur University, Kolkata and his Masters and PhD degrees from the State University of New York, Albany. He worked at the GTE Labs as a principal member of Technical Staff, and as Senior Staff Design Engineer at the Intel Corporation between 1997 and 2001. Between 2001 and 2002, he worked as a research faculty at the University of California, Irvine. He joined as an assistant Professorat Virginia Tech, Blacksburg, USA in 2002, and left Virginia Tech and as professor of Computer Engineer at Virginia Tech, Blacksburg USA.Prof. Shukla received the Presidential Early Career Award for Scientists and Engineers from President George W. Bush, the Wilhelm Friedrich Bessel Award from the Humboldt Foundation, a distinguished alumnus award, technology from the State University, New York and the Ramanujan Fellowship from SERB, India. He was AFOSR Summer Faculty awardee, and ONR Summer faculty awardee several times, a fellow of IEEE and ACM distinguished Scientist and Speaker.Prof. Shukla served in the RBI Ad Hoc committees on the cyber security of card-based payment, and mobile payment and serves in the High-Powered committee on Cyber Security of SEBI, the standing committee as well as High-Powered Committee on Cyber Security of the Ministry of Power. He has been serving on cyber security committee of the Central Power Authority (CEA) and the CII Committee on Cyber Security.His major research areas are cyber security, cyber-resilient system design, risk assessment, and critical infrastructure security and Blockchain Technology. Prof. Shukla published over 300 peer-reviewed conference papers, journal articles, book chapters, 10 books, and worked as editor for several noted Journals and Technical publications.",
    ],
  },
  {
    id: 'kamakoti-veezhinathan',
    name: "Prof. Kamakoti Veezhinathan",
    committeeRole: 'MEMBER',
    title: "Director, IIT Madras",
    initials: 'PKV',
    photo: '/assets/people/kamakoti-veezhinathan.webp',
    banner: '/assets/people/kamakoti-veezhinathan-banner.webp',
    bio: [
      "Prof. Kamakoti Veezhinathan is currently Director at IIT Madras. He joined the institute as faculty in 2001 and took over as its Director in January 2022.He specializes in Computer Architecture, Information Security and VLSI Design. He heads the Microprocessor Development Program and the Information Security Education and Awareness Program at IIT Madras funded by the Ministry of Electronics and Information Technology, Government of India. He is member of the National Security Advisory Board. He was also the Chairman of the Artificial Intelligence Task Force constituted by the Ministry of Commerce and Industry, Government of India. At IIT Madras he has served as the Chairman, JEE and as Associate Dean, Industrial Consultancy and Sponsored Research.He has over 150 publications in international journals and conferences, guided many research scholars for their PhD and Master of Science (by research) program. He has coordinated and successfully delivered close to 50 projects from industry and government R&amp;D establishments. He serves in the technology committees of the National Stock Exchange (NSE) and Reserve Bank of India (RBI).Dr. Kamakoti is the recipient of DRDO Academic Excellence Award, Indian Electronics and Semiconductor Association Techno Visionary Award, 'Abdul Kalam Technology Innovation National Fellowship', ACCS Life-time Achievement Award, IBM Faculty Award, VASVIK Industrial Research award and JC Bose Lifetime Achievement Award.He received his M.S. and Ph.D. degrees in Computer Science and Engineering from IIT Madras.",
    ],
  },
  {
    id: 'darshana-kulkarni',
    name: 'Smt. Darshana Kulkarni',
    committeeRole: 'MEMBER',
    title: 'GM, RBI',
    initials: 'SDK',
    photo: null,
    banner: null,
    bio: [],
  },
  {
    id: 'santhosh-george',
    name: "Shri. Santhosh George",
    committeeRole: 'MEMBER',
    title: "Managing Director & Chief Executive Officer, ReBIT",
    initials: 'SSG',
    photo: '/assets/people/santhosh-george.webp',
    banner: '/assets/people/santhosh-george-banner.webp',
    bio: [
      "Shri. Santhosh George is currently the MD and CEO of ReBIT. He joined ReBIT in 2021. Prior joining ReBIT, he was the President and Head of Enterprise Security product engineering and AI/ML Research Lab at Sequretek. Shri. Santhosh was responsible for enterprise product engineering with global teams at Oracle Corp and Misys as well as global implementation and professional services at Cognizant, KPMG and Rolta.He has extensive experience in digital and cloud enablement and technology led business transformation in BFSI, retail and supply chain among various verticals. In his long and illustrious career has been at the helm of building application platforms and products in eBusiness suite ERP, leading global product engineering for banking products in their global development centres and set up industry product solutions group for enterprise applications.He is a Computer Science engineer from National Institute of Technology (NIT), Calicut and has a post-graduation in Business Management (PGCBM) from Xavier School of Management (XLRI).",
    ],
  },
  {
    id: 'jegan-vijayarajan',
    name: "Shri. Jegan Vijayarajan",
    committeeRole: 'MEMBER',
    title: "Senior Vice President – Chief Delivery Officer, ReBIT",
    initials: 'SJV',
    photo: '/assets/people/jegan-vijayarajan.webp',
    banner: '/assets/people/jegan-vijayarajan-banner.webp',
    bio: [
      "Mr. Jegan Vijayarajan is currently heading Delivery of Project Management Vertical. He has 26+ years of diverse experience in handling Large-scale Complex Project Execution, Product Engineering, System Architecture and Design and Digital Transformation.Prior to ReBIT, he was the Senior Vice President and Head of Product Engineering for Documentary Trade Finance and Supply Chain Finance products at Intellect Design Arena Ltd.Mr. Jegan was the global delivery head at Capgemini Financial Services for a decade and worked with Dun and Bradstreet (D&B) TransUnion Analytics and Decision Services, Satyam/Tech Mahindra and L&T. He has successfully managed multi-year, multi-tenant, multi-million-dollar accounts in Financial Services - Banking, Credit Cards, Payments, Credit Bureau, Decision Solutions and Analytics platforms. He is a hands-on Technologist in Java, Microservice, API, Cloud Computing, Headless, Embedded AI platforms of Banking & Capital Market Applications.He holds a MBA degree in Marketing from Madurai Kamaraj University and Post Graduate Diploma in Finance from Symbiosis (SDLC).",
    ],
  },
  {
    id: 'mahesh-gharat',
    name: "Shri. Mahesh Gharat",
    committeeRole: 'MEMBER',
    title: "Group Vice President – Cyber Security, ReBIT",
    initials: 'SMG',
    photo: '/assets/people/mahesh-gharat.webp',
    banner: '/assets/people/mahesh-gharat-banner.webp',
    bio: [
      "With over 24 years of extensive experience in Cybersecurity, Mahesh brings expertise in Cloud, Network, and Application Architecture Reviews, Vulnerability Assessments, Penetration Testing, and Web/Mobile Application, API, and IoT Security Testing. Before joining ReBIT, Mahesh led the Cybersecurity practice at CitiusTech for over a decade. His prior roles include Associate Director at KPMG and key positions at Wipro, Deloitte & Touche, and Sify Assure. Throughout his career, Mahesh has been instrumental in setting up Information Security Management Systems (ISMS) and Cybersecurity Risk Management frameworks for major clients across the USA, Australia, Southeast Asia, and the Middle East. An engineering graduate from Mumbai University, Mahesh is also a Certified Information Systems Security Professional (CISSP),Certified Information Systems Auditor (CISA), and holds ISO 27001 and BS 25999 Lead Auditor certifications.",
    ],
  },
  {
    id: 'niju-mohan',
    name: "Shri. Niju Mohan",
    committeeRole: 'MEMBER',
    title: "Group Vice President – Systems Audit, ReBIT",
    initials: 'SNM',
    photo: '/assets/people/niju-mohan.webp',
    banner: '/assets/people/niju-mohan-banner.webp',
    bio: [
      'Niju is an Information security, Risk Management and Audit professional with more than 25 years’ experience. He brings cross-functional expertise in information security (strategy, design, and implementation), System Audits, Governance, Risk, Compliance, Data privacy and Business continuity and Disaster Recovery. He specializes in the financial sector with extensive knowledge in banking and brings expertise in Security, Network , Cloud and Application Architecture Reviews.Before joining ReBIT, Niju was the CISO at SBM Bank India Ltd. Prior to SBM Bank he has worked in Indian Banks (HDFC Bank and IDBI Intech ltd.), Multinational banks (ABN Amro NV and Bank of America Continuum) and NBFC (Fullerton India). He has worked in all the three lines of defense in banks i.e. Implementation, Risk management and Audit. In his various roles he has focused on improving the security architecture of the entity he served and was instrumental in getting many of them certified on ISO 27001 and PCI DSS standards.He is a Science graduate from Mumbai University with a Post Graduate Diploma in management studies from NMIMS Mumbai. Niju is also a Certified Information Systems Auditor (CISA), COBIT Implementation certified and a Certified Cisco Systems Instructor (CCSI).',
    ],
  },
  {
    id: 'anurag-deep',
    name: "Shri. Anurag Deep",
    committeeRole: 'MEMBER',
    title: "Head of AI Delivery at ReBIT",
    initials: 'SAD',
    // Bio drafted from ReBIT's internal welcome announcement; not yet on rebit.org.in.
    photo: '/assets/people/anurag-deep.webp',
    banner: '/assets/people/anurag-deep-banner.webp',
    bio: [
      "Shri. Anurag Deep is currently the Head of AI Delivery at ReBIT. He has more than 21 years of experience in Data Science, Artificial Intelligence and Machine Learning, Statistics and Cloud Computing, across the Healthcare, Banking and Financial Services, and Technology sectors. Before joining ReBIT, he held roles at Dell UK, IKS and CitiusTech, where he led several AI-driven transformation initiatives, including Generative AI and Agentic AI programs, NLP-based clinical solutions and AI model governance frameworks, consistently translating emerging technologies into meaningful business outcomes. At ReBIT, Anurag leads the AI strategy and product roadmap, GenAI and Agentic AI initiatives, Data Science delivery and AI governance. He works closely with RBI’s business and technology leadership to drive enterprise-wide AI adoption and execution, and plays a key role in advancing the organisation’s strategic AI priorities.",
    ],
  },
];
