import Vue from 'vue';

import app from './components/app.vue';

console.log("1");

export default new Vue({
	el: '#app',
	render: h => h(app)
});