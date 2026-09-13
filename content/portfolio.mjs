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
  { href: '#approach', label: 'Approach' },
  { href: '#data', label: 'Data' },
  { href: '#ai', label: 'AI' },
  { href: '#journey', label: 'Journey' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'Product & Transformation Leader',
  headline: 'Turning complex enterprise problems into measurable product outcomes.',
  intro:
    '20 years across software engineering, enterprise technology delivery, product management and transformation. I work at the intersection of product strategy, data, technology and execution, helping teams turn customer and business problems into clear priorities, measurable outcomes and scalable products.',
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
};

export const snapshot = {
  heading: 'Leadership snapshot',
  intro: 'A few indicators of scope. The case studies below show how the work actually happens.',
  stats: [
    { value: '20', unit: 'years', label: 'Technology experience across engineering, delivery, program and product leadership' },
    { value: '5', unit: 'products', label: 'Portfolio scope in my current product transformation role' },
    { value: '19', unit: 'delivery pods', label: 'Cross-product ecosystem I help plan, prioritize and measure' },
    { value: '6+', unit: 'teams', label: 'Enterprise program leadership as a Release Train Engineer' },
    { value: 'SPC · RTE', unit: 'SAFe', label: 'Program Consultant and Release Train Engineer credentials' },
  ],
};

export const work = {
  heading: 'Selected product leadership work',
  intro:
    'Three engagements that show the progression from enterprise program leadership to product transformation. Each is written as a product story: the problem, my role, the thinking, the signals that informed decisions and what changed.',
  caseStudies: [
    {
      id: 'ups',
      company: 'UPS',
      logo: { src: 'assets/img/ups.png', alt: 'UPS' },
      title: 'Product transformation & portfolio leadership',
      period: '2026 – present',
      scope: ['5 products', '19 delivery pods', 'Product operating model', 'OKRs & roadmaps', 'Power BI insights'],
      summary:
        'Leading product transformation across a portfolio of five enterprise products delivered by nineteen pods, and building the product management capability that keeps them aligned.',
      sections: {
        context:
          'A cross-product ecosystem where five products share customers, data, platforms and delivery capacity. Nineteen pods plan and ship in parallel, and decisions made in one product surface as dependencies, risks or capacity constraints in another.',
        challenge:
          'Move the portfolio from activity-based planning to outcome-based product management: clear strategy and roadmaps, OKRs that mean something, prioritization that respects capacity and cross-product dependencies, and product KPIs that leadership can act on.',
        role:
          'I drive the product operating model across the portfolio. I partner with Product Managers and Product Owners on strategy, roadmaps, OKRs and prioritization, guide PI and quarterly planning across pods, and coach Product Managers, Product Owners, Scrum Masters and Release Train Engineers. I provide senior leadership with the analysis behind portfolio decisions rather than owning the decisions alone.',
        approach:
          'Start from customer and business outcomes, then work back to roadmaps, quarterly commitments and pod capacity. Make cross-product dependencies explicit before planning, not after. Treat prioritization as a trade-off conversation grounded in data, and build the habits (OKR reviews, KPI check-ins, roadmap refreshes) that let teams run it themselves.',
        signals:
          'Product KPIs and adoption, operational metrics, capacity and throughput by pod, delivery predictability, dependency maps and risk trends. Power BI models bring these together so that a planning conversation starts from the same picture for every product.',
        impact: [
          'A portfolio-level view of strategy, roadmaps, OKRs and capacity across five products and nineteen pods, replacing product-by-product planning.',
          'PI and quarterly planning that surfaces cross-product dependencies and constraints early, so trade-offs are made deliberately.',
          'Product KPIs and operational metrics in Power BI that senior leaders use in decision forums, not just status reviews.',
          'Stronger Product Manager and Product Owner practice through hands-on coaching on outcomes, prioritization and evidence.',
        ],
      },
    },
    {
      id: 'td',
      company: 'TD Bank',
      logo: { src: 'assets/img/td.png', alt: 'TD Bank' },
      title: 'Enterprise product & program delivery',
      period: 'to 2026',
      scope: ['Product & technology roadmaps', 'Quarterly planning', 'Release readiness', 'Power BI dashboards', 'Senior governance'],
      summary:
        'The bridge between enterprise program leadership and product leadership: owning roadmaps, prioritization and release readiness for enterprise delivery platforms in a regulated bank, and using performance data to steer them.',
      sections: {
        context:
          'Enterprise technology delivery inside a large bank, where every release passes through Business, Product, Architecture, Engineering, Risk and Compliance. The platform work included the migration of delivery pipelines from Jenkins to Azure DevOps, with stability and scalability as non-negotiables.',
        challenge:
          'Keep a product and technology roadmap moving while managing risk, dependencies and release readiness across many stakeholders, and give leadership a trustworthy picture of delivery health without adding reporting overhead.',
        role:
          'As Product Manager I defined and prioritized the roadmap, ran quarterly planning and capacity planning, managed risks and dependencies, and led release readiness. I built the Agile Maturity Index and Power BI performance dashboards that leadership used to see velocity, throughput, cycle time and predictability, and I represented the product in senior governance forums.',
        approach:
          'Anchor prioritization in business goals and platform stability rather than in the loudest request. Make readiness criteria explicit before a release, not during it. Measure the delivery system (flow, predictability, quality) so that improvement conversations are about evidence rather than opinion.',
        signals:
          'Velocity, throughput and cycle time by team; predictability against quarterly commitments; pipeline stability and deployment outcomes through the Azure DevOps migration; customer and user feedback on released features; risk and dependency status ahead of each release.',
        impact: [
          'Delivered the Jenkins-to-Azure DevOps platform migration with pipeline stability and scalability treated as explicit product outcomes.',
          'Roadmap and backlog prioritization tied directly to business goals, with cross-functional input gathered before commitments were made.',
          'An Agile Maturity Index and automated Power BI reporting that gave leadership a shared, near-real-time view of team performance and reduced manual reporting effort.',
          'Customer feedback folded into iterative releases as a standing practice rather than a one-off exercise.',
        ],
      },
    },
    {
      id: 'cgi',
      company: 'CGI',
      logo: { src: 'assets/img/cgi.png', alt: 'CGI' },
      title: 'Large-scale program & Release Train leadership',
      period: '',
      scope: ['6+ teams', 'PI planning', 'Cross-team dependencies', 'Predictability metrics', 'Organizational transformation'],
      summary:
        'Leading enterprise program execution across six or more teams as a Release Train Engineer, with SAFe used as the mechanism for planning, dependency management and predictable delivery at scale.',
      sections: {
        context:
          'A large enterprise program with more than six teams whose work had to land together. Planning happened in silos, dependencies were discovered late and leadership had limited visibility into whether commitments would hold.',
        challenge:
          'Bring the program onto a single planning cadence, make dependencies and risks visible early, align delivery to the product roadmap and give leadership metrics they could trust.',
        role:
          'I led program execution as the Release Train Engineer: enterprise and PI planning, cross-team dependency and risk management, roadmap alignment with Product Management, and the metrics and information radiators that tracked flow and predictability. The organizational transformation part of the role meant coaching teams and leaders through the change, not just running events.',
        approach:
          'Use the planning cadence to force the hard conversations early: capacity, dependencies, architectural and leadership impediments. Partner with Product Management on feature prioritization so the train works on what matters. Instrument the program with flow and forecasting data so that course corrections happen between planning events, not only at them.',
        signals:
          'Planned versus delivered by PI, dependency and risk registers, flow bottlenecks visible through Kanban and information radiators, Power BI forecasting for sprint tracking and program planning.',
        impact: [
          'A shared planning cadence and dependency map across six or more teams, giving leadership an early and honest view of delivery risk.',
          'Improved predictability of program commitments through explicit capacity planning and impediment resolution.',
          'Product roadmap and PI priorities aligned through a standing partnership with Product Management.',
          'Power BI forecasting and flow metrics adopted as the program’s decision-making tools.',
        ],
      },
    },
  ],
  foundation: {
    heading: 'Earlier career: technical foundation',
    intro:
      'The first decade built the technical and delivery credibility the product work stands on: shipping enterprise software, then analyzing systems, then running programs.',
    roles: [
      {
        company: 'Cognizant',
        title: 'Technical Project Manager',
        summary: 'Enterprise technology delivery: planning, execution and stakeholder management across delivery teams.',
      },
      {
        company: 'NTT DATA',
        title: 'Agile Consultant',
        summary: 'Guided enterprise teams through Agile adoption and aligned pods around shared goals.',
      },
      {
        company: 'Accenture (USA)',
        title: 'Systems Analyst, State Farm',
        summary: 'Systems analysis and enterprise Java delivery for the State Farm DSS program: REST APIs, reconciliation reporting and performance work.',
      },
      {
        company: 'Accenture (India)',
        title: 'Senior Software Engineer',
        summary: 'Java / J2EE engineering for clients including Thomas Cook (payment and review workflows), UnitedHealth Group and Walgreens.',
      },
    ],
    techNote:
      'Software engineering (Java, Spring, Hibernate, REST) from 2007 to 2012 is my technical foundation. It is why I can hold my own with architects and engineers on trade-offs, platform risk and delivery reality.',
    clientsNote:
      'Consulting engagements across the career have included Bell, CPPIB, FedEx, Citibank and Fidelity Investments.',
  },
};

export const organizations = {
  heading: 'Organizations',
  logos: [
    { src: 'assets/img/ups.png', alt: 'UPS' },
    { src: 'assets/img/td.png', alt: 'TD Bank' },
    { src: 'assets/img/cgi.png', alt: 'CGI' },
    { src: 'assets/img/cognizant.png', alt: 'Cognizant' },
    { src: 'assets/img/ntt-data.png', alt: 'NTT DATA' },
    { src: 'assets/img/accenture.png', alt: 'Accenture' },
    { src: 'assets/img/tcs.png', alt: 'Tata Consultancy Services' },
  ],
};

export const approach = {
  heading: 'How I approach product leadership',
  intro:
    'The same loop whether the problem is one product or a portfolio. The value is in doing it with evidence and with the people who have to live with the decision.',
  steps: [
    { name: 'Understand', text: 'Customer problem, business context and the data we already have.' },
    { name: 'Prioritize', text: 'Outcomes, value, constraints and the trade-offs nobody wants to say out loud.' },
    { name: 'Build', text: 'Partner with Product, Design, Engineering and stakeholders on the smallest thing that tests the idea.' },
    { name: 'Measure', text: 'KPIs, adoption, outcomes and operational performance, not just delivery.' },
    { name: 'Learn', text: 'Use the evidence to adjust direction, and be explicit about what changed and why.' },
  ],
};

export const data = {
  eyebrow: 'Data-driven product leadership',
  heading: 'From dashboards to decisions',
  intro:
    'I use data to answer the questions behind the metrics: What is changing? Why is it changing? What decision should we make next? Reporting is the by-product. The point is a better decision, made sooner, by people who can see the same picture.',
  columns: [
    {
      title: 'Signals I read',
      items: [
        'Product KPIs and adoption',
        'Capacity and resource signals',
        'Velocity, throughput and cycle time',
        'Flow and predictability',
        'Operational performance',
        'Trends and risk indicators',
      ],
    },
    {
      title: 'What I do with them',
      items: [
        'Separate a real shift from noise before anyone reacts to it',
        'Trace a metric back to the product, team or dependency behind it',
        'Frame the decision, the options and what each one costs',
        'Set the follow-up measure so we know if the decision worked',
      ],
    },
    {
      title: 'How it shows up',
      items: [
        'Power BI models for portfolio, program and team performance',
        'Planning conversations that start from the same evidence',
        'Leadership forums that use the data to decide, not to report',
        'An Agile Maturity Index that turned improvement into something measurable',
      ],
    },
  ],
  tools: ['Power BI', 'Jira', 'Azure DevOps'],
};

export const ai = {
  eyebrow: 'AI + Product',
  heading: 'AI as a product and productivity capability',
  intro:
    'I use AI every day as part of how product work gets done. It compresses the time between a question and a first answer, which leaves more room for judgement, conversation and decisions. It does not replace any of those.',
  uses: [
    { name: 'Discovery and research', text: 'Synthesizing interviews, feedback and market context faster, and finding the patterns worth testing.' },
    { name: 'Hypotheses and assumptions', text: 'Exploring alternatives and deliberately challenging the assumptions behind a roadmap or an OKR.' },
    { name: 'Requirements and product thinking', text: 'Sharpening problem statements, acceptance criteria and product narratives before they reach a team.' },
    { name: 'Data interpretation', text: 'Asking better questions of dashboards and datasets, and pressure-testing the story the numbers seem to tell.' },
    { name: 'Rapid prototyping and experimentation', text: 'Turning an idea into something a stakeholder can react to in hours rather than weeks.' },
    { name: 'Documentation at pace', text: 'Producing roadmaps, briefs and decision records quickly so the thinking is captured while it is fresh.' },
  ],
  note: 'I am a product leader who uses AI well, not an AI engineer or data scientist. The judgement, the accountability and the decision stay with the humans in the room.',
};

export const journey = {
  heading: 'Career journey',
  intro: 'One progression rather than a series of job changes: each stage added a wider scope of responsibility and a different kind of decision.',
  stages: [
    { year: '2007', stage: 'Software Engineering', where: 'Accenture (India)', text: 'Building enterprise Java systems and learning how software really ships.' },
    { year: '', stage: 'Systems Analysis', where: 'Accenture (USA), State Farm', text: 'Translating business needs into system behaviour on a large insurance program.' },
    { year: '', stage: 'Technical Project & Enterprise Delivery', where: 'Cognizant', text: 'Owning delivery plans, risks and stakeholders across enterprise projects.' },
    { year: '', stage: 'Agile & Program Leadership', where: 'NTT DATA, CGI', text: 'Coaching enterprise teams, then leading multi-team programs as a Release Train Engineer.' },
    { year: 'to 2026', stage: 'Enterprise Product Delivery', where: 'TD Bank', text: 'Product roadmaps, prioritization, release readiness and performance data in a regulated enterprise.' },
    { year: '2026', stage: 'Product Transformation & Portfolio Leadership', where: 'UPS', text: 'Product strategy, OKRs, planning and capability building across five products and nineteen pods.' },
  ],
};

export const credentials = {
  heading: 'Credentials',
  education: [
    { title: 'Product Management', org: 'University of Toronto', note: 'Product management and strategic leadership.' },
    { title: 'B.Tech, Computer Science & Engineering', org: 'Dr. A. P. J. Abdul Kalam Technical University', note: 'Software engineering focus.' },
  ],
  certifications: [
    { title: 'SAFe Program Consultant (SPC)', org: 'Scaled Agile' },
    { title: 'SAFe Release Train Engineer (RTE)', org: 'Scaled Agile' },
    { title: 'Certified Scrum Product Owner', org: 'Scrum Alliance' },
    { title: 'Certified Scrum Master', org: 'Scrum Alliance' },
  ],
  other: [{ title: 'Level II Secret Clearance', org: 'Government of Canada' }],
};

export const contact = {
  heading: 'Let’s build products that make complex decisions simpler.',
  intro:
    'If you are hiring for senior product, portfolio or product transformation leadership, or you want to compare notes on running product at enterprise scale, I would like to hear from you.',
  form: {
    heading: 'Send a message',
    success: 'Thank you. Your message has been sent and I will reply soon.',
    error: 'The message could not be sent. Please try again or reach me on LinkedIn.',
  },
};
