import { Stage } from '../../stageshow/kit/stage'
import { Phone } from '../../stageshow/kit/phone'
import { Avatar } from '../../stageshow/kit/parts/Avatar'
import { Bar } from '../../stageshow/kit/window'
import type { Act } from '../../stageshow/kit/act'
import { vuddyCopy as COPY } from './copy'
import './VuddyDemo.css'



type S = { at: 'latest' | 'original'; flash: boolean; fab: boolean; loaded: boolean }
const initial: S = { at: 'latest', flash: false, fab: false, loaded: false }
const poster: S = { at: 'original', flash: true, fab: true, loaded: true }

async function script(a: Act<S>) {
  await a.wait(150)
  a.mark('tap')
  await a.click('quote')
  a.put({ at: 'original', loaded: true })
  await a.wait(700)
  a.put({ flash: true, fab: true })
  await a.wait(2600)
  a.put({ flash: false })
  await a.wait(500)
  a.mark('back')
  await a.click('fab')
  a.put({ at: 'latest', fab: false })
  await a.wait(900)
  a.put({ loaded: false })
  await a.move('quote')
  await a.wait(600)
}

function Svg({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg viewBox="0 -960 960 960" width={size} height={size} aria-hidden>
      <path d={d} fill="currentColor" />
    </svg>
  )
}
const ADD = 'M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z'
const UP = 'M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z'
const DOWN = 'M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z'

function Them({ name, tone, children, time }: { name?: string; tone?: number; children: React.ReactNode; time?: string }) {
  return (
    <div className="vd-them">
      <Avatar name={name ?? ''} size={36} plain={!name} className="vd-avatar" />
      <div className="vd-them__body">
        {name ? <span className="vd-name">{name}</span> : <Bar w={52 + (tone ?? 0) * 6} h={8} r={4} tone={3} className="vd-name-bar" />}
        <div className="vd-row">
          <div className="vd-bubble">{children}</div>
          {time && <span className="vd-time">{time}</span>}
        </div>
      </div>
    </div>
  )
}

export default function VuddyDemo() {
  return (
    <Stage<S>
      width={760}
      height={460}
      compact={{ below: 600, width: 342, height: 311 }}
      initial={initial}
      poster={poster}
      script={script}
      cursor={{ at: 'quote', style: 'touch' }}
      className="vd"
    >
      {(s, rect, layout) => (
        <>
          <Phone width={layout === 'compact' ? 318 : 340} frame="android" className="vd-phone">
            <div className="vd-screen">
              <div className="vd-viewport">
                <div className="vd-track" data-at={s.at} style={{ transform: s.at === 'original' ? `translateY(${rect('latest').height / ((layout === 'compact' ? 318 : 340) / 434)}px)` : undefined }}>
                  {/* The page around the original's timestamp */}
                  <div className="vd-page vd-page--original">
                    <Them tone={5}>
                      <Bar w={140} h={9} r={4} tone={2} />
                    </Them>
                    <Them tone={2}>
                      <Bar w={150} h={9} r={4} tone={2} />
                    </Them>
                    <div className={`vd-hit${s.flash ? ' is-on' : ''}`}>
                      <Them name={COPY.name} time={COPY.time}>
                        {COPY.original}
                      </Them>
                    </div>
                    <Them name={COPY.neighborName} time={COPY.time}>
                      {COPY.neighbor}
                    </Them>
                    <Them tone={1}>
                      <Bar w={168} h={9} r={4} tone={2} />
                    </Them>
                    <Them tone={3}>
                      <Bar w={104} h={9} r={4} tone={2} />
                    </Them>
                  </div>
                  {/* The latest page */}
                  <div className="vd-page vd-page--latest" data-target="latest">
                    <Them tone={2}>
                      <Bar w={128} h={9} r={4} tone={2} />
                    </Them>
                    <Them tone={4}>
                      <Bar w={156} h={9} r={4} tone={2} />
                    </Them>
                    <Them tone={1}>
                      <Bar w={112} h={9} r={4} tone={2} />
                    </Them>
                    <Them tone={3}>
                      <Bar w={132} h={9} r={4} tone={2} />
                    </Them>
                    <Them name={COPY.latestName} time={COPY.time}>
                      {COPY.latest}
                    </Them>
                    <div className="vd-mine">
                      <span className="vd-time">{COPY.time}</span>
                      <div className="vd-bubble vd-bubble--mine">
                        <div className="vd-quote" data-target="quote">
                          <span className="vd-quote__to">{COPY.replyTo}</span>
                          <span className="vd-quote__text">{COPY.original}</span>
                        </div>
                        <div className="vd-reply">{COPY.reply}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`vd-fab${s.fab ? ' is-on' : ''}`} data-target="fab">
                  <Svg d={DOWN} size={22} />
                </span>
              </div>
              <div className="vd-compose">
                <span className="vd-field">
                  <span className="vd-plus"><Svg d={ADD} size={18} /></span>
                  <span className="vd-ph">{COPY.placeholder}</span>
                </span>
                <span className="vd-send"><Svg d={UP} size={22} /></span>
              </div>
            </div>
          </Phone>

          {layout === 'wide' && (
            <div className="vd-map" data-loaded={s.loaded || undefined}>
              <span className="vd-map__title">{COPY.title}</span>
              <div className="vd-map__track">
                <span className="vd-seg vd-seg--old" />
                <span className="vd-seg vd-seg--around">
                  <span className="vd-grow vd-grow--left" />
                  <span className="vd-grow vd-grow--right" />
                </span>
                <span className="vd-seg vd-seg--gap" />
                <span className="vd-seg vd-seg--latest" />
                <span className="vd-pin vd-pin--original" />
                <span className="vd-pin vd-pin--latest" />
                <span className="vd-label vd-label--older">{COPY.older}</span>
                <span className="vd-label vd-label--newer">{COPY.newer}</span>
                <span className="vd-label vd-label--original">{COPY.originalMark}</span>
                <span className="vd-label vd-label--latest">{COPY.latestMark}</span>
              </div>
            </div>
          )}
        </>
      )}
    </Stage>
  )
}

