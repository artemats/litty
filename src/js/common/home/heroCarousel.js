import Splide from "@splidejs/splide";

export const initHeroCarousel = () => {
	if(!!document.querySelector('.hero-carousel')) {
		const heroDOM = document.querySelector('#home-hero');
		const currentDOMs = document.querySelectorAll('.banner-counter-current');
		const totalDOMs = document.querySelectorAll('.banner-counter-total');
		const slidesDOMs = document.querySelectorAll('.hero-carousel-slide');
		let total = slidesDOMs.length - 1;
		const heroCarousel = new Splide('#hero-carousel', {
			type: 'fade',
			perPage: 1,
			rewind: true,
			autoWidth: false,
			arrows: false,
			pagination: false,
			speed: 1400,
			easing: 'ease',
			autoplay: true,
			interval: 5000,
			resetProgress: true,
			pauseOnHover: false,
			pauseOnFocus: false,
		}).mount();
		// setup first slides //
		slidesDOMs[0].classList.add('center');
		slidesDOMs[1].classList.add('next');
		slidesDOMs[slidesDOMs.length - 1].classList.add('prev');

		heroCarousel.on( 'move', function (current) {
			let next = current < total ? current + 1 : 0;
			let prev = current > 0 ? current - 1 : total;
			for(let i = 0; i < slidesDOMs.length; i++) {
				slidesDOMs[i].classList.remove('center', 'prev', 'next');
			}
			slidesDOMs[current].classList.add('center');
			slidesDOMs[prev].classList.add('prev');
			slidesDOMs[next].classList.add('next');
			heroDOM.setAttribute('data-slide', `${current}`);
		});
		// set current number of slide //
		for(let i = 0; i < currentDOMs.length; i++) {
			currentDOMs[i].innerHTML = `${i + 1}`;
		}
		// set total numbers of slides //
		for(let i = 0; i < totalDOMs.length; i++) {
			totalDOMs[i].innerHTML = `${currentDOMs.length}`;
		}

		if(window.innerWidth <= 991) {
			heroCarousel.destroy();
		}
	}
}