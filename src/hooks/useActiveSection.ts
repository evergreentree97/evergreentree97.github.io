import { useEffect, useState } from 'react'
import { navigation } from '../data/profile'

// 화면 중앙 밴드에 걸린 내비게이션 섹션의 href를 돌려준다. 첫 화면에서는 빈 문자열이다.
export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const hero = document.querySelector('main > section:first-of-type')
    const targets = navigation
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setActive(entry.target === hero ? '' : `#${entry.target.id}`)
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    if (hero) observer.observe(hero)
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return active
}
