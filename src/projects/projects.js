import { mapState } from 'vuex'

export default {
	data(){
		return {
			projectName: '',
			list: []
		}
	},
	computed: {
		...mapState({
			projects: state => {
				return state.projects
			}
		}),
	},
	watch: {
		projectName(projectName){
			let list = []
			if( projectName ){
				let project = this.projects.filter(item => item.name == projectName )
				if( project.length ){
					list = project[0].files
				}
			}
			this.list = list
		}
	},
	created(){
	},
	methods: {
		chooseDir(item){
			this.list = item.files
		},
		editItem(item){
			//axios的get传参params必须写
			let params = {
				file_path: item.path
			}
			axios.get('/api/tree/get', {params}).then(res => {
				if( res.code == 0 ){
				} else {
					this.$message.error('文件读取错误')
				}
			})
		}
	},
}
