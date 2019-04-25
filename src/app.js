import Vue from 'vue'
import VueRouter from 'vueRouter'
import ElementUI from 'element-ui'
import IndexComp from './index/index.vue'

import './common/common_css/index'

Vue.use(ElementUI)

const home = { template: '<div>Welcome</div>' }
const apiList = { template: '<div>列表</div>' }

const routes = [
	{ path: '/', component: home },
	{ path: '/list', component: apiList }
]

let router = new VueRouter({
	mode: 'history',
	routes
})

window.appVue = new Vue({
	el: '#app',
	components: {
		IndexComp
	},
	router,
})
