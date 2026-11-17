export interface TeamMember {
  /** URL-safe unique id (also used for the headshot/CV file names). */
  slug: string;
  name: string;
  office: string;
  nickname?: string;
  /** Marks the founder for the top-center spotlight layout. */
  isFounder?: boolean;
  /** Core creative focus areas. */
  focus: string[];
  /** Events / programmes / initiatives contributed to. (Not shown on the grid yet.) */
  initiatives: string[];
  /** Audacity statement. (Not shown on the grid yet.) */
  audacityStatement: string;
  /** Professional bio. (Not shown on the grid yet.) */
  bio?: string;
  /** Path under /public, e.g. /team/firstname-lastname.jpg */
  headshot: string;
  /** Path under /public, e.g. /cv/firstname-lastname.pdf. (Not shown on the grid yet.) */
  cv?: string;
  socials: {
    /** Instagram handle (without @) */
    instagram?: string;
    /** Full LinkedIn profile URL */
    linkedin?: string;
    /** X (Twitter) handle (without @) */
    x?: string;
    /** WhatsApp number in international format, digits only (e.g. 2347012345678). Links to https://wa.me/<number> */
    whatsapp?: string;
    /** Personal website / portfolio URL (https:// is added if missing) */
    portfolio?: string;
  };
}

export const teamMembers: TeamMember[] = [

  // Team - Arise Samuel
  {
    slug: 'arise-samuel',
    name: 'Arise Samuel Steven',
    nickname: 'Aríṣe',
    office: 'FOUNDER',
    isFounder: true,
    focus: ['Storytelling', 'Artificial Intelligence', 'Creative Technologist', 'Start-up Founder'],
    initiatives: [
      'Audacity Conference',
      'My Pen Speaks',
      'AI Symposium',
      'Freshers Welcome',
      'Bootcamp',
      "Creatives' Connect '26",
    ],
    audacityStatement:
      'Redefining creativity by instilling the God factor, inspiring a generation via infallible truths, and equipping global creatives with tech and resilience.',
    headshot: '/team/arise-samuel.jpg',
    socials: {
      linkedin: 'https://ng.linkedin.com/in/samuelarise',
      instagram: '@samuelarise',
      portfolio: 'https://samuelarise.vercel.app/',
      // whatsapp: '2348167491937',
    },
  },

  //Team - Jemima John-Udhe 
  {
    slug: 'jemima-johnudhe',
    name: 'Jemima Oghenemaro John-Udhe',
    nickname: 'gem-gem',
    office: 'Admin Officer (Programs & Operations Manager)',
    focus: ['Data analytics', 'Storytelling', 'Visualization', 'Project and Programs Management'
    ],
    initiatives: [
      'Audacity Conference',
      'My Pen Speaks',
      'AI Symposium',
      'Freshers Welcome',
      'Bootcamp',
      "Creatives' Connect '26",
    ],
    audacityStatement: "I was not born to spend my life negotiating with the limits of who I could become.",
    headshot: '/team/jemima-john-udhe.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jemima-john-udhe/',
      instagram: '@emjay__55'
      // whatsapp: '2348167491937',
    },
  },

  //Team - Angel Emmanuel
  {
    slug: 'angel-emmanuel',
    name: 'Angel Onyinyechi Emmanuel',
    office: 'HR, Finance and Treasury (Lead)',
    focus: ['Generative AI', 'Storytelling', 'Emotional Intelligence'],
    initiatives: [
      'Audacity Conference',
      'My Pen Speaks',
      'AI Symposium',
      'Freshers Welcome',
      'Bootcamp',
      "Creatives' Connect '26",
    ],
    audacityStatement:
      'Let every opportunity teach you, every mistake shape you, and every experience leave you wiser; you don’t have to live every lesson yourself when someone else’s story can teach you what you need to know.',
    headshot: '/team/angel-emmanuel.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/angel-emmanuel-259320298',
      instagram: '_angel3l2',
    },
  },

  //Team - Omotunde Victoria
  {
    slug: 'omotunde-victoria',
    name: 'Omotunde Ebunoluwajuwura Victoria',
    nickname: 'Sunless',
    office: 'Community Manager',
    focus: ['AI Agents and Automation', 'Creative Direction', 'Community Building'],
    initiatives: [
      'Audacity Conference',
      'My Pen Speaks',
      'AI Symposium',
      'Freshers Welcome',
      'Bootcamp',
      "Creatives' Connect '26",
    ],
    audacityStatement: "Think like the box doesn't exist 😌",
    headshot: '/team/omotunde-victoria.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ebunoluwajuwura-omotunde-5588122bb',
      whatsapp: '2347075873701',
    },
  },

  //Team - Adebayo Timothy
  {
    slug: 'adebayo-timothy',
    name: 'Adebayo Timothy Opeyemi',
    nickname: 'Sage.',
    office: 'Technical & Innovative Lead',
    focus: ['Generative AI & Automation', 'Cyber Security Analyst', 'Problem Solving'],
    initiatives: [
      'Audacity Conference',
      'My Pen Speaks',
      'AI Symposium',
      'Freshers Welcome',
      'Bootcamp',
      "Creatives' Connect '26",
    ],
    audacityStatement: "Do it anyhow, anyway... They'll mock but you did it and you've set a pace for them to learn from...",
    headshot: '/team/timothy.adebayo.jpg',
    socials: {
      linkedin: 'https://ng.linkedin.com/in/timothy-adebayo-462101274',
      whatsapp: '2347064856191',
      portfolio: 'adebayotimothy.vercel.app'
    },
  },

  //Team - Hannah Olusegun Oluseyi 
  {
    slug: 'hannah-olusegun',
    name: 'Hannah Olusegun Oluseyi',
    nickname: '',
    office: 'Research and Corporate Partnerships',
    focus: ['Analytical Writing', 'Public Policy', 'Generative AI'
    ],
    initiatives: [
      'Audacity Conference',
      'My Pen Speaks',
      'AI Symposium',
      'Freshers Welcome',
      'Bootcamp',
      "Creatives' Connect '26",
    ],
    audacityStatement: "In the end, life is what we believe and make of it.",
    headshot: '/team/hannah-olusegun.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/oluwaseyi-hannah-olusegun-5a1a89314/',
      // whatsapp: '2348167491937',
    },
  }

];
