/*
//获取应用实例

const app = getApp()

// 连接云数据库
const db = wx.cloud.database();
// 获取集合的引用
const activityRecord = db.collection('activityRecord');
// 数据库操作符
const _ = db.command;
*/
//获取答题排行榜
wx.cloud.callContainer({
  "config": {
    "env": "prod-3g07ynlp121f9201"
  },
  "path": "Weixin/getUserRecord?openId=1",
  "header": {
    "X-WX-SERVICE": "springboot-fchz",
    "content-type": "application/json"
  },
  "method": "GET",
  "data": ""
})
Page({
  data: {
    historyList: []
  },
  
  onLoad() {
    this.getHistoryList();
  },

  goToResult(event){
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/question/result?id=' + id
    })
  },

  getHistoryList() {
    // 显示 loading 提示框
    wx.showLoading({
      title: '拼命加载中'
    });
    // 数据库集合的聚合操作实例
    activityRecord
    .where({       //类似于where，对记录进行筛选
      _openid: _.exists(true)
    })
    .orderBy('createDate', 'desc')
    .get()
    .then(res => {
      // 获取集合数据，或获取根据查询条件筛选后的集合数据。
      console.log('[云数据库] [答题记录] 查询成功')
      console.log(res.data)
      let data = res.data || [];
      let historyList = [];
      data.forEach(item => {
        item.date = this.formatTime(item.createDate)
        historyList.push(item)
      })

      // 更新数据到页面展示
      this.setData({
        historyList
      });

      // 隐藏 loading 提示框
      wx.hideLoading();
    })
  },

  formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute].map(this.formatNumber).join(':')
  },
  
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
})