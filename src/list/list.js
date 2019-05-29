import { mapState } from 'vuex'
import jsonTree from '../components/jsonTree/jsonTree.vue'
import params from './params/params.vue'

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
			axios.post('/api/tree/add', _data).then(({data}) => {
				if( data.code == 0 ){
				} else {
				}
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
				M_TOOLS.logObj(newJson)
			}
		},
		objectLoop(obj, keyArr){
			let newObj = {}
			let keys = keyArr ? keyArr.slice(0) : []
			for( let key in obj ){
				let value = obj[key]
				let type = this.judgeType(value)
				let _keys = keys.slice(0)
				_keys.push(key)
				let item = { 
					index: 0,
					code: key,
					keys: _keys,
					type, 
				}
				if( ['object', 'array'].includes(type) ){
					item.list = [this.objectLoop(value, item.keys)]
				} else {
					item.list = [value]
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
	}
}
