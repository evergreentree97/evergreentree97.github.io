// Demo copy lives in a module rather than TSX: the stages render it in the
// system font stack, so it is outside the Noto Sans KR subset by design.

export const vuddyCopy = {
  name: '루나',
  original: '이번 굿즈 오픈 언제예요?',
  reply: '다음 주 금요일 저녁 8시에 열려요!',
  replyTo: '루나에게 답장',
  neighborName: '하늘',
  neighbor: '저도 궁금했어요!',
  latestName: '별빛',
  latest: '공지 확인했어요',
  placeholder: '텍스트를 입력해주세요.',
  older: '이전 페이지',
  newer: '다음 페이지',
  originalMark: '답장한 메시지',
  latestMark: '최신 메시지',
  title: '답장한 메시지 기준 양방향 페이징',
  time: '12:30 PM',
}

export const aiCopy = {
  mine: '오늘은 별이 하나도 안 보이네.',
  reply: '도시 불빛이 너무 밝아서 그래. 그래도 오늘은 내가 옆에 있잖아.',
  placeholder: '메시지 입력',
  title: 'vLLM — SSE',
  command: 'POST /v1/chat/completions',
  done: 'data: [DONE]',
  past: ['벤치에서', '기다릴게.'],
}

export const momenticaCopy = {
  memory: 'Bitmap 메모리',
  released: '화면을 닫으면 해제돼요',
  back: 'MOMENTICA',
}

// Accessible names for each stage: what the reconstructed demo shows
export const demoLabels = {
  vuddy: '답장 위에 인용된 메시지를 누르면 그 메시지로 이동하고, 그 메시지를 기준으로 양방향 페이징하는 Vuddy 채팅 재구성 화면',
  'model-evaluation': '메시지를 보내면 캐릭터 답변이 한 단어씩 나타나고, 옆 터미널에 vLLM 서버가 보낸 SSE 이벤트가 같은 순서로 찍히는 재구성 화면',
  momentica: '포토카드를 길게 눌러 3D로 돌려 보고, 화면을 닫으면 Bitmap 메모리가 처음만큼 줄어드는 Momentica 재구성 화면',
} as const
