import { TweenLite } from 'gsap';
import {transitionConstants} from "../constants/transition";

export const setWhiteColoTheme = () => {

	TweenLite.to(document.body, {
		color: '#111111',
		duration: transitionConstants.color.duration,
		ease: transitionConstants.color.ease,
	});

}

export const setDarkColorTheme = () => {
	TweenLite.to(document.body, {
		color: '#FFFFFF',
		duration: transitionConstants.color.duration,
		ease: transitionConstants.color.ease,
	});
}