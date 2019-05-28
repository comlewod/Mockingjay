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
				<json-tree :obj="jsonObj"></json-tree>
			</el-col>
		</el-row>
	</div>
</template>

<style src="./projects.less"></style>
<script src="./projects.js"></script>
