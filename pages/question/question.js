const filter = require('../../utils/filter');
const app = getApp()
Page(filter.loginCheck({
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
    /**
   * 生命周期函数--监听页面卸载
   */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/getMoney?openid=ol_Y65RUa066RPCw58RX6F8xUMUI",
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "POST",
      "data": ""
    }).then((response)=>{
      console.log(response.data.content)
      const data=response.data.content
      if(response.errMsg=="cloud.callContainer:ok")
      {
        
        this.setData({
          money:data
        })
        }
      //请求后端数据失败
      else{
        console.log("获取数据失败")
        wx.hideLoading()
        wx.showToast({
          title: '服务器出现故障，获取数据失败',
          icon: 'none',
          duration: 2000
        })
      }
      wx.hideLoading();
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
      }
    })
  },
onShareAppMessage(res) {
  return {
    title: '快来参加福大计算机学院院庆答题！'
  }
},
}))