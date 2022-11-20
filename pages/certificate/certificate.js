// pages/certificate/certificate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    certificate:{
      openid:"",
      name:"",
      roommatename:"",
      phoneNumber:"",
      graduationTime:"请输入毕业年份",
      major:"",
      banji:"",
      department:""
    }
      
  },
  bindDateChange(event)
  {
      console.log(event.detail.value)
      this.setData({
        date:event.detail.value
      }
      )
  },
  bindsuccess(event)

  {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindfail(event){
    console.log(event)

  }
  ,
  submitForm()
  {
    validate
  },
  onLoad(options) {
 
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