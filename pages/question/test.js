const q= [{
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
//获取题目
wx.cloud.callContainer({
  "config": {
    "env": "prod-3g07ynlp121f9201"
  },
  "path": "Weixin/getQuestion?num=20",
  "header": {
    "X-WX-SERVICE": "springboot-fchz",
    "content-type": "application/json"
  },
  "method": "GET",
  "data": ""
})

Page({
  data: {
    pool:0 ,//总题数
    subject: {},//题目
    userSelect:'',//用户选项
    CurrentNum: 1,//题号
    bool: false,//s是否选中
    percent: 0,//进度
    userScore: 0,//答对题数
},
//单选
radioChange(e){
    console.log(e.detail.value)
    this.setData({
        userSelect: e.detail.value
    })
},

    //提交答题
    submit(){
      console.log('用户选择 ',this.data.userSelect)
      let num = this.data.CurrentNum
      let userSelect= this.data.userSelect
      //更新进度条
      this.setData({
          percent: ((num/q.length)*100),
      })
      //提醒用户做选择
      if(!userSelect)
      {
          wx.showToast({
              title: '请做选择',
              icon: 'none',
          })
      }
      //判断对错
      console.log('正确答案',this.data.subject.answer)
      if(this.data.subject.answer.indexOf(userSelect)>-1)
      {
          this.setData({
              userScore: this.data.userScore + 1
          })
      }
      console.log('用户共答对'+ this.data.userScore +"道题")

      //最后一题hint+打分
      if((num+1)>q.length)
      {
          let sum =this.data.userScore / q.length * 100//sum:总得分
          console.log('用户总得分',sum)
          this.setData({
              sum: sum
          })
          wx.showToast({
              title: '已经最后一题啦\n   正在生成结果~\n',
              icon: 'none'
          })
          wx.redirectTo({
            url: '../question/result'
       })
      }
      let subject = q[num]
      console.log('现在是第',num,'题')
      console.log('下面是第',num+1,'题')
      this.setData({
          subject : subject,
          userSelect:'',
          CurrentNum : num + 1,
          bool: false,
          percent: (((num-1)/q.length)*100),
      })
  },
 
  //nextSubmit: function(){},

  onLoad(){
    console.log('executing onload')
    let subject = q[0]
    this.setData({
        subject : subject,
        pool: q.length,
    })
    }
  /*
  lastJudge(){
    if (this.data.current < this.data.titles.length - 1) {
      // 如果不是最后一题，则切换下一题
      let current = this.data.current + 1;
      this.setData({
        current
      })
    } else {
      // 如果是最后一题，则提交答卷
      this.addExamRecord()
    }
  },
    // 提交答卷
    addExamRecord(){
      let examResult = {
        totalScore: this.userScore,
        nickName: app.globalData.hasUserInfo?app.globalData.userInfo.nickName:'',
        avatarUrl: app.globalData.hasUserInfo?app.globalData.userInfo.avatarUrl:''
      };
      this.setData({
        userScore:''
      })
    
      activityRecord.add({
        data: {
          ...examResult,
          createDate: db.serverDate()
        }
      })
      .then(res => {
        activityScore.add({
          data: {
            ...examResult,
            createDate: db.serverDate()
          }
        })
        // 跳转到答题结果页，查看成绩
        wx.reLaunch({
          url: '../question/result?id=' + e.detail.value
        });
        wx.hideLoading();
    },*/
  // 生命周期函数--监听页面加载

})