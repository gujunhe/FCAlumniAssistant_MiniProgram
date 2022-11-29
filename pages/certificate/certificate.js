// pages/certificate/certificate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      openId:"",
      name:"",
      roommatename:"",
      phonenumber:"",
      graduationtime:"请输入毕业年份",
      academyname:"",
      banji:null,
      department:""
    },
    errorMsg: '', // 验证表单显示错误信息
    loading:'',
    rules: [
      {
        name: 'name',
        rules: {required: true, message: '请填写姓名'},
      },
      {
        name: 'roommatename',
        rules: [{required: true, message: '请填写一位舍友名字'}, ]
      },
      {
        name: 'phonenumber',
        rules: [{required: true, message: '请填写电话'},{mobile: true, message: '电话格式不对'}]
      },
      {
        name: 'graduationtime',
        rules: {maxlength: 4, message: '请选择毕业年份'}
      },
      {
        name: 'academyname',
        rules: {required: true, message: '请填写专业名'}
      },
      {
        name: 'banji',
        rules: {required: true, message: '请填写班级'}
      },
      {
        name: 'department',
        rules: {required: false, message: '请填写部门'}
      },
    ],
  },
  formInputChange(e) {
    const {field} = e.currentTarget.dataset
    this.setData({
      [`form.${field}`]: e.detail.value
    })
  },
  submitForm()
  {
    this.selectComponent('#form').validate((valid, errors) => {
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            errorMsg: errors[firstError[0]].message
          })
        }
      } 
       else {
         const info=this.data.form
        this.setData({
          loading:"true"
        })
        console.log(info)
        wx.cloud.callContainer({
          "config": {
            "env": "prod-3g07ynlp121f9201"
          },
          "path": "/WeixinUser/identify",
          "header": {
            "X-WX-SERVICE": "springboot-fchz",
            "content-type": "application/x-www-form-urlencoded"
          },
          "method": "POST",
          "data":
            "openId="+getApp().globalData.userInfo.openid+"&name="+info.name+"&roommatename="+info.roommatename+"&phonenumber="+info.phonenumber+"&graduationtime="+info.graduationtime+"&major="+info.academyname+"&banji="+info.banji+"&department="+info.department
        
        }).then((response)=>{
            
          const data=response.data.content
          console.log(data)
            if(data.flag==false)
            {
              this.setData({
                errorMsg:"信息有误，认证失败，请重试"
              })
            }
            else{
              getApp().globalData.userInfo=data
              wx.showToast({
                title: '认证成功',   
              })
              wx.switchTab({
                url: '/pages/home/home',
              })
            }
            this.setData({
              loading:""
            })
        })    

        
      }
    })
  },
  bindDateChange(event)
  {
      console.log(event.detail.value)
      this.setData({
        'form.graduationtime':event.detail.value
      }
      )
  },
  bindsuccess(event)

  {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindfail(event){
    console.log(event)

  }
  ,
  onLoad(options) {
 
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