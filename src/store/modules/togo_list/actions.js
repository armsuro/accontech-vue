import Ajax from '../../../helpers/Ajax';

const parseItem = (item) => {
	return {
		'id': parseInt(item.id),
		'title': item.title,
		'lat': parseFloat(item.lat),
		'lng': parseFloat(item.lng),
		'is_visited': Boolean(parseInt(item.is_visited))
	}
}

export default {
	fetchItems({commit}) {
		return Ajax.get(`/togo-list`)
			.then(response => commit('setItems', response.data.map(parseItem)))
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
			.then(response => commit('addItem', parseItem(response.data)))
			.catch(error => {
				console.log(error);
			});
	},
	updateItem({commit}, data) {
		const payload = {
			'title': data.title,
			'lat': data.lat,
			'lng': data.lng,
			'is_visited': data.is_visited
		};

		return Ajax.put(`/togo-list/${data.id}`, payload)
			.then(response => commit('setItem', parseItem(response.data)))
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
}