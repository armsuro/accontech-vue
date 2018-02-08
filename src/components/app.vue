<script type="text/javascript">

export default {
  methods: {
    createToGoPlace(data) {
      const placeName = prompt('Please write title of place.')

      if ( placeName ) {
        data.title = placeName;
        this.$store.dispatch('togo_list/createItem', data, {root: true});
      }
    }
  }
}

</script>
<template>
  <div id="app">
    <div id="sidebar">
      <togo-list></togo-list>
    </div>
    <div id="main-content">
      <togo-map v-on:createToGoPlace="createToGoPlace"></togo-map>
    </div>
  </div>
</template>
