// Index.js
let CorePagesVC = require("../FrameWorks/CorePagesVC/CorePagesVC.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  onLoad: function(){

    CorePagesVC.showInVC(this,100)
  }

})