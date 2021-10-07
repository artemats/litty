import Highway from '@dogstudio/highway';

class AboutRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to about');
	}
}

export default AboutRenderer;