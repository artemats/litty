import Highway from '@dogstudio/highway';
import Tween, { Power4 } from 'gsap';
import {locoScroll} from "../scroll/locoScroll";

class Fade extends Highway.Transition {
	out({ from, done }) {
		Tween.fromTo(from,
			{
				opacity: 1,
			},
			{
				duration: 0.5,
				opacity: 0,
				ease: Power4.easeOut,
				onComplete: done,
			});
	}
	in({ from, to, done }) {

		locoScroll.update();
		locoScroll.scrollTo(0, {
			duration: 5,
			disableLerp: true,
			callback: () => locoScroll.update()
		});

		from.remove();
		Tween.fromTo(to,
			{
				opacity: 0,
			},
			{
				duration: 0.5,
				opacity: 1,
				ease: Power4.easeOut,
				onComplete: done,
			});
	}
}

export default Fade;