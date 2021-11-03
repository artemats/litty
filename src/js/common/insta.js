import Instafeed from "../libs/instafeed";

const feed = new Instafeed({
	accessToken: 'IGQVJYZAlB5c2gtSndGSmtoMFJOS0MxaV9vTjZAGRUtNOVQtZAkduS2JxWnlfTGJjNmVwbmx3ZAm95WkpjMUpmSlc2UnEzNkxCWDFkaHREM0hGbHNqMHNfTmNIQjJrQnJTYVlybURlcENWeTdGX3JLNzJuVQZDZD',
	debug: false,
	template: '<div class="instafeed-box"><a href="{{link}}" target="_blank" class="instafeed-box-link"><img title="{{caption}}" src="{{image}}" alt="{{id}}"/></a></div>',
});

// feed.run();