/*// pages/results/results.js
const app = getApp();
const db = wx.cloud.database();
const activityRecord = db.collection('activityRecord');
*/
//保存答题记录
wx.cloud.callContainer({
  "config": {
    "env": "prod-3g07ynlp121f9201"
  },
  "path": "/Weixin/insertNewRecord?openId?score",
  "header": {
    "X-WX-SERVICE": "springboot-fchz",
    "content-type": "application/json"
  },
  "method": "POST",
  "data": ""
})

Page({
  data: {
    totalScore: null
  },

  onLoad(options) {
    // 查看答题成绩
    this.getExamResult(options.id);
  },

  // 系统自动判分
  getExamResult(id){
    wx.showLoading({
      title: '系统判分中'
    });
    activityRecord
    .doc(id)
    .get()
    .then(res => {
      let examResult = res.data;
      
      let { wrong, totalScore } = examResult;
      this.setData({
        totalScore
      })

      wx.hideLoading();
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