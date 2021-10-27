import gsap from 'gsap';

export const footerParallax = () => {

	const footer = document.querySelector('.footer');

	if(!!footer && window.innerWidth > 1024) {

		const footerContainer = footer.querySelector('.container');

		const footerTl = gsap.timeline({
			scrollTrigger: {
				trigger: footer,
				scroller: '#scroll-container',
				scrub: true,
			},
		});

		footerTl.fromTo(footerContainer,
			{
				y: -150,
			},
			{
				y: 0,
			});

	}

}