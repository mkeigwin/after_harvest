document.addEventListener("DOMContentLoaded", () => {

  const differentciders = document.querySelectorAll('.selectPic')
  const bottleselect = document.querySelector('.bottleselect')
  const maincider = document.querySelector('.mainBottlePic')
  const ciders = ["Pic/farm.jpg","Pic/regal.jpg","Pic/not.jpg","Pic/wild.jpg","Pic/blue.JPG","Pic/freestone.jpg","Pic/galena.JPG","Pic/staghorn.jpg"]//make sure to also change in HTML
  ciderDiscriptions = ['The Farmhouse Brett is inoculated using Brettanomyces claussenii, a type of wild yeast found on the skins of fruit.  Brettanomyces yeasts are able to ferment longer chain saccharides and starches resulting in quite dry ciders.  The Farmhouse Brett exhibits the slightly funky characteristics of the yeast with flavors and aromas ranging from pineapple to the traditional Brett "horse blanket".',
                      'The Regal Lager uses lager yeast opposed to the conventional ale yeast.  It is fermented slowly at a cool temperature, finishing in bottle conditioning with a lively carbonation and a crisp mouthfeel.  The lager yeast adds little flavor to the cider letting the natural flavors from the apples create a pleasantly unique cider.',
                      'The Nottingham is a traditional English style cider fermented with an English ale yeast.  It is naturally carbonated through bottle conditioning.  The Nottingham evenly combines the apples\' tannins, acidity, and sugar creating a well-rounded and balanced cider',
                      'The Wild is the product of natural fermentation.  The wild yeast and bacteria native to Kelly Orchards, which has been the site of apple orchards for over 70 years, gives this cider its unique flavor.  The Wild is slowly fermented at cellar temperatures over the winter months resulting in a unique tart and dry cider truly exhibiting the terroir of the orchard.',
                      'Royal Blue is wild fermented in primary then fruited with whole Kelly Orchards blueberries during secondary for several months.  The resulting cider is a beautiful pinkish dry cider with clean acidic blueberry notes.  Wild yeast on the blueberry skins adds to the unique flavor of this cider',
                      'Freestone Peach is wild fermented in primary then fruited with ripe Kelly Orchards peaches for secondary fermentation.  These juicy peaches lend their hazy texture to the cider and when fermented create a pleasant near-dry cider reminiscent of a hot summer day in the orchard.',
                      'The Galena is wild fermented in primary and dry hopped during secondary using whole Galena hops grown, harvested, and dried by us.  Galena hops are a high-alpha variety resulting in a clean and balanced cider with slight citrus and grass aromas.',
                      'Staghorn is wild fermented in primary then the fuzzy bright red berries of the staghorn sumac are added for secondary fermentation.  The staghorn sumac is a wild shrub native to Maine.  The berries are very tangy and tannic by themselves yet bring a balanced raspberry lemonade flavor to the cider.']
  ciderAPVs = ['5.0% ABV','5.5% ABV','5.1% ABV','5.4% ABV','5.5% ABV','5.5% ABV','5.3% ABV','5.5% ABV']
  ciderNames = ['Farmhouse Brett','Regal Lager','Nottingham','Wild','Royal Blue','Freestone Peach', 'Galena', 'Staghorn']
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
  // const mailbutton = document.querySelector('#mailbutton')
  const navname = document.querySelector('.afterharvest')
  const cidername = document.querySelector('.cidername')
  const ciderapv = document.querySelector('.ciderapv')
  const slider = document.querySelector('.slider')
  const details = document.querySelector('.details')
  const focusName = document.querySelector('.focusName')
  const allTheDetails = document.querySelector('.allTheDetails')
  const fullDescButton = document.querySelector('.fullDescButton')
  const contact = document.querySelector('#contact')
  const buffer = document.querySelector('.buffer')
  let scrollAway = 0
  let openedDisc = 0
  let sectionCoords
  const navItem = document.querySelectorAll('#navBar li')
  const casey = document.querySelector('.casey')
  const page3 = document.querySelector('.page3')
  const footer = document.querySelector('footer')


  function resizeWindow() {
    logoposition = logo.offsetTop + logo.height;
    navScrollCoord()
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
    cidername.innerHTML = ciderNames[e.target.id]
    ciderapv.innerHTML = ciderAPVs[e.target.id]
    if (pictureCurrentlyOn >= (ciders.length)) {
      pictureCurrentlyOn = 0
    } else {
      pictureCurrentlyOn = parseInt(e.target.id) + 1
    }
    timer = 1
  }


// Add api key to const and uncommect script. Also to add map comment out #storelist and uncomment #map in html

// const API_KEY= 'add key here'
// var script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
// document.getElementsByTagName('script')[0].parentNode.appendChild(script);




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
    if (window.scrollY > (buffer.offsetTop - window.innerHeight/10) && window.scrollY < contact.offsetTop) {
      scrollAway = 1
    }

    if ((window.scrollY < (buffer.offsetTop - window.innerHeight/10) || window.scrollY > contact.offsetTop) && scrollAway === 1 && openedDisc === 1) {
      close()
      scrollAway = 0
      console.log('getting here')
    }

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
      openedDisc = 1
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
      fullDescButton.style.display = 'none'
      setTimeout(()=>{
        bottlecontainer.style.height = '80vh'
        bottlecontainer.style.width = '50vw'
        moreInfoPic.style.width = '200px'
        moreInfoPic.style.height = '200px'
        bottleInfo.style.display = 'flex'
        focusName.innerHTML = ciderNames[picClicked]
        allTheDetails.innerHTML = ciderDiscriptions[picClicked]
        allTheDetails.classList.add("bigFirst")
      },0001)
      setTimeout(()=>{
        closeBox()
        closeButton.style.display = 'block'
      },500)
    }

    function closeBox() {
        closeButton.style.top = `${bottleInfo.offsetTop}px`
        if (window.innerWidth > 1000) {
          closeButton.style.left = `${bottleInfo.offsetLeft + (bottleInfo.getBoundingClientRect().width*(9/10) - closeButton.getBoundingClientRect().width)}px`
        } else {
          closeButton.style.left = `${bottleInfo.offsetLeft + (bottleInfo.getBoundingClientRect().width*(7/8) - closeButton.getBoundingClientRect().width)}px`
        }
    }

    function close(){
      openedDisc = 0
      console.log(openedDisc)
      bottleInfo.style.display = 'none'
      maincider.style.display = 'flex'
      bottleselect.style.display = 'flex'
      bottlecontainer.style.height = '70vh'
      bottlecontainer.style.width = '80vw'
      timer=1
      pictureCurrentlyOn=picClicked
      maincider.style.backgroundImage = `url(${ciders[pictureCurrentlyOn]})`
      focusName.innerHTML = ""
      allTheDetails.innerHTML = ""
      cidername.innerHTML = ciderNames[pictureCurrentlyOn]
      ciderapv.innerHTML = ciderAPVs[pictureCurrentlyOn]
      details.style.width = '100%'
      pictureCurrentlyOn++
      fullDescButton.style.display = 'block'
      if (pictureCurrentlyOn > (ciders.length-1)) {
        pictureCurrentlyOn = 0
      }
    }


//credit for scrolling function to http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation
  function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        increment = 20;
    var animateScroll = function(elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, increment);
        }
    };
    animateScroll(0);
  }
    function easeInOut(currentTime, start, change, duration) {
      currentTime /= duration / 2;
      if (currentTime < 1) {
          return change / 2 * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  }

  function navScrollCoord() {
    sectionCoords = [0,casey.offsetTop - navcontainer.offsetHeight,page3.offsetTop - navcontainer.offsetHeight,footer.offsetTop - navcontainer.offsetHeight + 10]
  }

navItem[0].addEventListener('click',()=> {scrollTo(document.documentElement, sectionCoords[0], 1250)})
navItem[1].addEventListener('click',()=> {scrollTo(document.documentElement, sectionCoords[1], 1250)})
navItem[2].addEventListener('click',()=> {scrollTo(document.documentElement, sectionCoords[2], 1250)})
navItem[3].addEventListener('click',()=> {scrollTo(document.documentElement, sectionCoords[3], 1250)})

  debounce(picturescroll)
  resizeWindow()
  picturescroll()
  navScrollCoord()
  window.addEventListener('scroll', debounce(picturescroll))
  window.addEventListener("resize", resizeWindow,picturescroll,closeBox)
  window.addEventListener("resize", closeBox)
  closeButton.addEventListener('click', close)
  differentciders.forEach((cider) => cider.addEventListener('click', selectCider))
  differentciders.forEach((cider) => cider.addEventListener('mouseover', selectCider))
  maincider.addEventListener('click', openDisc)
  fullDescButton.addEventListener('click', openDisc)
  // mailbutton.addEventListener('click', () => location.href = 'mailto:info@afterharvestcider.com?subject=After Harvest Inquiry')
})
