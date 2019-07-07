setTimeout(function () {
  siteWelcome.classList.remove('active')
}, 400)

window.onscroll = function () {
  if (window.scrollY > 0) {
    topNavBar.classList.add('sticky')
  } else {
    topNavBar.classList.remove('sticky')
  }
}