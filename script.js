document.addEventListener("DOMContentLoaded", () => {

  let ciders = document.querySelectorAll('.ciders')
  let ciderdisc = document.querySelectorAll('.ciderdisc')

  let selectCider = (e) => {
    ciders.forEach (cider => {cider.style.opacity = '0.5'})
    e.target.style.opacity = "0"
    ciderdisc.forEach((disc) => disc.style.visibility = 'hidden')
    e.target.children[0].style.visibility = 'visible'
    if (window.innerWidth/2 > e.target.offsetLeft) {
      e.target.children[0].style.left = '50vw'
    } else {
      e.target.children[0].style.left = '5vw'
    }

  }

  ciders.forEach((cider) => cider.addEventListener('click', selectCider))

})
