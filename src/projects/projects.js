import { mapState } from 'vuex'
import jsonTree from '../components/jsonTree/jsonTree.vue'

window.eventCenter = new Vue()

export default {
	data(){
		return {
			projectName: '',
			list: [],

			jsonObj: {},
			editDialogShow: false,
			edit: {
				key: '',
				obj: {},
				list: []
			},
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
	mounted(){
		eventCenter.$on('getIds', keys => {
			let obj = Object.assign({}, this.jsonObj)
			let editKey = keys[0]
			let editObj = obj[editKey]
			keys.forEach(key => {
				if( key && obj[key] && obj[key].value ){
					editObj = obj[key]
					obj = obj[key].value
					editKey = key 
				} else {
					alert('对象不存在: ' + key)
				}
			})
			this.editDialogShow = true
			this.edit.key = editKey 
			this.edit.obj = editObj
		})
	},
}
