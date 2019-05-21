
export default {
	data(){
		return {
			list: []
		}
	},
	created(){
		let _this = this
		axios.get('/api/program').then(res => {
			res = res.data
			if( res.code == 0 ){
				this.list = res.info
			} else {
			}
		})
	},
}
