import { TweenLite } from 'gsap';

const moveWrap = document.querySelector('.mousemove-wrap');

if(!!moveWrap) {

	moveWrap.addEventListener('mousemove', (e) => {
		parallaxIt(e, moveWrap.querySelector('.banner-abstract.__1'), -100);
		parallaxIt(e, moveWrap.querySelector('.banner-abstract.__2'), -150);
		parallaxIt(e, moveWrap.querySelector('.banner-abstract.__3'), -200);
	});

	function parallaxIt(e, target, movement) {
		let $this = moveWrap;
		let relX = e.pageX - $this.getBoundingClientRect().left;
		let relY = e.pageY - $this.getBoundingClientRect().top;

		TweenLite.to(target, 0.5, {
			x: (relX - $this.clientWidth / 2) / $this.clientWidth * movement,
			y: (relY - $this.clientHeight / 2) / $this.clientHeight * movement
		});
	}

}