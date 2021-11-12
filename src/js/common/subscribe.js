import Pristine from '../libs/pristine.min';

const form = document.querySelector('#subscribe-form');

const pristine = new Pristine(form, {
	classTo: 'input-container',
	errorClass: 'has-error',
});

if(!!form) {

	form.addEventListener('submit', (e) => {

		if(!pristine.validate()) {
			e.preventDefault();
		}

	});

}