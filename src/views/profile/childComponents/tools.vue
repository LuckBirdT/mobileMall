<template>
	<div class="tools-wrapper">
		<div class="tools-part1">
			<div class="tools-part1-item">
				<div><img src="../../../assets/img/profile/star-smile-line.svg" /></div>
				<div>收藏</div>
			</div>
			<div class="tools-part1-item">
				<div><img src="../../../assets/img/profile/bookmark-3-line.svg" /></div>
				<div>订阅店铺</div>
			</div>
			<div class="tools-part1-item">
				<div><img src="../../../assets/img/profile/footprint-line.svg" /></div>
				<div>足迹</div>
			</div>
		</div>
		<div class="tools-part2">
			<div class="tools-part2-item">
				<div><img src="../../../assets/img/profile/bank-card-line.svg" /></div>
				<div>待付款</div>
			</div>
			<div class="tools-part2-item">
				<div><img src="../../../assets/img/profile/archive-line.svg" /></div>
				<div>待发货</div>
			</div>
			<div class="tools-part2-item">
				<div><img src="../../../assets/img/profile/caravan-line.svg" /></div>
				<div>待收货</div>
			</div>
			<div class="tools-part2-item">
				<div><img src="../../../assets/img/profile/chat-poll-line.svg" /></div>
				<div>待评价</div>
			</div>
			<div class="tools-part2-item">
				<div><img src="../../../assets/img/profile/refund-2-fill.svg" /></div>
				<div>退款/售后</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.tools-wrapper{
		background-color: #FFF;
		border: 1px rgba(100,100,100,.1) solid;
		border-radius: 10px;
	}
	.tools-part1{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 10px 0 10px;
	}
	.tools-part1-item{
		flex: 1;
		height: 60px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom: 1px rgba(100,100,100,.2) solid;
	}
	.tools-part2{
		display: flex;
		flex-direction: row;
	}
	.tools-part2-item{
		flex: 1;
		height: 60px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
