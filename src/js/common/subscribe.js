import { TweenLite } from 'gsap';
import { locoScroll } from '../scroll/locoScroll';
const form = document.querySelector('#subscribe-form');

if(!!form) {

	const input = form.querySelector('input');
	const closeElements = document.querySelectorAll('.modal-close-elem');

	form.addEventListener('submit', (e) => {

		e.preventDefault();

		if(!!input.value) {
			openModalThank();
		}

	});

	for(let i = 0; i < closeElements.length; i++) {
		closeElements[i].addEventListener('click', () => {
			closeModalThank();
		});
	}

}

export const openModalThank = () => {
	const modal = document.querySelector('#thank');
	modal.style.display = 'block';
	TweenLite.to(modal, {
		opacity: 1,
		onComplete: () => {
			locoScroll.stop();
		}
	});
}

export const closeModalThank = () => {
	const modal = document.querySelector('#thank');
	TweenLite.to(modal, {
		opacity: 1,
		onComplete: () => {
			modal.style.display = 'none';
			locoScroll.start();
		}
	});
}