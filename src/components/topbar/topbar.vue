<template>
	<div class="topbar">
		<div class="topbar-left topbar-item">
			<slot name="topbar-left"></slot>
		</div>
		<div class="topbar-center topbar-item-center">
			<slot name="topbar-center"></slot>
		</div>
		<div class="topbar-right topbar-item">
			<slot name="topbar-right"></slot>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.topbar{
		display: flex;
		height: 44px;
		line-height: 44px;
		border-bottom: 1px rgba(100,100,100,.2) solid;
		background-color: white;
	}
	.topbar-item{
		flex: 1;
	}
	.topbar-item-center{
		flex: 3;
	}
</style>
