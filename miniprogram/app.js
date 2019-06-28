App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.cloud.init({
      traceUser: 'true'
    })
  },

  onShow: function (options) {
    console.log('on show')
  },
  onHide: function () {
    console.log('on hide')
  },
  onError: function (msg) {
    console.log('There is a bug.')
  }
})


