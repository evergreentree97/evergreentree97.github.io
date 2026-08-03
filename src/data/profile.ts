export const profile = {
  name: '최상록',
  englishName: 'Ricky Choi',
  role: 'Android Developer',
  githubUrl: 'https://github.com/EvergreenTree97',
  linkedinUrl: 'https://kr.linkedin.com/in/%EC%83%81%EB%A1%9D-%EC%B5%9C-070254267',
  careerUrl: '#experience',
} as const

export const navigation = [
  { label: '소개', href: '#about' },
  { label: '프로젝트', href: '#projects' },
  { label: '기술', href: '#skills' },
  { label: '일하는 방식', href: '#how-i-work' },
  { label: '경력', href: '#experience' },
  { label: '연락처', href: '#contact' },
] as const

export const tastes = [
  { icon: 'game', label: '게임', value: 'RPG / 전략 / 인디' },
  { icon: 'music', label: '음악', value: '키보드 / 밴드 / 록' },
  { icon: 'fitness', label: '운동', value: '근력 운동' },
] as const
