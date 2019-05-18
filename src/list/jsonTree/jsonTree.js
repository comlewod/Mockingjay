export default {
	props: ['obj'],
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
		editItem(){
			this.editDialogShow = true
		},
		judgeType: M_TOOLS.judgeType
	},
	components: {
	}
}
