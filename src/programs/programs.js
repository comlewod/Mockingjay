import { mapState } from 'vuex'

export default {
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			programs: 'programs'
		}),
	},
	created(){
	},
}
