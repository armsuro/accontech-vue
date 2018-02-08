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
			const payload = {
				'title': data.title,
				'lat': data.lat,
				'lng': data.lng,
				'is_visited': false
			};

			return Ajax.post('/togo-list', payload)
				.then(response => commit('addItem', response.data))
				.catch(error => {
					console.log(error);
				});
		},
		updateItem({commit}, data) {
			const payload = {
				'title': data.title,
				'lat': data.position.lat,
				'lng': data.position.lng,
				'is_visited': false
			};

			return Ajax.put(`/togo-list/${data.id}`, payload)
				.then(response => commit('setItem', response.data))
				.catch(error => {
					console.log(error);
				});
		},
		deleteItem({commit}, data) {
			return Ajax.delete(`/togo-list/${data.id}`)
				.then(() => commit('popItem', data))
				.catch(error => {
					console.log(error);
				});
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