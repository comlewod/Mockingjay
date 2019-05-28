import { mapState } from 'vuex'
import jsonTree from '../components/jsonTree/jsonTree.vue'

export default {
	data(){
		return {
			projectName: '',
			list: [],
			jsonObj: {}
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
	components: {
		'json-tree': jsonTree
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
			axios.get('/api/tree/get', {params}).then(({data}) => {
				if( data.code == 0 ){
					this.jsonObj = JSON.parse(data.info.json)
					console.log(this.jsonObj)
				} else {
					this.$message.error('文件读取错误')
				}
			})
		}
	},
}
