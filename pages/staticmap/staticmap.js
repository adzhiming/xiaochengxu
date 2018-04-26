var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js');

Page({
  data: {
    src: ''
  },
  onLoad: function() {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key: key});
    wx.getSystemInfo({
      success: function(data){
        var height = data.windowHeight;
        var width = data.windowWidth;
        var size = width + "*" + height;
        myAmapFun.getStaticmap({
          zoom: 10,
          size: size,
          scale: 2,
          location: "116.38482,39.94858",
          paths: "10,0x0000ff,1,,:116.31604,39.96491;116.320816,39.966606;116.321785,39.966827;116.32361,39.966957",
          success: function (data) {
            that.setData({
              src: data.url
            })
          },
          fail: function (info) {
            wx.showModal({ title: info.errMsg })
          }
        })

      }
    })
    
  }
})