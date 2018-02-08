<script type="text/javascript">

export default {
	props: ['marker'],
	data() {
		return {
			'draggable': true,
			'enabled': false
		};
	},
	computed: {
		position(state) {
			return {
				'lat': parseFloat(state.marker.lat),
				'lng': parseFloat(state.marker.lng)
			}
		},
		title(state) {
			return state.marker.title;
		}
	},
	methods: {
		onDrag({latLng}) {
			this.marker.lat = latLng.lat();
			this.marker.lng = latLng.lng();
			console.log("draged");
			return this.$emit('markerDraged', this.marker);
		},
		showIFW() {
			console.log(this);
			this.enabled = true;
		}
	}
}

</script>

<template>
	<gmap-marker 
		:position="position" 
		:draggable="draggable" 
		@dragend="onDrag"
		@click="showIFW"
	>
		<gmap-info-window v-if="enabled">
			{{ title }}
		</gmap-info-window>
	</gmap-marker>	
</template>
