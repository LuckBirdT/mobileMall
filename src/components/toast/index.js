//导入vue文件
import Toast from './toast'

//创建对象
const obj={}
obj.install=function(vue){
	//创建组件构造器
	const toastContrustor = vue.extend(Toast)
	//使用组件构造器创建一个对象
	const toast = new toastContrustor()
	//将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
	//将创建的元素放入body，tosat.$el就是上一步的div
	document.body.appendChild(toast.$el)
	//放到原型里面去
	vue.prototype.$toast= toast
	//创建完成，去注册组件，在main.js里进行注册
}
	//导出
	export default  obj