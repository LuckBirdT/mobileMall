import {request} from '@/network/request.js'

//获取数据，包含推荐和banner数据
export function getHomeData(){
	return request({
		url:'/home/multidata'
	})
}

//获取展示的商品数据
export function getHomeGoodsList(type,page){
	return request({
		url:'/home/data',
		params:{
			type,
			page
		}
	})
}