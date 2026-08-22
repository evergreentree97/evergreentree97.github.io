import styles from './ProjectDiagrams.module.css'

function FlowArrow() {
  return <span className={styles.flowArrow} aria-hidden="true" />
}

export function VuddyDiagram() {
  return (
    <div className={styles.figure} aria-label="Vuddy 기술 선택과 책임 경계">
      <p className={styles.lead}>실시간 메시지는 Sendbird에, 제품 규칙과 운영은 Backend에 두었습니다.</p>

      <div className={styles.compareRow}>
        <div className={styles.optionCard}>
          <span className={styles.optionTag}>보류</span>
          <strong>자체 소켓 서버</strong>
          <p>출시 일정 안에 서버까지 직접 구현해야 합니다.</p>
        </div>
        <div className={`${styles.optionCard} ${styles.optionSelected}`}>
          <span className={styles.optionTag}>선택</span>
          <strong>Sendbird</strong>
          <p>출시 일정 안에서 안정적으로 구현할 수 있습니다.</p>
        </div>
      </div>

      <FlowArrow />

      <div className={styles.boundaryRow}>
        <div className={styles.boundaryCard}>
          <span className={styles.boundaryName}>Sendbird 담당</span>
          <ul>
            <li>실시간 메시지 송수신</li>
          </ul>
        </div>
        <div className={styles.boundaryCard}>
          <span className={styles.boundaryName}>Backend 담당</span>
          <ul>
            <li>채팅방 생성과 검색</li>
            <li>비즈니스 규칙</li>
            <li>자체 푸시와 운영</li>
          </ul>
        </div>
      </div>

      <p className={styles.constraintNote}>
        출시 전에 확인한 제약: 대규모 그룹 푸시와 채널별 금칙어는 Sendbird로 충족되지 않아, 바꿔야 하는 운영 규칙을 Backend 경계에 두었습니다.
      </p>
    </div>
  )
}

export function ModelEvaluationDiagram() {
  return (
    <div className={styles.figure} aria-label="캐릭터 대화 모델 평가 과정">
      <p className={styles.lead}>데이터 결함을 먼저 걷어내고, 같은 조건을 만든 뒤, 자동 평가를 실제 대화와 대조했습니다.</p>

      <ol className={styles.evalFlow}>
        <li className={styles.evalStage}>
          <span className={styles.stageName}>1. 문제</span>
          <ul>
            <li>여러 부분으로 저장된 답변에서 앞부분만 남고 나머지 누락</li>
            <li>평가용 대화가 학습 데이터와 중복</li>
          </ul>
          <p>결함이 섞인 이전 결과는 비교 기준에서 제외했습니다.</p>
        </li>
        <li className={styles.evalStage}>
          <span className={styles.stageName}>2. 평가 조건</span>
          <ul className={styles.axisList} aria-label="분리한 평가 축">
            <li>응답 형식</li>
            <li>캐릭터 일관성</li>
            <li>재미</li>
            <li>상태 유지</li>
          </ul>
          <p>질문과 서빙 조건을 고정하고, 모델 이름을 가린 채 답변 순서를 바꿔 비교했습니다.</p>
        </li>
        <li className={styles.evalStage}>
          <span className={styles.stageName}>3. 검증</span>
          <div className={styles.comparePair}>
            <div>
              <strong>자동 평가</strong>
              <p>내부 평가 85/100</p>
            </div>
            <div>
              <strong>실제 대화</strong>
              <p>팀의 대화 심사</p>
            </div>
          </div>
          <p>두 결과를 대조해 프로덕션 적용 가능한 모델을 선정했습니다.</p>
        </li>
      </ol>
    </div>
  )
}

export function MomenticaDiagram() {
  return (
    <div className={styles.figure} aria-label="Momentica 영상 알람 실행 흐름">
      <p className={styles.lead}>저장과 예약을 나눠 두어, 앱이 종료돼도 알람이 실행됩니다.</p>

      <div className={styles.alarmFlow}>
        <div className={styles.alarmNode}>사용자가 영상 알람을 설정합니다</div>

        <FlowArrow />

        <div className={styles.alarmSplit}>
          <div className={styles.alarmNode}>
            <strong>Room</strong>
            <p>알람 데이터 저장</p>
          </div>
          <div className={styles.alarmNode}>
            <strong>AlarmManager</strong>
            <p>실행 예약</p>
          </div>
        </div>

        <FlowArrow />

        <div className={styles.alarmConditions}>
          <span>앱 프로세스 종료</span>
          <span>화면 꺼짐과 잠금</span>
          <span>기기 재부팅</span>
        </div>

        <FlowArrow />

        <div className={styles.alarmNode}>
          재부팅으로 예약이 사라지면 Room에 남은 설정으로 다시 예약합니다
        </div>

        <FlowArrow />

        <div className={`${styles.alarmNode} ${styles.alarmResult}`}>세 조건 모두에서 영상 알람 실행 확인</div>
      </div>
    </div>
  )
}
