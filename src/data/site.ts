// Central place for site-wide facts sourced from the CV.
// Edit this file to update the headline, intro, education, links, or skills.

export const site = {
  name: 'Semih Çağlar',
  headline: 'Computer Science Student & Software Engineering Researcher',
  intro:
    "I'm a Computer Science student at Bilkent University and a former informatics olympiad student, currently researching LLM-based software engineering and developer productivity. My work spans automated code review tooling, robotics path planning, and applied machine learning, with results published at venues including ASE and EASE. I'm currently a Research Intern at the SWAT Lab, Polytechnique Montréal.",
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

export const education = {
  institution: 'Bilkent University',
  degree: 'B.Sc. in Computer Science (Full Scholarship)',
  location: 'Ankara, Türkiye',
  dateLabel: 'Sep 2023 – Expected Jun 2028',
  details: [
    'GPA: 3.96 / 4.00',
    'Ranked 1st out of 169 students in the department',
    'Minor degree in Psychology',
  ],
} as const;

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
