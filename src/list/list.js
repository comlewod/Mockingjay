import jsonTree from './jsonTree/jsonTree.vue'
Vue.component('json-tree', jsonTree)

export default {
	data(){
		return {
			jsType: {},
			input: '',

			jsonStr: '',
			jsonObj: {},
			jsonErr: false,
			jsonArr: [],
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
				Vue.set(this, 'jsonObj', obj)
				let newJson = this.objectLoop(obj)	
				console.log(newJson)
			}
		},
		objectLoop(obj, ids){
			let newObj = {}
			for( let key in obj ){
				let value = obj[key]
				let type = this.judgeType(value)
				let item = { type, value }
				item.ids = ids ? ids.slice(0) : []
				item.ids.push(key)
				if( ['object', 'array'].includes(type) ){
					item.value = this.objectLoop(value, item.ids.slice(0))	
				}
				newObj[key] = item
			}
			return newObj
		},
		judgeType: M_TOOLS.judgeType
	},
	components: {
	}
}
