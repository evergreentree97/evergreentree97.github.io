export const profile = {
  name: '최상록',
  englishName: 'Ricky Choi',
  role: 'Android Developer',
  githubUrl: 'https://github.com/EvergreenTree97',
  linkedinUrl: 'https://kr.linkedin.com/in/%EC%83%81%EB%A1%9D-%EC%B5%9C-070254267',
} as const

export const navigation = [
  { label: 'About me', href: '#about' },
  { label: 'Career', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Side Project', href: '#side-projects' },
  { label: 'Activity', href: '#activities' },
  { label: 'Contact', href: '#contact' },
] as const

export const tastes = [
  { icon: 'game', label: '게임', value: 'RPG와 전략 게임에서 긴 호흡으로 규칙을 익히는 편입니다.' },
  { icon: 'music', label: '음악', value: '키보드를 연주하고 밴드와 J-Pop을 듣습니다.' },
  { icon: 'fitness', label: '운동', value: '웨이트 트레이닝과 클라이밍으로 리듬을 바꿉니다.' },
] as const
