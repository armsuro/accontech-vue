export default {
	namespaced: true,
	state: {
    	items: [{
    		id: 1,
			title: 'Place 11',
			lat: 44.43,
			lng: 44.44,
			is_visited: false
		}, {
			id: 1,
			title: 'Place 22',
			lat: 44.44,
			lng: 44.43,
			is_visited: false
		}]
 	},
	actions: {
		createItem({commit}, data) {
			data.is_visited = false;

			return commit('addItem', data);
		}
	},
	mutations: {
		addItem(state, item) {
			return state.items.push(item);
		}
	}
}