import Splide from "@splidejs/splide";

export const initTestimonialsCarousel = () => {

	const carousel = document.querySelector('#testimonials-carousel');
	if(!!carousel) {

		const hotCarousel = new Splide('#testimonials-carousel', {
			type: 'fade',
			perPage: 1,
			rewind: true,
			arrows: true,
			pagination: false,
			speed: 500,
			easing: 'ease',
		}).mount();

		const nextButton = document.querySelector('.testimonials .carousel-arrows-btn.__next');
		const prevButton = document.querySelector('.testimonials .carousel-arrows-btn.__prev');

		nextButton.addEventListener('click', () => {
			carousel.querySelector('.splide__arrow--next').click();
		});

		prevButton.addEventListener('click', () => {
			carousel.querySelector('.splide__arrow--prev').click();
		});

	}
}