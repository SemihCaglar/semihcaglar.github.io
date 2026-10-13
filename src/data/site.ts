// Central place for site-wide facts sourced from the CV.
// Edit this file to update the headline, intro, education, links, or skills.

export const site = {
  name: 'Semih Caglar',
  headline: 'Founding Engineer & Software Engineering Researcher',
  intro:
    "I'm a Computer Science student at Bilkent University, ranked 1st in my department, a Founding Engineer at Hansel, and an informatics olympiad medalist. I research developer productivity and automated software engineering at Bilsen, and previously worked on agent personalization under the supervision of Prof. Foutse Khomh at the SWAT Lab, Polytechnique Montréal. My work spans automated code review tooling, indoor mapping and route generation, robotics path planning, and applied machine learning, with results published at venues including ASE, EASE, FSE/AIware, and ATIQSER.",
  location: 'Ankara, Türkiye',
  email: 'semihcaglar28@gmail.com',
} as const;

export const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/SemihCaglar',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/semihh-caglar',
    icon: 'linkedin',
  },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=DsfhoUQAAAAJ&hl=tr&oi=ao',
    icon: 'scholar',
  },
  {
    label: 'Email',
    url: `mailto:${site.email}`,
    icon: 'email',
  },
] as const;

export const educationEntries = [
  {
    institution: 'Vrije Universiteit Amsterdam',
    logo: '/logos/vrije-universiteit-amsterdam.jpg',
    degree: 'Exchange Student',
    location: 'Amsterdam, Netherlands',
    dateLabel: 'Feb 2027 – Jun 2027',
    details: [],
  },
  {
    institution: 'Bilkent University',
    logo: '/logos/bilkent.jpeg',
    degree: 'B.Sc. in Computer Science',
    location: 'Ankara, Türkiye',
    dateLabel: 'Sep 2023 – Expected Jun 2028',
    details: [
      'Full Scholarship',
      'GPA: 3.96 / 4.00',
      'Ranked 1st out of 169 students in the department',
      'Minor in Psychology (GPA: 4.00 / 4.00)',
    ],
  },
  {
    institution: 'Ankara Science High School',
    logo: '/logos/ankara-fen.png',
    degree: undefined as string | undefined,
    location: 'Ankara, Türkiye',
    dateLabel: '2023',
    details: ['Valedictorian — graduated 1st in class'],
  },
] as const;

export const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'C++', 'Java', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'ROS2',
      'NLopt',
      'Flask',
      'Next.js',
      'Express',
      'TypeORM',
      'JavaFX',
      'Spring Boot',
      'PuLP',
    ],
  },
  {
    category: 'Databases',
    skills: ['SQLite', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Google Cloud', 'Firebase', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub'],
  },
] as const;
