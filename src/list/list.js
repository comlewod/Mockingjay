import jsonTree from './jsonTree/jsonTree.vue'
Vue.component('json-tree', jsonTree)
window.eventCenter = new Vue()

export default {
	data(){
		return {
			jsType: {},
			input: '',

			jsonStr: '',
			jsonObj: {},
			jsonErr: false,
			jsonArr: [],

			editDialogShow: false,
			edit: {
				key: '',
				obj: {},
				list: []
			}
		}
	},
	
	methods: {
		addRouter(){
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
