<template>
	<div class="profile-wrapper">
		<profile-topbar></profile-topbar>
		<user-part></user-part>
		<vip-part></vip-part>
		<tools></tools>
	</div>
</template>

<script>
	//子组件
	import profileTopbar from 'views/profile/childComponents/profileTopbar.vue'
	import userPart from 'views/profile/childComponents/userPhoto.vue'
	import vipPart from 'views/profile/childComponents/vipPart.vue'
	import tools from 'views/profile/childComponents/tools.vue'
	
	//对象
	export default{
		components:{
			profileTopbar,
			userPart,
			vipPart,
			tools
		}
	}
</script>

<style>
	.profile-wrapper{
		height: 100vh;
		background-color:#F5FAFA;
	}
</style>
