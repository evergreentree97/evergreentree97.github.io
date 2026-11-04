import { Stage } from '../../stageshow/kit/stage'
import { Phone } from '../../stageshow/kit/phone'
import { Chart } from '../../stageshow/kit/chart'
import type { Act } from '../../stageshow/kit/act'
import { momenticaCopy as COPY } from './copy'
import './MomenticaDemo.css'



const CARD = { w: 120, h: 185 }
const COLS = [16, 146, 276]
const ROWS = [272, 467, 662]
const PICK = { col: 1, row: 1 }
const VIEW = { x: 88, y: 404, w: 236, h: 364 }
const ART = ['pm-a', 'pm-b', 'pm-c', 'pm-d', 'pm-e', 'pm-f', 'pm-g', 'pm-h', 'pm-i']

const IDLE = [36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 37]
const OPEN = [36, 36, 37, 36, 36, 48, 74, 84, 86, 86, 85, 86, 86, 85, 86, 86, 85, 86]
const CLOSED = [36, 36, 37, 36, 36, 48, 74, 84, 86, 86, 85, 86, 72, 46, 37, 36, 36, 37]

type S = { pressed: boolean; open: boolean; rot: number; spin: boolean; closed: boolean }
const initial: S = { pressed: false, open: false, rot: 0, spin: false, closed: false }
const poster: S = { pressed: false, open: false, rot: 0, spin: false, closed: true }

async function script(a: Act<S>) {
  await a.wait(900)
  a.mark('hold')
  const pick = a.rect('pick')
  const at = { x: pick.x + pick.width * 0.5, y: pick.y + pick.height * 0.55 }
  await a.move(at)
  a.put({ pressed: true })
  await a.drag(at, undefined, { duration: 520 })
  a.put({ pressed: false, open: true })
  await a.wait(900)

  a.mark('turn')
  const view = a.rect('view')
  const y = view.y + view.height * 0.5
  const x0 = view.x + view.width * 0.2
  const x1 = view.x + view.width * 0.85
  await a.move({ x: x0, y })
  await a.wait(150)
  await a.drag(
    { x: x1, y },
    (p) => a.put({ rot: Math.max(0, ((p.x - x0) / (x1 - x0)) * 300) }),
    { duration: 1100, path: (t, f, to) => ({ x: f.x + (to.x - f.x) * t, y: f.y }) },
  )
  // Let go: the card carries on round to its front
  a.put({ spin: true, rot: 360 })
  await a.wait(1100)
  await a.snap({ spin: false, rot: 0 })
  await a.wait(500)

  a.mark('close')
  await a.click({ x: view.x + view.width * 0.5, y: view.y - 24 })
  a.put({ open: false, closed: true })
  await a.wait(2800)
}

export default function MomenticaDemo() {
  return (
    <Stage<S>
      width={760}
      height={460}
      compact={{ below: 600, width: 342, height: 311 }}
      initial={initial}
      poster={poster}
      script={script}
      play="once"
      cursor={{ at: { x: 560, y: 120 }, style: 'touch' }}
      className="pm"
    >
      {(s, _rect, layout) => {
        const dx = COLS[PICK.col]! - VIEW.x
        const dy = ROWS[PICK.row]! - VIEW.y
        const k = CARD.w / VIEW.w
        return (
          <>
            <Phone width={layout === 'compact' ? 318 : 340} frame="android" dark className="pm-phone">
              <div className="pm-screen">
                {ROWS.map((y, r) =>
                  COLS.map((x, c) =>
                    r === PICK.row && c === PICK.col ? (
                      <span key={`${r}${c}`} className="pm-slot" data-target="pick" style={{ left: x, top: y, width: CARD.w, height: CARD.h }} />
                    ) : (
                      <span key={`${r}${c}`} className={`pm-card ${ART[r * 3 + c]}`} style={{ left: x, top: y, width: CARD.w, height: CARD.h }} />
                    ),
                  ),
                )}
                <span className="pm-dim" data-on={s.open || undefined} />
                {/* The picked card and its quick view are one element */}
                <span
                  className="pm-view"
                  data-target="view"
                  data-open={s.open || undefined}
                  data-pressed={s.pressed || undefined}
                  style={{ left: VIEW.x, top: VIEW.y, width: VIEW.w, height: VIEW.h, transform: s.open ? 'none' : `translate(${dx}px, ${dy}px) scale(${k})` }}
                >
                  <span className="pm-spin" data-spin={s.spin || undefined} style={{ transform: `rotateY(${s.rot}deg)` }}>
                    <span className="pm-face pm-face--front pm-e" />
                    <span className="pm-face pm-face--back"><span className="pm-mark">{COPY.back}</span></span>
                  </span>
                </span>
              </div>
            </Phone>

            {layout === 'wide' && (
              <div className="pm-mem">
                <div className="pm-mem__head">
                  <span className="pm-mem__title">{COPY.memory}</span>
                  <span className="pm-mem__status" data-on={(s.closed && !s.open) || undefined}>
                    <svg viewBox="0 -960 960 960" width="16" height="16" aria-hidden><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" fill="currentColor" /></svg>
                    {COPY.released}
                  </span>
                </div>
                <Chart className="pm-chart" data={s.closed ? CLOSED : s.open ? OPEN : IDLE} width={270} height={300} max={100} dot={false} />
              </div>
            )}
          </>
        )
      }}
    </Stage>
  )
}

