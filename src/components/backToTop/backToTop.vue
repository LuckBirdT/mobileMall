<template>
	<div class="backtotop-wrapper">
		<div class="backtotop-item">
			<img src="../../assets/img/home/arrow-up.svg"/>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.backtotop-wrapper{
		width: 40px;
		height: 40px;
		border: 1px;
		border-radius: 50px;
		position: fixed;
		bottom: 52px;
		right: 6px;
		background-color: #FF8198;
		z-index: 2;
	}
	.backtotop-item img{
		width: 100%;
	}
</style>
