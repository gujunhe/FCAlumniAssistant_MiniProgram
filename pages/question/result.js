/*// pages/results/results.js
const app = getApp();
const db = wx.cloud.database();
const activityRecord = db.collection('activityRecord');
*/
//保存答题记录


Page({
  data: {
    score:null
  },

  onLoad(options) {
    // 查看答题成绩

    
    this.setData({
      score:options.score
    })

    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/insertNewRecord?id="+getApp().globalData.userInfo.openid+"&score="+options.score,
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "POST",
      "data": ""
    })

  },


  // 再答一次
  toDoTestAgain(){
    wx.reLaunch({
      url: '../question/test'
    })
  },

  // 返回首页
  toIndex(){
    wx.reLaunch({
      url: '../question/question'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '快来参加福大计算机学院院庆答题！'
    }
  }
})