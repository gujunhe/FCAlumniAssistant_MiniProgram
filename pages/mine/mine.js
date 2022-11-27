// pages/mine/mine.js
const filter = require('../../utils/filter');
Page(filter.loginCheck({
  
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    console.log(e.detail.avatarUrl)
    this.setData({
      avatarUrl,
    })
    wx.cloud.uploadFile({
      cloudPath: '小程序前台/avatar/'+getApp().globalData.userInfo.openid+'.jpg', // 对象存储路径，根路径直接填文件名，文件夹例子 test/文件名，不要 / 开头
      filePath: e.detail.avatarUrl, // 微信本地文件，通过选择图片，聊天文件等接口获取
      config: {
        env: 'prod-3g07ynlp121f9201' // 需要替换成自己的微信云托管环境ID
      }
    }).then(res => {
      console.log(res.fileID)
    }).catch(error => {
      console.error(error)
    })

    
  },
  myinfo(){

  },
  contactus(){
    wx.showModal({
      title: '开发人员联系方式',
      content: '13625952254',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        avatarUrl:'cloud://prod-3g07ynlp121f9201.7072-prod-3g07ynlp121f9201-1314224843/小程序前台/avatar/'+getApp().globalData.userInfo.openid+'.jpg'
        ,name:getApp().globalData.userInfo.name
      })  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
}));