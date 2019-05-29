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
		editItem(keys){
			eventCenter.$emit('getIds', keys)
		},
		judgeType: M_TOOLS.judgeType
	},
	components: {
	}
}
