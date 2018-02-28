document.addEventListener("DOMContentLoaded", ()=> {

const ciders = document.querySelectorAll('.ciders')
const test = document.querySelectorAll('.test')

function selectcider(e) {
  test.forEach(test => test.style.visibility = 'hidden')
  const childciders = e.target.childNodes
  childciders.forEach(cider => cider.style.visibility = 'visible')
  if (((window.innerWidth)/2) > e.target.offsetLeft) {
    childciders.forEach(cider => {
      console.log(cider)
      cider.style.left = 450
      console.log(cider)
    })
  } else {
    childciders.forEach(cider => {
      cider.style.left = 0
      console.log(cider.style.left)
    })
  }
}
ciders.forEach(cider => cider.addEventListener('click', selectcider))

})
