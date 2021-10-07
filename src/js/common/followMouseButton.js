import { TweenLite } from 'gsap';
import {transitionConstants} from "../constants/transition";

let moving = true;

export const followMouseButton = () => {

	const boxes = document.querySelectorAll('.video-wrap');

	for(let i = 0; i < boxes.length; i++){

		const link = boxes[i].querySelector('.video-btn');
		const linkWidth = link.clientWidth;
		const linkHeight = link.clientHeight;

		boxes[i].addEventListener('mousemove', function (event) {
			if(moving) {
				TweenLite.to(link, 1.5, {
					left: event.offsetX - ( linkWidth / 2 ),
					top: event.offsetY - ( linkHeight / 2 ),
					ease: transitionConstants.move.ease,
					duration: transitionConstants.move.duration,
				});
			}
		});
	}
};

export const disableMoving = () => {
	moving = false;
};

export const enableMoving = () => {
	moving = true;
};