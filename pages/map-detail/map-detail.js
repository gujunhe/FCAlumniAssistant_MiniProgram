var wxPano = requirePlugin("wxPano")
const { mockData } = require('../../utils/utils')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeid:'',
    fileid:'',
    flag:false,
    index: 0,
    array: [ ],
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }]
  },
  buttontap(e){
    const index=e.detail.index
    if(index==0)
    {
      this.setData({
        flag:false
      })
    }
    else{
      wx.showLoading({
        title: '留言中',
      })
      wx.cloud.callContainer({
        "config": {
          "env": "prod-3g07ynlp121f9201"
        },
        "path": "/Weixin/addMessage",
        "header": {
          "X-WX-SERVICE": "springboot-fchz",
          "content-type": "application/x-www-form-urlencoded"
        },
        "method": "POST",
        "data": {
          openid:getApp().globalData.userInfo.openid,
          keyid:this.data.array[this.data.index].id,
          id:this.data.placeid
        }
      }).then((response)=>{
        console.log(response.data)
        const data=response.content
        if(response.data.success==true)
        {
          wx.hideLoading()
          wx.showToast({
            title: '留言成功',
            icon: 'success',
            duration: 2000
          })
          this.setData({
            flag:false,
          })
          wx.cloud.callContainer({
            "config": {
              "env": "prod-3g07ynlp121f9201"
            },
            "path": "/Weixin/getMessage?id="+this.data.placeid,
            "header": {
              "X-WX-SERVICE": "springboot-fchz",
              "content-type": "application/json"
            },
            "method": "POST",
            "data": ""
          }).then((response)=>{
            console.log(response.data)
            const data=response.content
            if(response.data.success==true)
            {
              const data=response.data.content
                //弹幕
                this.addBarrage(data)
              }
          })
        }
        else if(response.data.success==false)
        {
          wx.hideLoading()
          wx.showToast({
            title: '请勿重复留言同一句',
            icon: 'none',
            duration: 2000
          })
        }
        //请求后端数据失败
        else{
        
          wx.hideLoading()
          wx.showToast({
            title: '服务器出现故障，获取数据失败',
            icon: 'none',
            duration: 2000
          })
        }
      })
    

    }
    
  },
  greetingtap(){
      this.setData({
        flag:true
      })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      placeid:options.placeid,
      fileid:options.fileid
    })
    wxPano.onReady = function () { //wxPano初始化完成后会触发此事件

    }
    const fileid=this.data.fileid
    console.log(fileid)
    wxPano.config({
      panolist:[{
        name:"xindamen",
        src: fileid,
        infospots:[ //信息标记
          
        ]
      }],
      request:wx.request,
      loader:"GLLoader",
      entryname:"xindamen"});
    console.log(this.data.fileid)
    console.log(options)

    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/getMessage?id="+this.data.placeid,
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "POST",
      "data": ""
    }).then((response)=>{
      console.log(response.data)
      const data=response.content
      if(response.data.success==true)
      {
        const data=response.data.content
          //弹幕
          this.addBarrage(data)
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


    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/greeting",
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "GET",
      "data": ""
    }).then((response)=>{
      console.log(response.data)
      const data=response.content
      if(response.data.success==true)
      {
        const data=response.data.content
        const array=[]

        for(let i = 0; i <data.length; i++)
        {
          array.push({
            id:data[i].keyid,
            name:data[i].greeting
          })
        }

        this.setData({
            array:array
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },
  addBarrage(event) {
    
    const barrageComp = this.selectComponent('.barrage')
    this.barrage = barrageComp.getBarrageInstance({
      font: 'bold 16px sans-serif',
      duration: 60,
      lineHeight: 2,
      mode: 'separate',
      padding: [10, 0, 10, 0],
      tunnelShow: false
    })
    this.barrage.setAlpha(0.5) // 设置全局透明度
    this.barrage.open()
    const data=[]
    for (let i = 0; i <event.length; i++) {
      const msg = event[i].greeting
  
      data.push({
        content: msg,
        color: '#000000',
        image: {
          head: {src:'cloud://prod-3g07ynlp121f9201.7072-prod-3g07ynlp121f9201-1314224843/小程序前台/avatar/'+event[i].openid+'.jpg'
          ,width: 15, height:15}, // 弹幕头部添加图片
          gap: 4 // 图片与文本间隔
        }
      })
    }
     this.barrage.addData(data)
     this.timer = setInterval(() => {
       this.barrage.addData(data)
     }, 3000)
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