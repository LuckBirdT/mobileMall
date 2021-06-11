export const actions={
	//对加入购物车的商品进行检查
	beforeAddedCheckGoods(context,payload){
		return new Promise((resolve)=>{
			//检查商品是否已存在
			const temp=context.state.cartList.find(item=>item.id==payload.id)
			//存在,商品数量加一
			if(temp){
				context.commit('sameGoodsINC',temp)
				resolve('商品数量+1')
			}
			//不存在,把商品加入购物车
			else{
				context.commit('addNewProperty',payload)
				context.commit('addToCart',payload)
				resolve('商品种类+1')
			}
		})

	},
	//寻找目标元素的下标,并删除
	deleteAimItem(context,payload){
		let aimIndex=0
		const arr=context.state.cartList
		for(let index in arr ){
			if(arr[index].id==payload.id){
				aimIndex=index
			}
		}
		context.commit('deleteItem',aimIndex)
	},
	//将所有商品选中,获将所有选中的商品变为全不选
	selectedAllGoods(context){
		//将全选中状态变为全不选中
		if(context.getters.isAllChecked){
			context.state.cartList.map(item=>item.selected=false)
			// console.log(context.state.cartList)
		}
		//将全不选中变为全选中
		else{
			context.state.cartList.map(item=>item.selected=true)
			// console.log(context.state.cartList)
		}
	}
	
}