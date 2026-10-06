import { useEffect, useState } from 'react'
import { navigation } from '../data/profile'

export function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const ids = [...navigation.map(item => item.href.slice(1)), 'vuddy', 'model-evaluation', 'momentica']
    const sections = ids.map(id => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section)).sort((a, b) => a.offsetTop - b.offsetTop)
    let frame = 0
    const update = () => {
      frame = 0
      const current = sections.filter(section => section.getBoundingClientRect().top <= 140).at(-1)
      if (!current) { setActive(''); return }
      setActive(['vuddy', 'model-evaluation', 'momentica'].includes(current.id) ? '#projects' : `#${current.id}`)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    update()
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule) }
  }, [])
  return active
}
