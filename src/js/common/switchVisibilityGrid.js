import { TweenLite } from 'gsap';
import {transitionConstants} from "../constants/transition";

export const hideGrid = () => {

	const grid = document.querySelector('.grid');

	if(!!grid) {
		TweenLite.to(grid, {
			opacity: 0,
			duration: transitionConstants.opacity.duration,
			ease: transitionConstants.opacity.ease,
		});
	}

};

export const showGrid = () => {

	const grid = document.querySelector('.grid');

	if(!!grid) {
		TweenLite.to(grid, {
			opacity: 0.1,
			duration: transitionConstants.opacity.duration,
			ease: transitionConstants.opacity.ease,
		});
	}
}