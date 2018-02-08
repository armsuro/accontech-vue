<script>
export default {
	data () {
		return {
			center: {
				lat: 44,
				lng: 44
			},
			zoom: 7,
			markers: [{
				title: 'place 1',
				position: {
					lat: 44,
					lng: 44
				},
				draggable: true
			}]
		};
	}
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
		>
		<gmap-info-window>
			{{ m.title }}
		</gmap-info-window>
		</gmap-marker>
	</gmap-map>
</template>
