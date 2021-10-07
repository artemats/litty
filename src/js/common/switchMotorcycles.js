import { TweenLite } from 'gsap';
import {transitionConstants} from "../constants/transition";

export const switchMotorcycles = (obj) => {

	const motorcycles = document.querySelectorAll('.motorcycle-item-image');
	const motorcycleDescriptions = document.querySelectorAll('.motorcycle-description');
	const motorcycleCircles = document.querySelectorAll('.motorcycle-item-border');
	const motorcycleBgs = document.querySelectorAll('.motorcycles-bg-slide');

	if(!!obj.el.id) {

		for(let i = 0; i < motorcycles.length; i++) {
			if(motorcycles[i].getAttribute('data-id') === obj.el.id) {
				showBg(motorcycleBgs[i], motorcycles[i]);
				showMotorcycle(motorcycles[i]);
				drawCircle(motorcycleCircles[i]);
				showDescription(motorcycleDescriptions[i]);
			} else {
				hideBg(motorcycleBgs[i]);
				eraseCircle(motorcycleCircles[i]);
				hideMotorcycle(motorcycles[i]);
				hideDescription(motorcycleDescriptions[i]);
			}
		}

	} else {
		for(let i = 0; i < motorcycles.length; i++) {
			eraseCircle(motorcycleCircles[i]);
			hideBg(motorcycleBgs[i]);
			hideMotorcycle(motorcycles[i]);
			hideDescription(motorcycleDescriptions[i]);
		}
	}
};

const showMotorcycle = (motorcycle) => {
	TweenLite.set(motorcycle, {
		x: -100,
	});
	TweenLite.to(motorcycle, {
		delay: 1,
		opacity: 1,
		x: 0,
		duration: transitionConstants.move.duration,
		ease: transitionConstants.move.ease,
	});
};

const hideMotorcycle = (motorcycle) => {
	TweenLite.to(motorcycle, {
		opacity: 0,
		duration: transitionConstants.move.duration,
		ease: transitionConstants.move.ease,
	});
};

const drawCircle = (circle) => {
	if(!!circle) {
		TweenLite.set(circle.querySelector('path'), {
			opacity: 1,
			delay: 1.5,
			onComplete: () => {
				TweenLite.to(circle.querySelector('path'), {
					strokeDashoffset: 0,
					duration: transitionConstants.draw.duration,
					ease: transitionConstants.draw.ease,
				});
			}
		});
	}
};

const eraseCircle = (circle) => {
	if(!!circle) {
		TweenLite.to(circle.querySelector('path'), {
			opacity: 0,
			duration: 0.1,
			onComplete: () => {
				TweenLite.set(circle.querySelector('path'), {
					strokeDashoffset: 1670,
				});
			}
		});
	}
};

const showBg = (bg) => {
	TweenLite.to(bg, {
		opacity: 1,
		scale: 1,
		delay: 1,
		duration: transitionConstants.draw.duration,
		ease: transitionConstants.draw.ease,
	});
};

const hideBg = (bg) => {
	TweenLite.to(bg, {
		opacity: 0,
		scale: 1.1,
		duration: transitionConstants.opacity.duration,
		ease: transitionConstants.opacity.ease,
	});
};

const showDescription = (description) => {
	let btn = description.querySelector('.btn');
	TweenLite.set(description, {
		opacity: 1,
	});
	let letters = description.querySelectorAll('.word');
	TweenLite.to(letters, {
		delay: 1.5,
		opacity: 1,
		y: 0,
		duration: transitionConstants.text.duration,
		ease: transitionConstants.text.ease,
		stagger: 0.01,
	});
	// show button //
	if(!!btn) {
		TweenLite.to(btn, {
			opacity: 1,
			delay: 2,
			y: 0,
			duration: transitionConstants.text.duration,
			ease: transitionConstants.text.ease,
		});
	}
};

const hideDescription = (description) => {
	let btn = description.querySelector('.btn');
	let letters = description.querySelectorAll('.word');
	TweenLite.to(letters, {
		opacity: 0,
		y: 10,
		duration: transitionConstants.text.duration,
		ease: transitionConstants.text.ease,
		stagger: 0.01,
		onComplete: () => {
			TweenLite.set(description, {
				opacity: 0,
				duration: 0,
			})
		}
	});
	// hide button //
	if(!!btn) {
		TweenLite.to(btn, {
			opacity: 0,
			y: 10,
			duration: transitionConstants.text.duration,
			ease: transitionConstants.text.ease,
		});
	}
};