<template>
	<div class="json-tree" v-show="obj">
		<div :class="['each-item', 'item-' + item.type]" v-for="(item, key) in obj">
			<!-- 对象 -->
			<template v-if="item.type == 'object'">
				<div>
					<span class="item-key" v-if="judgeType(obj) == 'object'">{{ key }}: </span>
					<span>{</span>
				</div>
				<div class="child-tree">
					<json-tree :obj="item.value"></json-tree>
				</div>
				<span>}</span>
			</template>
			<!-- 数组 -->
			<template v-else-if="item.type == 'array'">
				<span class="item-key">{{ key }}: [</span>
				<div class="child-tree">
					<json-tree :obj="item.value"></json-tree>
				</div>
				<span>]</span>
			</template>
			
			<template v-else>
				<span class="item-key">{{ key }}: </span>
				<span class="item-val" v-if="item.type == 'string'">"{{ item.value }}"</span>
				<span class="item-val" v-else>{{ item.value }}</span>
			</template>

			<div class="edit-bar" v-if="!justread">
				<i class="el-icon-edit" @click="editItem(item.keys)"></i>
			</div>
		</div>
	</div>
</template>

<style src="./jsonTree.less"></style>
<script src="./jsonTree.js"></script>
