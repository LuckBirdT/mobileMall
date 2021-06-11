<template>
  <v-carousel height="500" :show-arrows="false">
    <v-carousel-item
      v-for="(item,index) in items"
			:key="index+item+index"
      :src="item"
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
