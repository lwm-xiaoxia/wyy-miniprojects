// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    navList: ['我的', '发现', '云村', '视频'],
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    //
  },

})
