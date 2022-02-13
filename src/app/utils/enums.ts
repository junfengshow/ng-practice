export const animationTypeArray = [
  { key: 1, value: '普通礼物' },
  { key: 2, value: '幸运礼物' },
  { key: 3, value: '红包礼物' },
  { key: 4, value: '抽奖礼物' },
]
export const getAnimationTypeStr = (key: number) => {
  const obj = animationTypeArray.find(item => item.key === key)
  return obj ? obj.value : '-'
} 
