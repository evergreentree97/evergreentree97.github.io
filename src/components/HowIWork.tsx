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
    title: '티켓을 읽습니다',
    description: '재현 경로와 기대 동작을 확인하고 작업 범위를 정합니다.',
  },
  {
    key: 'Isolate',
    title: '작업을 분리합니다',
    description: '별도 워크트리와 브랜치를 만들어 진행 중인 코드와 섞이지 않게 합니다.',
  },
  {
    key: 'Diagnose',
    title: '원인을 먼저 찾습니다',
    description: '관련 코드를 읽고 원인과 영향 범위를 정리합니다. 다른 직군의 확인이 필요한지도 판단합니다.',
  },
  {
    key: 'Fix',
    title: '필요한 범위만 고칩니다',
    description: '클라이언트에서 해결할 수 있으면 원인이 확인된 코드만 수정합니다.',
  },
  {
    key: 'Verify',
    title: '기존 기능까지 확인합니다',
    description: '컴파일과 코드 규칙, 기대 동작과 영향 범위를 확인하고 결과를 PR에 남깁니다.',
  },
]

const relatedSkills: RelatedSkill[] = [
  {
    name: 'bff-to-aos',
    title: '서버 API를 Android 코드로 변환',
    description: 'API 경로, 기존 모델 재사용과 null 허용 여부를 서버 코드와 맞춥니다.',
    icon: 'code',
  },
  {
    name: 'test-build',
    title: '기존 앱과 수정본을 나란히 테스트',
    description: '별도 이름의 테스트 APK를 설치해 수정 전후 동작을 같은 기기에서 비교합니다.',
    icon: 'device',
  },
]

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" index="04" eyebrow="PROCESS" title="QA 티켓으로 보는 작업 방식" />
        <p className={styles.intro}>
          <code>qa-ticket</code> Repository Skill은 QA 티켓 하나를 입력하면 Review부터 Verify까지
          같은 순서로 처리합니다. 반복 가능한 절차는 스킬에 맡기고, 원인과 영향 범위, 최종 변경은
          제가 판단합니다.
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
            <strong>원인, 수정 범위와 검증 결과가 담긴 PR</strong>
          </div>
        </article>

        <div className={styles.related}>
          <h3>같은 원칙으로 만든 스킬</h3>
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
