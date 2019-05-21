<template>
	<div>
		<el-row>
			<h3>项目列表</h3>
		</el-row>		
		<el-row>
			<el-table :data="list" stripe style="width: 100%">
    			<el-table-column label="日期" width="180"></el-table-column>
  			</el-table>
		</el-row>
	</div>
</template>

<style src="./programs.less"></style>
<script src="./programs.js"></script>
