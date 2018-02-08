<script>
import { mapState } from 'vuex';

export default {
	computed: mapState({
		list: (state) => state.togo_list.items
	}),
	methods: {
		deleteItem(item) {
			this.$emit('onDeleteButtonClick', item);
		}
	}
}
</script>

<template>
	<ul>
		<li
			v-for="togo in list"
		>
			<span class="remove-button" @click="deleteItem(togo)">X</span>
			<input v-model="togo.title" class="title-input" />
		</li>
	</ul>
</template>