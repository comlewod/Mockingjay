<template>
	<div>
		<h3>路由列表</h3>
		<div>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
			<el-button type="primary" @click="addRouter">添加路由</el-button>
		</div>
		<div>
			<el-input
				type="textarea"
				:rows="10"
				placeholder="请输入json字符串"
				@focus="jsonErr = false"
				@blur="blurJson"
				v-model="jsonStr"
			>
			</el-input>
			<el-alert
				v-show="jsonErr"
				title="json格式错误"
				type="error"
				:closable="false"
			>
			</el-alert>
		</div>
	</div>
</template>

<style src="./list.less"></style>
<script src="./list.js"></script>
