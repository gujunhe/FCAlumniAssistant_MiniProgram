// pages/school-map/school-map.js
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
    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/GetMap",
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "GET",
      "data": ""
    }).then((response)=>{
      console.log(response.data)
      //请求后端数据成功
      if(response.data.success==true)
      {
        var list = this.data.markers
        const data=response.data.content
        console.log(data.length)
        for(let i=0;i<data.length;i++)
        {
            list.push({
              fileid:data[i].fileid,
              id:i,
              placeid:data[i].id,
              latitude:data[i].latitude,
              longitude:data[i].longitude,
              callout:{
              content:'去'+data[i].fname+'留言祝福',
              display:'ALWAYS',
              borderRadius:10,
              padding:5,
              
        },
            })
        }
        console.log(list)
        this.setData({
          markers :list
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
    })
  },
  callouttap(e){
    const id=e.detail.markerId
    
    const marker=this.data.markers[id]
    const url='/pages/map-detail/map-detail?placeid='+marker.placeid+'&fileid='+marker.fileid
  
      console.log(url)
      wx.navigateTo({
        url: url
      })
  },
  markertap(e)
  {
    const id=e.detail.markerId
    
    const marker=this.data.markers[id]
    const url='/pages/map-detail/map-detail?placeid='+marker.placeid+'&fileid='+marker.fileid
  
      console.log(url)
      wx.navigateTo({
        url: url
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