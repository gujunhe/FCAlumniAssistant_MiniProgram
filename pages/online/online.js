// pages/online/online.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.startLocationUpdate({
      success: (res) => {
        console.log(res)

         wx.onLocationChange((data)=>{
           console.log(data)
           const marker =[]
           marker.push({
            latitude:data.latitude,
            longitude:data.longitude,
           })
           this.setData({
              markers:marker
           })

           console.log(this.data.markers)
         })
      },
    })
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
})