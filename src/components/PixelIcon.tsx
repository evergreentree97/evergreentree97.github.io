import type { SVGProps } from 'react'

export type PixelIconName =
  | 'device'
  | 'github'
  | 'menu'
  | 'close'
  | 'game'
  | 'music'
  | 'fitness'
  | 'android'
  | 'code'
  | 'mail'
  | 'linkedin'
  | 'resume'
  | 'arrow'
  | 'external'
  | 'save'
  | 'flag'
  | 'avatar'

type PixelIconProps = SVGProps<SVGSVGElement> & {
  name: PixelIconName
  title?: string
}

const iconPaths: Record<PixelIconName, React.ReactNode> = {
  device: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <rect x="7" y="5" width="10" height="7" className="screen" />
      <path d="M7 17h6M10 14v6" />
      <rect x="16" y="16" width="2" height="2" className="fill" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.82a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" className="fill" />
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  game: (
    <>
      <path d="M7 8h10l4 5v5h-4l-2-3H9l-2 3H3v-5l4-5Z" />
      <path d="M7 12h4M9 10v4" />
      <rect x="15" y="11" width="2" height="2" className="fill" />
      <rect x="18" y="13" width="2" height="2" className="fill" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V6l10-2v12" />
      <rect x="5" y="16" width="4" height="4" rx="1" />
      <rect x="15" y="14" width="4" height="4" rx="1" />
    </>
  ),
  fitness: (
    <>
      <path d="M3 10v4M6 7v10M18 7v10M21 10v4M6 12h12" />
      <rect x="1" y="9" width="2" height="6" className="fill" />
      <rect x="21" y="9" width="2" height="6" className="fill" />
    </>
  ),
  android: (
    <>
      <path d="M7 9h10v9H7V9Zm2-3 1.5 2m4.5-2-1.5 2M5 10v6m14-6v6M9 18v3m6-3v3" />
      <rect x="9" y="11" width="2" height="2" className="fill" />
      <rect x="13" y="11" width="2" height="2" className="fill" />
    </>
  ),
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M7 10v7m0-10v.1m4 9.9v-7m0 3c1-4 6-4 6 1v3" />
    </>
  ),
  resume: (
    <>
      <path d="M6 2h9l4 4v16H6V2Z" />
      <path d="M15 2v5h4M9 12h7M9 16h7" />
    </>
  ),
  arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
  external: <path d="M13 4h7v7m0-7-9 9M18 14v6H4V6h6" />,
  save: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <rect x="7" y="3" width="9" height="6" />
      <rect x="7" y="14" width="10" height="7" />
    </>
  ),
  flag: (
    <>
      <path d="M6 22V3" />
      <path d="M7 4h11l-3 4 3 4H7V4Z" className="fill" />
    </>
  ),
  avatar: (
    <>
      <rect x="8" y="3" width="8" height="3" className="fill" />
      <rect x="6" y="6" width="12" height="3" className="fill" />
      <rect x="7" y="9" width="10" height="7" />
      <rect x="9" y="11" width="2" height="2" className="fill" />
      <rect x="14" y="11" width="2" height="2" className="fill" />
      <rect x="5" y="16" width="14" height="6" className="fill" />
    </>
  ),
}

export function PixelIcon({ name, title, ...props }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
      strokeLinejoin="miter"
      shapeRendering="crispEdges"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {iconPaths[name]}
    </svg>
  )
}
