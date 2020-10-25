import './App.scss';
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Template'
	}
});

window.app = app;

export default app;