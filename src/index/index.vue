<template>
	<div class="index-comp">
		{{ txt }}
		<el-button>默认按钮</el-button>
		<el-button type="success">成功按钮</el-button>
	</div>
</template>

<script>
export default {
	data(){
		return {
			txt: 'Hi, Index Page'
		}
	}
}
</script>
