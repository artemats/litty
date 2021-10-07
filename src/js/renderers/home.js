import Highway from '@dogstudio/highway';

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to home');
	}
}

export default HomeRenderer;