import { mapState } from 'vuex'
import jsonTree from './jsonTree/jsonTree.vue'
import params from './params/params.vue'

Vue.component('json-tree', jsonTree)
window.eventCenter = new Vue()

export default {
	data(){
		return {
			request: {
				url: '',
				type: 'GET',
				query: [{ key: '', value: ''}],
				body: [{ key: '', value: ''}],
				program: ''
			},

			jsonStr: '',
			jsonObj: {},
			jsonErr: false,
			jsonArr: [],

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
			programs: 'programs'
		}),
		queryStr(){
			let str = 'http://localhost:5006/' + this.request.program
			if( this.request.query.length && this.request.query[0].key ){
				str += '?' + this.request.query.map(item => item.key + '=' + item.value).join('&')
			}
			return str
		},
	},
	methods: {
		updateQuery(arr){
			Vue.set(this.request, 'query', arr)
		},
		updateBody(arr){
			console.log(arr)
			Vue.set(this.request, 'body', arr)
		},
		addRouter(){
			let req_path = this.request.url
			let json_str = JSON.stringify(this.jsonObj)
			let program = this.request.program
			axios.post('/api/tree/add', {
				req_path, json_str
			}).then(res => {
			})
		},
		blurJson(){
			let str = this.jsonStr.trim()
			if( str ){
				let obj = null
				try {
					obj = JSON.parse(str)
				} catch(e) {
					this.jsonErr = true
					return
				}
				let newJson = this.objectLoop(obj)	
				//console.log(111, newJson)
				Vue.set(this, 'jsonObj', newJson)
			}
		},
		objectLoop(obj, keys){
			let newObj = {}
			for( let key in obj ){
				let value = obj[key]
				let type = this.judgeType(value)
				let item = { type, value }
				item.keys = keys ? keys.slice(0) : []
				item.keys.push(key)
				item.list = [value]
				item.defaultIndex = 0
				if( ['object', 'array'].includes(type) ){
					item.value = this.objectLoop(value, item.keys.slice(0))	
				}
				newObj[key] = item
			}
			return newObj
		},
		judgeType: M_TOOLS.judgeType
	},
	components: {
		'params': params
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
	}
}
