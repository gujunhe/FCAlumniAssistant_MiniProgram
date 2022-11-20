// pages/donation/donation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isloading : false,
    donateList : [],
    page : 1,
    pageSize : 10,
    total: 0
  },
  getConcreteInfo(){
    wx.redirectTo({
      url: '/pages/description/description?id=this.data.',
    })
    console.log('test now!')
  },
  getDonateList(cb){
    this.setData({
      isloading : true
    })
    wx.showLoading({
      title: 'loading'
    })
    wx.request({
      url: 'https://www.escook.cn/categories/1/shops',
      method : 'GET',
      data : {
        _page : this.data.page,
        _limit : this.data.pageSize
      },
      success : (res) =>{
        this.setData({
          donateList : [...this.data.donateList, ...res.data],
          total : res.header['X-Total-Count'] - 0,
        })
        console.log(res)
      },
      complete : () => {
        wx.hideLoading()
        this.setData({
          isloading : false
        })
        cb && cb()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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
    this.getDonateList()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 重置关键数据
    this.setData({
      page : 1,
      shopList : [],
      total : 0
    })
    // 重新发起请求
    // 若有回调则自动调用
    this.getDonateList(() => {
      wx.stopPullDownRefresh()
    })
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