import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Asep Kohar | Full-Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Asep Kohar',
  subtitle: 'Full-Stack Developer & AI Enthusiast',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Full-Stack Developer & AI Enthusiast. Currently, I'm focusing on Angular & NodeJS. I understand what it takes to release a product having worked on the back-end, front-end, testing and finally the deployment aspect of several products.`,
  paragraphTwo: `Programming Languages: multilingual (not limited to any specific language), and especially experienced in Javascript, PHP, Python`,
  paragraphThree: `Developing Tools: can adapt to any editors/OSs, usually use visual Studio Code as code editor, have experience with team tools like GitHub, Gitlab, CircleCI, Drone, Trello.`,
  resume: 'https://drive.google.com/file/d/1mJPaqGYVyKYSTfNr-bPxUssuyM-ZpwqU/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'autopit.png',
    title: 'Autopit',
    info: 'WMS (Workshop Management System)',
    info2: '',
    url: '',
    repo: 'https://github.com/akoharu', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'eyzet.png',
    title: 'EYZET.IO',
    info: 'Unified Network Management Network',
    info2: '',
    url: '',
    repo: 'https://github.com/akoharu', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sibudak.png',
    title: 'SIBUDAK',
    info: 'Health Service Immunization Application',
    info2: '',
    url: '',
    repo: 'https://github.com/akoharu', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'indonesiaconnect.png',
    title: 'IndonesiaConnect',
    info: 'ISP Management System (Mikrotik & ZTE OLT)',
    info2: '',
    url: '',
    repo: 'https://github.com/akoharu', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sekelahkita.png',
    title: 'Attendance Management',
    info: 'Attendance management system integrated with attendance biometric machine',
    info2: '',
    url: '',
    repo: 'https://github.com/akoharu', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hallo@kohar.space',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/asepkohar01',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/asep-koharudin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/akoharu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
