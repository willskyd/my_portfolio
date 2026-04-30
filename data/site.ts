import {
  CalendarDays,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  PhoneCall,
  Sparkles,
} from "lucide-react";

const phoneNumber = "09042691143";
const internationalPhone = "2349042691143";
const scheduleMessage = "Hi Godswill, I'd like to schedule a call about a project.";

export const siteConfig = {
  name: "Will.dev",
  shortName: "Will",
  description:
    "Cinematic portfolio for Will, a web developer and digital craftsman building immersive, high-performance digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://will.dev",
  email: "godswillkingsley439@gmail.com",
  phone: phoneNumber,
  phoneHref: `tel:${phoneNumber}`,
  whatsappHref: `https://wa.me/${internationalPhone}`,
  bookingHref: `https://wa.me/${internationalPhone}?text=${encodeURIComponent(scheduleMessage)}`,
  location: "Port Harcourt, Nigeria",
  availability: "Available for select freelance and in-house opportunities",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "4+", label: "Years crafting premium web products" },
  { value: "21", label: "Launches delivered across SaaS, fintech, and luxury brands" },
  { value: "30", label: "Lighthouse performance target for flagship builds" },
];

export const aboutHighlights = [
  {
    title: "Luxury Product Thinking",
    description:
      "Designing web experiences that feel elevated, emotional, and deeply intentional from first impression to final interaction.",
    icon: Sparkles,
  },
  {
    title: "Full-Stack Precision",
    description:
      "Moving seamlessly from front-end architecture and motion systems to API integration, optimization, and production hardening.",
    icon: MonitorSmartphone,
  },
  {
    title: "Systems That Scale",
    description:
      "Translating bold design direction into maintainable component systems, performant code, and future-ready platforms.",
    icon: Layers3,
  },
];

export const experience = [
  {
    period: "2025 - Present",
    role: "Senior Frontend Engineer",
    company: "Atelier Interactive",
    summary:
      "Leading premium brand builds for luxury, fintech, and SaaS clients with a focus on immersive interfaces and performance.",
    achievements: [
      "Shipped a modular marketing system that reduced launch time by 43%.",
      "Introduced motion and accessibility standards across every flagship project.",
      "Raised average conversion rate by 28% across three client redesigns.",
    ],
  },
  {
    period: "2024 - 2025",
    role: "Product Engineer",
    company: "Northstar Digital",
    summary:
      "Built full-stack customer experiences for subscription products and internal growth tools.",
    achievements: [
      "Scaled a design system used across 18 product surfaces.",
      "Improved core web vitals and reduced bundle size by 34%.",
      "Partnered with product and brand teams to ship data-rich storytelling pages.",
    ],
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer",
    company: "Studio Meridian",
    summary:
      "Delivered custom websites and interactive campaign pages for fast-growing startups and creative agencies.",
    achievements: [
      "Built high-impact launch pages that supported multi-million dollar fundraises.",
      "Created reusable component foundations that cut QA cycles significantly.",
      "Mentored junior developers on animation, responsiveness, and code quality.",
    ],
  },
  {
    period: "2022 - 2023",
    role: "Web Developer",
    company: "Independent",
    summary:
      "Partnered directly with founders and agencies to build polished web experiences, dashboards, and portfolios.",
    achievements: [
      "Delivered bespoke websites end-to-end from concept to deployment.",
      "Established a reputation for translating ambitious design direction into production-ready code.",
      "Built long-term relationships through speed, clarity, and craftsmanship.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  problem: string;
  solution: string;
  results: string[];
  tech: string[];
  viewsite: string;
  // repository: string;
  metrics: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "verdant-commerce",
    title: "Process oil & gas limited",
    category: "Process oil & gas limited",
    year: "2025",
    image: "/process.webp",
    gallery: [
      "/hubbay.webp",
      "/torqtech.webp",
      "/stewart.webp",
    ],
    description:
  "A robust and reliable industrial experience showcasing expertise in energy services, engineering solutions, and operational excellence with a focus on efficiency, safety, and industry-grade performance.",
   problem:
   "The company required a transition from a basic digital presence to an enterprise-grade platform that accurately reflects its expertise in oil and gas services. The existing setup lacked the structure, credibility, and performance needed to effectively showcase operations, communicate technical capabilities, and build trust with clients and stakeholders.",
solution:
  "Designed and developed a scalable web platform with a clean, professional interface that clearly communicates the company’s oil and gas services, technical capabilities, and project portfolio. Implemented a structured content system to showcase operations, certifications, and case studies, while ensuring high performance, accessibility, and seamless navigation across all devices.",
   results: [
  "42% increase in client engagement across service and project pages after launch.",
  "Significant improvement in user retention and time-on-site due to clearer presentation of technical capabilities and operations.",
  "Optimized performance and fast load times maintained across content-rich pages, ensuring reliability even under heavy data and media usage.",
],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion", ],
    viewsite: "https://process-rho-jade.vercel.app/",
    // repository: "https://github.com/will/verdant-commerce",
    metrics: [
      { label: "Conversion lift", value: "+38%" },
      { label: "Page speed", value: "96/100" },
      { label: "Build time", value: "6 days" },
    ],
  },
  {
    slug: "aurelian-finance",
    title: "Torqtech ",
    category: "Torqtech",
    year: "2026",
    image: "/torqtech.webp",
    gallery: [
      "/process.webp",
      "/hubbay.webp",
      "/stewart.webp",
    ],
   description:
  "A performance-driven digital platform for Torqtech, designed to showcase innovative technology solutions with clarity, speed, and reliability, while building trust through a modern interface and seamless user experience.",
   problem:
  "Torqtech had innovative solutions but lacked a compelling digital presence to match. The existing platform did not effectively communicate its technical expertise, reliability, or forward-thinking approach, making it difficult to establish trust and stand out in a competitive technology landscape.",
   solution:
  "Developed a modern, scalable digital platform with a structured information architecture and refined visual system that simplifies complex technology solutions into a clear, user-friendly experience. Incorporated subtle animations, performance optimization, and intuitive navigation to enhance engagement while reinforcing Torqtech’s innovation and reliability.",
   results: [
  "2.4x increase in qualified lead generation driven by improved user experience and clearer service communication.",
  "31% reduction in bounce rate across key landing pages, reflecting stronger engagement and content relevance.",
  "Established a scalable, reusable component system to accelerate future product and service page development.",
],
    tech: ["Next.js 15", "TypeScript", "Framer Motion", "Vercel"],
    viewsite: "https://bigwills.vercel.app/",
    // repository: "https://github.com/will/aurelian-finance",
    metrics: [
      { label: "Conversion lift", value: "+40%" },
      { label: "Page speed", value: "90/100" },
      { label: "Build time", value: "12 days" },
    ],
  },
  {
    slug: "noir-suites",
    title: "Stewart",
    category: "Stewart",
    year: "2026",
    image: "/stewart.webp",
    gallery: [
      "/hubbay.webp",
      "/process.webp",
      "/torqtech.webp",
    ],
   description:
  "A refined hotel and booking platform for Stewart, designed to deliver a seamless and trustworthy user experience by combining elegant visuals, intuitive navigation, and a streamlined reservation process for modern travelers.",
    problem:
  "Despite offering premium accommodations and exceptional guest experiences, Stewart’s existing website failed to reflect its luxury positioning. The outdated interface lacked intuitive navigation and a streamlined booking flow, creating friction in the reservation process and limiting conversion potential.",
    solution:
  "Reimagined the platform with visually rich room showcases, refined typography, and smooth transitions to reflect Stewart’s premium hospitality experience. Designed an intuitive, conversion-focused booking flow optimized for mobile users, enabling seamless room discovery, quick reservations, and an overall elevated user journey.",
   results: [
  "Increase in completed bookings and inquiry submissions following launch.",
  "More than 2× growth in average session duration, indicating stronger user engagement.",
  "Optimized landing and booking pages became the primary drivers of user acquisition and conversions.",
],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS v4", ],
    viewsite: "https://stewart-one.vercel.app/",
    // repository: "https://github.com/will/noir-suites",
    metrics: [
       { label: "Conversion lift", value: "+30%" },
      { label: "Page speed", value: "98/100" },
      { label: "Build time", value: "10 days" },
    ],
  },
  {
    slug: "helios-os",
    title: "Hubbay",
    category: "Hubbay",
    year: "2026",
    image: "/hubbay.webp",
    gallery: [
      "/process.webp",
      "/torqtech.webp",
      "/service.webp",
    ],
   description:
  "A refined luxury dining platform for Hubbay, blending immersive culinary storytelling with elegant presentation and a premium, restaurant-grade experience.",
    problem:
  "Hubbay needed to stand out in a competitive food and restaurant market while clearly communicating its culinary identity and premium dining experience to both everyday guests and high-value clientele.",
    solution:
"Designed a narrative-driven luxury restaurant platform featuring immersive food visuals, refined motion storytelling, and a modular CMS system to allow fast menu, offer, and seasonal campaign updates for agile marketing execution.",
   results: [
"Increased table reservations by 52% in the first quarter.",
"Gave the marketing team a CMS-powered system for quickly updating menus, offers, and seasonal experiences.",
"Handled launch-day traffic spikes smoothly while maintaining fast load times and a premium user experience."
],
    tech: ["Next.js 15", "TypeScript", "Framer Motion", ],
    viewsite: "https://hubbay.vercel.app/",
    // repository: "https://github.com/will/helios-os",
    metrics: [
       { label: "Conversion lift", value: "+50%" },
      { label: "Page speed", value: "97/100" },
      { label: "Build time", value: "17 days" },
    ],
  },
  {
    slug: "helios",
    title: "Service Expert",
    category: "Service Expert",
    year: "2024",
    image: "/service.webp",
    gallery: [
       "/process.webp",
      "/torqtech.webp",
      "/stewart.webp",
    ],
    description:
  "A digital platform for Service Expert, designed to showcase its oil and gas capabilities through clear technical storytelling, operational transparency, and a professional interface that reinforces reliability, expertise, and industry-grade performance.",
  problem:
  "Service Expert needed to stand out in a highly competitive oil and gas sector while effectively communicating its technical expertise and operational capabilities to both industry professionals and key decision-makers. The existing digital presence lacked clarity, depth, and the authority required to build trust and convey large-scale project experience.",
    solution:
  "Developed a narrative-driven digital platform that clearly communicates Service Expert’s capabilities through structured content, strategic information hierarchy, and a scalable content system. Implemented a modular architecture to enable easy updates to services, projects, and operational insights, while ensuring a professional, high-performance experience across all devices.",
    results: [
  "increase in client inquiries and service requests within the first quarter after launch.",
  "Empowered the internal team with a flexible content management system for faster updates to services, projects, and company information.",
  "Maintained high performance and stability during peak traffic periods, ensuring a reliable experience for clients and stakeholders.",
],
    tech: ["Next.js 15", "TypeScript", "Framer Motion",],
    viewsite: "https://ss-et.vercel.app",
    // repository: "https://github.com/will/helios-os",
    metrics: [
      { label: "Conversion lift", value: "+50%" },
      { label: "Page speed", value: "95/100" },
      { label: "Build time", value: "19 days" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skillGroups = [
  {
    title: "Frontend Engineering",
    level: 96,
    description: "Advanced interface architecture, motion systems, accessibility, and component design.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Design Systems",
    level: 92,
    description: "Scalable systems for premium brands with polished UI details and reusable patterns.",
    tools: ["shadcn/ui", "Radix UI", "Storybook", "Figma Tokens", "CVA"],
  },
  {
    title: "Performance & SEO",
    level: 90,
    description: "Fast, discoverable experiences built with performance budgets and technical SEO in mind.",
    tools: ["Lighthouse", "Core Web Vitals", "Schema", "Metadata API", "Image Optimization"],
  },
  {
    title: "Full-Stack Delivery",
    level: 84,
    description: "Server actions, email workflows, CMS integrations, and production deployment pipelines.",
    tools: ["Node.js", "Server Actions", "Resend", "Supabase", "Vercel"],
  },
];

export const testimonials = [
  {
    quote:
      "Will is one of those rare developers who can preserve bold design ambition while making every interaction feel effortless in code.",
    name: "Ada Nwosu",
    title: "Creative Director, Atelier Interactive",
  },
  {
    quote:
      "He turned a vague brief into a digital product that looked premium, converted better, and gave our team confidence at every stage.",
    name: "Marcus Leighton",
    title: "Founder, Aurelian Finance",
  },
  {
    quote:
      "The final site felt expensive in the best possible way. Smooth, intentional, and far ahead of anything we had before.",
    name: "Chioma Eze",
    title: "Brand Lead, Noir Suites",
  },
];

export const contactMethods = [
  {
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: PhoneCall,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/willdev",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/will",
    icon: Github,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsappHref,
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/willdev",
    icon: Instagram,
  },
  {
    label: "Book a Call",
    href: siteConfig.bookingHref,
    icon: CalendarDays,
  },
];
