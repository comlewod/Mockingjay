//router
const home = { template: '<div>Welcome</div>' }
//异步组价必须为一个返回promise（该promise要resolve该异步组件）的函数
//const List = () => {
//	return Promise.resolve({ template: '<div>hahaha</div>' })
//}
//webpack异步加载组件，特殊的注释语法提供chunk name
const List = () => import(/* webpackChunkName: "list"*/ './list/list.vue')
const Programs = () => import(/* webpackChunkName: "list"*/ './projects/projects.vue')

const routes = [
	{ path: '/', component: home },
	{ path: '/projects', component: Programs },
	{ path: '/list', component: List }	
]

let router = new VueRouter({
	mode: 'history',
	routes
})

export default router
