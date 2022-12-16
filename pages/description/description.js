// description/description.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query : {},
    pageContent : [],
    donateNum : 0
  },
  donateMoney(){
    const toast2 = this.selectComponent('#finishDonate')
    if(this.data.pageContent.had >= this.data.pageContent.need) {
      toast2.linShow({
        duration : 2000,
        title : "该项目已捐献完毕，感谢支持！"
      })
      return
    }
    const dialog1 = this.selectComponent('#inputNum')
    dialog1.linShow({
      title : '您正在捐献积分',
      type : 'confirm',
      "show-title" : false,
      "locked" : false
    })
  },
  confirmDonation(){
    const toast1 = this.selectComponent('#messageImply')
    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/donation/donate",
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "GET",
      data: {
        openid : getApp().globalData.userInfo.openid,
        push_Money : this.data.donateNum,
        id : this.data.query.id,
        
      },
      success : (res) => {
        this.getConcreteInfo()
        console.log(res)
        console.log('用户'+this.openid+'尝试为'+this.data.query.id+'号项目捐赠'+this.data.donateNum+'积分')
        toast1.linShow({
          duration : 2000,
          title: res.data.message,
          "icon" : (res.data.success==true ? "success":"error")
        })

      }
    })
  },
  updateValue(e){
    this.setData({
      donateNum : e.detail.value,
      success : () => {
        console.log(this.data.donateNum)
      }
    })
  },
  getConcreteInfo () {
    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/donation/object",
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "GET",
      data: {
        openid : getApp().globalData.userInfo.openid,
        donate_id : this.data.query.id
      },
      success: (res) => {
        this.setData({
          pageContent : res.data.content
        })
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query : options
    })
    this.getConcreteInfo()
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