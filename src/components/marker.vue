<script type="text/javascript">

export default {
	props: ['marker'],
	data() {
		return {
			'draggable': true
		};
	},
	computed: {
		position(state) {
			console.log("rendering 11");
			return {
				'lat': state.marker.lat,
				'lng': state.marker.lng
			}
		},
		title(state) {
			console.log("rendering title")
			return state.marker.title;
		}
	},
	methods: {
		onDrag({latLng}) {
			this.marker.lat = latLng.lat();
			this.marker.lng = latLng.lng();

			return this.$emit('markerDraged', this.marker);
		}
	}
}

</script>

<template>
	<gmap-marker 
		:position="position" 
		:draggable="draggable" 
		@dragend="onDrag"
	>
		<gmap-info-window>
			{{ title }}
		</gmap-info-window>
	</gmap-marker>	
</template>
