import gsap, { TweenLite, TweenMax } from "gsap";

export const initElasticContent = () => {

	let followY = 0;
	let wh = window.innerHeight;
	let ease = 0.15;

	TweenLite.set('.elastic-text', { transformOrigin: 'center left' });

	// TweenLite.ticker.addEventListener('tick', function() {
	// 	followY += (window.scrollY - followY) * ease;
	//
	// 	let dy = (window.scrollY - followY) / 20;
	// 	dy = Math.min(Math.max(dy, -15), 15);
	// 	TweenLite.set('.elastic-text', { skewY: dy });
	// });

}