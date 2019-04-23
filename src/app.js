import Vue from 'vue'
import ElementUI from 'element-ui'
import IndexComp from './index'

Vue.use(ElementUI)
//console.log(123)

Vue.component('index-page', IndexComp)

new Vue({
	el: '#app',
	data: {
	},
	created(){
	}
})
