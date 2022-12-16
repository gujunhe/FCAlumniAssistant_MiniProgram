// pages/home/home.js
var wxPano = requirePlugin("wxPano")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      grids:[
        {
            image:"/images/icon/live.png",
            text:"晚会直播"
        }
        ,{
          image:"/images/icon/navigation.png",
          text:"校园导航"
        }
        ,{
          image:"/images/icon/school.png",
          text:"校园参观"
        }
        ,{
          image:"/images/icon/questions.png",
          text:"有奖答题"
        }
        ,{
          image:"/images/icon/donations.png",
          text:"校友捐款"
        }
      ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(getApp().globalData.userInfo)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    

    }
  ,
 
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
  linitemtap(e)
  {
      console.log(e.detail)
      switch(e.detail.index)
      {
        case 0:
        
          wx.openChannelsActivity({
            finderUserName:'sphtpyMYTNuAZU5',
            feedId:'export/UzFfAgtgekIEAQAAAAAAl1wvK19mvQAAAAstQy6ubaLX4KHWvLEZgBPEpYJcOjc4Hv-BzNPgMJrq_7nPKa6ouzSbDrCP7Lxh',
            success:(res)=>{
        
                console.log(res)
               
            },
            fail:(err)=>{
        
              console.log(err)
             
          }
            
          });
          wx.openChannelsUserProfile({
            finderUserName:'sphtpyMYTNuAZU5',
            success:(res)=>{
        
              console.log(res.headUrl)
          }
          })

    
          break;
        case 1:
//           let plugin = requirePlugin('routePlan');
//           let key = 'P2KBZ-H7FKU-SE4VQ-BSQF6-YYK2F-ADF6T';  //使用在腾讯位置服务申请的key
//           let referer = 'FC校友助手';   //调用插件的app的名称
//           let endPoint = JSON.stringify({  //终点
//           'name': '福州大学计算机与大数据学院院庆地点',
//           'latitude': 26.058956,
//         'longitude': 119.197671
//           });
//           wx.navigateTo({
//           url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
// });

   //返回可以用于 wx.openLocation 的经纬度

    const latitude = 26.058956
    const longitude =119.197671
    const name="福州大学计算机与大数据学院院庆地点"
    wx.openLocation({
      latitude,
      longitude,
      name,
      scale: 18
    })


          break;
        case 2:
          wx.navigateTo({
            url: '/pages/school-map/school-map',
          })
          break;
        case 3:
          wx.navigateTo({
            url: '/pages/question/question',
          })
          break;
        case 4:
          wx.navigateTo({
            url: '/pages/donation/donation',
          })
         break;
      }

    
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