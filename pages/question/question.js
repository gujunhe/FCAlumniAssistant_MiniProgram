
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  //答题页
  goToTest(){
    wx.navigateTo({
      url: '/pages/question/test',
    })
  },
  //历史记录
  goToHistory(){
    wx.navigateTo({
      url: '/pages/question/history',
    })
  },
  //排行榜
  goToRank(){
    wx.navigateTo({
      url: '/pages/question/rank',
    })
  },
  //微信授权登录
  login() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.globalData.userInfo = res.userInfo
        app.globalData.hasUserInfo = true
      }
    })
  },
onShareAppMessage(res) {
  return {
    title: '快来参加福大计算机学院院庆答题！'
  }
},
})