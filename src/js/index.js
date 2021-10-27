import '../sass/index.scss';
import {initHeroCarousel} from "./common/home/heroCarousel";
import {initTabs} from "./common/tabs-theme";
import {initHotCarousel} from "./common/home/hotCarousel";
import {initTestimonialsCarousel} from "./common/home/testimonialsCarousel";
import {inputFocus} from "./common/inputFocus";
import {initScrollNavOnClick} from "./common/scrollToTheme";
import './scroll/locoScroll';
import './common/toggleNav';
import {footerParallax} from "./common/parallax/footer";
import {initElasticContent} from "./common/parallax/elasticContent";
import {splittingText} from "./common/splittingText";
import {showTextOnScroll} from "./common/parallax/showTextOnScroll";
import './common/mouseMove';
import './common/subscribe';

splittingText();
initHeroCarousel();
initTabs();
initHotCarousel();
initTestimonialsCarousel();
inputFocus();
initScrollNavOnClick();
footerParallax();
initElasticContent();
showTextOnScroll();

document.addEventListener('DOMContentLoaded', function(event) {
	document.querySelector('#wrapper').classList.remove('is-loading');
});

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
isSafari ? document.body.classList.add('is-safari') : null;