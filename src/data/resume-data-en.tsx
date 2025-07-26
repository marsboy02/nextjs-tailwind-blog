import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA_EN = {
  name: 'Hyeongjun Kang',
  initials: 'HJ',
  location: 'Seoul, South Korea, KST',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: 'Aspiring DevOps Engineer aiming to be the best supporter',
  summary:
    'I take pride in being able to help my team members. Looking back, I always played the role of a supporter when playing games with my team. I aim to continue this trait by becoming a reliable DevOps engineer who supports my team.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/86903678?v=4',
  contact: {
    email: 'marsboy0619@gmail.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/marsboy02',
        icon: IconGithub,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hyeongjun-kang/',
        icon: IconLinkedin,
      },
    ],
  },
  education: [
    {
      school: 'University of Seoul',
      degree: "Bachelor's Degree in Electrical and Computer Engineering",
      start: '2021',
      end: '2025',
    },
  ],
  work: [
    {
      company: 'TeamSparta',
      link: 'https://www.teamsparta.com/',
      title: 'Software Engineer',
      start: '2025. 07.',
      end: null,
      description: 'TeamSparta strives to create a world where anyone can make a big impact.',
      points: ['Full-stack development based on Next.js and Nest.js'],
    },
    {
      company: 'Munto',
      link: 'https://www.munto.kr/',
      title: 'Software Engineer',
      start: '2025. 03.',
      end: '2025. 06.',
      description:
        'Munto is a community platform based on interests, providing cultural services such as social gatherings, clubs, and challenges.',
      points: [
        'Reduced AWS monthly operating costs by 42% through design, construction, operation and optimization of AWS',
        'Built ECS-based CI/CD pipeline',
        'Managed contracts with Managed Service Providers (MSP) as AWS infrastructure operations manager',
      ],
    },
    {
      company: 'UGLSoft',
      link: 'https://ubai.uos.ac.kr/',
      title: 'System Engineer',
      start: '2024. 07.',
      end: '2025. 01.',
      description:
        "Managed supercomputer clusters for research at the University of Seoul's Urban Science Big Data AI Research Institute.",
      points: [
        'Built a server utilization monitoring dashboard',
        {
          title: 'Managed a supercomputer cluster of 106 nodes using Slurm',
          slug: 'ubai/cluster',
        },
        'Worked on L2 and L1 networks based on InfiniBand',
      ],
    },
    {
      company: 'UOSLife',
      link: 'https://www.uoslife.team',
      title: 'Software Engineer',
      start: '2022. 03.',
      end: '2024. 06.',
      description:
        'UOS Life is a non-profit organization that creates utility and community services for university students.',
      points: [
        'Developed a dating and meeting matching service based on the Hospital-Resident algorithm paper',
        'Built a CI/CD pipeline in an ArgoCD-based deployment environment',
        'Developed a notification scraping and push service using K8s Cronjob',
        'Implemented an authentication system based on Spring Security',
      ],
    },
  ],
  skills: ['Kubernetes', 'AWS', 'Nest.js', 'Next.js', 'Spring Boot', 'Python'],
} as const;

export type RESUME = typeof RESUME_DATA_EN;
