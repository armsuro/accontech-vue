<script type="text/javascript">

export default {
  data() {
    return {
      center: {
        lat: 44,
        lng: 44
      },
      zoom: 7
    }
  }
}

</script>
<template>
  <div id="app">
    <div id="sidebar">
      <ul>
        <li>Place 1</li>
        <li>Place 2</li>
        <li>Place 3</li>
      </ul>
    </div>
    <div id="main-content">
      <gmap-map 
        :center="center" 
        :zoom="zoom" 
        class="map-panel" 
      ></gmap-map>
    </div>
  </div>
</template>
