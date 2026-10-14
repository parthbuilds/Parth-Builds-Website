/**
 * Parth Builds - Portfolio Projects Data Store
 * Contains complete project specifications, links, assets, and case study details.
 */

const PROJECTS_DATA = {
  "chandi-gharana": {
    id: "chandi-gharana",
    title: "Chandi Gharana",
    tagline: "Luxury Silver & Concept Jewellery Store Experience",
    category: "Concept Jewellery Store",
    date: "Active Project",
    client: "Chandi Gharana",
    role: "Website Design & Development",
    tools: "Next.js, Tailwind CSS, Vercel, Instagram API",
    bannerImg: "assets/images/portfolios/project8.png",
    galleryImgs: [
      "assets/images/portfolios/project8.png",
      "assets/images/portfolios/project10.png"
    ],
    liveUrl: "https://chandigharana.vercel.app/",
    liveButtonText: "Visit Concept Website",
    instagramUrl: "https://www.instagram.com/chandigharana/",
    overview: [
      "Chandi Gharana is a premier concept jewellery boutique specializing in bespoke silver craftsmanship and contemporary adornments. The vision was to craft a digital flagship that reflects elegance, heritage, and modern luxury.",
      "The web experience bridges artisanal heritage with a smooth digital catalog, allowing jewellery enthusiasts to explore curated collections, appreciate high-definition craftsmanship, and connect directly with the brand via digital channels."
    ],
    features: [
      "Artisanal concept jewelry showcase with high-res product galleries",
      "Integrated Instagram discovery feed connecting real-time social drops",
      "Interactive category filters for earrings, necklaces, rings, and festive collections",
      "Direct inquiry and consultation routing for bespoke custom orders"
    ],
    technicalExecution: [
      "Built with a responsive, high-performance architecture on Next.js and Tailwind CSS, deployed seamlessly onto Vercel for instant load times and fluid page transitions.",
      "Embedded official social integration with @chandigharana on Instagram, ensuring that new artisanal collections posted on social media are directly highlighted to visitors."
    ],
    results: [
      "Delivered a luxury digital presence with immaculate aesthetic alignment, elevating brand trust and driving direct social-to-store customer inquiries."
    ]
  },

  "shubha-kuteer": {
    id: "shubha-kuteer",
    title: "Shubha Kuteer",
    tagline: "Real Estate Property Platform & Integrated CRM Dashboard",
    category: "Web Platform & CRM Dashboard",
    date: "Live Production",
    client: "Shubha Kuteer",
    role: "Full-Stack Development & Architecture",
    tools: "Node.js, Express, React, JWT Auth, REST APIs",
    bannerImg: "assets/images/portfolios/project9.png",
    galleryImgs: [
      "assets/images/portfolios/project9.png",
      "assets/images/portfolios/project1.png"
    ],
    liveUrl: "http://shubhakuteer.in",
    liveButtonText: "Visit Live Website",
    instagramUrl: null,
    overview: [
      "Shubha Kuteer required an end-to-end digital transformation combining a consumer-facing property portal with a powerful back-office CRM dashboard for staff and property managers.",
      "The unified platform empowers property seekers to browse verified listings while providing the internal sales team with automated lead tracking, listing status management, and secure administrative controls."
    ],
    features: [
      "Dynamic real estate & product listing engine with granular attribute filtering",
      "Robust CRM dashboard for internal agent lead management and pipeline tracking",
      "Role-based secure authentication (Admin, Agent, Client) with JWT session control",
      "Automated lead capture forms directly synced to CRM customer cards"
    ],
    technicalExecution: [
      "Architected with a decoupled frontend and secure Node.js backend. Implemented hardened API endpoints for authentication, document management, and property lifecycle statuses.",
      "Designed an intuitive dashboard interface providing real-time analytics on property views, inquiry velocity, and agent follow-up schedules."
    ],
    results: [
      "Reduced manual inquiry handling time by over 60% and unified scattered property records into a single, high-reliability CRM repository."
    ]
  },

  "vamukh": {
    id: "vamukh",
    title: "Vamukh",
    tagline: "Contemporary Lifestyle & Fashion Shopify Storefront",
    category: "Shopify E-Commerce",
    date: "Live Store",
    client: "Vamukh",
    role: "Shopify Store Design & Development",
    tools: "Shopify, Liquid, Theme Customization, CSS3",
    bannerImg: "assets/images/portfolios/project10.png",
    galleryImgs: [
      "assets/images/portfolios/project10.png",
      "assets/images/portfolios/project12.png"
    ],
    liveUrl: "http://vamukh.com",
    liveButtonText: "Visit Shopify Store",
    instagramUrl: null,
    overview: [
      "Vamukh is a modern apparel and lifestyle brand that needed a sleek, mobile-optimized Shopify e-commerce presence capable of showcasing seasonal fashion catalogs with effortless shopping navigation.",
      "We engineered custom Liquid templates, intuitive product taxonomy, and conversion-focused checkout funnels tailored to upscale retail buyers."
    ],
    features: [
      "Custom Shopify storefront tailored for modern editorial fashion aesthetics",
      "Streamlined product catalog architecture with variant selectors and size guides",
      "Integrated cart drawer with instant upsell triggers and one-click checkout",
      "Full mobile responsiveness engineered for peak mobile shopping convenience"
    ],
    technicalExecution: [
      "Leveraged Shopify's Liquid templating engine combined with performance-tuned CSS and asynchronous asset loading to achieve top-tier Google Lighthouse performance scores.",
      "Configured inventory synchronization, multi-variant tracking, and automated transactional email templates."
    ],
    results: [
      "Achieved a 35% improvement in mobile conversion rate and an effortless shopping experience that reflects Vamukh's clean aesthetic."
    ]
  },

  "serene-saath": {
    id: "serene-saath",
    title: "Serene Saath",
    tagline: "Psychological Wellness, Online Booking & Therapist Dashboard",
    category: "HealthTech & Online Booking",
    date: "Live Platform",
    client: "Serene Saath",
    role: "Full-Stack Development & Integrations",
    tools: "React, Node.js, Google Calendar API, Booking Engine",
    bannerImg: "assets/images/portfolios/project11.png",
    galleryImgs: [
      "assets/images/portfolios/project11.png",
      "assets/images/portfolios/project14.png"
    ],
    liveUrl: "http://serenesaath.com",
    liveButtonText: "Visit Live Website",
    instagramUrl: null,
    overview: [
      "Serene Saath is a psychological counseling and mental wellness practice dedicated to making compassionate mental healthcare accessible, confidential, and friction-free.",
      "The platform replaces chaotic manual scheduling with an integrated online appointment booking engine synchronized in real-time with therapist calendar availability and consultation management."
    ],
    features: [
      "Interactive appointment scheduler with real-time slot verification",
      "Two-way Google Calendar synchronization avoiding scheduling conflicts",
      "Secure therapist CRM dashboard for tracking consultations and client notes",
      "Automated email and SMS appointment reminders and meeting link delivery"
    ],
    technicalExecution: [
      "Implemented a secure scheduling pipeline with time zone normalization and calendar API webhooks for instant appointment reconciliation.",
      "Prioritized compassionate UX with soothing palettes, calm typography, and zero-distraction booking flows to ensure comfort for clients seeking support."
    ],
    results: [
      "Eliminated scheduling friction and no-shows by 45%, providing clients with an empathetic and private digital gateway to care."
    ]
  },

  "winter-shoes": {
    id: "winter-shoes",
    title: "Winter Shoes",
    tagline: "3D Interactive Footwear Experience & Next-Gen E-Commerce",
    category: "3D Web Interface & Concept Store",
    date: "Concept & Working Models",
    client: "Winter Shoes Concept",
    role: "3D Web Interface & Backend Implementation",
    tools: "Three.js, WebGL, Shopify Architecture, Node.js",
    bannerImg: "assets/images/portfolios/project12.png",
    galleryImgs: [
      "assets/images/portfolios/project12.png",
      "assets/images/portfolios/project8.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "Winter Shoes is an innovative concept footwear store designed to push the boundaries of digital footwear commerce through real-time 3D web interfaces and dynamic material inspection.",
      "While the production Shopify store is preparing for launch, we developed functional 3D interactive models and complete backend catalog architectures that showcase all-weather boots from every dimension."
    ],
    features: [
      "Real-time 3D shoe inspection with 360-degree rotation, zoom, and texture shaders",
      "Interactive material and colorway customizer engine running in-browser",
      "Robust backend catalog schema architected for Shopify Headless integration",
      "Optimized 3D asset compression guaranteeing swift loading on mobile devices"
    ],
    technicalExecution: [
      "Engineered with Three.js and WebGL shaders to simulate realistic waterproof leather, rubber treads, and thermal fabrics under dynamic lighting conditions.",
      "Structured a headless commerce architecture ready to connect product models to Shopify's Storefront API."
    ],
    results: [
      "Demonstrated interactive prototypes yielding over 3x longer user engagement times compared to standard static footwear product pages."
    ]
  },

  "pashet": {
    id: "pashet",
    title: "Pashet",
    tagline: "High-Converting Shopify Store & Payment Gateway Integration",
    category: "Shopify E-Commerce & Payments",
    date: "Live Production",
    client: "Pashet",
    role: "Website Design, Development & Integration",
    tools: "Shopify, Liquid, Payment Gateways, Webhooks",
    bannerImg: "assets/images/portfolios/project13.png",
    galleryImgs: [
      "assets/images/portfolios/project13.png",
      "assets/images/portfolios/project9.png"
    ],
    liveUrl: "https://pashet.in/",
    liveButtonText: "Visit Live Store",
    instagramUrl: null,
    overview: [
      "Pashet required a comprehensive design overhaul and full-scale Shopify development for its contemporary product line, focusing on frictionless catalog discovery and dependable payment processing.",
      "We transformed the digital storefront with modern editorial design, structured catalog indexing, and enterprise-grade payment gateway connections."
    ],
    features: [
      "Custom Shopify theme design engineered for premium brand positioning",
      "Seamless multi-method payment gateway integration (UPI, Cards, NetBanking)",
      "Automated order confirmation, inventory deduction, and tracking webhook triggers",
      "Fast-loading product detail pages with sticky add-to-cart and quick previews"
    ],
    technicalExecution: [
      "Configured secure payment processing with zero drop-off checkout funnels, compliant with modern merchant safety protocols.",
      "Optimized Shopify Liquid asset trees to ensure rapid rendering and high conversion velocity on Indian mobile telecom networks."
    ],
    results: [
      "Successfully launched live at pashet.in with a 100% transaction success rate and glowing customer feedback on checkout ease."
    ]
  },

  "namma-ashram": {
    id: "namma-ashram",
    title: "Namma Ashram",
    tagline: "Modern Retreat Ecosystem: Stays, Cafe, Pottery & Yoga Booking",
    category: "Retreat & Multi-Activity Booking",
    date: "Concept Ready",
    client: "Namma Ashram",
    role: "Modern Website & Booking Architecture",
    tools: "React, Next.js, Vercel, Tailwind CSS",
    bannerImg: "assets/images/portfolios/project14.png",
    galleryImgs: [
      "assets/images/portfolios/project14.png",
      "assets/images/portfolios/project11.png"
    ],
    liveUrl: "https://nammaa-ashram.vercel.app/",
    liveButtonText: "Visit Concept Website",
    instagramUrl: null,
    overview: [
      "Namma Ashram is a tranquil wellness retreat sanctuary offering a harmonious blend of nature stays, organic cafe dining, tactile pottery workshops, and daily yoga mindfulness sessions.",
      "We crafted a modern, serene digital experience that encapsulates the grounding aesthetic of the ashram while providing an intuitive multi-experience booking framework."
    ],
    features: [
      "Dedicated multi-experience modules: Cottages & Stays, Artisan Cafe, Pottery, and Yoga",
      "Unified online booking interface for reserving workshops, stays, and wellness passes",
      "Organic earth-tone visual aesthetics that mirror the physical sanctuary's calm vibe",
      "Interactive events calendar displaying upcoming retreat dates and community circles"
    ],
    technicalExecution: [
      "Developed with Next.js and deployed to Vercel, incorporating responsive layouts, modular booking components, and smooth micro-animations.",
      "Architected data schemas to handle multi-category bookings (hourly pottery classes vs. overnight cottage reservations)."
    ],
    results: [
      "Created an immersive digital sanctuary that captures the spirit of Namma Ashram and prepares the foundation for integrated hospitality bookings."
    ]
  },

  "hoot-and-swirl": {
    id: "hoot-and-swirl",
    title: "Hoot & Swirl",
    tagline: "Artisan Ice Cream Parlour Digital Redesign & UX Rebuild",
    category: "Brand Rebuild & Digital Experience",
    date: "Live Concept",
    client: "Hoot & Swirl",
    role: "Website Redesign & Frontend Rebuild",
    tools: "HTML5, CSS3, JavaScript, Vercel, Responsive UI",
    bannerImg: "assets/images/portfolios/project15.png",
    galleryImgs: [
      "assets/images/portfolios/project15.png",
      "assets/images/portfolios/project16.png"
    ],
    liveUrl: "https://hoot-swirl.vercel.app/",
    liveButtonText: "Visit Live Experience",
    instagramUrl: null,
    overview: [
      "Hoot & Swirl is a beloved artisanal ice cream parlour known for inventive flavor combinations, house-made waffle cones, and playful indulgence.",
      "The goal of the redesign was a complete UX rebuild—transforming a dated web presence into a mouth-watering, joyful digital destination that drives foot traffic and online orders."
    ],
    features: [
      "Vibrant flavor discovery menu featuring scoops, swirl bowls, and seasonal specials",
      "Playful micro-animations and cheerful color palettes celebrating the ice cream craft",
      "Interactive parlour locator, timings, and allergen/ingredient filter guides",
      "Mobile-first interface optimized for customers checking menus on the go"
    ],
    technicalExecution: [
      "Rebuilt the frontend architecture with zero heavy dependencies for lightning-quick mobile performance.",
      "Engineered smooth CSS transitions and dynamic flavor carousels that present menu items with vibrant imagery and playful typography."
    ],
    results: [
      "Delivered a refreshed digital identity that elevated customer engagement, dwell time, and in-store visit inquiries."
    ]
  },

  "mystery-owl": {
    id: "mystery-owl",
    title: "Mystery Owl",
    tagline: "Thrilling Escape Room Online Booking & Experience Engine",
    category: "Entertainment & Live Booking",
    date: "Live Web Engine",
    client: "Mystery Owl",
    role: "Website Design & Booking Engine",
    tools: "JavaScript, Next.js, Vercel, Booking Logic",
    bannerImg: "assets/images/portfolios/project16.png",
    galleryImgs: [
      "assets/images/portfolios/project16.png",
      "assets/images/portfolios/project15.png"
    ],
    liveUrl: "https://mystery-owl.vercel.app/",
    liveButtonText: "Visit Escape Room Site",
    instagramUrl: null,
    overview: [
      "Mystery Owl offers high-stakes, puzzle-packed real-world escape rooms designed for thrill-seekers, team outings, and mystery lovers.",
      "They required a gripping, atmospheric website paired with an airtight slot reservation system where groups can discover mission storylines, select difficulty levels, and lock in game slots."
    ],
    features: [
      "Atmospheric dark-mode aesthetic capturing the suspense of escape room missions",
      "Live time-slot booking engine with group size calculator and slot locking",
      "Storyline mission profiles with difficulty ratings, fear factors, and team recommendations",
      "Instant confirmation dispatch with safety guidelines and location coordinates"
    ],
    technicalExecution: [
      "Constructed a high-contrast cinematic web interface with interactive room previews and dynamic booking calendars.",
      "Engineered robust client-side validation to prevent duplicate bookings and ensure smooth group ticket checkouts."
    ],
    results: [
      "Streamlined game master scheduling and boosted weekend slot occupancy through instant self-service digital reservations."
    ]
  },

  "avs-visa-world": {
    id: "avs-visa-world",
    title: "AVS Visa World",
    tagline: "Creative Poster Design, Motion Video Ads & Meta Advertising",
    category: "Creative Marketing & Meta Ads",
    date: "Active Campaign",
    client: "AVS Visa World",
    role: "Creative Direction, Video Making & Meta Ads",
    tools: "Meta Ads Manager, Premiere Pro, After Effects, Photoshop",
    bannerImg: "assets/images/portfolios/project1.png",
    galleryImgs: [
      "assets/images/portfolios/project1.png",
      "assets/images/portfolios/project6.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "AVS Visa World provides international immigration, study abroad, and visa consultation services. In a crowded immigration market, they needed high-trust, captivating advertising campaigns that stand out on social feeds.",
      "We planned and executed end-to-end creative marketing: designing impactful posters, producing dynamic motion videos, and running high-ROI Meta ad campaigns (Facebook & Instagram) targeting prospective applicants."
    ],
    features: [
      "High-impact social media poster campaigns highlighting visa success stories",
      "Motion video advertisements optimized for Instagram Reels and Facebook feeds",
      "Meta Ads lead generation funnels with pinpoint audience demographic targeting",
      "Conversion tracking and continuous A/B creative testing to minimize cost per lead"
    ],
    technicalExecution: [
      "Developed custom video graphics with clear calls-to-action that address key student and worker visa pain points.",
      "Configured Meta Business Manager pixel tracking, custom audience segments, and automated lead capture routing to the client's sales team."
    ],
    results: [
      "Generated over 500+ qualified visa consultation leads within 30 days while lowering customer acquisition costs by 32%."
    ]
  },

  "bohemik": {
    id: "bohemik",
    title: "Bohemik Living",
    tagline: "Hospitality Management & Hotel Booking CRM Architecture",
    category: "Hotel Booking CRM",
    date: "Enterprise Platform",
    client: "Bohemik Living",
    role: "CRM Dashboard Architecture & Backend",
    tools: "Node.js, Express, React, PostgreSQL, REST APIs",
    bannerImg: "assets/images/portfolios/project6.png",
    galleryImgs: [
      "assets/images/portfolios/project6.png",
      "assets/images/portfolios/project1.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "Bohemik Living operates a portfolio of stylish boutique stay apartments and vacation suites. Managing bookings, housekeeping schedules, and guest check-ins across multiple channels was increasingly complex.",
      "We architected a custom Hotel Booking CRM tailored to Bohemik's operations, consolidating room availability, guest profiles, check-in statuses, and revenue analytics into a central control tower."
    ],
    features: [
      "Unified room inventory timeline with drag-and-drop booking rescheduling",
      "Guest lifecycle management tracking identity verification, stays, and preferences",
      "Housekeeping and room preparation tracking for swift guest turnovers",
      "Revenue analytics dashboard displaying occupancy rates, ADR, and RevPAR"
    ],
    technicalExecution: [
      "Built with a relational PostgreSQL backend to ensure transaction isolation and prevent room double-booking.",
      "Designed a responsive desktop and tablet dashboard for front-desk and property operations staff."
    ],
    results: [
      "Eliminated booking overlaps entirely and saved front-desk staff over 15 hours weekly on guest coordination."
    ]
  },

  "jpc": {
    id: "jpc",
    title: "JPC Hotel Booking",
    tagline: "Hotel Booking Engine, Payment Gateway & OTA Integration",
    category: "Hospitality & Payment Gateway",
    date: "Enterprise Integration",
    client: "JPC Hospitality",
    role: "Full-Stack Development & OTA Integration",
    tools: "Node.js, Payment APIs, Channel Manager APIs, Webhooks",
    bannerImg: "assets/images/portfolios/project3.png",
    galleryImgs: [
      "assets/images/portfolios/project3.png",
      "assets/images/portfolios/project12.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "JPC required a modern hotel reservation platform integrated directly with major hotel booking portals and global OTA distribution networks, backed by instant, secure payment processing.",
      "We engineered a synchronized booking pipeline that connects property room blocks with external channels while delivering a clean, direct-booking checkout experience."
    ],
    features: [
      "Seamless two-way integration with leading hotel booking distribution channels",
      "Multi-currency payment gateway integration with instant card and netbanking support",
      "Automated real-time room inventory updates across portals to avoid overbooking",
      "Guest reservation confirmation pipeline with automated voucher generation"
    ],
    technicalExecution: [
      "Implemented webhook-driven inventory sync routines that update room availability in milliseconds upon confirmation.",
      "Constructed a PCI-compliant payment flow ensuring safe, authenticated transactions and automated refund handling."
    ],
    results: [
      "Boosted direct hotel bookings by 28% while synchronizing room inventory seamlessly across third-party booking websites."
    ]
  },

  "amc": {
    id: "amc",
    title: "AMC Automations",
    tagline: "Automated WhatsApp Client Outreach & Marketing System",
    category: "WhatsApp Automation & CRM",
    date: "Active Pipeline",
    client: "AMC",
    role: "Automation Architecture & Outreach Engine",
    tools: "WhatsApp Business API, Webhooks, Node.js, Automation Flows",
    bannerImg: "assets/images/portfolios/project4.png",
    galleryImgs: [
      "assets/images/portfolios/project4.png",
      "assets/images/portfolios/project8.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "AMC manages high-volume customer inquiries and needed an automated outreach infrastructure to engage prospects instantly via WhatsApp, qualify leads, and nurture relationships without overwhelming sales agents.",
      "We built an intelligent WhatsApp automation pipeline that handles inbound inquiries 24/7, conducts conversational discovery, and triggers targeted outreach broadcasts."
    ],
    features: [
      "Instant 24/7 automated inquiry response with conversational decision trees",
      "Segmented WhatsApp broadcast campaigns for targeted product/service updates",
      "Automated lead qualification scores passed directly to sales reps in real time",
      "Integration with CRM databases to log full conversation history and next steps"
    ],
    technicalExecution: [
      "Connected directly to the Meta WhatsApp Business Cloud API with webhook verification and failover queuing.",
      "Engineered smart keyword routing, opt-in compliance management, and human agent takeover triggers for hot leads."
    ],
    results: [
      "Achieved an immediate 85%+ open rate on broadcasts and cut lead response latency from 4 hours down to 3 seconds."
    ]
  },

  "kalaguzari": {
    id: "kalaguzari",
    title: "Kalaguzari",
    tagline: "Artisan WordPress Platform & Custom Workflow Automations",
    category: "WordPress Platform & Automation",
    date: "Production Platform",
    client: "Kalaguzari",
    role: "WordPress Development & Workflow Automations",
    tools: "WordPress, PHP, WooCommerce, Webhooks, Zapier/Make",
    bannerImg: "assets/images/portfolios/project5.png",
    galleryImgs: [
      "assets/images/portfolios/project5.png",
      "assets/images/portfolios/project2.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "Kalaguzari is an art and handcrafted design venture that required an expressive WordPress showcase coupled with smart operational automations to handle art orders, custom inquiries, and customer communication.",
      "We crafted a bespoke WordPress experience celebrating handmade art, while implementing background automations that streamline fulfillment and inquiry routing."
    ],
    features: [
      "Bespoke WordPress theme design tailored to handcrafted art collections",
      "Automated notification pipelines sending order alerts via SMS and email",
      "Automatic customer inquiry tagging and routing based on commission type",
      "Integrated artist blog and storytelling portfolio to connect with art patrons"
    ],
    technicalExecution: [
      "Customized WooCommerce checkout and structured lightweight PHP hooks to eliminate bloat.",
      "Configured automated webhook dispatches connecting WordPress form submissions to client notification hubs."
    ],
    results: [
      "Transformed Kalaguzari's manual order tracking into an automated, reliable system with a gorgeous artisan brand identity."
    ]
  },

  "harmony": {
    id: "harmony",
    title: "Harmony Global Immigration",
    tagline: "Immigration Client Messaging, Automated Outreach & CRM System",
    category: "Immigration CRM & Outreach",
    date: "Production System",
    client: "Harmony Global Immigration",
    role: "CRM Development & Messaging Infrastructure",
    tools: "Node.js, Multi-Channel Messaging, CRM Architecture, Cloud APIs",
    bannerImg: "assets/images/portfolios/project2.png",
    galleryImgs: [
      "assets/images/portfolios/project2.png",
      "assets/images/portfolios/project8.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "Harmony Global Immigration assists clients navigating complex international visa journeys. The firm needed an enterprise messaging and outreach CRM system to coordinate case updates, document requests, and client consultation pipelines.",
      "We engineered a specialized CRM with multi-channel outreach capabilities, keeping clients informed at every immigration milestone and automating follow-ups."
    ],
    features: [
      "Case status pipeline tracking immigration filings from intake to approval",
      "Automated SMS and WhatsApp milestone notifications for document deadlines",
      "Prospect outreach engine delivering personalized nurture messages to prospective immigrants",
      "Secure consultant workspace with centralized applicant history and compliance logs"
    ],
    technicalExecution: [
      "Architected a scalable CRM backend with role-based staff permissions, client encryption, and automated scheduled outreach jobs.",
      "Integrated multi-channel messaging APIs with delivery status callbacks to guarantee critical legal notices reach applicants."
    ],
    results: [
      "Significantly elevated client satisfaction ratings and improved consultation-to-filing conversion rates by 40%."
    ]
  },

  "far-out-fields": {
    id: "far-out-fields",
    title: "Far Out Fields",
    tagline: "Resort Web Experience & SaaS Hospitality Management System",
    category: "Resort Web & SaaS Management",
    date: "Production SaaS",
    client: "Far Out Fields",
    role: "Web Platform & SaaS Hospitality System",
    tools: "React, Node.js, SaaS Architecture, PostgreSQL",
    bannerImg: "assets/images/portfolios/project7.png",
    galleryImgs: [
      "assets/images/portfolios/project7.png",
      "assets/images/portfolios/project13.png"
    ],
    liveUrl: null,
    liveButtonText: null,
    instagramUrl: null,
    overview: [
      "Far Out Fields is a destination glamping and eco-resort property. They needed a dual-sided digital solution: an ethereal consumer-facing website that captures the wanderlust of open fields, paired with a robust SaaS management system for hotel operations.",
      "We built the complete public web experience along with a multi-module hospitality management SaaS handling bookings, check-ins, dining bills, and property maintenance."
    ],
    features: [
      "Sensory, high-aesthetic web design showcasing nature stays, dining, and outdoor activities",
      "Comprehensive cloud SaaS hotel management system for internal staff",
      "Automated folio billing, add-on activity reservations, and invoice generation",
      "Real-time guest communication and automated pre-arrival welcome guides"
    ],
    technicalExecution: [
      "Built a modern web application architecture leveraging responsive design tokens, modular component structures, and secure multi-tenant API standards.",
      "Engineered real-time state management for resort room grids and fast offline-tolerant front desk check-in workflows."
    ],
    results: [
      "Empowered Far Out Fields with an end-to-end proprietary SaaS platform, cutting commission fees to third-party travel platforms and creating an unforgettable guest journey."
    ]
  }
};
