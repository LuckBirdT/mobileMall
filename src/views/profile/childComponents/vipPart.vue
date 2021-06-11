<template>
	<div class="vip-wrapper">
		<div class="vip-part-item baselie">会员中心</div>
		<div class="vip-part-item baselie">金币</div>
		<div class="vip-part-item">购物人生</div>
		<div class="vip-part-item">免费领卡</div>
	</div>
</template>

<script>
</script>

<style>
	.vip-wrapper{
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		border-radius: 10px;
		border: 1px rgba(100,100,100,.1) solid;
		margin: auto;
		position: relative;
		top: -22px;
		background-color: white;
	}
	.vip-part-item{
		width: 50%;
		height: 44px;
		line-height: 44px;
	}
	.baselie{
		border-bottom: 1px rgba(100,100,100,.1) solid;
	}
</style>
