// pages/meetup/meetup.js
const filter = require('../../utils/filter');
Page(filter.loginCheck({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  online(){
    wx.navigateTo({
      url: '/pages/online/online',
    })
  },
  mydep(){
      wx.navigateTo({
        url: '/pages/meetup-detail/meetup-detail?flag=dep',
      })
  },
  myclass(){
    wx.navigateTo({
      url: '/pages/meetup-detail/meetup-detail?flag=class',
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // wx.getLocation({
    //   type: 'wgs84',
    //   success (res) {
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //     console.log(latitude)
    //   }
    //  })

  },

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
}))