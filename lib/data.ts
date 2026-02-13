type Project = {
  name: string;
  description: string;
  link: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type SocialLink = {
  label: string;
  link: string;
};

type SocialLinks = {
  github: SocialLink;
  linkedin: SocialLink;
};

export const PROJECTS: Project[] = [
  {
    name: 'Sonmez Döner Website',
    description:
      'The official website for Sonmez Döner, a popular döner kebab restaurant in Ingolstadt, Germany.',
    link: 'https://www.sonmezdoener.de/',
    id: '1',
  },
  {
    name: 'RBTC Audio Converter',
    description:
      'A full-stack web application that converts WAV audio files to MP3 format with automated metadata tagging, email delivery, and background job processing for RBTC educational content.',
    link: 'https://github.com/daribock/rbtc-audio-converter',
    id: '2',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'MediaMarktSaturn Technology',
    title: 'Software Engineer',
    start: '2022',
    end: 'Present',
    link: 'https://careers.mediamarktsaturn.com/MMSTech',
    id: '1',
  },
];

export const socialLinks: SocialLinks = {
  github: {
    label: 'Github',
    link: 'https://github.com/daribock',
  },
  linkedin: {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/darikletter',
  },
};

export const metaData = {
  baseUrl: 'https://darikletter.de',
  title: "Darikletter's Portfolio",
  name: 'Darius Kletter',
  // ogImage: "/opengraph-image.png",
  description:
    'Hi, I’m Darius Kletter, a software engineer based in Ingolstadt. I’m passionate about using technology to serve people — building websites and tools that make a real difference.',
};

export const EMAIL = 'darikletter@gmail.com';
