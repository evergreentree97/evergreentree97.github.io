import { PixelIcon, type PixelIconName } from './PixelIcon'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

type WorkPipeline = {
  label: string
  title: string
  description: string
  skills: string[]
  steps: string[]
  check: string
  icon: PixelIconName
}

const workPipelines: WorkPipeline[] = [
  {
    label: 'API INTEGRATION',
    title: '서버 API를 Android 코드로 연결',
    description: '서버의 Controller와 DTO를 읽고 기존 Android 모델과 비교한 뒤 필요한 코드만 추가합니다.',
    skills: ['bff-to-aos'],
    steps: ['Controller와 DTO 확인', '기존 모델과 비교', 'API와 모델 구현', '모듈 빌드'],
    check: 'API 계약과 오류 처리 방식은 직접 검토합니다.',
    icon: 'code',
  },
  {
    label: 'STATE REVIEW',
    title: '화면 상태 구조를 정리',
    description: 'ViewModel과 Compose 화면의 상태, 이벤트, 생명주기를 함께 살펴보고 구조 변경이 필요한지 먼저 판단합니다.',
    skills: ['android-state-mapper-review'],
    steps: ['상태와 이벤트 분류', 'Mapper 구조 검토', '테스트 보강', 'Compose 빌드'],
    check: '상태 통합이 화면의 실제 동작과 맞는지 직접 판단합니다.',
    icon: 'android',
  },
  {
    label: 'QA DELIVERY',
    title: 'QA 티켓을 수정하고 기기에서 비교',
    description: '티켓의 재현 경로부터 수정, 테스트 빌드 설치와 상태 갱신까지 한 순서로 관리합니다.',
    skills: ['qa-ticket', 'test-build'],
    steps: ['티켓과 재현 경로 확인', '격리된 작업 공간에서 수정', '테스트 빌드 설치', '변경 전후 비교'],
    check: '기존 앱과 테스트 앱을 같은 기기에서 실행해 최종 확인합니다.',
    icon: 'device',
  },
]

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionTitle id="how-i-work-title" eyebrow="PROCESS" title="AI 활용과 검증" />
      <p className={styles.intro}>
        반복되는 Android 작업은 저장소 규칙과 확인 순서를 skill로 묶어 실행합니다.
        구현 과정은 자동화하되 설계 판단과 최종 동작 확인은 직접 맡습니다.
      </p>

      <div className={styles.pipelineBoard}>
        <header className={styles.boardHeader}>
          <div>
            <span>SKILL PIPELINES</span>
            <strong>자주 쓰는 작업 순서</strong>
          </div>
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
                <ol aria-label={`${pipeline.title} 작업 순서`}>
                  {pipeline.steps.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{String(stepIndex + 1).padStart(2, '0')}</span>
                      <strong>{step}</strong>
                    </li>
                  ))}
                </ol>
                <div className={styles.humanCheck}>
                  <span>HUMAN CHECK</span>
                  <p>{pipeline.check}</p>
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
