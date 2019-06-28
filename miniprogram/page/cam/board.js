// page/cam/board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Winht = wx.getSystemInfoSync().windowWidth;
    this.setData({
      wht: Winht + 'px'
    })
  },

 metal:function() {
   wx.redirectTo({
     url: 'native',
   })
 },
 wooden:function(){
   wx.redirectTo({
     url: '../index',
   })
 },
 glass:function(){
   wx.redirectTo({
     url: './glass',
   })
 },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})