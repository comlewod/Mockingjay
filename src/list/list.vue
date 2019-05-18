<template>
	<div>
		<el-row>
			<h3>路由列表</h3>
		</el-row>
		<el-row>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
			<el-button type="primary" @click="addRouter">添加路由</el-button>
		</el-row>
		<el-row>
			<p>json内容</p>
		</el-row>
		<el-row>
			<el-col :span="12">
				<el-input
					type="textarea"
					placeholder="请输入json字符串"
					:rows="10"
					:autosize="true"
					@focus="jsonErr = false"
					@input="blurJson"
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
			</el-col>
			<el-col :span="12">
				<div class="obj-tree">
					<json-tree :obj="jsonObj"></json-tree>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style src="./list.less"></style>
<script src="./list.js"></script>
