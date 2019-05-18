<template>
	<div>
		<div :class="['each-item', 'item-' + judgeType(item)]" v-for="(item, key) in obj">
			<!-- 对象 -->
			<template v-if="judgeType(item) == 'object'">
				<div>
					<span class="item-key" v-if="judgeType(obj) == 'object'">{{ key }}: </span>
					<span>{</span>
				</div>
				<div class="child-tree">
					<json-tree :obj="item"></json-tree>
				</div>
				<span>}</span>
			</template>
			<!-- 数组 -->
			<template v-else-if="judgeType(item) == 'array'">
				<span class="item-key">{{ key }}: [</span>
				<div class="child-tree">
					<json-tree :obj="item"></json-tree>
				</div>
				<span>]</span>
			</template>
			
			<template v-else>
				<span class="item-key">{{ key }}: </span>
				<span class="item-val" v-if="judgeType(item) == 'string'">"{{ item }}"</span>
				<span class="item-val" v-else>{{ item }}</span>
			</template>

			<div class="edit-bar">
				<i class="el-icon-edit" @click="editItem()"></i>
			</div>
		</div>

		<el-dialog title="编辑" :visible.sync="editDialogShow">
			<div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editDialogShow = false">取消</el-button>
				<el-button type="primary">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<style src="./jsonTree.less"></style>
<script src="./jsonTree.js"></script>
