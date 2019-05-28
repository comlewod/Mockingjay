export default {
	name: 'jsonTree',
	props: ['obj', 'justread'],
	data(){
		return {
			editDialogShow: false,
			edit: {
			}
		}
	},
	created(){
	},
	methods: {
		//判断js数据类型
		judgeType(obj){
			if( obj == null ) return String(obj)
			let type = typeof obj === 'object' || typeof obj === 'function' ? 
						this.jsType[Object.prototype.toString.call(obj)] || 'object' : 
						typeof obj
			return type
		},
		editItem(keys){
			eventCenter.$emit('getIds', keys)
		},
		judgeType: M_TOOLS.judgeType
	},
	components: {
	}
}
