<template>
	<div>
		<el-row>
			<h3>项目列表</h3>
		</el-row>		
		<el-row>
			<el-select v-model="projectName" placeholder="请选择项目">
				<el-option v-for="item in projects" :key="item.name" :value="item.name"></el-option>
			</el-select>
		</el-row>		
		<el-row>
			<el-col :span="10">
				<el-table :data="list" stripe>
					<el-table-column label="文件名" highlight-current-row="true">
						<template slot-scope="scope">
							<div v-if="scope.row.type == 1" class="file-item" @click="chooseDir(scope.row)">
								<i class="el-icon-folder-opened"></i>
								<span>{{ scope.row.name }}</span>
							</div>
							<div v-if="scope.row.type == 2" class="file-item" @click="editItem(scope.row)">
								<i class="el-icon-tickets"></i>
								<span>{{ scope.row.name }}</span>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="13">
				<div class="obj-tree">
					<json-tree :obj="jsonObj" :justread="false"></json-tree>
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

<style src="./projects.less"></style>
<script src="./projects.js"></script>
