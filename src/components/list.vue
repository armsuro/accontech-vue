<script>
import { mapState } from 'vuex';

export default {
	computed: mapState({
		list: (state) => state.togo_list.items
	})
}
</script>

<template>
	<ul>
		<li
			v-for="togo in list"
		>
			{{togo.title}}
		</li>
	</ul>
</template>