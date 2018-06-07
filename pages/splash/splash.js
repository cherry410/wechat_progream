var len;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guide: ['../../images/guide_first.png', '../../images/guide_second.png','../../images/guide_third.png',
      '../../images/guide_forth.png'
    ],
    indicatorDots:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  touchMove:function(e){
    var that = this;
    this.setData({
      indicatorDots: e.detail.current == 3? false : true
    })
    console.log(e);
  },

  skip:function(e){
    wx.switchTab({
      url: '../index/index',
    })
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