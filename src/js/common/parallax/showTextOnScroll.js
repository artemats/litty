import gsap, { Power2 } from 'gsap';

export const showTextOnScroll = () => {

	const words = document.querySelectorAll('.word');

	for(let i = 0; i < words.length; i++) {

		const wordTl = gsap.timeline({
			scrollTrigger: {
				trigger: words[i],
				scroller: '#scroll-container',
				scrub: false,
			}
		});

		wordTl
			.set(words[i], {
				y: 50,
				opacity: 0,
			})
			.staggerFromTo(words[i], 1,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: Power2.easeOut,
				}, 0.1);

	}

}