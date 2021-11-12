import Instafeed from "../libs/instafeed";
import Splide from "@splidejs/splide";

const feed = new Instafeed({
	accessToken: 'IGQVJYZAlB5c2gtSndGSmtoMFJOS0MxaV9vTjZAGRUtNOVQtZAkduS2JxWnlfTGJjNmVwbmx3ZAm95WkpjMUpmSlc2UnEzNkxCWDFkaHREM0hGbHNqMHNfTmNIQjJrQnJTYVlybURlcENWeTdGX3JLNzJuVQZDZD',
	debug: false,
	template: '<li class="instafeed-box splide__slide"><a href="{{link}}" target="_blank" class="instafeed-box-link"><img title="{{caption}}" src="{{image}}" alt="{{id}}"/></a></li>',
});

feed.run();

const instaMoving = () => {

	new Splide('#instafeed-splide', {
		type: 'loop',
		perPage: 1,
		rewind: true,
		arrows: false,
		pagination: false,
		speed: 4000,
		easing: 'linear',
		autoWidth: true,
		autoplay: true,
		interval: 0,
		pauseOnHover: false,
		pauseOnFocus: false,
	}).mount();

};

setTimeout(() => instaMoving(), 1000);