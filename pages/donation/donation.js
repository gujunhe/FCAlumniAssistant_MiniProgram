// pages/donation/donation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isloading : false,
    donateList : [],
    page : 1,
    pageSize : 6,
    total: 0,
    name : '',
    query : {}
  },
  cloudRequest(){
    wx.cloud.callContainer({
      config: {
        env: "prod-3g07ynlp121f9201"
      },
      path: "/donation/fresh",
      header: {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "GET",
     data: {
       pageNum : this.data.page,
       pageSize : this.data.pageSize,
       name : this.data.name
     },
      success: (res) => {
        this.setData({
          donateList : [...this.data.donateList, ...res.data.content.data],
          total : res.data.content.total,
        })
        console.log(res)
      },
      complete : () => {
        wx.hideLoading()
        this.setData({
          isloading : false
        })
      }
    })
  },
  resetPage(e){
    this.setData({
      name : e.detail.value,
      page : 1,
      donateList : [],
      total : 0
    })
    this.cloudRequest()
  },
  getDonateList(){
    this.setData({
      isloading : true
    })
    wx.showLoading({
      title: 'loading'
    })
    this.cloudRequest()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query : options
    })
    this.getDonateList()
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
    this.setData({
      name : ''
    })
    this.getDonateList()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 重置关键数据
    this.setData({
      page : 1,
      donateList : [],
      total : 0
    })
    // 重新发起请求
    this.cloudRequest()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.isloading) return 
    if(this.data.pageSize * this.data.page >= this.data.total) {
      wx.showToast({
        title: 'No More Information!',
        icon: 'none'
      })
      return 
    }
    this.setData({
      page : this.data.page + 1
    })
    this.getDonateList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})