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
					hideAllTabContents(tabContents, tabButtons);
					tabContent.style.display = 'block';
					tabButtons[i].classList.add('is-active');
					// refresh scroll //
					locoScroll.update();
				}
			});

		}

		for (let i = 0; i < tabContents.length; i++) {
			tabContents[i].setAttribute('data-tab-content-id', `tab-${i}`);
		}

	}

}

const hideAllTabContents = (tabContents, tabButtons) => {
	for(let i = 0; i < tabContents.length; i++) {
		tabContents[i].style.display = 'none';
	}
	for(let i = 0; i < tabButtons.length; i++) {
		tabButtons[i].classList.remove('is-active');
	}
}