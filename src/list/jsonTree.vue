<template>
	<div>
		<div v-for="(obj, key) in obj">
			<div>
				<span>{{ key }}</span>
				<template v-if="judgeType(obj) == 'object'">
					<json-tree :obj="obj"></json-tree>
				</template>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		obj: Object
	},
	data(){
		return {
			jsType: {},
		}
	},
	created(){
		['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'].forEach(e => {
			this.jsType['[object ' + e + ']'] = e.toLowerCase()
		}) ;
	},
	methods: {
		//判断js数据类型
		judgeType(obj){
			if( obj == null ) return String(obj)
			let type = typeof obj === 'object' || typeof obj === 'function' ? 
						this.jsType[Object.prototype.toString.call(obj)] || 'object' : 
						typeof obj
			return type
		}
	},
	components: {
	}
}
</script>
