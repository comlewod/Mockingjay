//store
const store = new Vuex.Store({
	state: {
		projects: []
	},
	mutations: {
		UPDATE_PROGRAMS(state){
			axios.get('/api/project/get').then(res => {
				res = res.data
				if( res.code == 0 ){
					state.projects = res.info
				} else {
					state.projects = []
				}
			})
		}
	}
})


export default store 
