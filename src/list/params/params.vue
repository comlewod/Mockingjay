<template>
<el-card class="query-card" v-show="!disabled">
	<div slot="header" class="clearfix">
		<span>{{ title }}</span>
		<el-button class="add-btn" type="text" @click="addQuery">新增参数</el-button>
	</div>
	<div class="req-params">
		<el-table :data="params">
			<el-table-column label="Key">
				<template slot-scope="scope">
					<el-input v-model="scope.row.key" :disabled="disabled" placeholder="key"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="Value">
				<template slot-scope="scope">
					<el-input v-model="scope.row.value" :disabled="disabled" placeholder="value"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="50">
				<template slot-scope="scope">
					<i class="el-icon-delete-solid" @click="delQuery(scope)"></i>
				</template>
			</el-table-column>
		</el-table>
	</div>
</el-card>
</template>

<style src="./params.less"></style>
<script src="./params.js"></script>
