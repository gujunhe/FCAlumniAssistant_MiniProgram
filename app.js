// app.js
App({
  onLaunch() {
    wx.cloud.init()
    const that=this
    wx.showLoading({
      title: '登录中',
      mask:true
    })
    wx.login({     
      success (res) {
        console.log('code为' + res.code)
        if (res.code) {
          //通过code拿到openid以及用户数据
          wx.cloud.callContainer({
            "config": {
              "env": "prod-3g07ynlp121f9201"
            },
            "path": "/WeixinUser/Login?code="+res.code,
            "header": {
              "X-WX-SERVICE": "springboot-fchz",
              "content-type": "application/json"
            },
            "method": "POST",
          }).then((response)=>{
            console.log(response.data)
            //请求后端数据成功
            if(response.data.success==true)
            {
              that.globalData.userInfo=response.data.content
              wx.hideLoading()
            }
            //请求后端数据失败
            else{
              console.log("登录请求失败")

              wx.hideLoading()
              wx.showToast({
                title: '服务器出现故障，登录失败',
                icon: 'none',
                duration: 2000
              })
            }
          })
         

        } else {
          console.log('登录失败！' + res.errMsg)
          wx.hideLoading()
          wx.showToast({
            title: '服务器出现故障，登录失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })

  },
  globalData: {
    //用户数据的全局变量
    userInfo: {
      flag:false,//是否认证
      openid:'',//用户唯一标识
      name:'',//姓名
      roommatename:'',//室友
      phonenumber:'',//电话
      graduationtime:'',//毕业年份
      major:'',//专业
      banji:'',//班级 是banji class跟Java类冲突
      department:''//社团、部门
    }
  }
})
