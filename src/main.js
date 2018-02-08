import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import './styles/main.scss';

import app from './components/app.vue';

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'places'
  }
});

export default new Vue({
	el: '#app',
	render: h => h(app)
});