export type ChapterType = 'LMU Chapter' | 'CMF Global';

export type SocialPlatformKey =
  | 'linkedin'
  | 'instagram'
  | 'x'
  | 'behance'
  | 'dribbble'
  | 'github'
  | 'youtube'
  | 'tiktok';

export type SocialLinksMap = Record<SocialPlatformKey, string>;

export interface CommunityMemberFormData {
  // Step 1: Basics + Education & Work
  fullName: string;
  nickname: string;
  email: string;
  whatsappNumber: string;
  gender: string;
  dateOfBirth: string;
  country: string;
  customCountry: string;
  chapter: ChapterType;
  schoolName: string;
  courseDepartment: string;
  customCourseDepartment: string;
  level: string;
  hall: string;
  roomNumber: string;
  currentOccupation: string;
  customOccupation: string;
  hobbies: string[];

  // Step 2: Creative
  primaryDiscipline: string;
  secondaryDisciplines: string[];
  coreFocusAreas: string[];
  shortBio: string;
  toolsAndSkills: string[];
  funFact: string;
  weirdFact: string;
  passionDrive: string;

  // Step 3: Links (Optional)
  portfolioWebsite: string;
  socialLinks: SocialLinksMap;
  workSampleLink: string;

  // Step 4: Community Fit & Consent
  communityExpectations: string[];
  communityContributions: string[];
  featureConsent: boolean;
}

export const INITIAL_COMMUNITY_FORM_DATA: CommunityMemberFormData = {
  fullName: '',
  nickname: '',
  email: '',
  whatsappNumber: '',
  gender: '',
  dateOfBirth: '',
  country: 'Nigeria',
  customCountry: '',
  chapter: 'LMU Chapter',
  schoolName: 'Landmark University',
  courseDepartment: '',
  customCourseDepartment: '',
  level: '',
  hall: '',
  roomNumber: '',
  currentOccupation: '',
  customOccupation: '',
  hobbies: [],
  primaryDiscipline: '',
  secondaryDisciplines: [],
  coreFocusAreas: [],
  shortBio: '',
  toolsAndSkills: [],
  funFact: '',
  weirdFact: '',
  passionDrive: '',
  portfolioWebsite: '',
  socialLinks: {
    linkedin: '',
    instagram: '',
    x: '',
    behance: '',
    dribbble: '',
    github: '',
    youtube: '',
    tiktok: '',
  },
  workSampleLink: '',
  communityExpectations: [],
  communityContributions: [],
  featureConsent: false,
};

export interface FormStepMeta {
  id: 'basics' | 'creative' | 'links' | 'consent';
  num: string;
  label: string;
  title: string;
  subtitle: string;
}

export const FORM_STEPS: readonly FormStepMeta[] = [
  {
    id: 'basics',
    num: '01',
    label: 'Basics',
    title: 'Identity, Contact & Chapter',
    subtitle: 'Your personal details and academic or professional background.',
  },
  {
    id: 'creative',
    num: '02',
    label: 'Creative',
    title: 'Creative Profile & Craft',
    subtitle: 'Your primary discipline, core focus areas, bio, and creative tools.',
  },
  {
    id: 'links',
    num: '03',
    label: 'Links',
    title: 'Portfolio & Socials (Optional)',
    subtitle: 'Share your portfolio, public profiles, CV, or work samples if available.',
  },
  {
    id: 'consent',
    num: '04',
    label: 'Consent',
    title: 'Community Fit & Directory Consent',
    subtitle: 'How we grow together, plus optional directory portrait and feature permission.',
  },
];

export const WHATSAPP_INVITE_URL = 'https://chat.whatsapp.com/CmPHtO4hTzWKtNAaXAN0MR';
export const TELEGRAM_INVITE_URL = 'https://t.me/+ZA038t1mQiE2ZDY0';

export const GENDER_OPTIONS = ['Male', 'Female', 'Prefer not to say'] as const;

export const COUNTRIES = [
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'United Kingdom',
  'United States',
  'Canada',
  'Rwanda',
  'Uganda',
  'Tanzania',
  'Egypt',
  'India',
  'Germany',
  'France',
  'Australia',
  'United Arab Emirates',
  'Other',
] as const;

export const LMU_LEVEL_OPTIONS = [
  '100 Level',
  '200 Level',
  '300 Level',
  '400 Level',
  '500 Level',
  'Postgraduate',
] as const;

export const LMU_HALL_OPTIONS = [
  'Daniel Hall',
  'Joseph Hall',
  'Abraham Hall',
  'Isaac Hall',
  'Deborah Hall',
  'Lydia Hall',
  'Sarah Hall',
  'Abigail Hall',
  'Dorcas Hall',
  'Off-Campus / Other',
] as const;

export const LMU_DEPARTMENTS = [
  'Computer Science',
  'Software Engineering',
  'Cyber Security',
  'Information Systems',
  'Mass Communication',
  'International Relations',
  'Economics',
  'Accounting',
  'Business Administration',
  'Biochemistry',
  'Microbiology',
  'Industrial Chemistry',
  'Mechanical Engineering',
  'Electrical & Information Engineering',
  'Civil Engineering',
  'Mechatronics Engineering',
  'Agricultural Engineering',
  'Chemical Engineering',
  'Sociology',
  'Political Science',
  'Law',
  'Medicine & Surgery',
  'Nursing Science',
  'Medical Laboratory Science',
  'Other',
] as const;

export const OCCUPATION_OPTIONS = [
  'University / College Student',
  'Full-Time Creative Professional',
  'Tech / Software Professional',
  'Freelancer / Independent Creator',
  'Startup Founder / Entrepreneur',
  'Educator / Researcher',
  'Corporate Professional',
  'Other',
] as const;

export const HOBBY_OPTIONS = [
  'Reading',
  'Creative Writing',
  'Filmmaking',
  'Photography',
  'Design & Art',
  'Music & Audio',
  'Gaming',
  'Coding & AI',
  'Public Speaking',
  'Travel',
  'Fitness & Sports',
  'Podcasts & Documentaries',
] as const;

export const PRIMARY_DISCIPLINES = [
  'Writing',
  'Visual Art',
  'Design',
  'Film',
  'Music',
  'Photography',
  'Tech/AI',
  'Fashion',
  'Other',
] as const;

export const SECONDARY_DISCIPLINE_OPTIONS = [
  'Writing',
  'Visual Art',
  'Design',
  'Film',
  'Music',
  'Photography',
  'Tech/AI',
  'Fashion',
  'Spoken Word & Poetry',
  'UI/UX Design',
  'Motion Graphics',
  '3D & Animation',
  'Content Strategy',
  'Software Engineering',
  'Sound Engineering',
] as const;

export const CORE_FOCUS_OPTIONS = [
  'Storytelling & Copywriting',
  'Brand & Identity Design',
  'UI/UX & Product Design',
  'Cinematography & Directing',
  'Video Editing & Post-Production',
  'Generative AI & Automation',
  'Software & Web Development',
  'Music & Audio Production',
  'Editorial & Portrait Photography',
  'Illustration & Digital Art',
  'Fashion Styling & Direction',
  'Creative Direction & Strategy',
  'Community & Programs Leadership',
  'Research & Analytical Writing',
] as const;

export const TOOL_AND_SKILL_OPTIONS = [
  'Figma',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'CapCut',
  'Canva',
  'Lightroom',
  'Blender',
  'Notion',
  'ChatGPT / Claude / Gemini',
  'Midjourney / Runway',
  'VS Code / Git',
  'React / TypeScript',
  'Python',
  'Logic Pro / FL Studio',
  'Google Workspace',
] as const;

export const SOCIAL_PLATFORMS: readonly {
  key: SocialPlatformKey;
  label: string;
  placeholder: string;
}[] = [
  { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/username' },
  { key: 'instagram', label: 'Instagram', placeholder: '@username or profile link' },
  { key: 'x', label: 'X (Twitter)', placeholder: '@username or profile link' },
  { key: 'behance', label: 'Behance', placeholder: 'https://behance.net/username' },
  { key: 'dribbble', label: 'Dribbble', placeholder: 'https://dribbble.com/username' },
  { key: 'github', label: 'GitHub', placeholder: 'https://github.com/username' },
  { key: 'youtube', label: 'YouTube', placeholder: 'https://youtube.com/@channel' },
  { key: 'tiktok', label: 'TikTok', placeholder: '@username or profile link' },
];

export const EXPECTATION_OPTIONS = [
  'Mentorship',
  'Collaboration',
  'Visibility',
  'Learning',
  'Jobs',
] as const;

export const CONTRIBUTION_OPTIONS = [
  'Speaking',
  'Volunteering',
  'Mentoring',
  'Teaching',
  'Sponsorship',
] as const;
