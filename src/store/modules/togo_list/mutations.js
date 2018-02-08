export default {
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