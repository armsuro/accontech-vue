import Vue from 'vue';

import './styles/main.scss';

import app from './components/app.vue';

export default new Vue({
	el: '#app',
	render: h => h(app)
});