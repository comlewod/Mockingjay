<template>
	<div>
		<el-row>
			<h3>项目列表</h3>
		</el-row>		
		<el-row>
			<el-table :data="programs" stripe>
    			<el-table-column label="文件名" highlight-current-row="true">
					<template slot-scope="scope">
						<i class="el-icon-folder-opened"></i>
						<span>{{ scope.row.program }}</span>
					</template>
				</el-table-column>
  			</el-table>
		</el-row>
	</div>
</template>

<style src="./programs.less"></style>
<script src="./programs.js"></script>
