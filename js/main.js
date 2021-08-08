/* =====================Qualification Tabs==========================*/

const tabs = document.querySelectorAll(`[data-target]`)
    tabContents=document.querySelectorAll(`[data-content]`)

    tabs.forEach(tab=> {
        tab.addEventListener('click',()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent=>{
                tabContent.classlist.remove('qualification__active')
            })
            target.classlist.add('qualification__active')

            tabs.forEach(tab=>{
                tab.classlist.remove('qualification__active')
            })
            tab.classlist.add('qualification__active')
        })
    })

    /* =====================Scroll Section Active Link==========================*/


    const sections = document.querySelectorAll(`section[id]`)

    function scrollActive(){
        const scrollY = window.pageYOffest
            
        sections.forEach(current => {
            const sectionHeight =current.offesetHeight
            const sectionTop = current.offsetTop -50;
            sectionID =current.getAttribute('id')

            if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']') .classlist.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']') .classlist.remove('active__link')
            }

        })
    }
    window.addEventListener('scroll', scrollActive)

    /* =====================Scroll Up==========================*/
// function scrollUp(){
//     const scrollUp = document.getElementById('scroll-up');
//     // when scroll is higher than 560 viewport height, add the show scroll class
//     if(this.scrollY >= 560) scrollUp.classlist.add('show-scroll'); 
//     else scrollUp.classlist.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

    /* =====================Dark Light Theme==========================*/

    // const themeButon = document.getElementById('theme-button')
    // const darkTheme = 'dark-theme'
    // const iconTheme = 'fa-moon'

    // const selectedTheme = localStorage.getItem ('selected-theme')
    // const selectedIcon = localStorage.getItem ('selected-icon')

    // const getCurrentTheme = () => document.body.classlist.contains(darkTheme) ? 'dark': 'light'
    // const getCurrentIcon = () => document.body.classlist.contains(iconTheme) ? 'fa-moon': 'fa-sun'

    // if (selectedTheme){
    //     document.body.classlist[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    //     document.body.classlist[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
    // }

    // Active /deactive theme Manually
    // themeButon.addEventListener('click', () =>{
        // Add or remove the dark /icon theme
        // document.body.classlist.toggle(darkTheme)
        // document.body.classlist.toggle(iconTheme)

    //     themeButon.setItem('selected-theme', getCurrentTheme())
    //     themeButon.setItem('selected-icon', getCurrentIcon())

    // })

 /* =====================Portfolio==========================*/
  /* =====================Portfolio 01==========================*/
  const sliderContainer = document.querySelector('.slider-container')
  const sliderRight = document.querySelector('.right-slide')
  const sliderLeft = document.querySelector('.left-slide')
  const upButton = document.querySelector('.up-button')
  const downButton = document.querySelector('.down-button')
  const slidesLength = document.querySelectorAll('.div').length

  let activeSlideIndex = 0

  sliderLeft.style.top = `-${(slidesLength - 1)* 100}vh`

  upButton.addEventListener('click', () => changeSlide('up'))
  downButton.addEventListener('click', () => changeSlide('down'))

  const changeSlide = (direction) => {
      const slideHeight = sliderContainer.clientHeight
      if(direction === 'up'){
          activeSlideIndex++
          if(activeSlideIndex > slidesLength - 1){
              activeSlideIndex = 0 
          }
      }else if(direction === 'down'){
        activeSlideIndex++
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength -1
        }
    }

      sliderRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
      sliderRight.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`
      
  }