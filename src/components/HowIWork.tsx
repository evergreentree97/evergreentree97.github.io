import { PixelIcon, type PixelIconName } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

type QaStep = {
  key: string
  title: string
  description: string
}

type RelatedSkill = {
  name: string
  title: string
  description: string
  icon: PixelIconName
}

const qaSteps: QaStep[] = [
  {
    key: 'Review',
    title: '티켓 분석',
    description: '재현 경로, 기대 동작, 작업 범위 확인',
  },
  {
    key: 'Isolate',
    title: '작업 분리',
    description: '독립 워크트리와 브랜치 생성',
  },
  {
    key: 'Diagnose',
    title: '원인 진단',
    description: '관련 코드와 영향 범위 분석, 협업 필요 여부 판단',
  },
  {
    key: 'Fix',
    title: '최소 수정',
    description: '원인이 확인된 코드만 최소 수정',
  },
  {
    key: 'Verify',
    title: '동작 검증',
    description: '컴파일, 코드 규칙, 기대 동작, 기존 기능 검증',
  },
]

const relatedSkills: RelatedSkill[] = [
  {
    name: 'bff-to-aos',
    title: '서버 API → Android 코드',
    description: 'API 경로, 모델 재사용, null 허용 여부를 서버 코드와 대조',
    icon: 'code',
  },
  {
    name: 'test-build',
    title: '수정 전후 앱 비교',
    description: '별도 이름의 테스트 APK로 수정 전후 동작을 한 기기에서 비교',
    icon: 'device',
  },
]

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" index="04" eyebrow="PROCESS" title="AI Native Example" />
        <p className={styles.intro}>
          <code>qa-ticket</code>은 QA 티켓 분석, 코드 수정, 검증, PR 생성을 자동화한 Repository Skill입니다.
          반복 절차는 스킬이 수행하고, 원인과 영향 범위, 최종 변경은 제가 판단합니다.
        </p>

        <article className={styles.quest} aria-labelledby="qa-quest-title">
          <header className={styles.questHeader}>
            <div className={styles.questIdentity}>
              <PixelIcon name="flag" />
              <div>
                <small>REPOSITORY SKILL</small>
                <h3 id="qa-quest-title">qa-ticket</h3>
              </div>
            </div>
            <div className={styles.questInput}>
              <span>INPUT</span>
              <strong>Notion QA 티켓 URL</strong>
            </div>
          </header>

          <ol className={styles.flow} aria-label="QA 티켓 처리 순서">
            {qaSteps.map((step) => (
              <li key={step.key}>
                <small>{step.key}</small>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <div className={styles.questOutput}>
            <span>OUTPUT</span>
            <strong>원인, 수정 범위, 검증 결과를 담은 PR</strong>
          </div>
        </article>

        <div className={styles.related}>
          <h3>같은 방식의 Repository Skill</h3>
          <div className={styles.relatedList}>
            {relatedSkills.map((skill) => (
              <article key={skill.name}>
                <div className={styles.relatedIdentity}>
                  <PixelIcon name={skill.icon} />
                  <code>{skill.name}</code>
                </div>
                <div>
                  <strong>{skill.title}</strong>
                  <p>{skill.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
