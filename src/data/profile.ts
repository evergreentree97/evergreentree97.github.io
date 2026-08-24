export const profile = {
  name: '최상록',
  englishName: 'Ricky Choi',
  role: 'Android Developer',
  githubUrl: 'https://github.com/EvergreenTree97',
  linkedinUrl: 'https://kr.linkedin.com/in/%EC%83%81%EB%A1%9D-%EC%B5%9C-070254267',
} as const

export const navigation = [
  { label: '소개', href: '#about' },
  { label: '경력', href: '#experience' },
  { label: '프로젝트', href: '#projects' },
  { label: '사이드 프로젝트', href: '#side-projects' },
  { label: '대외 활동', href: '#activities' },
  { label: '연락처', href: '#contact' },
] as const

export const tastes = [
  { icon: 'game', label: '게임', value: '리그 오브 레전드를 즐깁니다.' },
  { icon: 'music', label: '음악', value: '키보드를 연주하고 밴드와 J-Pop을 듣습니다.' },
  { icon: 'fitness', label: '운동', value: '웨이트 트레이닝을 하고 주말에는 클라이밍을 합니다.' },
] as const
