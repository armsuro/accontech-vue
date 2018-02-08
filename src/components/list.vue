<script>
export default {
	data() {
		return {
			list: [{
				title: 'Place 1'
			}, {
				title: 'Place 2'
			}]
		}
	}
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