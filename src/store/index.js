import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import togo_list from './modules/togo_list';

export default new Vuex.Store({
  modules: {
  	togo_list
  }
});