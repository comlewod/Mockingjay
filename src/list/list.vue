<template>
	<div>
		<h3>路由列表</h3>
		<div>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
			<el-button type="primary" @click="addRouter">添加路由</el-button>
		</div>
	</div>
</template>

<style src="./list.less"></style>
<script src="./list.js"></script>
