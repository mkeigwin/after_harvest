document.addEventListener("DOMContentLoaded", () => {

  const ciders = document.querySelectorAll('.ciders')
  const ciderdisc = document.querySelectorAll('.ciderdisc')
  const coverimage = document.querySelector('.coverpage')
  const secondimage = document.querySelector('.page2')
  const afterharvest = document.querySelector('#title')
  const logo = document.querySelector('#logo')
  const navcontainer = document.querySelector('.navcontainer')

  // this should be run inside a screen resize function
  const logoposition = logo.offsetTop + logo.height

  function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function selectCider(e){
    ciders.forEach((cider) => {cider.style.backgroundColor = 'rgba(128, 128, 128, 0.8)'})
    e.target.style.backgroundColor = 'rgba(128, 128, 128, 0.0001)'
    e.target.children[0].style.visibility = 'visible'
    if (window.innerWidth/2 > e.target.offsetLeft) {
      e.target.children[0].style.left = '55vw'
    } else {
      e.target.children[0].style.left = '10vw'
    }
  }

  function removeCider(){
    ciders.forEach((cider) => {cider.style.backgroundColor = 'rgba(128, 128, 128, 0.00001)'})
    ciderdisc.forEach((disc) => disc.style.visibility = 'hidden')
  }

  function picturescroll() {
    coverimage.style.top = `${window.scrollY/1.5}px`
    if (window.scrollY >= `${(window.innerHeight * .4)}`) {
      secondimage.style.top = `${window.scrollY/2.25 + (window.innerHeight*.82)}px`
      secondimage.style.zIndex = "-3"
    } else {
      secondimage.style.zIndex = "-5"
      secondimage.style.top = `${(window.innerHeight*.82)}px`
    }
    if ((window.scrollY + logoposition) >= afterharvest.offsetTop) {
        navcontainer.style.backgroundColor = 'grey'
        logo.style.height = `${(navcontainer.getBoundingClientRect().height * 3/4)}px`
        logo.style.width = `${(navcontainer.getBoundingClientRect().height * 3/4)}px`
        logo.style.top = `${(navcontainer.getBoundingClientRect().height * 1/8)}px`
        logo.style.left = `${(navcontainer.getBoundingClientRect().height * 1/4)}px`
    } else {
      navcontainer.style.backgroundColor = ''
      logo.style.height = '100px'
      logo.style.width = '100px'
      logo.style.top = '25px'
      logo.style.left = '50px'
    }
  }
  ciders.forEach((cider) => cider.addEventListener('mouseout', removeCider))
  ciders.forEach((cider) => cider.addEventListener('mouseover', selectCider))
  ciders.forEach((cider) => cider.addEventListener('click', selectCider))
  window.addEventListener('scroll', debounce(picturescroll))
})
