import { useEffect, useState } from 'react'
import { navigation } from '../data/profile'

export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const targets = navigation.flatMap((item) => {
      const element = document.querySelector(item.href)
      return element ? [{ href: item.href, element }] : []
    })
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActive(navigation[navigation.length - 1].href)
        return
      }
      const readingPosition = window.innerHeight * 0.35
      let current = ''
      for (const target of targets) {
        if (target.element.getBoundingClientRect().top <= readingPosition) current = target.href
      }
      setActive(current)
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }
    const layoutObserver = 'ResizeObserver' in window ? new ResizeObserver(scheduleUpdate) : null
    const main = document.querySelector('main')
    if (main) layoutObserver?.observe(main)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    updateActiveSection()
    return () => {
      layoutObserver?.disconnect()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  return active
}
