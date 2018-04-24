Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isUserInfo:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userinfo = getApp().globalData.userInfo;//是否有缓存微信信息
    var that = this;
    if (userinfo){
      console.log("userinfo",userinfo);
      that.setData({
        userInfo:userinfo,
        isUserInfo: true
      })
    }else{
      wx.getSetting({//判断是否授权获取用户信息
        success(res) {
          if (!res.authSetting['scope.userInfo']) {//提示授权窗口
            wx.authorize({
              scope: 'scope.userInfo',
              success() {
                //用户同意授权
                wx.getUserInfo({
                  success(res) {
                    that.setData({
                      userInfo: res.userInfo,
                      isUserInfo: true,
                      userinfo:res.userInfo
                    })
                  }
                })
              }
            })
          } else {
            //用户同意授权
            wx.getUserInfo({
              success(res) {
                that.setData({
                  userInfo: res.userInfo,
                  isUserInfo: true,
                  userinfo: res.userInfo
                })
              }
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})