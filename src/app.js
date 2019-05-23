import Vue from 'vue'
import VueRouter from 'vueRouter'
import ElementUI from 'element-ui'
import IndexComp from './index/index.vue'

import './common/common_css/index'
import './common/common_js/index'

Vue.use(ElementUI)

//router
const home = { template: '<div>Welcome</div>' }
//异步组价必须为一个返回promise（该promise要resolve该异步组件）的函数
//const List = () => {
//	return Promise.resolve({ template: '<div>hahaha</div>' })
//}
//webpack异步加载组件，特殊的注释语法提供chunk name
const List = () => import(/* webpackChunkName: "list"*/ './list/list.vue')
const Programs = () => import(/* webpackChunkName: "list"*/ './programs/programs.vue')

const routes = [
	{ path: '/', component: home },
	{ path: '/programs', component: Programs },
	{ path: '/list', component: List }	
]

let router = new VueRouter({
	mode: 'history',
	routes
})

//store
const store = new Vuex.Store({
	state: {
		programs: []
	},
	mutations: {
		UPDATE_PROGRAMS(state){
			axios.get('/api/program/get').then(res => {
				res = res.data
				if( res.code == 0 ){
					state.programs = res.info
				} else {
					state.programs = []
				}
			})
		}
	}
})

window.appVue = new Vue({
	el: '#app',
	created(){
		this.$store.commit('UPDATE_PROGRAMS')
	},
	components: {
		IndexComp
	},
	router,
	store,
})


