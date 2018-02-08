<script type="text/javascript">

export default {
  methods: {
    createToGoPlace(data) {
      const placeName = prompt('Please write title of place.')

      if ( placeName ) {
        data.title = placeName;
        this.$store.dispatch('togo_list/createItem', data, {root: true});
      }
    },
    updateToGoPlace(data) {
      this.$store.dispatch('togo_list/updateItem', data, {root: true});
    },
    deleteToGoPlace(data) {
      this.$store.dispatch('togo_list/deleteItem', data, {root: true});
    }
  }
}

</script>
<template>
  <div id="app">
    <div id="sidebar">
      <togo-list
        v-on:onDeleteButtonClick="deleteToGoPlace"
      ></togo-list>
    </div>
    <div id="main-content">
      <togo-map 
        v-on:onLeftClick="createToGoPlace"
        v-on:onMarkerDrag="updateToGoPlace"
      ></togo-map>
    </div>
  </div>
</template>
