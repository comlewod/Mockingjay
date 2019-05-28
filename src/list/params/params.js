export default {
	name: 'params',
	props: {
		params: {
			type: Array,
			default: () => [{key: '', value: ''}]
		},
		title: {
			type: String,
			default: ''
		},
		disabled: false
	},
	data(){
		return {
		}
	},
	created(){
	},
	methods: {
		addQuery(){
			let arr = this.params.slice(0)
			arr.push({ key: '', value: '' })
			this.$emit('updateParams', arr)
		},
		delQuery(item){
			let index = item.$index
			let arr = this.params.slice(0)
			arr.splice(index, 1)
			if( arr.length == 0 ){
				arr.push({ key: '', value: '' })
			}
			this.$emit('updateParams', arr)
		},
	}
}
