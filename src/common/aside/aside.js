export default {
	data(){
		return {
			newProgram: {
				show: false,
				name: '',
				des: '',
				err: '',
			}
		}
	},
	methods: {
		handleOpen(){
			console.log(1)
		},
		handleClose(){
			console.log(2)
		},
		addProgram(){
			this.newProgram.show = true
		},
		newProgramConfirm(){
			let name = this.newProgram.name.trim()
			if( name ){
				if( /^[a-zA-Z]{1,15}$/.test(name) ){
					axios.post('/api/project/add', { 
						name: name
					}).then(res => {
						res = res.data
						if( res.code == 0 ){
							this.newProgram.name = ''
							this.newProgram.show = false
						} else {
							this.newProgram.err = res.msg 
						}
					})
				} else {
					this.newProgram.err = "请输入1-15个英文（不能有空格)"
				}
			} else {
				this.newProgram.err = "请输入项目名称"
			}
		}
	},
	components: {
	}
}
