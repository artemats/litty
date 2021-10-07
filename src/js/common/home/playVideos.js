import { TweenLite } from 'gsap';
import {locoScroll} from "../../scroll/locoScroll";

export const playVideos = () => {
	const videos = document.querySelectorAll('.home-video-item');
	if(videos.length) {
		for(let i = 0; i < videos.length; i++) {

			videos[i].addEventListener('click', () => {

				let video = videos[i];

				videos[i].classList.add('is-playing');

				let locoX = locoScroll.scroll.instance.scroll.x;
				// let videoXY = {
				// 	x: video.getBoundingClientRect().x,
				// 	y: video.getBoundingClientRect().y,
				// };
				let win = {
					width: window.innerWidth,
					height: window.innerHeight,
				};

				// console.log('locomotive x - ', locoX);
				// console.log('video - ', video);
				// console.log('video position - ', videoXY);
				// console.log('window - ', win);

				let videoXY = {
					x: video.getBoundingClientRect().x,
					y: video.getBoundingClientRect().y,
				};

				TweenLite.to(video, {
					y: ( 0 - videoXY.y ),
					x: ( 0 - videoXY.x ),
					width: win.width,
					height: win.height,
				});

				// locoScroll.scrollTo(document.querySelector('#home-videos'), {
				// 	callback: () => {
				// 		locoScroll.update();
				//
				// 	}
				// });

			});

		}
	}
}

const playVideo = (video) => {

};

const pauseVideo = (video) => {

};