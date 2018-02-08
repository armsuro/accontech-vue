<script>
import { mapState } from 'vuex';
import Marker from './Marker';

const buildMarker = (item) => {
	const marker = new Marker(item.id);

	marker.setPosition(item.lat, item.lng);

	return marker;
}

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
			return storeState.togo_list.items.map(item => buildMarker(item));
		}
	})
}

</script>

<template>
	<gmap-map 
	:center="center" 
	:zoom="zoom" 
	class="map-panel" 
	>
		<gmap-marker 
			v-for="m in markers"
			:position="m.position" 
			:draggable="m.draggable" 
			@click="m.click"
		>
		<gmap-info-window>
			{{ m.title }}
		</gmap-info-window>
		</gmap-marker>
	</gmap-map>
</template>
