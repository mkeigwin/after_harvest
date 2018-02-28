document.addEventListener("DOMContentLoaded", () => {

  let ciders = document.querySelectorAll('.ciders')
  let tests = document.querySelectorAll('.test')

  let selectCider = (e) => {
    // SET ALL TO INVISIBLE
    tests.forEach((test) => test.style.visibility = 'hidden')

    // SET THE ONE JUST CLICKED TO BE VISIBLE
    e.target.children[0].style.visibility = 'visible'

    if (window.innerWidth/2 > e.target.offsetLeft) {
      e.target.children[0].style.left = '70vw'
    } else {
      e.target.children[0].style.left = 0
    }

  }

  ciders.forEach((cider) => cider.addEventListener('click', selectCider))

})
