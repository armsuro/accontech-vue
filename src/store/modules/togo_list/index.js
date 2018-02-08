import Ajax from '../../../helpers/Ajax';

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
			id: 2,
			title: 'Place 22',
			lat: 44.44,
			lng: 44.43,
			is_visited: false
		}]
 	},
	actions: {
		fetchItems({commit}) {
			return Ajax.get(`/togo-list`)
				.then(response => commit('setItems', response.data))
				.catch(error => {
					console.log("error", error);
				});
		},
		createItem({commit}, data) {
			data.is_visited = false;

			return commit('addItem', data);
		},
		updateItem({commit}, data) {
			console.log('update called', data);
			return commit('setItem', data);
		},
		deleteItem({commit}, data) {
			return commit('popItem', data);
		}
	},
	mutations: {
		setItems(state, items) {
			return state.items = items;
		},
		addItem(state, item) {
			return state.items.push(item);
		},
		setItem(state, item) {
			state.items.forEach((el, index) => {
				if ( el.id == item.id ) return state.items[index] = item;
			});
		},
		popItem(state, item) {
			state.items.forEach((el, index) => {
				if ( el.id == item.id ) return state.items.splice(index, 1);
			});
		}
	}
}