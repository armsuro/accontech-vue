import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import config from './config';

import './styles/main.scss';

import app from './components/app.vue';
import list from './components/list.vue';
import map from './components/map.vue';
import marker from './components/marker.vue';

import store from './store';

Vue.component('togo-list', list);
Vue.component('togo-map', map);
Vue.component('togo-marker', marker);

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: config.GOOGLE_MAP_API_KEY,
    libraries: 'places'
  }
});

export default new Vue({
	el: '#app',
	store: store,
	render: h => h(app),
	created() {
		console.log("created", this);
		this.$store.dispatch('togo_list/fetchItems');
	}
});