<script>
import { mapState } from 'vuex';

export default {
	data () {
		return {
			center: {
				lat: 44,
				lng: 44
			},
			zoom: 7
		};
	},
	computed: mapState({
		markers(storeState) {
			return storeState.togo_list.items;
		}
	}),
	methods: {
		onLeftClick({latLng}) {
			this.$emit('onLeftClick', {
				'lat': latLng.lat(), 
				'lng': latLng.lng()
			});
		},
		onMarkerDraged(data) {
			this.$emit('onMarkerDrag', data);
		}
	}
}

</script>

<template>
	<gmap-map 
		:center="center" 
		:zoom="zoom" 
		class="map-panel" 
		@click="onLeftClick"
	>
		<togo-marker
			v-for="m in markers"
			:marker="m"
			v-on:markerDraged="onMarkerDraged"
		></togo-marker>
	</gmap-map>
</template>
