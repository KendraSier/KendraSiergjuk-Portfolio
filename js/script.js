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

//NAVBAR ABOVE


// IMAGE SLIDE SHOW
//const swiper = new Swiper('.swiper', {
//	direction: 'vertical',
//	loop:true,
//	
//	navigation: {
//		nextEl: '.swipper-button-next',
//		prevEl: 'swiper-button-prev'
//	},
//	
//	scrollbar: {
//		el: '.swiper-scrollbar',
//	},
//});

var swiper = new Swiper(".swiper",{
	effect: "coverflow",
	grabCursor:true,
	centeredSlides:true,
	initialSlides: 2,
	speed: 600,
	loop: true,
	preventClick: true,
	slidesPerView: "auto",
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	
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
});
