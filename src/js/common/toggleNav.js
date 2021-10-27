import { TweenLite } from 'gsap';
import {locoScroll} from "../scroll/locoScroll";

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');

if(!!burger) {
	burger.addEventListener('click', () => {
		burger.classList.contains('is-active') ? closeNav() : openNav();
	});
}

export const openNav = () => {
	burger.classList.add('is-active');
	nav.style.display = 'block';

	locoScroll.stop();

	TweenLite.set(nav, {
		opacity: 0,
		onComplete: () => {
			TweenLite.to(nav, {
				opacity: 1
			});
		}
	});
}

export const closeNav = () => {
	burger.classList.remove('is-active');
	TweenLite.to(nav, {
		opacity: 0,
		onComplete: () => {
			nav.style.display = 'none';
			locoScroll.start();
		}
	});
}