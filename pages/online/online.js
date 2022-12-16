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

    wx.chooseLocation({
      success:(res)=>{
        const latitude=res.latitude
        const longitude=res.longitude
        console.log(latitude)
        wx.cloud.callContainer({
          "config": {
            "env": "prod-3g07ynlp121f9201"
          },
          "path": "/Weixin/upLocation?openid="+getApp().globalData.userInfo.openid+"&latitude="+latitude+"&longitude="+longitude,
          "header": {
            "X-WX-SERVICE": "springboot-fchz",
            "content-type": "application/json"
          },
          "method": "POST",
          "data": ""
        })
      }
    })

    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/getClassMateLoc?openid="+getApp().globalData.userInfo.openid,
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "POST",
      "data": ""
    }).then((response)=>{
      console.log(response.data)
      //请求后端数据成功
      if(response.data.success==true)
      {
         var list = this.data.markers
        const data=response.data.content
        console.log(data)
        for(let i=0;i<data.length;i++)
        {
          if(data[i].latitude!="null"){
            list.push({
              latitude:data[i].latitude,
              longitude:data[i].longitude,
              callout:{
              content:'班级校友:'+data[i].name,
              display:'ALWAYS',
              borderRadius:10,
              padding:5,
               }
            })
          }
        }
        console.log(this.data.markers)
        this.setData({
          markers :list
        })
     
      }
      //请求后端数据失败
      else{
        console.log("获取数据失败")
        wx.showToast({
          title: '好像目前没有已认证校友哟',
          icon: 'none',
          duration: 2000
        })
      }
    })
    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/getDepartmentLoc?openid="+getApp().globalData.userInfo.openid,
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "POST",
      "data": ""
    }).then((response)=>{
      console.log(response.data)
      //请求后端数据成功
      if(response.data.success==true)
      {
        var list = this.data.markers
        const data=response.data.content
        console.log(data)
        for(let i=0;i<data.length;i++)
        {
          if(data[i].latitude!="null"){
            list.push({
              latitude:data[i].latitude,
              longitude:data[i].longitude,
              callout:{
              content:'社团校友:'+data[i].name,
              display:'ALWAYS',
              borderRadius:10,
              padding:5,
               }
            })
          }
        }
        console.log(this.data.markers)
        this.setData({
          markers :list
        })
     
      }
      //请求后端数据失败
      else{
        console.log("获取数据失败")
        wx.showToast({
          title: '好像目前没有已认证校友哟',
          icon: 'none',
          duration: 2000
        })
      }
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