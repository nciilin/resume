!function () {
  var view = View('nav.menu')

  var controller = {
    view: null,
    aTags: null,
    init: function (view) {
      this.view = view
      this.initAnimation()
      this.bindEvents()
    },
    initAnimation: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function (element) {
      let top = element.offsetTop
      let currentTop = window.scrollY
      let targetTop = top - 80
      let slideDistance = targetTop - currentTop

      const coords = { y: currentTop };
      const time = Math.abs((slideDistance / 100) * 100)

      if (time >= 500) { time === 500 }
      const tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, time)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => {
          window.scrollTo(0, coords.y)
        })
        .start();
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x) => {
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href')
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    }
    
  }

  controller.init(view)
}.call()
