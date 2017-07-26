// CorePagesVC.js

function CorePagesVC(){}

CorePagesVC.isScroll = false

CorePagesVC.offsetX = 0

CorePagesVC.anim_creator = wx.createAnimation({

  transformOrigin: "50% 50% 0",
  duration: 50,
  timingFunction: "ease-out",
  delay: 0
})

CorePagesVC.menus=null

CorePagesVC.showInVC = function(vc,menus){

  CorePagesVC.menus = menus
  let count = menus.length

  vc.clickItem = function(e){
    
    let index = e.currentTarget.dataset.idx
    this.clickItemWithIndex(index)
  }

  vc.clickItemWithIndex = function(index){

    let screen_width = wx.getSystemInfoSync().windowWidth
    let itemW = screen_width / count
    let charactorCount = CorePagesVC.menus[index].length
    let deltaW = 10
    let lineW = 30 / 2 * charactorCount + deltaW
    let x = itemW * index + (itemW - lineW) / 2
    CorePagesVC.anim_creator.left(x).width(lineW).step()
    this.setData({ CorePagesVC_data: { CorePVC_lineLeft: x, CorePVC_lineWidth: lineW, CorePVC_anim: CorePagesVC.anim_creator.export(), current: index, menus: menus} })
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

  
    this.setData({ CorePagesVC_data:{scroll_id: page}})
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
}

module.exports = CorePagesVC
