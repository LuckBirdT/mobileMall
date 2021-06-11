<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.tabbar{
		display: flex;
		flex-direction: row;
		height: 49px;
		border-top: 1px rgba(100,100,100,.2) solid;
		background-color: white;
	}
</style>
