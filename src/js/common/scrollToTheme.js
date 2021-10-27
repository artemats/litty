import {locoScroll} from "../scroll/locoScroll";

export const initScrollNavOnClick = () => {

const scrollToButtons = document.querySelectorAll('.scroll-to');

for(let i = 0; i < scrollToButtons.length; i++) {

	scrollToButtons[i].addEventListener('click', (event) => {
		event.preventDefault();
		let scrollTargetValue = scrollToButtons[i].getAttribute('data-scroll');
		let scrollTarget = document.querySelector(scrollTargetValue);

		locoScroll.scrollTo(scrollTarget);

	});

}

}