// Single source of truth for everything rendered on the portfolio.
// Edit this file, then run `npm run build` to regenerate index.html.
// Keep every claim here defensible: no invented metrics, ownership or results.

export const site = {
  name: 'Sangita Giri',
  role: 'Product & Transformation Leader',
  tagline: 'Turning complex enterprise problems into measurable product outcomes.',
  url: 'https://sangitagiri29.github.io/whoami/',
  title: 'Sangita Giri | Product & Transformation Leader',
  description:
    'Product and transformation leader with 20 years across software engineering, enterprise technology delivery, program leadership and product management. Product strategy, portfolio leadership and data-driven decisions for enterprise technology.',
  keywords:
    'Senior Product Manager, Group Product Manager, Product Strategy, Product Leadership, Product Transformation, Technical Program Management, Portfolio Management, Data-Driven Product Management, Enterprise Technology, Product Analytics',
  ogImage: 'assets/img/og-image.png',
  portrait: { src: 'assets/img/sangita-giri.jpg', alt: 'Portrait of Sangita Giri' },
  linkedin: 'https://www.linkedin.com/in/sangitagiri01/',
  resume: 'assets/resume/Sangita-Giri-Resume.pdf',
  formEndpoint: 'https://formspree.io/f/mvgrzabb',
  analyticsId: 'G-KRSK4VET42',
  location: 'Toronto, Canada',
  copyrightYear: 2026,
};

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#thinking', label: 'Product Thinking' },
  { href: '#data', label: 'Data & AI' },
  { href: '#journey', label: 'Journey' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'Product & Transformation Leader',
  headline: 'Turning complex enterprise problems into measurable product outcomes.',
  intro:
    '20 years across software engineering, enterprise technology delivery, product management and transformation. I work where product strategy, data, technology and execution meet, turning customer and business problems into clear priorities, measurable outcomes and scalable products.',
  capabilities: [
    'Product Strategy',
    'Portfolio Leadership',
    'Data-Driven Decisions',
    'Enterprise Technology',
    'AI-Enabled Product Development',
  ],
  primaryCta: { href: '#work', label: 'View My Work' },
  secondaryCtas: [
    { href: site.linkedin, label: 'LinkedIn', external: true },
    { href: site.resume, label: 'Download Resume', download: true },
  ],
  stats: [
    { value: '20', unit: 'Years', label: 'Technology leadership' },
    { value: '5', unit: 'Products', label: 'Portfolio scope' },
    { value: '19', unit: 'Pods', label: 'Cross-product ecosystem' },
    { value: '6+', unit: 'Teams', label: 'Program leadership', secondary: true },
    { value: 'SPC + RTE', unit: 'SAFe', label: 'Enterprise credentials' },
  ],
};

export const work = {
  heading: 'Selected product leadership work',
  intro:
    'Three engagements, from enterprise program leadership to product transformation. Each is told as a product story: challenge, role, approach, signals and what changed.',
  caseStudies: [
    {
      id: 'ups',
      featured: true,
      company: 'UPS',
      logo: { src: 'assets/img/ups.png', alt: 'UPS' },
      title: 'Product transformation & portfolio leadership',
      period: 'July 2025 – present',
      scope: ['5 products', '19 delivery pods', 'Strategy & roadmap influence', 'OKRs & prioritization', 'Portfolio & quarterly planning', 'Capacity & dependencies', 'Flow, throughput & predictability', 'Power BI insights'],
      summary:
        'Leading product transformation across five enterprise products and nineteen delivery pods, and building the product management capability that keeps them aligned.',
      sections: {
        context:
          'Five products share customers, data, platforms and delivery capacity. Nineteen pods plan and ship in parallel, so a decision in one product becomes a dependency, risk or capacity constraint in another.',
        challenge:
          'Move the portfolio from activity-based planning to outcome-based product management: clear strategy and roadmaps, OKRs that mean something, prioritization that respects capacity and cross-product dependencies, and product KPIs leadership can act on.',
        role:
          'I influence product strategy and roadmaps, partner with Product Managers and Product Owners on OKRs and prioritization, and guide portfolio and quarterly planning with capacity and dependency management across the pods. I bring product and operational KPIs into Power BI insights that Product, Engineering and business leaders use to decide, coach Product Managers, Product Owners, Scrum Masters and Release Train Engineers, and improve the product operating model. Decisions stay with the accountable product and business owners.',
        approach:
          'Start from customer and business outcomes and work back to roadmaps, quarterly commitments and pod capacity. Surface cross-product dependencies before planning, not after. Treat prioritization as a data-grounded trade-off conversation, and build the habits (OKR reviews, KPI check-ins, roadmap refreshes) that let teams run it themselves.',
        signals:
          'Product and operational KPIs, adoption, capacity by pod, flow, throughput and predictability, dependency maps and risk trends, brought together in Power BI so every planning conversation starts from the same picture.',
        impact: [
          'One portfolio view of strategy, roadmaps, OKRs and capacity across five products and nineteen pods.',
          'Flow, throughput and predictability measured consistently across pods, so capacity and dependency conversations use the same evidence.',
          'PI and quarterly planning that surfaces cross-product dependencies early, so trade-offs are deliberate.',
          'Product and operational KPIs in Power BI used in leadership decision forums, not just status reviews.',
          'Stronger Product Manager and Product Owner practice through hands-on coaching on outcomes, prioritization and evidence.',
        ],
      },
    },
    {
      id: 'td',
      company: 'TD Bank',
      logo: { src: 'assets/img/td.png', alt: 'TD Bank' },
      title: 'Enterprise product & program delivery',
      period: '2023 – July 2025',
      scope: ['Product & technology roadmaps', 'Quarterly planning', 'Release readiness', 'Power BI dashboards', 'Senior governance'],
      summary:
        'The bridge from program leadership to product leadership: roadmaps, prioritization and release readiness for enterprise delivery platforms in a regulated bank, steered with performance data.',
      sections: {
        context:
          'Every release passed through Business, Product, Architecture, Engineering, Risk and Compliance. The platform work included migrating delivery pipelines from Jenkins to Azure DevOps with stability and scalability as non-negotiables.',
        challenge:
          'Keep the product and technology roadmap moving while managing risk, dependencies and release readiness across many stakeholders, and give leadership a trustworthy view of delivery health without adding reporting overhead.',
        role:
          'As Product Manager I defined and prioritized the roadmap, ran quarterly and capacity planning, managed risks and dependencies and led release readiness. I built the Agile Maturity Index and the Power BI dashboards leadership used to see velocity, throughput, cycle time and predictability, and represented the product in senior governance forums.',
        approach:
          'Anchor prioritization in business goals and platform stability rather than the loudest request. Make readiness criteria explicit before a release, not during it. Measure the delivery system so improvement conversations run on evidence, not opinion.',
        signals:
          'Velocity, throughput and cycle time by team; predictability against quarterly commitments; pipeline stability through the Azure DevOps migration; customer feedback on released features; risk and dependency status before each release.',
        impact: [
          'Delivered the Jenkins-to-Azure DevOps migration with pipeline stability and scalability treated as product outcomes.',
          'Roadmap and backlog prioritization tied to business goals, with cross-functional input gathered before commitments.',
          'Agile Maturity Index and automated Power BI reporting gave leadership a shared, near-real-time view and reduced manual reporting effort.',
          'Customer feedback built into iterative releases as a standing practice.',
        ],
      },
    },
    {
      id: 'cgi',
      company: 'CGI',
      logo: { src: 'assets/img/cgi.png', alt: 'CGI' },
      title: 'Large-scale program & Release Train leadership',
      period: '2022 – 2023',
      scope: ['6+ teams', 'PI planning', 'Cross-team dependencies', 'Predictability metrics', 'Organizational transformation'],
      summary:
        'Enterprise program execution across six or more teams as Release Train Engineer, with SAFe as the mechanism for planning, dependency management and predictable delivery.',
      sections: {
        context:
          'More than six teams whose work had to land together. Planning happened in silos, dependencies surfaced late and leadership could not see whether commitments would hold.',
        challenge:
          'Bring the program onto one planning cadence, make dependencies and risks visible early, align delivery to the product roadmap and give leadership metrics they could trust.',
        role:
          'I led program execution: enterprise and PI planning, cross-team dependency and risk management, roadmap alignment with Product Management, and the metrics and information radiators that tracked flow and predictability. Coaching teams and leaders through the organizational change was part of the job, not a side activity.',
        approach:
          'Use the planning cadence to force the hard conversations early: capacity, dependencies, architectural and leadership impediments. Partner with Product Management on prioritization so the train works on what matters. Instrument the program so course corrections happen between planning events.',
        signals:
          'Planned versus delivered by PI, dependency and risk registers, flow bottlenecks on Kanban and information radiators, Power BI forecasting for sprint tracking and program planning.',
        impact: [
          'One planning cadence and dependency map across six or more teams, giving leadership an early, honest view of delivery risk.',
          'More predictable program commitments through explicit capacity planning and impediment resolution.',
          'Product roadmap and PI priorities aligned through a standing partnership with Product Management.',
          'Power BI forecasting and flow metrics adopted as the program’s decision tools.',
        ],
      },
    },
  ],
  foundation: {
    heading: 'Earlier career: technical foundation',
    intro:
      'Fifteen years of shipping enterprise software, analyzing systems, running enterprise projects and leading large-scale Agile delivery. It is why I can hold my own with architects and engineers on trade-offs, platform risk and delivery reality.',
    roles: [
      { company: 'TCS', title: 'Agile Delivery Manager', years: '2020 – 2022', summary: 'Large-scale Agile delivery across client programs: the step from project delivery into program and transformation leadership.' },
      { company: 'Cognizant', title: 'Technical Project Manager', years: 'Nov 2016 – Dec 2019', summary: 'Enterprise technology delivery: planning, execution and stakeholder management across delivery teams.' },
      { company: 'NTT DATA', title: 'Agile Consultant', years: '2014 – 2016', summary: 'Guided enterprise teams through Agile adoption and aligned pods around shared goals.' },
      { company: 'Accenture (USA)', title: 'Systems Analyst, State Farm', years: '2012 – 2014', summary: 'Systems analysis and enterprise Java delivery for the State Farm DSS program: REST APIs, reconciliation reporting, performance work.' },
      { company: 'Accenture (India)', title: 'Senior Software Engineer', years: '2007 – 2011', summary: 'Java / J2EE engineering for Thomas Cook (payment and review workflows), UnitedHealth Group and Walgreens.' },
    ],
    techNote: 'Technical foundation: Java, Spring, Hibernate and REST, 2007 to 2014.',
    clientsNote: 'Consulting engagements have included Bell, CPPIB, FedEx, Citibank and Fidelity Investments.',
  },
};

export const organizations = {
  heading: 'Organizations',
  logos: [
    { src: 'assets/img/ups.png', alt: 'UPS' },
    { src: 'assets/img/td.png', alt: 'TD Bank' },
    { src: 'assets/img/cgi.png', alt: 'CGI' },
    { src: 'assets/img/tcs.png', alt: 'Tata Consultancy Services' },
    { src: 'assets/img/cognizant.png', alt: 'Cognizant' },
    { src: 'assets/img/ntt-data.png', alt: 'NTT DATA' },
    { src: 'assets/img/accenture.png', alt: 'Accenture' },
  ],
};

export const thinking = {
  heading: 'How I approach product leadership',
  intro: 'The same loop for one product or a whole portfolio, run with evidence and with the people who live with the decision.',
  steps: [
    { name: 'Understand', text: 'Customer problem, business context and the data we already have.' },
    { name: 'Prioritize', text: 'Outcomes, value, constraints and the trade-offs nobody wants to say out loud.' },
    { name: 'Build', text: 'Partner with Product, Design and Engineering on the smallest thing that tests the idea.' },
    { name: 'Measure', text: 'KPIs, adoption, outcomes and operational performance, not just delivery.' },
    { name: 'Learn', text: 'Use the evidence to adjust direction and say what changed and why.' },
  ],
};

export const data = {
  eyebrow: 'Data-driven product leadership',
  heading: 'From dashboards to decisions',
  intro:
    'I use data to understand what is changing, why it is changing and what decision should come next. Reporting is the by-product; the point is a better decision, made sooner, by people who see the same picture.',
  practice: [
    'Separate a real shift from noise before anyone reacts to it.',
    'Trace a metric back to the product, team or dependency behind it.',
    'Frame the decision, the options and what each one costs.',
    'Set the follow-up measure so we know whether it worked.',
  ],
  groups: [
    { title: 'Product signals', items: ['KPIs', 'Adoption', 'Outcomes', 'Operational performance'] },
    { title: 'Delivery signals', items: ['Throughput', 'Cycle time', 'Predictability', 'Flow'] },
    { title: 'Portfolio signals', items: ['Capacity', 'Dependencies', 'Risk', 'Trends'] },
  ],
  tools: ['Power BI', 'Jira', 'Azure DevOps'],
};

export const ai = {
  eyebrow: 'AI + Product',
  heading: 'AI as a supporting capability',
  flow: ['Research', 'Explore', 'Analyze', 'Prototype', 'Communicate'],
  statement:
    'I use AI daily in product work: synthesizing discovery research, exploring hypotheses and challenging assumptions, refining requirements, interpreting data, prototyping quickly and producing documentation at pace. It shortens the distance from question to first answer; judgement, accountability and the decision stay with the people in the room.',
};

export const journey = {
  heading: 'Career journey',
  intro: 'One progression rather than a series of job changes: each stage widened the scope and changed the kind of decision.',
  stages: [
    {
      name: 'Technical Foundation',
      years: '2007 – 2014',
      roles: [
        { company: 'Accenture (India)', title: 'Senior Software Engineer', years: '2007 – 2011' },
        { company: 'Accenture (USA)', title: 'Systems Analyst, State Farm', years: '2012 – 2014' },
      ],
      text: 'Enterprise Java engineering, then systems analysis on a large insurance program.',
    },
    {
      name: 'Enterprise Delivery',
      years: '2014 – 2019',
      roles: [
        { company: 'NTT DATA', title: 'Agile Consultant', years: '2014 – 2016' },
        { company: 'Cognizant', title: 'Technical Project Manager', years: 'Nov 2016 – Dec 2019' },
      ],
      text: 'Agile adoption across enterprise teams, then owning delivery plans, risks and stakeholders.',
    },
    {
      name: 'Program & Transformation Leadership',
      years: '2020 – 2023',
      roles: [
        { company: 'TCS', title: 'Agile Delivery Manager', years: '2020 – 2022' },
        { company: 'CGI', title: 'Release Train Engineer', years: '2022 – 2023' },
      ],
      text: 'Large-scale Agile delivery, then multi-team programs and organizational change as Release Train Engineer.',
    },
    {
      name: 'Product Leadership',
      years: '2023 – present',
      roles: [
        { company: 'TD Bank', title: 'Product Manager', years: '2023 – July 2025' },
        { company: 'UPS', title: 'Product transformation & portfolio leadership', years: 'July 2025 – present' },
      ],
      text: 'Enterprise product delivery, then product transformation across a five-product portfolio.',
    },
  ],
};

export const credentials = {
  heading: 'Credentials',
  education: [
    { title: 'Product Management', org: 'University of Toronto' },
    { title: 'B.Tech, Computer Science & Engineering', org: 'Dr. A. P. J. Abdul Kalam Technical University' },
  ],
  certifications: [
    { title: 'SAFe Program Consultant (SPC)', org: 'Scaled Agile' },
    { title: 'SAFe Release Train Engineer (RTE)', org: 'Scaled Agile' },
    { title: 'Certified ScrumMaster (CSM)', org: 'Scrum Alliance' },
  ],
};

export const contact = {
  heading: 'Let’s build products that make complex decisions simpler.',
  intro:
    'Hiring for senior product, portfolio or product transformation leadership, or want to compare notes on running product at enterprise scale? I would like to hear from you.',
  form: {
    heading: 'Send a message',
    success: 'Thank you. Your message has been sent and I will reply soon.',
    error: 'The message could not be sent. Please try again or reach me on LinkedIn.',
  },
};
