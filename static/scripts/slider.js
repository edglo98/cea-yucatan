const $slider = document.getElementById('slider')
const $sliderMenu = document.getElementById('sliderMenu')

let options = {
  root: slider,
  rootMargin: '0px',
  threshold: 0.8
}

function sliderIntersectionCallback(entries, observer) {
  const slides = observer.root.children
  const entry = entries[0]

  Array.from(slides).forEach((slide, index)=>{
    if(slide === entry.target){
      $sliderMenu.children[index].classList.add('slider-menu__active')
    }else{
      $sliderMenu.children[index].classList.remove('slider-menu__active')
    }
  })
}

let observer = new IntersectionObserver(sliderIntersectionCallback, options)

let $listOfSlides = $slider.querySelectorAll('.slider-item')

$listOfSlides.forEach(slide=>{
  observer.observe(slide)
})

const $listButtonsSlides = $sliderMenu.querySelectorAll('li')

$listButtonsSlides.forEach(slideButton => {
  slideButton.addEventListener('click', element =>{
    const indexElement = Array.prototype.indexOf.call(element.target.parentNode.children, element.target)
    const slideToGo = $listOfSlides[indexElement]
    $slider.scrollLeft = slideToGo.offsetLeft
  })
})
