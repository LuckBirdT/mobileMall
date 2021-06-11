export const mutations={
	//加入购物车
	addToCart(state,payload){
		state.cartList.push(payload)
	},
	//数量加一
	sameGoodsINC(state,payload){
		payload.count++
	},
	//数量减一
	sameGoodsDEC(state,payload){
		payload.count--
	},
	//添加selected属性
	addNewProperty(state,payload){
		payload.selected=true
	},
	//修改selected属性
	updateSelected(state,payload){
		payload.selected=!payload.selected
	},
	//删除指定下标的数组元素,payload为下标
	deleteItem(state,payload){
		state.cartList.splice(payload,1)
	},
	//清空购物车数组
	clearCartList(state){
		state.cartList=[]
	}
}