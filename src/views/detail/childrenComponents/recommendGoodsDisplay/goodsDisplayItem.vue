<template>
	<div class="display-item"  >
		<div class="display-item-img">
			<img @load="imgLoad" v-lazy="goods.image" />
		</div>
		<div class="display-item-text">
			<div class="display-item-text-title">{{goods.title.substring(0,10)+"..."}}</div>
			<div class="display-item-text-tags">
				<div class="display-item-text-tags-price">{{"$"+ goods.price}}</div>
				<div class="display-item-text-tags-img">
					<img src="../../../../assets/img/home/star-outline.svg" />
					<div>{{goods.cfav}}</div>
				</div>
				<div class="display-item-text-tags-img">
					<img src="../../../../assets/img/home/sale.png" />
					<div>{{goods.itemSale}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export  default{
		props:{
			goods:{
				type:Object,
				default(){return {}}
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			//图片加载完刷新
			imgLoad(){
				this.$emit("recommendDisplayImgLoaded")
			},
		}
	}
</script>

<style>
	.display-item{
		display: flex;
		flex-direction: column;
	}
	.display-item-img img{
		width: 100%;
		border-radius: 20px;
	}
	.display-item-text{
		display: flex;
		flex-direction: column;
	}
	.display-item-text-tags{
		display: flex;
	}
	.display-item-text-tags div{
		flex: 1;
	}
	.display-item-text-tags img{
		width: 40%;
	}
	.display-item-text-tags-img{
		display: flex;
		flex-direction: row;
	}
	.display-item-text-tags-img div{
		display: flex;
		align-items: center;
	}
	.display-item-text-tags-price{
		display: flex;
		align-items: center;
		margin-right: 10px;
	}
</style>
