<script>
export default {
	data () {
		return {
			center: {
				lat: 44,
				lng: 44
			},
			zoom: 7
		};
	}
}

</script>

<template>
  <gmap-map 
    :center="center" 
    :zoom="zoom" 
    class="map-panel" 
  ></gmap-map>
</template>
