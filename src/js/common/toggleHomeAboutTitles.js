import { TweenLite } from 'gsap';

const titleDOM = document.querySelector('.home-about-title .h-3');
const titleFontSize = getComputedStyle(titleDOM).fontSize;

export const toggleHomeAboutTitles = (title, status, direction) => {

	const label = document.querySelector(`.home-about-label [data-id="${title.el.id}"]`);
	const titleElem = title.el;
	const labelFontSize = getComputedStyle(label).fontSize;

	if(status) {

		console.log('exit', title, direction);

		// TweenLite.to(label, {
		// 	y: '10vmin',
		// 	duration: 1,
		// });
		//
		// TweenLite.to(titleElem, {
		// 	y: 0,
		// 	fontSize: titleFontSize,
		// 	duration: 1,
		// });

	} else {

		console.log('enter', title, direction);

		// TweenLite.to(label, {
		// 	y: 0,
		// 	duration: 1,
		// });
		//
		// TweenLite.to(titleElem, {
		// 	y: '-10vmin',
		// 	fontSize: labelFontSize,
		// 	duration: 0.5,
		// });

	}

}