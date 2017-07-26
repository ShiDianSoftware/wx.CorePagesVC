# wx.CorePagesVC

一、快速集成：
================
1.集成框架
拖拽CorePagesVC到FrameWorks文件夹中。

2.集成js到当前控制器js文件：

    let CorePagesVC = require("../FrameWorks/CorePagesVC/CorePagesVC.js")

3.集成wxml到当前控制器的wxml文件中：

    <import src="/pages/FrameWorks/CorePagesVC/CorePagesVC.wxml" />
    <template is="CorePagesVC_list" data="{{...CorePagesVC_data}}"></template> 

4.集成wxss到app.wxss文件中：

    @import "/pages/FrameWorks/CorePagesVC/CorePagesVC.wxss";




一、快速使用：
================

#### 特别注意，列表是一个充满整个页面的视图，而此框架顶部的菜单又是漂浮在列表上面的

    let CorePagesVC = require("../FrameWorks/CorePagesVC/CorePagesVC.js")
    CorePagesVC.showInVC(this, ["全部", "发货中", "运输中", "完成"])

