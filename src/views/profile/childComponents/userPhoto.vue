<template>
	<div class="user-wrapper">
		<div class="user-part1">
			<img src="../../../assets/img/profile/userPhoto.jpg" />
		</div>
		<div class="user-part2">
			<div><b>登录</b></div>
			<div><b>注册</b></div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.user-wrapper{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 20%;
		background-color: #FA89B5;
		border-radius: 20px;
	}
	.user-part1{
		flex: 1;
	}
	.user-part1 img{
		width: 100%;
		border-radius: 50px;
	}
	.user-part2{
		flex: 3;
		display: flex;
		justify-content:space-around;
		align-items: center;
		font-size: 24px;
		color: #FFF;
	}
</style>
