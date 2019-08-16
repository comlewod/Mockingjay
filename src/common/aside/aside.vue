<template>
	<div class="mk-aside">
		<el-aside width="50px">
			<el-tooltip content="新增项目" placement="right">
				<router-link class="aside-item" to="/data-line">
					<i class="el-icon-data-line"></i>
				</router-link>
			</el-tooltip>

			<el-tooltip content="新增项目" placement="right">
				<a class="aside-item" href="javascript:;" @click="addProgram">
					<i class="el-icon-folder-add"></i>
				</a>
			</el-tooltip>
			<el-tooltip content="项目列表" placement="right">
				<router-link class="aside-item" to="/projects">
					<i class="el-icon-folder"></i>
				</router-link>
			</el-tooltip>
			<el-tooltip content="新增路由" placement="right">
				<router-link class="aside-item" to="/list">
					<i class="el-icon-circle-plus"></i>
				</router-link>
			</el-tooltip>
		</el-aside>

		<el-dialog title="新增项目" :visible.sync="newProgram.show">
			<div class="new-program-input">
				<el-input v-model="newProgram.name" placeholder="项目名称" @focus="newProgram.err = ''" maxlength="15"></el-input>
				<el-alert v-show="newProgram.err" :closable="false" :title="newProgram.err" type="error"></el-alert>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="newProgram.show = false">取消</el-button>
				<el-button @click="newProgramConfirm" type="primary">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<style src="./aside.less"></style>
<script src="./aside.js"></script>
