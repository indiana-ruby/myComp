export default class myPage  {
    // FIXEDTOP = 0
    constructor() {
        this.initFontSize = false;
        this.htmlFontSize = 100;
    }
  
    getHtmlFontSize() {
    //设置htmlfontsize
      if (!this.initFontSize) {
        try {
          const documentWidth = document.documentElement.clientWidth;
          let fontSize = documentWidth / 7.5;
          const screenWidth = window.screen.width;
          // 预加载容器 页面可能获取不到documentWidth，则通过获取screenWidth
          if (fontSize === 0) {
            fontSize = screenWidth / 7.5;
          }
          this.initFontSize = true
          // 暂定 30 ～ 500 是个合法范围
          if (typeof fontSize === 'number' && fontSize > 30 && fontSize < 500) {
            this.htmlFontSize = fontSize
          }
        } catch (err) {
          console.log(err);
        }
      }
  
      return this.htmlFontSize
    }
  
    // setFixedTop(top = 0) {
    //   if (typeof top === 'number' && !isNaN(top)) {
    //     this.FIXEDTOP = top;
    //   }
    // }
  
    // getFixedTop() {
    //   return this.FIXEDTOP
    // }
  
    // getFixedTopPx() {
    //   return this.getHtmlFontSize() * this.FIXEDTOP
    // }
  }