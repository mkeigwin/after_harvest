document.addEventListener("DOMContentLoaded", () => {

  const ciders = document.querySelectorAll('.ciders')
  const ciderdisc = document.querySelectorAll('.ciderdisc')
  const coverimage = document.querySelector('.coverpage')
  const secondimage = document.querySelector('.page2')
  const afterharvest = document.querySelector('#title')
  const logo = document.querySelector('#logo')
  const navcontainer = document.querySelector('.navcontainer')
  let logoposition = logo.offsetTop + logo.height
  const ciderinfo = document.querySelectorAll('.ciderinfo')
  const finalPic = document.querySelector('.finalpic')
  const mailbutton = document.querySelector('#mailbutton')

  function resizeWindow() {
    logoposition = logo.offsetTop + logo.height
  }

  function debounce(func, wait = 0, immediate = true) {
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
    // is there a way to use a foreach to do this in one step?
    e.target.children[0].style.visibility = 'visible'
    e.target.children[1].style.visibility = 'visible'
    if (window.innerWidth/2.1 > e.target.offsetLeft) {
      e.target.children[1].style.left = '55vw'
    } else {
      e.target.children[1].style.left = '10vw'
    }
  }

  function removeCider(){
    ciders.forEach((cider) => {cider.style.backgroundColor = 'rgba(128, 128, 128, 0.00001)'})
    ciderdisc.forEach((disc) => disc.style.visibility = 'hidden')
    ciderinfo.forEach((info) => info.style.visibility = 'hidden')
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
    if (window.scrollY >= `${(window.innerHeight * 2.2)}`) {
      finalPic.style.top = `${window.scrollY/1.5 + (window.innerHeight*1.1)}px`
      finalPic.style.zIndex = "-2"
    } else {
      finalPic.style.top = `${(window.innerHeight*1.1)}px`
      finalPic.style.zIndex = "-4"

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
  window.addEventListener("resize", resizeWindow,picturescroll);
  mailbutton.addEventListener('click', () => location.href = 'mailto:info@afterharvestcider.com?subject=After Harvest Inquiry')
})
