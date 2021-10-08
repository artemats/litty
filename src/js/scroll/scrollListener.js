import { locoScroll } from "./locoScroll";
import {hideGrid, showGrid} from "../common/switchVisibilityGrid";
import {pauseHomeHeroVideo, playHomeHeroVideo} from "../common/home/togglePlayingHomeVideo";
import {setDarkColorTheme, setWhiteColoTheme} from "../common/switchColorTheme";
import {switchMotorcycles} from "../common/switchMotorcycles";
import {switchHeaderNav} from "../common/switchHeaderNav";

export const scrollListener = () => {

	locoScroll.on('call', (func, dir, obj) => {
		/*
		Detect home hero section
		 */
		if(func === 'homeHero' && dir === 'enter') {
			// console.log('scroll enter to home page');
			showGrid();
			playHomeHeroVideo();
			switchMotorcycles(obj);
		}
		/*
		Detect home motorcycle sections
		 */
		if(func === 'homeMotorcycle' && dir === 'enter') {
			// console.log('scroll enter to motorcycle - ', obj);
			hideGrid();
			pauseHomeHeroVideo();
			switchMotorcycles(obj);
		}
		/*
		Switch color theme
		 */
		if(func === 'switchToWhiteColorTheme' && dir === 'enter') {
			setWhiteColoTheme();
		}
		if(func === 'switchToWhiteColorTheme' && dir === 'exit') {
			setDarkColorTheme();
		}

		/*
		About banner section on home page
		 */
		if(func === 'homeAboutBanner' && dir === 'enter') {
			switchMotorcycles(obj);
			hideGrid();
		}

		if(func === 'homeAbout' && dir === 'enter') {
			showGrid();
		}

		if(func === 'homeVideos' && dir === 'enter') {
			hideGrid();
		}
		if(func === 'homeVideos' && dir === 'exit') {
			showGrid();
		}

		/*
		Switch header nav with footer visible on scroll
		 */
		if(func === 'footer' && dir === 'enter') {
			switchHeaderNav(0);
		}
		if(func === 'footer' && dir === 'exit') {
			switchHeaderNav(1)
		}

	});

};