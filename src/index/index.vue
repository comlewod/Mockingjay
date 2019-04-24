<template>
	<el-container>
		<el-header background-color="#545c64">Mockingjay</el-header>
		<el-container>
			<comp-aside></comp-aside>
			<el-main></el-main>
		</el-container>
	</el-container>
</template>

<!-- vue loader会解析src引入的资源，路径前面是".“引入的表示当前页面的资源而不是模块引入，和import区分 -->
<style src="./index.less"></style>
<script src="./index.js"></script>
