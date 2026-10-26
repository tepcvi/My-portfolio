import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Stephen Dave Piquero',
    firstName: 'Stephen Dave',
    lastName: 'Piquero',
    title: 'Creative Full-Stack Developer & UI/UX Designer',
    professionSplit: 'Creative',
    professionWord1: 'Full-Stack',
    professionWord2: 'Developer',
    shortBio:
      "Crafting high-performance digital experiences with bold visual identity, modern architecture, and micro-interactions.",
    aboutHeadlineFirst: 'Creativity',
    aboutHeadlineSecond: 'Is My Passion',
    aboutDescription:
      "I'm a Full-Stack Developer passionate about pushing the boundaries of interactive web engineering, creative code, and digital design. Driven by curiosity and craftsmanship, I build responsive, accessible, and memorable digital experiences for modern brands and products.",
    email: 'stephendave.piquero@example.com',
    location: 'Philippines / Remote',
    resumeUrl: '/assets/pdf/resume-sample.pdf',
    heroImage: '/assets/img/user-studio-cutout.png',
    aboutImage: '/assets/img/user-studio-cutout.png'
  },
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/stephendave-piquero',
      icon: 'ri-linkedin-fill'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/stephendave-piquero',
      icon: 'ri-github-line'
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com/stephendave_dev',
      icon: 'ri-twitter-x-line'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/stephendave.piquero',
      icon: 'ri-instagram-line'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/stephendave',
      icon: 'ri-dribbble-line'
    }
  ],
  directMessaging: [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/639123456789',
      icon: 'ri-whatsapp-line'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/stephendave_piquero',
      icon: 'ri-telegram-line'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/stephendave',
      icon: 'ri-discord-line'
    },
    {
      name: 'Schedule Call',
      url: 'https://cal.com/stephendave',
      icon: 'ri-calendar-line'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      number: '01',
      category: 'Web App',
      title: 'Pulse Realtime Chat',
      subtitle: 'Techstack used',
      description: 'React, TypeScript, Tailwind CSS, Supabase & WebSocket sync.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'WebSockets'],
      image: '/assets/img/project-6.png',
      liveUrl: 'https://chat-app-demo.example.com',
      githubUrl: 'https://github.com/example/pulse-chat'
    },
    {
      id: 'proj-2',
      number: '02',
      category: 'Creative Web',
      title: 'Aura Artisan Coffee',
      subtitle: 'Techstack used',
      description: 'Next.js, Framer Motion, 3D Parallax Tilt & Intersection Observer.',
      techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'WebGL'],
      image: '/assets/img/project-1.png',
      liveUrl: 'https://coffee-experience.example.com',
      githubUrl: 'https://github.com/example/coffee-showcase'
    },
    {
      id: 'proj-3',
      number: '03',
      category: 'SaaS Platform',
      title: 'Nexus Analytics Hub',
      subtitle: 'Techstack used',
      description: 'React, Chart.js, Tailwind CSS, REST APIs & Responsive Dashboard.',
      techStack: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
      image: '/assets/img/project-7.png',
      liveUrl: 'https://nexus-dashboard.example.com',
      githubUrl: 'https://github.com/example/nexus-analytics'
    },
    {
      id: 'proj-4',
      number: '04',
      category: 'Web Design',
      title: 'Verve Studio Portfolio',
      subtitle: 'Techstack used',
      description: 'HTML5, Modern CSS, Vanilla JS, Swiper & Motion Graphics.',
      techStack: ['HTML5', 'Modern CSS', 'JavaScript', 'Swiper JS'],
      image: '/assets/img/project-2.png',
      liveUrl: 'https://verve-studio.example.com',
      githubUrl: 'https://github.com/example/verve-portfolio'
    },
    {
      id: 'proj-5',
      number: '05',
      category: 'System Platform',
      title: 'OpsFlow Workforce Suite',
      subtitle: 'Techstack used',
      description: 'React, Redux Toolkit, Node.js, Express & Postman API testing.',
      techStack: ['React', 'Context API', 'Tailwind CSS', 'Node.js'],
      image: '/assets/img/project-3.png',
      liveUrl: 'https://opsflow-system.example.com',
      githubUrl: 'https://github.com/example/workforce-suite'
    },
    {
      id: 'proj-6',
      number: '06',
      category: 'API Web',
      title: 'Terra GeoAtlas Explorer',
      subtitle: 'Techstack used',
      description: 'React, REST Countries API, Dynamic Filtering & Dark Mode.',
      techStack: ['React', 'Rest Countries API', 'CSS Grid'],
      image: '/assets/img/project-4.png',
      liveUrl: 'https://terra-geo.example.com',
      githubUrl: 'https://github.com/example/geo-atlas'
    },
    {
      id: 'proj-7',
      number: '07',
      category: 'E-Commerce',
      title: 'Lumina Boutique Store',
      subtitle: 'Techstack used',
      description: 'Modern JavaScript, CSS Grid, Stripe Checkout & Cart State.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Stripe API'],
      image: '/assets/img/project-5.png',
      liveUrl: 'https://lumina-boutique.example.com',
      githubUrl: 'https://github.com/example/lumina-store'
    },
    {
      id: 'proj-8',
      number: '08',
      category: 'Creative Design',
      title: 'Architectura Monolith',
      subtitle: 'Techstack used',
      description: 'React, Tailwind CSS, 3D Parallax Tilt, AOS & Micro-animations.',
      techStack: ['React', 'Tailwind CSS', 'AOS', 'Parallax Tilt'],
      image: '/assets/img/project-8.png',
      liveUrl: 'https://architectura.example.com',
      githubUrl: 'https://github.com/example/architectura-web'
    }
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Senior Frontend Engineer',
      company: 'Phaton Studios',
      period: '2024 - Present',
      description:
        'Architecting next-generation web applications, interactive visual systems, and component libraries using React, TypeScript, and modern CSS architecture with strict accessibility standards.'
    },
    {
      id: 'exp-2',
      role: 'Creative Web Developer',
      company: 'Skillify Zone',
      period: '2023 - 2024',
      description:
        'Built full-lifecycle responsive web products, bespoke client portfolios, performance-tuned landing pages, and interactive web tools delivering 98+ Lighthouse scores.'
    },
    {
      id: 'exp-3',
      role: 'UI/UX & Frontend Associate',
      company: 'Digital Horizon Labs',
      period: '2022 - 2023',
      description:
        'Collaborated on user research, wireframing, high-fidelity Figma design systems, and rapid prototype translation into performant frontend code.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.S. in Computer Science & Software Engineering',
      institution: 'Metropolitan State University',
      period: '2020 - 2024',
      description:
        'Focus on software architecture, algorithms, distributed systems, user interface design, and modern human-computer interaction (HCI).'
    },
    {
      id: 'edu-2',
      degree: 'Advanced Certificate in UI/UX & Web Performance',
      institution: 'Interaction Design Foundation',
      period: '2022 - 2023',
      description:
        'Comprehensive training in visual hierarchy, design tokens, micro-interactions, responsive grids, and web accessibility (WCAG 2.2 AA).'
    },
    {
      id: 'edu-3',
      degree: 'Pre-Engineering & Applied Mathematics Diploma',
      institution: 'Science & Technology Academy',
      period: '2018 - 2020',
      description:
        'Rigorous foundation in analytical thinking, calculus, physics, and computational problem-solving.'
    }
  ],
  skillCategories: [
    {
      id: 'dev-skills',
      title: 'Development Skills',
      description:
        'End-to-end web engineering with React, Next.js, TypeScript, and modern CSS. Combining scalable architecture with pixel-perfect visual craft.',
      skills: [
        'React 19',
        'TypeScript',
        'Next.js 15',
        'JavaScript (ESNext)',
        'HTML5 & Semantic Web',
        'CSS3 & Vanilla CSS',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'REST APIs',
        'Supabase',
        'MongoDB',
        'MySQL',
        'Framer Motion',
        'Git & GitHub'
      ]
    },
    {
      id: 'dev-tools',
      title: 'Tools & Ecosystem',
      description:
        'Professional developer and design tooling powering streamlined workflows, high code quality, and continuous deployment.',
      skills: [
        'VS Code',
        'Figma',
        'Vite',
        'Postman',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Chrome DevTools',
        'GitHub Actions',
        'Vercel & Netlify',
        'npm & pnpm',
        'Lighthouse Audits',
        'Claude & AI Workflows'
      ]
    }
  ],
  testimonials: [
    {
      id: 'test-1',
      name: 'Elena Rostova',
      role: 'Staff Product Designer at Synthetix',
      rating: 5.0,
      image: '/assets/img/testimonial-1.png',
      quote:
        'Stephen brings an exceptional blend of visual perfectionism and technical rigor. His ability to translate complex design systems into silky-smooth frontend interactions is truly world-class.'
    },
    {
      id: 'test-2',
      name: 'Marcus Vance',
      role: 'Engineering Lead at Veloce Labs',
      rating: 5.0,
      image: '/assets/img/testimonial-2.png',
      quote:
        'Working with Stephen on our core React platform was effortless. He writes ultra-clean, maintainable code, respects deadlines, and always proposes creative solutions that elevate UX.'
    },
    {
      id: 'test-3',
      name: 'Sophia Chen',
      role: 'Founder & CEO at Lumina Studio',
      rating: 5.0,
      image: '/assets/img/testimonial-3.png',
      quote:
        'The portfolio website Stephen crafted for our creative studio exceeded every expectation. Our client inquiries doubled within weeks thanks to the distinctive aesthetic and speed.'
    },
    {
      id: 'test-4',
      name: 'David Kelling',
      role: 'Technical Director at Apex Digital',
      rating: 5.0,
      image: '/assets/img/testimonial-4.png',
      quote:
        'Reliable, highly skilled, and detail-oriented. Stephen has a deep appreciation for motion, accessibility, and typography that sets his work far apart from standard developers.'
    }
  ]
};
