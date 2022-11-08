// pages/home/home.js
var wxPano = requirePlugin("wxPano")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wxPano.onReady = function () { //wxPano初始化完成后会触发此事件

    }
    wxPano.config({
    panolist:[{
      name:"xindamen",
      src: "https://7072-prod-3g07ynlp121f9201-1314224843.tcb.qcloud.la/andes2.jpg?sign=5b3645c7c8c5320934f0302f1b347b5c&t=1667907959",
      infospots:[ //信息标记
      ]
    }],
    request:wx.request,
    loader:"GLLoader",
    entryname:"xindamen"});
  },
  covertap:function(){
    var panoId=wxPano.addPano({
      name: "dongdamen",
      src: 'https://www.aiotforest.com/pano-1-2048-1024.jpg',
      infospots: [{
        type: "pano",
        entryname: "xindamen",
        position: { x: 0.695, y: 0.503 },
        size: 1,
        icon: "arrow"
      }, {
        type: "modal",
        modal: {
          title: "东大门",
          content: "对面有公交站和唐家湾轻轨站"
        },
        position: { x: 0.092, y: 0.434 },
        size: 1,
        icon: "info"
      }]
    });
    wxPano.navigateMethod({
      type: "pano",
      entryname: "dongdamen"
    });
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