import Splide from "@splidejs/splide";

export const initHotCarousel = () => {
	if(!!document.querySelector('#hot-products-carousel')) {
		const hotCarousel = new Splide('#hot-products-carousel', {
			type: 'loop',
			perPage: 3,
			rewind: true,
			arrows: true,
			pagination: false,
			speed: 1000,
			easing: 'ease',
			breakpoints: {
				991: {
					perPage: 2,
				},
				575: {
					perPage: 1,
					autoWidth: true,
					focus: 'center'
				},
			}
		}).mount();
	}
}