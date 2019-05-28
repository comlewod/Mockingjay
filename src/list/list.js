import { mapState } from 'vuex'
import jsonTree from '../components/jsonTree/jsonTree.vue'
import params from './params/params.vue'

window.eventCenter = new Vue()

export default {
	data(){
		return {
			proxy: 'http://localhost:5006/',
			request: {
				url: '',
				type: 'GET',
				project: '',
				query: [{ key: '', value: ''}],
				body: [{ key: '', value: ''}],
				response: [{ key: '', value: ''}],
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
			projects: 'projects'
		}),
		queryStr(){
			let str = ''
			if( this.request.query.length && this.request.query[0].key ){
				str += '?' + this.request.query.filter(item => !!item.key.trim()).map(item => item.key + '=' + item.value).join('&')
			}
			return str
		},
	},
	methods: {
		updateQuery(arr){
			this.request.query = arr
		},
		updateBody(arr){
			this.request.body = arr
		},
		updateResponse(arr){
			this.request.response = arr
		},
		arrToObj(arr){
			let newArr = arr.filter(item => !!item.key.trim())
			let obj = {}
			newArr.forEach(item => {
				obj[item.key] = item.value.trim()
			})
			return obj
		},
		addRouter(){
			let _data = {
				url: this.request.url,
				type: this.request.type,
				query: JSON.stringify(this.arrToObj(this.request.query)),
				body: JSON.stringify(this.arrToObj(this.request.body)),
				project: this.request.project,
				json: JSON.stringify(this.jsonObj)
			}
			axios.post('/api/tree/add', _data).then(res => {
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
		'params': params,
		'json-tree': jsonTree
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
