import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const cart=()=>import('@/views/cart/cart.vue')
const home=()=>import('@/views/home/home.vue')
const category=()=>import('@/views/category/category.vue')
const profile=()=>import('@/views/profile/profile.vue')
const detail=()=>import('@/views/detail/detail.vue')

Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:home
	},
	{
		path:'/cart',
		component:cart
	},
	{
		path:'/category',
		component:category
	},
	{
		path:'/profile',
		component:profile
	},
	{
		path:'/detail/:id',
		component:detail
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
