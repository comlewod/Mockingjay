export default {
	data(){
		return {
			input: '',

			jsonStr: '',
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
				console.log(obj)
				this.objectLoop(obj)	
			}
		},
		objectLoop(obj){
			for( let key in obj ){
				let value = obj[value]
				let item = {
					key,
					value,
				}
				this.jsonArr.push(item)
			}
		}
	},
	components: {
	}
}
