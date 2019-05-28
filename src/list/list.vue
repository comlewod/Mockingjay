<template>
<div>
	<el-row>
		<h3>新增请求</h3>
		<el-button type="primary" @click="addRouter">添加路由</el-button>
	</el-row>
	
	<el-row>
		<el-col :span="10">
			<el-row>
				<el-col :span="4">项目:</el-col>
				<el-col :span="20">
					<el-select v-model="request.project" placeholder="请选择项目">
						<el-option v-for="item in projects" :key="item.name" :value="item.name"></el-option>
					</el-select>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="4">url:</el-col>
				<el-col :span="20">
					<el-input class="req-path" v-model="request.url" placeholder="/post/detail">
						<template slot="prepend">{{ 'http://localhost:5006/' + request.project }}</template>
					</el-input>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="4">类型：</el-col>
				<el-col :span="20">
					<el-row>
						<el-radio v-model="request.type" label="GET" border>GET</el-radio>
						<el-radio v-model="request.type" label="POST" border>POST</el-radio>
					</el-row>
			
					<el-row>
						<params :title="'GET'" :params="request.query" @updateParams="updateQuery"></params>
					</el-row>
					<el-row>
						<params :title="'POST'" :params="request.body" :disabled="request.type != 'POST'" @updateParams="updateBody"></params>
					</el-row>
				</el-col>
			</el-row>

			<el-row v-if="false">
				<el-col :span="4">url：</el-col>
				<el-col :span="20">
					<el-input class="query-str" type="textarea" :value="proxy + request.project + request.url + queryStr" readonly></el-input>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="4">响应头：</el-col>
				<el-col :span="20">
					<params :title="'Response'" :params="request.response" @updateParams="updateResponse"></params>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="4">json</el-col>
				<el-col :span="20">
					<el-input
						type="textarea"
						placeholder="json"
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
			</el-row>
		</el-col>
		<el-col :span="1">&nbsp;</el-col>
		<el-col :span="13">
			<div class="obj-tree">
				<json-tree :obj="jsonObj" :edit="edit"></json-tree>
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
