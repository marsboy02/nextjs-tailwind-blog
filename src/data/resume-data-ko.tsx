import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA_KO = {
  name: '강형준',
  initials: '형준',
  location: '대한민국 서울특별시 (한국 표준시)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: '최고의 서포터가 되고자 하는 데브옵스 엔지니어',
  summary:
    '팀원을 도울 수 있다는 것에 자부심을 느낍니다. \n돌이켜보면, 게임을 플레이할 때 항상 팀원들을 지원하는 서포터 역할을 맡곤 했습니다. \n그 성향을 이어 듬직하게 팀원들을 지원하는 데브옵스 엔지니어가 되고자 합니다.',
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
      school: '서울시립대학교',
      degree: '전자전기컴퓨터공학부 학사',
      start: '2021',
      end: '2025',
    },
  ],
  work: [
    {
      company: '문토',
      link: 'https://www.munto.kr/',
      title: '소프트웨어 엔지니어',
      start: '2025. 03.',
      end: null,
      description:
        '문토는 관심사 기반의 커뮤니티 플랫폼으로 소셜링이나 클럽, 챌린지 등의 문화 서비스를 제공합니다.',
      points: ['그라파나 및 엘라스틱서치 대시보드 도입', 'VOD 서비스 백엔드 개발'],
    },
    {
      company: '유지엘소프트',
      link: 'https://ubai.uos.ac.kr/',
      title: '데이터센터 매니저',
      start: '2024. 07.',
      end: '2025. 01.',
      description:
        '기반으로 서울시립대학교 도시과학빅데이터AI연구원에서 데이터센터를 매니징하는 역할을 맡았습니다.',
      points: [
        'Server Utilization 모니터링 대시보드 구축',
        {
          title: 'Slurm을 이용해 106대의 슈퍼컴퓨터 클러스터 관리',
          slug: 'ubai/cluster',
        },
        '인피니밴드 기반의 L2 및 L1 네트워크 작업',
      ],
    },
    {
      company: '유오에스라이프',
      link: 'https://www.uoslife.team',
      title: '소프트웨어 엔지니어',
      start: '2022. 03.',
      end: '2024. 06.',
      description:
        '비영리단체 유오에스라이프는 대학생들이 사용하는 유틸리티 및 커뮤니티 서비스를 만드는 단체입니다.',
      points: [
        '알고리즘 논문(Hospital-Resident)을 참고하여 소개팅 및 미팅 매칭 서비스 개발',
        'ArgoCD 기반의 배포 환경에서 CI/CD 파이프라인 구축',
        'K8s Cronjob을 활용하여 공지사항 스크래핑 및 푸시 서비스 개발',
        '스프링 시큐리티 기반 인증 시스템 구현',
      ],
    },
  ],
  skills: ['Kubernetes', 'AWS', 'Nest.js', 'Next.js', 'Spring Boot', 'Python'],
} as const;
