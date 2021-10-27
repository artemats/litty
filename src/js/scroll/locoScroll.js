import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {closeNav} from "../common/toggleNav";

const scrollContainer = document.querySelector('#scroll-container');
gsap.registerPlugin(ScrollTrigger);
export const locoScroll = new LocomotiveScroll({
	el: scrollContainer,
	smooth: true,
	lerp: 0.07,
	tablet: {
		smooth: false,
	},
	smartphone: {
		smooth: false,
	},
});

locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('#scroll-container', {
	scrollTop(value) {
		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	},
	pinType: scrollContainer.style.transform ? 'transform' : 'fixed'
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();

window.addEventListener('scroll', function(e) {
	closeNav();
});