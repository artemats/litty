import { TweenLite } from 'gsap';
import {transitionConstants} from "../constants/transition";

export const playHomeHeroVideo = () => {

	const homeHeroVideo = document.querySelector('#hero-video');
	const homeHeroVideoBox = document.querySelector('#home-hero-video');

	if (!!homeHeroVideo) {
		homeHeroVideo.play();
	}
	TweenLite.to(homeHeroVideoBox, {
		opacity: 1,
		duration: transitionConstants.opacity.duration,
		ease: transitionConstants.opacity.ease,
	});

};

export const pauseHomeHeroVideo = () => {

	const homeHeroVideo = document.querySelector('#hero-video');
	const homeHeroVideoBox = document.querySelector('#home-hero-video');

	if (!!homeHeroVideo) {
		homeHeroVideo.pause();
	}
	TweenLite.to(homeHeroVideoBox, {
		opacity: 0,
		duration: transitionConstants.opacity.duration,
		ease: transitionConstants.opacity.ease,
	});

};