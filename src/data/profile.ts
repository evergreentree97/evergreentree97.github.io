export const profile = {
  name: '최상록',
  englishName: 'Ricky Choi',
  role: 'Android Developer',
  email: 'tkdfhr7875@gmail.com',
  githubUrl: 'https://github.com/EvergreenTree97',
  linkedinUrl: 'https://kr.linkedin.com/in/%EC%83%81%EB%A1%9D-%EC%B5%9C-070254267',
  // TODO: 개인정보를 제거한 이력서 PDF가 준비되면 별도 resumeUrl을 추가하세요.
  careerUrl: '#experience',
} as const

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const tastes = [
  { icon: 'game', label: 'Game', value: 'RPG / Strategy / Indie' },
  { icon: 'music', label: 'Music', value: 'Keyboard / Band / Rock' },
  { icon: 'fitness', label: 'Fitness', value: 'Strength Training / Consistency' },
] as const
