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
			editObj: {
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
		},
		addList(){
			if( this.editObj.type == 'string' ){
				this.editObj.list.push('')
			}
		},
		updateEdit(){
			console.log(this.editObj)
			if( this.editObj.list[this.editObj.defaultIndex] ){
			} else {
				this.$message.error('选择一个默认返回值')
			}
		},
		delItem(index){
			let arr = this.editObj.list.slice(0)
			arr.splice(index, 1)
			if( arr.length == 0 ){
				arr.push('')
			}
			this.editObj.list = arr
		},
		judgeType: M_TOOLS.judgeType
	},
	mounted(){
		eventCenter.$on('getIds', keys => {
			let obj = Object.assign({}, this.jsonObj)
			let editObj = obj[keys[0]]
			keys.forEach(key => {
				if( key && obj[key] && obj[key].value ){
					editObj = obj[key]
					obj = obj[key].value
				} else {
					console.log('对象不存在: ' + key)
				}
			})
			this.editDialogShow = true
			this.editObj = Object.assign({}, editObj)
			console.log(editObj)
		})
	},
}

/*
{
	code: {
		keyCode: 'code'
		type: 'object',
		value: {
		},
		valueList: [
		]
	},
	info: {
		keyCode: 'info',
		type: 'array',
		valueList: [
			{ 
				attr: {
					keyCode: 'attr',
					type: 'object',
					valueList: [
					]
				},
				skus: {
					keyCode: 'skus',
					type: 'array',
					valueList: [
						[ {
							name: {
								type: 'object',

							}
					]
				}
			}
		]
	}
}
*/


