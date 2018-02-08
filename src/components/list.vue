<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
	data() {
		return {
			filterText: ''
		}
	},
	computed: Object.assign({
		filteredItems: (state) => {
			if ( !state.filterText || !state.filterText.length ) return state.list;

			return state.list.filter(item => {
				const title = item.title.toLowerCase();
				return ( title.indexOf(state.filterText) >= 0 ) ? item : false;
			});
		}
	}, mapState({
		list: (state) => state.togo_list.items
	})),
	methods: {
		deleteItem(item) {
			this.$emit('onDeleteButtonClick', item);
		},
		markItemAsVisited(item) {
			item.is_visited = !item.is_visited;
			this.$emit('onMarkAsVisited', item);
		},
		showPlace(item) {
			this.$emit('showToGoPlace', item);
		}
	}
}
</script>

<template>
	<div>
		<div class="list-filter">
			<input type="text" v-model="filterText" placeholder="search togo place." />
		</div>
		<ul>
			<li
				v-for="togo in filteredItems"
				@click="showPlace(togo)"
			>
				<div class="remove-button" @click="deleteItem(togo)"> -x- </div>
				<div class="togo-title">{{ togo.title }}</div>
				<div class="visit-status" v-bind:class="{ visited: togo.is_visited }" @click="markItemAsVisited(togo)"></div>
			</li>
		</ul>
	</div>
</template>