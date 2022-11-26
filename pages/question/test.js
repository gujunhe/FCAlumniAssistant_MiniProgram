
const titles= [{
  title: '福州大学共有几个校区？',
  answer: ['C'],
  options: [{
    code: 'A',
    option: '3'
  },{
    code: 'B',
    option: '4'
  },{
    code: 'C',
    option: '5'
  },{
    code: 'D',
    option: '6'
  }]
},
{
  title: '福州大学三区的食堂叫什么？',
  answer: ['A'],
  options: [{
    code: 'A',
    option: '玫瑰园'
  },{
    code: 'B',
    option: '京园'
  },{
    code: 'C',
    option: '朝阳'
  },{
    code: 'D',
    option: '丁香园'
  }]
}]

Page({
  data: {
    percent: 0, 
    score: 0,//答对得分
    total: 0, 
    userScore:-1,//总分
    isSelect: false,
    current: 1,//从第一道题开始
    subject: null,
    userSelect: ''
  },
  //获取用户选择了哪些选项
  radioChange(e) {
    let select = e.detail.value
    //console.log('用户选择了', select)
    this.setData({
      select: select
    })
    this.setData({
      userSelect: e.detail.value
    })
  },
  //提交并切换
  submit(){
    let userSelect=this.data.userSelect
    let num = this.data.current +  1
    let subject = titles[num - 1]
    let sum =  (this.data.score / titles.length * 10)
    //打分
    if(num>titles.length){
      console.log('用户获得积分', sum),
      this.setData({
        sum:sum
      })
      wx.showToast({
        icon:'none',
        title: '正在生成结果～',
      })
      return
    }
      //获取用户选项并判空
    if(!userSelect){
      wx.showToast({
        icon: 'none',
        title: '请做选择',
      })
      return
    }
    //判断用户是否答对 
    console.log('正确答案是', this.data.subject)
    console.log('用户选择了', this.data.userSelect)
    if(this.data.subject.answer.indexOf(userSelect) > -1){
      this.setData({
        score: this.data.score + 1
      })
    }
    console.log('一共答对了' + this.data.score + "道题")
    console.log('第几题', num)
    console.log('下一题是', num+1)
    this.setData({
      total: titles.length,
      isSelect: false,
      percent: ((num-1)/titles.length)*100,
      subject,
      current:num,
      userScore:''
    })
  },

  // 生命周期函数--监听页面加载
  onLoad() {
    let subject = titles[0]
    console.log('subject',subject)
    this.setData({
      subject: subject
    })
  },

  //用户点击右上角分享
  onShareAppMessage() {

  }
})