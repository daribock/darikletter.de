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

// type BlogPost = {
//   title: string;
//   description: string;
//   link: string;
//   uid: string;
// };

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'Sonmez Döner Website',
    description:
      'The official website for Sonmez Döner, a popular döner kebab restaurant in Ingolstadt, Germany.',
    link: 'https://www.sonmezdoener.de/',
    id: '1',
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

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'How to Export Metadata from MDX for Next.js SEO',
//     description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
//     link: '/blog/example-mdx-metadata',
//     uid: 'blog-4',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/daribock',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/darikletter',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/darikletter',
  },
];

export const metaData = {
  baseUrl: 'https://darikletter.de',
  title: "Darikletter's Portfolio",
  name: 'Darius Kletter',
  // ogImage: "/opengraph-image.png",
  description:
    'Hi, I’m Darius Kletter, a web developer based in Ingolstadt. I’m passionate about using technology to serve people — building websites and tools that make a real difference.',
};

export const EMAIL = 'darikletter@gmail.com';
