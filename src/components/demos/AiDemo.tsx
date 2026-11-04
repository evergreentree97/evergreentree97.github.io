import { Stage } from '../../stageshow/kit/stage'
import { Phone } from '../../stageshow/kit/phone'
import { Avatar } from '../../stageshow/kit/parts/Avatar'
import { Bar, Window, Prompt, Caret } from '../../stageshow/kit/window'
import { Stream } from '../../stageshow/kit/motion/Stream'
import { Collapse } from '../../stageshow/kit/motion/Collapse'
import type { Act } from '../../stageshow/kit/act'
import { aiCopy as COPY } from './copy'
import './AiDemo.css'



const WORDS = COPY.reply.split(' ')
// vLLM's OpenAI-compatible stream puts each token at choices[0].delta.content
const chunk = (w: string) => `{\u2026"delta":{"content":"${w} "}}]}`

type S = { draft: string; sent: boolean; typing: boolean; words: number; done: boolean }
const initial: S = { draft: '', sent: false, typing: false, words: 0, done: false }
const poster: S = { draft: '', sent: true, typing: false, words: WORDS.length, done: true }

async function script(a: Act<S>) {
  await a.wait(800)
  a.mark('type')
  await a.type('draft', COPY.mine, { interval: 70 })
  await a.wait(300)
  await a.click('send')
  a.put({ sent: true, draft: '' })
  await a.wait(500)
  a.put({ typing: true })
  await a.wait(900)
  a.mark('stream')
  a.put({ typing: false })
  for (let i = 1; i <= WORDS.length; i++) {
    a.put({ words: i })
    await a.wait(170)
  }
  await a.wait(250)
  a.put({ done: true })
  await a.wait(2600)
}

function Svg({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg viewBox="0 -960 960 960" width={size} height={size} aria-hidden>
      <path d={d} fill="currentColor" />
    </svg>
  )
}
const PLAY = 'M320-200v-560l440 280-440 280Z'
const NARRATE = 'M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'

export default function AiDemo() {
  return (
    <Stage<S>
      width={760}
      height={460}
      compact={{ below: 600, width: 342, height: 311 }}
      initial={initial}
      poster={poster}
      script={script}
      play="once"
      cursor={{ at: { x: 560, y: 300 }, style: 'touch' }}
      className="ai"
    >
      {(s, _rect, layout) => (
        <>
          <Phone width={layout === 'compact' ? 318 : 340} frame="android" dark className="ai-phone">
            <div className="ai-screen">
              <div className="ai-thread">
                <div className="ai-char">
                  <Avatar size={36} plain className="ai-avatar" />
                  <div className="ai-char__body">
                    <Bar w={58} h={9} r={4} tone={3} className="ai-name" />
                    <div className="ai-bubble">
                      <Bar w="88%" h={9} r={4} tone={2} />
                      <Bar w="60%" h={9} r={4} tone={2} />
                    </div>
                  </div>
                </div>
                <div className="ai-turn">
                  <span className="ai-narrate"><Svg d={NARRATE} size={18} /></span>
                  <div className="ai-lines">
                    <Bar w="92%" h={9} r={4} tone={2} />
                    <Bar w="64%" h={9} r={4} tone={2} />
                  </div>
                </div>
                <div className="ai-char">
                  <Avatar size={36} plain className="ai-avatar" />
                  <div className="ai-char__body">
                    <Bar w={58} h={9} r={4} tone={3} className="ai-name" />
                    <div className="ai-bubble">
                      <Bar w="94%" h={9} r={4} tone={2} />
                      <Bar w="80%" h={9} r={4} tone={2} />
                      <Bar w="52%" h={9} r={4} tone={2} />
                    </div>
                  </div>
                </div>
                <Collapse open={s.sent} reveal="drop" from="below">
                  <div className="ai-turn ai-turn--mine">
                    <span className="ai-narrate"><Svg d={NARRATE} size={18} /></span>
                    <span className="ai-mine">{COPY.mine}</span>
                  </div>
                </Collapse>
                <Collapse open={s.sent && (s.typing || s.words > 0)} reveal="drop" from="below">
                  <div className="ai-char">
                    <Avatar size={36} plain className="ai-avatar" />
                    <div className="ai-char__body">
                      <Bar w={58} h={9} r={4} tone={3} className="ai-name" />
                      <div className="ai-bubble ai-bubble--live">
                        <span className={`ai-dots${s.typing ? ' is-on' : ''}`} aria-hidden><i /><i /><i /></span>
                        <Stream className="ai-stream" text={COPY.reply} count={s.words} />
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="ai-compose">
                <span className="ai-field" data-target="draft">
                  {s.draft ? <span className="ai-draft">{s.draft}<i className="ai-caret" data-snap /></span> : <span className="ai-ph">{COPY.placeholder}</span>}
                </span>
                <span className="ai-send" data-target="send"><Svg d={PLAY} size={22} /></span>
              </div>
            </div>
          </Phone>

          {layout === 'wide' && (
            <Window chrome="terminal" title={COPY.title} className="ai-term">
              <div className="ai-term__past">
                <Prompt path="app">{COPY.command}</Prompt>
                {COPY.past.map((w) => <div key={w} className="ai-term__line" data-on><span className="dim">data:</span> {chunk(w)}</div>)}
                <div className="ai-term__line ok" data-on>{COPY.done}</div>
              </div>
              <Prompt path="app">{COPY.command}</Prompt>
              <div className="ai-term__lines">
                {WORDS.map((w, i) => (
                  <div key={i} className="ai-term__line" data-on={i < s.words || undefined}>
                    <span className="dim">data:</span> {chunk(w)}
                  </div>
                ))}
                <div className="ai-term__line ok" data-on={s.done || undefined}>{COPY.done}</div>
                <div className="ai-term__line" data-on={s.done || undefined}><Caret /></div>
              </div>
            </Window>
          )}
        </>
      )}
    </Stage>
  )
}

