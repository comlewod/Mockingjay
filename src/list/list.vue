<template>
	<div>
		<el-row>
			<h3>路由列表</h3>
		</el-row>
		<el-row>
			<h4>URL</h4>
			<el-input v-model="routerPath" placeholder="/post/detail">
				<template slot="prepend">Http://</template>
			</el-input>
			<el-button type="primary" @click="addRouter">添加路由</el-button>
		</el-row>

		<el-row>
			<h4>TYPE</h4>
			<el-radio v-model="reqType" label="GET" border>GET</el-radio>
		    <el-radio v-model="reqType" label="POST" border>POST</el-radio>
		</el-row>

		<el-row>
			<h4>JSON</h4>
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

		<el-dialog title="编辑" :visible.sync="editDialogShow">
			<div>
				<p>key: {{ edit.key }}</p>
				<el-table
					:data="edit.obj.list"
				>
				</el-table>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editDialogShow = false">取消</el-button>
				<el-button type="primary">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<style src="./list.less"></style>
<script src="./list.js"></script>
