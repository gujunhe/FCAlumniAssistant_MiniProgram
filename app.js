// app.js
App({
  onLaunch() {
    //用户数据的全局变量
    const userInfo=this.globalData.userInfo
    wx.getStorage({
      key: 'openId',
      success (res) {
        userInfo.openiId =res.data
        console.log(res.data)
      }
    })
    //如果本地没有用户的标识ID，则向后端发起请求
    if(true)
    {
    // 登录
    wx.login({     
      success (res) {
        console.log('code为' + res.code)
        if (res.code) {
          //请求成功后将用户数据存到全局变量，openId存储到缓存
          // //发起网络请求
          // wx.request({
          //   url: 'https://example.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
          //请求成功后修改全局变量
          userInfo.certified=true
          //缓存存openId
         wx.setStorage({
          key: 'openId',
          data: 'aaaaa'
          })

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    }
    //如果有openid则发起请求获取用户信息
    else{
    //请求成功后修改全局变量
    userInfo.certified=true
    }
  },
  globalData: {
    //用户数据的全局变量
    userInfo: {
      certified:false,//是否认证
      openId:'',//用户唯一标识
      name:'',//姓名
      tel:'',//电话
      graduationYear:'',//毕业年份
      major:'',//专业
      class:'',//班级
      club:''//社团
    }
  }
})
