// ./page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  }, 
 onLoad: function() {
  var Height = wx.getSystemInfoSync().windowHeight;
   Height -= 51;
  this.setData({
  ht: Height + 'px'
  })
 },

  login: function(event){
    wx.showModal({
      title: '更多相机',
      content: '使用更多相机？',
      success (res){
        if(res.confirm){
          wx.redirectTo({
            url: './cam/board',
          })
        }
      }
    })
    
  },
  
  took: function(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) =>{
        wx.cloud.uploadFile({
          cloudPath: 'mypng.jpg',
          filePath:  res.tempPath,
          success: res =>{
            console.log('tiaoshichenggong')
          }
        })

      }
    })
  },
share: function(){
  wx.showShareMenu({})
},


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})