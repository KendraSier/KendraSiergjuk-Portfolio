const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
	  //Mobile device
    navbar.setAttribute('inert', '')
  }
  else{
    // When someone expands it to a desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

updateNavbar(media)

//NAVBAR



var swiper = new Swiper(".swiper",{
	effect: "coverflow",
	grabCursor:true,
	centeredSlides:true,
	initialSlides: 2,
	speed: 600,
	preventClick: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 80,
		depth: 350,
		modifier: 1,
		slideShadows: true,
		},
	on: {
		click(event) {
			swiper.slideTo(this.clickedIndex)
		},
	},
	pagination: {
	el: ".swiper-pagination"
	},
})