const msgs = [
  '666666',
  '我要上电视！！',
  '老板晚上好',
  '前方高能预警',
  '主播迟到了~~~',
  '干的漂亮',
  '早',
  '广东人民发来贺电',
  '不爱看的走开，别说话wen我'
]

const color = ['red', 'rgb(0, 255, 0)', '#0000FF', '#fff']

const getRandom = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min)

const mockData = (data) => {
  
  for (let i = 0; i <data.length; i++) {
    const msg = data[i].greeting

    data.push({
      content: msg,
      color: '#000000'
    })
  }
  return data
}

module.exports = {
  mockData
}
