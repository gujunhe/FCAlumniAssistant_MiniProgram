
Page({
  data: {
    list: [{
      name: '1:  1 + 1 = ?',
      select_title: ["A、1", "B、2", "C、3", "D、4"],
      sure_title: 'C'
      ,current:null
    }, {
      name: '2:  2 + 2 = ?',
      select_title: ["A、4", "B、5", "C、6", "D、7"],
      sure_title: 'C'
      ,current:null
    }],
    idx: 0,//题目下标
    num: 0,//分数
    pool:5//题目总数
},
//单选
radioChange(e){
    console.log(e.detail.value)
    this.setData({
        
      ['list['+this.data.idx+'].current']: e.detail.value
    })
},
jumpBackTitle(e){
  var that = this
  var idx = that.data.idx//第几题
  var idz = that.data.idz//选择答案
  console.log("k",idx)
    this.setData({
      idx: idx - 1,
      idz: -1,//重置本题答案
    })
},
jumpNavTitle(e){
  var that = this
  var idx = that.data.idx
  var idz = that.data.idz
  console.log("k",idx)
    this.setData({
      idx: idx + 1,
      idz: -1,
    })
},
selectTitle(e){
  var index = e.currentTarget.dataset.index
  var that = this
  var idx = that.data.idx
  
 
  this.setData({

    ['list['+that.data.idx+'].current']:index
   
  })
  var current=that.data.list[idx].current
  console.log(current)
},
  //nextSubmit: function(){},

  onLoad(){
    console.log('executing onload')

    // 显示 loading 提示框
    wx.showLoading({
      title: '拼命加载中'
    });
    wx.cloud.callContainer({
      "config": {
        "env": "prod-3g07ynlp121f9201"
      },
      "path": "/Weixin/getQuestion?num=5",
      "header": {
        "X-WX-SERVICE": "springboot-fchz",
        "content-type": "application/json"
      },
      "method": "POST",
      "data": ""
    }).then((response)=>{
      console.log(response)
     
      if(response.errMsg=="cloud.callContainer:ok")
      {
        const data=response.data
        const array=[];
        
        for(let i = 0; i <data.length; i++)
        {
          const optionss=[];
          optionss=[{code:"A",option:data[i].A},
          {code:"B",option:data[i].B},
          {code:"C",option:data[i].C},
          {code:"D",option:data[i].D}]
          array.push({
            title:data[i].title,
            options:optionss,
            correct: data[i].correct,
            current:""
          })
        }
        this.setData({
          list:array
        })
        console.log(this.data.list[0].options)
    
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
    submit()
    {
      wx.showLoading({
        title: '系统判分中'
      });
      const data=this.data.list;
      var score=0;
      for(let i = 0; i <data.length; i++)
      {
          if(data[i].current==data[i].correct)
          score+=5
      }
      
      wx.redirectTo({
        url: '/pages/question/result?score='+score,
      })
    }


})