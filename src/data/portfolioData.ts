import type { 
  Project, 
  Experience, 
  SkillCategory, 
  EngineeringFocus, 
  Education, 
  Certification 
} from '../types';

export const HERO_DATA = {
  name: 'Darshan Jariwala',
  headline: 'Software Developer building practical systems for real-world problems.',
  subheadline: 'First-year MCA student at VNSGU with hands-on experience building full-stack applications, backend services, databases, and warehouse management systems.',
  techBadges: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
  location: 'Surat, Gujarat, India',
  email: 'darshanjariwala090@gmail.com', // Professional email format
  github: 'https://github.com/darshan090',
  linkedin: 'https://www.linkedin.com/in/darshan-jariwala-901541317',
  statusBadge: 'Available for Opportunities',
};

export const ABOUT_DATA = {
  bio: `I am a Software Developer and first-year Master of Computer Applications (MCA) student at Veer Narmad South Gujarat University (VNSGU). My focus is on engineering production-oriented full-stack web applications, robust backend services, and clean relational database architectures.`,
  experienceSummary: `Rather than relying solely on academic exercises, I have gained direct industry experience designing and implementing core workflows for enterprise software—most notably a complex Warehouse Management System (WMS) at Digital Dreams Infotech.`,
  techHighlights: [
    'React', 'TypeScript', 'FastAPI', 'Django', 'Node.js', 
    'PostgreSQL', 'MongoDB', 'Git', 'Figma'
  ],
  principles: [
    {
      title: 'Production-First Architecture',
      description: 'Designing modular API contracts and typed data models before writing business logic.'
    },
    {
      title: 'Operational Workflow Precision',
      description: 'Translating complex physical business processes—like warehouse inbound, putaway, and picking—into clean code.'
    },
    {
      title: 'Data Integrity & Edge Cases',
      description: 'Handling Unit of Measure (UOM) conversions, concurrent inventory state changes, and role-based validation.'
    }
  ]
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'digital-dreams-infotech',
    company: 'Digital Dreams Infotech',
    role: 'Software Developer / WMS Developer',
    location: 'Surat, India',
    period: '2024 - Present',
    isCurrent: true,
    summary: 'Engineered full-stack features and API endpoints for a production-grade Warehouse Management System (WMS) handling inbound, storage, and outbound warehouse workflows.',
    achievements: [
      'Developed responsive frontend interfaces in React and TypeScript for warehouse operators, managers, and floor staff.',
      'Designed and integrated RESTful API endpoints using FastAPI for seamless frontend-backend communication.',
      'Constructed relational database models and optimized SQL query pipelines in PostgreSQL for inventory tracking.',
      'Implemented complete Inbound WMS workflows: Advanced Shipping Notice (ASN) processing, Goods Receipt Note (GRN) generation, quality inspection steps, and directed putaway task allocation.',
      'Engineered Outbound & Storage workflows: real-time inventory management, stock replenishment triggers, sales order processing, picklist generation, and packing station verification.',
      'Built physical spatial management features including trolley routing, rack/bin allocation, and zone assignment rules.',
      'Handled strict Unit of Measure (UOM) quantity conversions and multi-tier inventory stock validation.',
      'Enforced granular Role-Based Access Control (RBAC) across 6 distinct operational personas (Admin, GRN Manager, Inspection Worker, Putaway Worker, Picker, Packer).',
      'Diagnosed and resolved critical edge-case bugs in state synchronization and API response payloads during live simulation tests.'
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Git', 'Postman', 'PGAdmin']
  }
];

export const FEATURED_WMS_PROJECT: Project = {
  id: 'wms-enterprise',
  title: 'Warehouse Management System (WMS)',
  subtitle: 'Full-Stack Enterprise Logistics Platform',
  category: 'Enterprise SaaS / Operations',
  techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
  summary: 'A production-oriented Warehouse Management System designed to manage end-to-end inbound operations, inventory control, putaway algorithms, replenishment, picking, packing, and role-specific worker workflows.',
  overview: `The Warehouse Management System (WMS) is a multi-role web platform built to automate and monitor complex physical warehouse operations. Built with a React + TypeScript frontend and a FastAPI backend backed by PostgreSQL, it replaces paper-based logistics tracking with deterministic digital workflows.`,
  problem: `Warehouses struggle with manual stock entry errors, lost inventory due to unguided putaway, picking delays from inefficient route navigation, unit conversion discrepancies (cases vs. individual units), and lack of operational audit trails across different staff roles.`,
  solution: `Designed a streamlined, task-driven digital system that validates inventory at every stage. From Advanced Shipping Notices (ASN) to final order packing, every item movement is tracked, validated against database constraints, and assigned to specific worker roles with real-time UI feedback.`,
  architectureDescription: `Built using a decoupled client-server architecture. The React single-page application manages state using typed TypeScript hooks and communicates over JSON REST APIs with a FastAPI microservice backend. PostgreSQL stores normalized schema data covering inventory, purchase orders, storage locations, and audit logs.`,
  modules: [
    {
      name: 'Advanced Shipping Notice (ASN)',
      category: 'Inbound',
      description: 'Registers expected incoming shipments from suppliers, validates purchase order item lists, and prepares receiving docks.',
      details: ['Supplier PO cross-verification', 'Expected vs received count previews', 'Dock allocation status']
    },
    {
      name: 'Goods Receipt Note (GRN)',
      category: 'Inbound',
      description: 'Generates verified physical receiving logs, tags batch numbers, and triggers inventory intake entries.',
      details: ['System-generated GRN tracking code', 'Discrepancy logging for damaged goods', 'UOM intake mapping']
    },
    {
      name: 'Inspection & Quality Control',
      category: 'Inbound',
      description: 'Dedicated staging workflow where inspection personnel audit physical goods before stocking.',
      details: ['Pass / Fail condition tagging', 'Quarantine location assignments', 'Inspection report generation']
    },
    {
      name: 'Directed Putaway',
      category: 'Inbound',
      description: 'System-guided putaway algorithm that assigns designated rack, aisle, and bin locations based on item dimensions and stock rules.',
      details: ['Rack & bin capacity calculation', 'Trolley routing guide', 'Confirmation scan step']
    },
    {
      name: 'Inventory & Storage Control',
      category: 'Storage & Inventory',
      description: 'Real-time perpetual inventory database engine managing stock levels across all warehouse zones.',
      details: ['Multi-UOM quantity tracking', 'Batch & Expiry date filtering', 'Real-time stock location lookup']
    },
    {
      name: 'Stock Replenishment',
      category: 'Storage & Inventory',
      description: 'Automated notification and task assignment system to move stock from reserve storage to active picking bins.',
      details: ['Threshold-based triggers', 'Min/Max stock balancing', 'Priority task queue']
    },
    {
      name: 'Sales Order & Picking',
      category: 'Outbound',
      description: 'Parses outbound customer orders into optimized picking routes across warehouse racks.',
      details: ['Wave picking aggregation', 'Picker trolley assignment', 'Item barcode validation']
    },
    {
      name: 'Packing & Dispatch',
      category: 'Outbound',
      description: 'Final packing station inspection, box sizing recommendations, and shipping label manifest creation.',
      details: ['Weight & dimension check', 'Package seal confirmation', 'Dispatch manifest update']
    }
  ],
  userRoles: [
    { role: 'System Admin', description: 'Full system configuration, warehouse layout creation, user provisioning, and global telemetry.' },
    { role: 'GRN Manager', description: 'Oversees inbound receiving, vendor PO approvals, and discrepancy resolutions.' },
    { role: 'Inspection Worker', description: 'Performs quality checks on received inventory and marks item condition flags.' },
    { role: 'Putaway Worker', description: 'Executes directed putaway tasks from receiving docks to assigned storage racks.' },
    { role: 'Picker', description: 'Follows optimized pick paths on mobile/desktop screens to collect items for active customer orders.' },
    { role: 'Packer', description: 'Validates picked items at dispatch stations, packs boxes, and prints shipping manifests.' }
  ],
  engineeringChallenges: [
    'Managing accurate Unit of Measure (UOM) conversions (e.g. Master Carton = 24 Boxes = 288 Units) dynamically during GRN intake and item picking without database rounding errors.',
    'Implementing optimistic UI updates in React while maintaining strict database transaction locking in FastAPI during simultaneous pick task allocations.',
    'Designing an extensible, normalized PostgreSQL schema capable of recording granular movement history while keeping API query latency low.'
  ],
  contributions: [
    'Engineered the modular React + TypeScript frontend architecture for all 8 core WMS workflow interfaces.',
    'Developed high-performance FastAPI endpoint routines for inventory transfers, GRN generation, and putaway logic.',
    'Formulated PostgreSQL queries and database schemas with indexes for rapid inventory lookup and rack availability calculations.',
    'Integrated comprehensive role-based permission routing ensuring operators only access assigned station modules.'
  ],
  outcome: 'Successfully delivered a reliable, scalable WMS solution that streamlined inbound receiving and picking accuracy during stress testing and simulated warehouse runs.',
  isFeatured: true
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'auth-gateway-service',
    title: 'FastAPI REST Microservice & Auth Gateway',
    subtitle: 'Asynchronous API Routing & Security Middleware',
    category: 'Backend Engineering',
    techStack: ['FastAPI', 'Python', 'PostgreSQL', 'JWT', 'Docker'],
    summary: 'A high-throughput FastAPI backend service for secure user authentication, role-based JWT payload handling, and asynchronous API request processing.',
    overview: 'Built a modular FastAPI microservice framework featuring Pydantic request validation, async ORM queries, and token refresh routines for enterprise frontend integration.',
    problem: 'Traditional synchronous web frameworks create thread-blocking latency during database queries under concurrent requests.',
    solution: 'Designed an asynchronous Python controller layer with FastAPI and asyncpg drivers for non-blocking database queries.',
    architectureDescription: 'FastAPI async route handlers processing JSON payloads, validating schema rules, and querying PostgreSQL database tables.',
    engineeringChallenges: [
      'Configuring connection pools to prevent database connection exhaustion under load.',
      'Implementing strict role-based authorization scopes for administrative endpoints.'
    ],
    contributions: [
      'Designed REST API route handlers for user login, session validation, and permission checks.',
      'Constructed database schema migrations and SQL index strategies.'
    ],
    outcome: 'Delivered a clean, production-ready backend authentication template for full-stack business applications.',
    isFeatured: false
  },
  {
    id: 'dev-metrics-dashboard',
    title: 'Real-Time System Metrics & API Gateway',
    subtitle: 'Full-Stack Performance & Service Monitoring',
    category: 'Full-Stack Development',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Chart.js'],
    summary: 'A clean developer dashboard for monitoring microservice status, API response latencies, error frequencies, and server health metrics.',
    overview: 'Created an administrative monitoring portal for inspecting HTTP status codes, latency histograms, and uptime indicators across connected local service endpoints.',
    problem: 'Developers need a lightweight, non-intrusive dashboard to monitor REST API health during local testing and staging without configuring heavy APM tools.',
    solution: 'Built a lightweight React client with WebSocket live updates and configurable alert thresholds.',
    architectureDescription: 'React + TypeScript frontend consuming WebSocket streams from a lightweight Node.js telemetry collector.',
    engineeringChallenges: [
      'Preventing React DOM re-render lag during high-frequency telemetry data streams.',
      'Designing clean dark-mode chart visualizations with high data contrast.'
    ],
    contributions: [
      'Created custom responsive layout cards and time-series line charts.',
      'Implemented localized state caching for historical metrics.'
    ],
    outcome: 'Provided a sleek, responsive internal tool for real-time developer system visibility.',
    isFeatured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building clean, type-safe, and responsive interfaces.',
    skills: [
      { name: 'React', isPrimary: true },
      { name: 'TypeScript', isPrimary: true },
      { name: 'JavaScript (ES6+)', isPrimary: true },
      { name: 'Tailwind CSS', isPrimary: true },
      { name: 'Vite', isPrimary: true },
      { name: 'HTML5 / CSS3', isPrimary: false }
    ]
  },
  {
    title: 'Backend Engineering',
    description: 'Constructing robust APIs, business logic, and validation rules.',
    skills: [
      { name: 'FastAPI', isPrimary: true },
      { name: 'Django', isPrimary: true },
      { name: 'Node.js', isPrimary: true },
      { name: 'Express', isPrimary: true },
      { name: 'RESTful APIs', isPrimary: true },
      { name: 'Python', isPrimary: true }
    ]
  },
  {
    title: 'Database & Storage',
    description: 'Designing normalized schemas, indexes, and efficient queries.',
    skills: [
      { name: 'PostgreSQL', isPrimary: true },
      { name: 'MySQL', isPrimary: false },
      { name: 'MongoDB', isPrimary: false },
      { name: 'SQLite', isPrimary: false },
      { name: 'SQL Query Optimization', isPrimary: true }
    ]
  },
  {
    title: 'Engineering Tools & Workflow',
    description: 'Version control, API testing, and interface prototyping.',
    skills: [
      { name: 'Git', isPrimary: true },
      { name: 'GitHub', isPrimary: true },
      { name: 'Postman', isPrimary: true },
      { name: 'PGAdmin', isPrimary: true },
      { name: 'Figma', isPrimary: true }
    ]
  }
];

export const ENGINEERING_FOCUS_DATA: EngineeringFocus[] = [
  {
    id: 'full-stack',
    title: 'Full-Stack Applications',
    subtitle: 'Seamless Client-to-Database Architecture',
    description: 'Building end-to-end applications where typed TypeScript models in the frontend map directly to structured backend APIs and database entities.',
    keyPoints: [
      'Type safety from React UI down to API response models',
      'Optimistic state UI transitions with rollback safety',
      'Clean component separation and reusable visual design tokens'
    ]
  },
  {
    id: 'backend-systems',
    title: 'Backend & API Services',
    subtitle: 'High-Performance & Deterministic Logic',
    description: 'Developing high-throughput FastAPI and Node.js backend services focused on strict request validation, security, and payload clarity.',
    keyPoints: [
      'Asynchronous request handling with Python & FastAPI',
      'Clean separation of business controllers, middleware, and schemas',
      'Comprehensive error handling and meaningful HTTP status responses'
    ]
  },
  {
    id: 'business-software',
    title: 'Business & Logistics Systems',
    subtitle: 'Solving Real-World Operational Workflows',
    description: 'Engineering domain-specific software around complex physical processes such as warehouse inventory movement, receiving docks, and multi-role operations.',
    keyPoints: [
      'Translating offline physical tasks into structured web interfaces',
      'Enforcing multi-tier role-based access control (RBAC)',
      'Handling Unit of Measure (UOM) conversions and audit logs'
    ]
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving & Debugging',
    subtitle: 'Root-Cause Analysis & Performance',
    description: 'Systematic debugging across state synchronization, API payloads, SQL queries, and layout edge cases.',
    keyPoints: [
      'Deep payload inspection using Postman and Browser DevTools',
      'SQL query plan analysis and relational index tuning',
      'Addressing responsive layout edge cases and accessibility standards'
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Veer Narmad South Gujarat University (VNSGU)',
    period: '2025 - Present (First Year)',
    status: 'Currently Pursuing',
    isPrimary: true,
    highlights: [
      'Advanced Software Engineering principles, database design, and object-oriented architectures.',
      'Active focus on practical full-stack projects alongside academic coursework.'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Veer Narmad South Gujarat University (VNSGU)',
    period: '2022 - 2025',
    status: 'Completed',
    isPrimary: false,
    highlights: [
      'Solid foundational grounding in computer science fundamentals, data structures, algorithms, and SQL database management.',
      'Developed core software projects using web technologies and relational databases.'
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    issueDate: 'November 2024',
    description: 'Comprehensive professional training covering user-centered design, wireframing, high-fidelity interactive prototyping, usability testing, and accessibility principles.'
  }
];
