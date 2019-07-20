
let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function (x) {
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function (x) {
    x.currentTarget.classList.remove('active')
  }
}

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (x) {
    x.preventDefault()
    let a = x.currentTarget
    let href = a.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop

    let currentTop = window.scrollY
    let targetTop = top - 80
    let slideDistance = targetTop - currentTop

    const coords = { y: currentTop };
    const time = Math.abs((slideDistance / 100) * 100) 
    if (time >= 500 ) { time === 500}
    const tween = new TWEEN.Tween(coords)
      .to({  y: targetTop }, time)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        window.scrollTo(0, coords.y)
      })
      .start();
  }
}

