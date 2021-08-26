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
  paragraphOne: `I'm a Web Developer with over 5 years of professional experience. I work as a full-stack developer using mostly JavaScript programming languages to work on microservices and enterprise applications.`,
  paragraphTwo: `Programming Languages: multilingual (not limited to any specific language), and especially experienced in Javascript, PHP, Python`,
  paragraphThree: `Developing Tools: can adapt to any editors/OSs, usually use visual Studio Code as code editor, have experience with tools like GIT, Docker, Kubernetes, CI/CD pipelines.`,
  resume: 'https://drive.google.com/file/d/1FBiEfxEQ_H3oCxMxC5tpDFsF08vMmN9J/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tensor.png',
    title: 'AUTOMATIC DOOR ACCESS MODEL',
    info: 'Automatic door access model based on face recognition  and face mask detection using a raspberry pi. With Tensorflow and AWS rekognition',
    url: 'https://youtu.be/4ylA94GjFGE',
  },
  {
    id: nanoid(),
    img: 'autopit.png',
    title: 'Autopit',
    info: 'WMS (Workshop Management System)',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'eyzet.png',
    title: 'EYZET.IO',
    info: 'Unified Network Management Network',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'sibudak.png',
    title: 'SIBUDAK',
    info: 'Health Service Immunization Application',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'indonesiaconnect.png',
    title: 'IndonesiaConnect',
    info: 'ISP Management System (Mikrotik & ZTE OLT)',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'sekelahkita.png',
    title: 'Attendance Management',
    info: 'Attendance management system integrated with attendance biometric machine',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'monitoring-system.png',
    title: 'NMS',
    info: 'NMS is an application to find out which websites are accessed by clients. Website data opened by the client will be stored in the database, then the school administrator will filter websites that can be accessed in the school environment. If there is an inappropriate website, it can be blocked',
    info2: '',
    url: '',
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
