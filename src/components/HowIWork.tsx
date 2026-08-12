import { PixelIcon, type PixelIconName } from './PixelIcon'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

type WorkPipeline = {
  label: string
  title: string
  description: string
  skills: string[]
  context: string
  steps: string[]
  verification: string
  icon: PixelIconName
}

const workPipelines: WorkPipeline[] = [
  {
    label: 'API INTEGRATION',
    title: '서버 API를 Android 코드로 연결',
    description: '서버의 Controller와 DTO를 읽고 기존 Android 모델과 비교한 뒤 필요한 코드만 추가합니다.',
    skills: ['bff-to-aos'],
    context: 'BFF Controller와 DTO, Android에 이미 있는 API와 모델',
    steps: ['API 계약 비교', 'API와 모델 구현'],
    verification: '모듈 빌드 후 API 계약과 오류 처리 방식을 직접 검토합니다.',
    icon: 'code',
  },
  {
    label: 'STATE REVIEW',
    title: '화면 상태 구조를 정리',
    description: 'ViewModel과 Compose 화면의 상태, 이벤트, 생명주기를 함께 살펴보고 구조 변경이 필요한지 먼저 판단합니다.',
    skills: ['android-state-mapper-review'],
    context: 'ViewModel과 Compose 화면, 이벤트 모델, 테스트와 기존 구현 사례',
    steps: ['상태와 이벤트 분류', 'Mapper 구조 검토'],
    verification: '테스트와 Compose 빌드 후 기존 화면 동작이 유지되는지 확인합니다.',
    icon: 'android',
  },
  {
    label: 'QA DELIVERY',
    title: 'QA 티켓을 수정하고 기기에서 비교',
    description: '티켓의 재현 경로부터 수정, 테스트 빌드 설치와 상태 갱신까지 한 순서로 관리합니다.',
    skills: ['qa-ticket', 'test-build'],
    context: 'QA 티켓의 재현 경로와 기대 동작, 첨부 기록과 현재 구현',
    steps: ['격리된 작업 공간에서 수정', '테스트 빌드 설치'],
    verification: '기존 앱과 테스트 앱을 같은 기기에서 실행해 변경 전후를 비교합니다.',
    icon: 'device',
  },
]

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionTitle id="how-i-work-title" eyebrow="PROCESS" title="AI 활용과 검증" />
      <p className={styles.intro}>
        AI에는 문제의 맥락과 기존 구현, 바꾸면 안 되는 동작까지 함께 제공합니다.
        결과는 그대로 받아들이지 않고 코드 리뷰와 테스트를 거친 뒤 필요하면 실기기에서 다시 검증합니다.
      </p>

      <div className={styles.pipelineBoard}>
        <header className={styles.boardHeader}>
          <span>SKILL PIPELINES</span>
          <small>{String(workPipelines.length).padStart(2, '0')} RUNBOOKS</small>
        </header>

        <div className={styles.pipelineList}>
          {workPipelines.map((pipeline, pipelineIndex) => (
            <article className={styles.pipeline} key={pipeline.label}>
              <div className={styles.pipelineIntro}>
                <div className={styles.pipelineLabel}>
                  <PixelIcon name={pipeline.icon} />
                  <span>{pipeline.label}</span>
                </div>
                <h3>{pipeline.title}</h3>
                <p>{pipeline.description}</p>
                <ul className={styles.skillList} aria-label={`${pipeline.title}에 사용하는 skill`}>
                  {pipeline.skills.map((skill) => (
                    <li key={skill}><code>/{skill}</code></li>
                  ))}
                </ul>
              </div>

              <div className={styles.pipelineRun}>
                <div className={styles.pipelineStage}>
                  <span>CONTEXT</span>
                  <p>{pipeline.context}</p>
                </div>
                <div className={`${styles.pipelineStage} ${styles.skillRun}`}>
                  <span>SKILL RUN</span>
                  <ol aria-label={`${pipeline.title} Skill 실행`}>
                    {pipeline.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div className={`${styles.pipelineStage} ${styles.verification}`}>
                  <span>VERIFY</span>
                  <p>{pipeline.verification}</p>
                </div>
              </div>

              <span className={styles.pipelineNumber} aria-hidden="true">
                {String(pipelineIndex + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
