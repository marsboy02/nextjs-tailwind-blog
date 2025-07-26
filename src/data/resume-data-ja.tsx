import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA_JA = {
  name: 'カン・ヒョンジュン',
  initials: 'HJ',
  location: 'ソウル、韓国 (KST)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: '最高のサポーターを目指すDevOpsエンジニア',
  summary:
    'チームメンバーを支援することに誇りを持っています。\n振り返ってみると、ゲームをプレイする時もいつもチームを支えるサポーターの役割を担っていました。\nその性格を活かして、頼れるDevOpsエンジニアとしてチームをサポートしていきたいと思います。',
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
      school: 'ソウル市立大学',
      degree: '電子電気コンピュータ工学部 学士',
      start: '2021',
      end: '2025',
    },
  ],
  work: [
    {
      company: 'チームスパルタ',
      link: 'https://www.teamsparta.com/',
      title: 'ソフトウェアエンジニア',
      start: '2025. 07.',
      end: null,
      description:
        'チームスパルタは誰もが大きなことを成し遂げられる世界を作るために努力しています。',
      points: ['Next.jsおよびNest.js基盤のフルスタック開発'],
    },
    {
      company: 'Munto',
      link: 'https://www.munto.kr/',
      title: 'ソフトウェアエンジニア',
      start: '2025. 03.',
      end: '2025. 06.',
      description:
        'Muntoは興味ベースのコミュニティプラットフォームで、ソーシャルリング、クラブ、チャレンジなどの文化サービスを提供しています。',
      points: [
        'AWSの設計、構築、運営および最適化によりAWS月間運営費用を42%削減',
        'ECS基盤のCI/CDパイプライン構築',
        'AWSインフラ運営責任者としてマネージドサービスプロバイダー（MSP）との契約管理',
      ],
    },
    {
      company: 'UGLSoft',
      link: 'https://ubai.uos.ac.kr/',
      title: 'システムエンジニア',
      start: '2024. 07.',
      end: '2025. 01.',
      description:
        'ソウル市立大学都市科学ビッグデータAI研究院で研究のためのスーパーコンピュータクラスターを管理しました。',
      points: [
        'Server Utilizationモニタリングダッシュボードの構築',
        {
          title: 'Slurmを使用して106台のスーパーコンピュータクラスターを管理',
          slug: 'ubai/cluster',
        },
        'InfiniBandベースのL2およびL1ネットワーク作業',
      ],
    },
    {
      company: 'UOSLife',
      link: 'https://www.uoslife.team',
      title: 'ソフトウェアエンジニア',
      start: '2022. 03.',
      end: '2024. 06.',
      description:
        '非営利団体UOSLifeは大学生向けのユーティリティおよびコミュニティサービスを提供する団体です。',
      points: [
        'アルゴリズム論文(Hospital-Resident)を参考にお見合いおよび合コンマッチングサービスの開発',
        'ArgoCD基盤の配信環境でCI/CDパイプラインの構築',
        'K8s Cronjobを活用してお知らせスクレイピングおよびプッシュサービスの開発',
        'Spring Security基盤の認証システムの実装',
      ],
    },
  ],
  skills: ['Kubernetes', 'AWS', 'Nest.js', 'Next.js', 'Spring Boot', 'Python'],
} as const;
