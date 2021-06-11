export const getters={
	//返回购物车商品数据
	getCartList(state){
		return state.cartList
	},
	//检查是否全部被选中
	isAllChecked(state){
		//无元素
		if(state.cartList.length<=0) return false
		//找到一个selected为false即停止
		let temp=state.cartList.find(item=>!item.selected)
		if(temp){
			//如果有一个没选中,返回false
			return false
		}
		else{
			//如果全选中,返回true
			return true
		}
	},
	//合计金额
	sumPrice(state){
		let sum=0
		for(let item of state.cartList){
			if(item.selected){
				sum+= parseInt(item.count)*parseInt(item.price)
			}
		}
		return sum
	}
	
}