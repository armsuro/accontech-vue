import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import './styles/main.scss';

import app from './components/app.vue';
import list from './components/list.vue';
import map from './components/map.vue';

import store from './store';

Vue.component('togo-list', list);
Vue.component('togo-map', map);

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'places'
  }
});

export default new Vue({
	el: '#app',
	store: store,
	render: h => h(app)
});