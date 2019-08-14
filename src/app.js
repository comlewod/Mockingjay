import Vue from 'vue'
import ElementUI from 'element-ui'
import IndexComp from './index/index.vue'

import router from './router'
import store from './store'

import './common/common_css/index'
import './common/common_js/index'

Vue.use(ElementUI)

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


