<template>
  <v-carousel cycle	height="250" :show-arrows="false">
    <v-carousel-item
      v-for="(item,index) in items"
      :key="item.image+index"
      :src="item.image"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
		props:{
			items:Array,
			default(){return []}
		},
    data () {
      return {
      }
    },
  }
</script>

<style>
</style>
