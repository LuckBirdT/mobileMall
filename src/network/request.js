import axios from 'axios'
import vue from 'vue'

export function request(config){
	//创建实例
	const instance = axios.create({
		baseURL:'http://152.136.185.210:7878/api/m5',
		timeout:5000
	})
	
	//返回的instance是一个promise
	return instance(config)
}