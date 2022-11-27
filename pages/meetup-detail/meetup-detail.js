// pages/meetup-detail/meetup-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      student:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
        const flag=options.flag

      if(flag=="class")
      {
        wx.cloud.callContainer({
          "config": {
            "env": "prod-3g07ynlp121f9201"
          },
          "path": "/Weixin/Reunion?openid="+getApp().globalData.userInfo.openid,
          "header": {
            "X-WX-SERVICE": "springboot-fchz",
            "content-type": "application/x-www-form-urlencoded"
          },
          "method": "POST",
          "data": ""
        }).then((response)=>{
          console.log(response.data)
          //请求后端数据成功
          if(response.data.success==true)
          {
            var list = []
            const data=response.data.content
            for(let i=0;i<data.length;i++)
            {
                list.push(data[i])
            }
            this.setData({
             student :list
            })
            console.log(this.data.student)
          }
          //请求后端数据失败
          else{
            console.log("获取数据失败")
            wx.showToast({
              title: '服务器出现故障，获取数据失败',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }else{
        wx.cloud.callContainer({
          "config": {
            "env": "prod-3g07ynlp121f9201"
          },
          "path": "/Weixin/dmentReunion?openid=ol_Y65RUa066RPCw58RX6F8xUMUI",
          "header": {
            "X-WX-SERVICE": "springboot-fchz",
            "content-type": "application/x-www-form-urlencoded"
          },
          "method": "POST",
          "data": ""
        }).then((response)=>{
          console.log(response.data)
          //请求后端数据成功
          if(response.data.success==true)
          {
            var list = []
            const data=response.data.content
            for(let i=0;i<data.length;i++)
            {
                list.push(data[i])
            }
            this.setData({
             student :list
            })
            console.log(this.data.student)
          }
          //请求后端数据失败
          else{
            console.log("获取数据失败")
            wx.showToast({
              title: '服务器出现故障，获取数据失败',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  lintap(event){ 
   
    wx.makePhoneCall({ 
      phoneNumber: event.currentTarget.dataset.tel //仅为示例，并非真实的电话号码 
    }) 
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