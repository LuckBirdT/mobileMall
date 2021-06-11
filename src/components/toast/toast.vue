<template>
	<div class="toast-wrapper" v-if="isShow">
		<div>
			{{text}}
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:false,
				text:'输入文字'
			}
		},
		methods:{
			dispalyToast(msg='输入文字',delay=500){
				this.isShow=true
				this.text=msg
				setTimeout(()=>{
					this.isShow=false
				},delay)
			}
		}
		
	}
</script>

<style>
	.toast-wrapper{
		height: 44px;
		line-height: 44px;
		width: 180px;
		padding: 0 20px 0 20px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-100px,-22px);
		z-index: 9;
		color: white;
		background-color: rgba(0,0,0,.5);
		border-radius: 10px;
	}
</style>
