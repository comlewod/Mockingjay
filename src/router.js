//router
const home = { template: '<div>Welcome</div>' }
//异步组价必须为一个返回promise（该promise要resolve该异步组件）的函数
//const List = () => {
//	return Promise.resolve({ template: '<div>hahaha</div>' })
//}
//webpack异步加载组件，特殊的注释语法提供chunk name
const list = () => import(/* webpackChunkName: "list"*/ './list/list.vue')
const programs = () => import(/* webpackChunkName: "projects"*/ './projects/projects.vue')

const dataLine = () => {
	return import(/* webpackChunkName: "data-line"*/ './data-line/data-line.vue')
}

const routes = [
	{ path: '/', component: home },
	{ path: '/projects', component: programs },
	{ path: '/list', component: list },	
	{ path: '/data-line', component: dataLine }	
]

let router = new VueRouter({
	mode: 'history',
	routes,
	beforeEach((to, from, next) => {
	})
})

console.log(router)

export default router
