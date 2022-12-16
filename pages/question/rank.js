/*
//获取应用实例
const app = getApp()

*/

Page({
  data: {
    rankList: []
  },
  
  onLoad() {
    // this.getRankList();
    // 显示 loading 提示框
    wx.showLoading({
      title: '拼命加载中'
    });
    //获取答题排行榜
wx.cloud.callContainer({
  "config": {
    "env": "prod-3g07ynlp121f9201"
  },
  "path": "/Weixin/getListOfAnswer",
  "header": {
    "X-WX-SERVICE": "springboot-fchz",
    "content-type": "application/json"
  },
  "method": "GET",
  "data": ""
}).then((response)=>{
  console.log(response)
  const data=response.content
  if(response.errMsg=="cloud.callContainer:ok")
  {
    const data=response.data
    const array=[]


    this.setData({
      rankList:data
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
  wx.hideLoading();
})
  },

  getRankList() {

    // 数据库集合的聚合操作实例
    activityScore
    .where({       //类似于where，对记录进行筛选
      _openid: _.exists(true)
    })
    .orderBy('totalScore', 'desc')
    .get()
    .then(res => {
      // 获取集合数据，或获取根据查询条件筛选后的集合数据。
      console.log('[云数据库] [排行榜] 查询成功')
      console.log(res.data)
      let data = res.data || [];
      
      // 将数据从逻辑层发送到视图层，通俗的说，也就是更新数据到页面展示
      this.setData({
        rankList:data
      });

      // 隐藏 loading 提示框
      wx.hideLoading();
    })
  },
})
