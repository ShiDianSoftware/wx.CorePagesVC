// CorePagesVC.js

function CorePagesVC(){}

CorePagesVC.isScroll = false

CorePagesVC.offsetX = 0

CorePagesVC.anim_creator = wx.createAnimation({

  transformOrigin: "50% 50% 0",
  duration: 120,
  timingFunction: "ease-out",
  delay: 0

})






CorePagesVC.showInVC = function(vc,deltaH){

  vc.clickItem = function(e){
    
    let index = e.currentTarget.dataset.idx
    this.clickItemWithIndex(index)
  }

  vc.clickItemWithIndex = function(index){

    let screen_width = wx.getSystemInfoSync().windowWidth
    let itemW = screen_width / 5
    let charactorCount = 2
    let deltaW = 10
    let lineW = 30 / 2 * charactorCount + deltaW
    let x = itemW * index + (itemW - lineW) / 2
    CorePagesVC.anim_creator.left(x).width(lineW).step()
    this.setData({ CorePVC_lineLeft: x, CorePVC_lineWidth: lineW, CorePVC_anim: CorePagesVC.anim_creator.export()})
  }
  console.log("来了")
  //滚动开始
  vc.scrollBegin = function(){
    CorePagesVC.isScroll = true
  }

  //滚动中
  vc.didScroll = function(e){
    //console.log(e)
    CorePagesVC.offsetX = e.detail.scrollLeft
  }

  //滚动结束
  vc.scrollEnd = function(e){
    CorePagesVC.isScroll = false
    console.log(e)

    let screen_width = wx.getSystemInfoSync().windowWidth
    let offsetX = CorePagesVC.offsetX

    let page = parseInt((offsetX / screen_width)+0.5)

  
    this.setData({ scroll_id: page})
    console.log(screen_width + "," + offsetX + "," + page)

  }

  //滚动取消
  vc.scrollCancel = function(e){
    CorePagesVC.isScroll = false
  }

  //页码改变
  vc.pageChangeAction = function(e){
    
    let newPage = e.detail.current
    this.clickItemWithIndex(newPage)
  }


  vc.clickItemWithIndex(0)

  let mainH = wx.getSystemInfoSync().windowHeight - deltaH
  vc.setData({ mainH: mainH})
}

module.exports = CorePagesVC
