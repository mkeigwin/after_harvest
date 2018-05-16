document.addEventListener("DOMContentLoaded", () => {

  const differentciders = document.querySelectorAll('.selectPic')
  const bottleselect = document.querySelector('.bottleselect')
  const maincider = document.querySelector('.mainBottlePic')
  const ciders = ["Pic/farm.jpg","Pic/regal.jpg","Pic/not.jpg","Pic/wild.jpg"]//make sure to also change in HTML
  ciderDiscriptions = ['The Farmhouse Brett is inoculated using Brettanomyces claussenii, a type of wild yeast found on the skins of fruit.  Brettanomyces yeasts are able to ferment longer chain saccharides and starches resulting in quite dry ciders.  The Farmhouse Brett exhibits the slightly funky characteristics of the yeast with flavors and aromas ranging from pineapple to the traditional Brett "horse blanket".',
                      'The Regal Lager uses lager yeast opposed to the conventional ale yeast.  It is fermented slowly at a cool temperature, finishing in bottle conditioning with a lively carbonation and a crisp mouthfeel.  The lager yeast adds little flavor to the cider letting the natural flavors from the apples creating a pleasantly unique cider.',
                      'The Nottingham is a traditional English style cider fermented with an English ale yeast.  It is naturally carbonated through bottle conditioning.  The Nottingham evenly combines the apples\' tannins, acidity, and sugar creating a well-rounded and balanced cider',
                      'The Wild is the product of natural fermentation.  The wild yeast and bacteria native to Kelly Orchards, which has been the site of apple orchards for over 70 years, gives this cider its unique flavor.  The Wild is slowly fermented at cellar temperatures over the winter months resulting in a unique tart and dry cider truly exhibiting the terroir of the orchard.']
  ciderAPVs = ['5.0% ABV','5.5% ABV','5.1% ABV','5.4% ABV']
  ciderNames = ['Farmhouse Brett','Regal Lager','Nottingham','Wild']
  let timer = 1
  let pictureCurrentlyOn = 1
  const bottlecontainer = document.querySelector('.bottlecontainer')
  const bottleInfo = document.querySelector('.bottleInfo')
  let picClicked
  const moreInfoPic = document.querySelector('.moreInfoPic')
  const closeButton = document.querySelector('.bottleClose')
  const coverimage = document.querySelector('.coverpage')
  const secondimage = document.querySelector('.page2')
  const afterharvest = document.querySelector('#title')
  const logo = document.querySelector('#logo')
  const navcontainer = document.querySelector('.navcontainer')
  let logoposition = logo.offsetTop + logo.height
  const finalPic = document.querySelector('.finalpic')
  const mailbutton = document.querySelector('#mailbutton')
  const navname = document.querySelector('.afterharvest')
  const cidername = document.querySelector('.cidername')
  const ciderapv = document.querySelector('.ciderapv')

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
    maincider.style.backgroundImage = `url(${ciders[e.target.id]})`
    if (pictureCurrentlyOn >= (ciders.length)) {
      pictureCurrentlyOn = 0
    } else {
      pictureCurrentlyOn = parseInt(e.target.id) + 1
    }
    timer = 1
  }



  setInterval(() => {
 if (timer >= 5) {
      maincider.style.backgroundImage = `url(${ciders[pictureCurrentlyOn]})`
      cidername.innerHTML = ciderNames[pictureCurrentlyOn]
      ciderapv.innerHTML = ciderAPVs[pictureCurrentlyOn]
      pictureCurrentlyOn++
      timer=0
    }
    timer++
    if (pictureCurrentlyOn > (ciders.length-1)) {
      pictureCurrentlyOn = 0
    }
  }, 1000);

  function picturescroll() {
    if ((window.scrollY + logoposition) >= afterharvest.offsetTop) {
      navcontainer.style.backgroundColor = 'rgba(28, 28, 29, 1)'
      logo.style.height = `${(navcontainer.getBoundingClientRect().height * 3/4)}px`
      logo.style.width = `${(navcontainer.getBoundingClientRect().height * 3/4)}px`
      logo.style.top = `${(navcontainer.getBoundingClientRect().height * 1/8)}px`
      logo.style.left = `${(navcontainer.getBoundingClientRect().height * 1/4)}px`
      navname.style.opacity = "1"
    } else {
      navcontainer.style.backgroundColor = ''
      logo.style.height = '100px'
      logo.style.width = '100px'
      logo.style.top = '25px'
      logo.style.left = '50px'
      navname.style.opacity = "0"
    }
  }

    function openDisc() {
      picClicked = pictureCurrentlyOn - 1
      if (picClicked < 0) {
        picClicked = ciders.length - 1
      }
      moreInfoPic.style.backgroundImage = `url(${ciders[picClicked]})`
      moreInfoPic.style.height = `${maincider.getBoundingClientRect().height}px`
      moreInfoPic.style.width = `${maincider.getBoundingClientRect().width}px`
      bottleInfo.style.display = 'block'
      closeButton.style.display = 'none'
      maincider.style.display = 'none'
      bottleselect.style.display = 'none'
      setTimeout(()=>{
      bottlecontainer.style.height = '80vh'
      bottlecontainer.style.width = '50vw'
      moreInfoPic.style.width = '30vw'
      moreInfoPic.style.height = '30vh'
      bottleInfo.style.display = 'flex'
      },0001)
      setTimeout(()=>{
        closeBox()
        closeButton.style.display = 'block'
        // this is where I'd append discriptions of cider
      },500)
    }

    function closeBox() {
        closeButton.style.top = `${bottleInfo.offsetTop}px`
        if (window.innerWidth > 1000) {
          closeButton.style.left = `${bottleInfo.offsetLeft + (bottleInfo.getBoundingClientRect().width*(9/10) - closeButton.getBoundingClientRect().width)}px`
          console.log('got here')
        } else {
          closeButton.style.left = `${bottleInfo.offsetLeft + (bottleInfo.getBoundingClientRect().width*(7/8) - closeButton.getBoundingClientRect().width)}px`
        }
    }

    function close(){
      bottleInfo.style.display = 'none'
      maincider.style.display = 'flex'
      bottleselect.style.display = 'flex'
      bottlecontainer.style.height = '70vh'
      bottlecontainer.style.width = '80vw'
      timer=1
      pictureCurrentlyOn=picClicked
      maincider.style.backgroundImage = `url(${ciders[pictureCurrentlyOn]})`
      pictureCurrentlyOn++
      if (pictureCurrentlyOn > (ciders.length-1)) {
        pictureCurrentlyOn = 0
      }
    }


  debounce(picturescroll)
  resizeWindow()
  window.addEventListener('scroll', debounce(picturescroll))
  window.addEventListener("resize", resizeWindow,picturescroll,closeBox)
  window.addEventListener("resize", closeBox)
  closeButton.addEventListener('click', close)
  differentciders.forEach((cider) => cider.addEventListener('click', selectCider))
  differentciders.forEach((cider) => cider.addEventListener('mouseover', selectCider))
  maincider.addEventListener('click', openDisc)
  mailbutton.addEventListener('click', () => location.href = 'mailto:info@afterharvestcider.com?subject=After Harvest Inquiry')
})
