export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
  driveUrl?: string;
  stepsUrl?: string;
}

export interface WorkItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  quote: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    professionSplit: string;
    professionWord1: string;
    professionWord2: string;
    shortBio: string;
    aboutHeadlineFirst: string;
    aboutHeadlineSecond: string;
    aboutDescription: string;
    email: string;
    location: string;
    resumeUrl: string;
    heroImage: string;
    aboutImage: string;
  };
  socialLinks: SocialLink[];
  directMessaging: SocialLink[];
  projects: ProjectItem[];
  experience: WorkItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  testimonials: TestimonialItem[];
}
