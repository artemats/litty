import { TweenLite } from 'gsap';
import {locoScroll} from "../scroll/locoScroll";

export const initTabs = () => {

	if(!!document.querySelector('.tabs-btn')) {

		const tabButtons = document.querySelectorAll('.tabs-btn');
		const tabContents = document.querySelectorAll('.tabs-content');

		tabButtons[0].classList.add('is-active');

		for (let i = 0; i < tabButtons.length; i++) {
			tabButtons[i].setAttribute('data-tab-btn-id', `tab-${i}`);

			tabButtons[i].addEventListener('click', () => {

				let tabId = tabButtons[i].getAttribute('data-tab-btn-id');
				let tabContent = document.querySelector(`.tabs-content[data-tab-content-id="${tabId}"]`);
				if (!!tabContent) {
					// hideAllTabContents(tabContents, tabButtons);

					for(let i = 0; i < tabContents.length; i++) {
						TweenLite.to(tabContents[i], {
							opacity: 0,
							duration: 0.2,
							onComplete: () => {
								tabContents[i].style.display = 'none';
								showActiveTab(tabContent);
							},
						});
						// tabContents[i].style.display = 'none';
					}
					for(let i = 0; i < tabButtons.length; i++) {
						tabButtons[i].classList.remove('is-active');
					}

					// tabContent.style.display = 'block';
					tabButtons[i].classList.add('is-active');
				}
			});

		}

		for (let i = 0; i < tabContents.length; i++) {
			tabContents[i].setAttribute('data-tab-content-id', `tab-${i}`);
		}

	}

}

const showActiveTab = (tabContent) => {
	TweenLite.set(tabContent, {
		opacity: 0,
		display: 'block',
		onComplete: () => {

			TweenLite.to(tabContent, {
				opacity: 1,
				duration: 0.5,
			});

			// refresh scroll //
			locoScroll.update();
		},
	});
}

// const hideAllTabContents = (tabContents, tabButtons) => {
// 	for(let i = 0; i < tabContents.length; i++) {
// 		TweenLite.to(tabContents[i], {
// 			opacity: 0,
// 			duration: 0.2,
// 			onComplete: () => {
// 				tabContents[i].style.display = 'none';
// 			},
// 		});
// 		// tabContents[i].style.display = 'none';
// 	}
// 	for(let i = 0; i < tabButtons.length; i++) {
// 		tabButtons[i].classList.remove('is-active');
// 	}
// }