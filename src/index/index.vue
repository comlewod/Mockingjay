<template>
	<el-container>
		<el-header height="30px" class="mk-header">
			<a class="header-title" href="/">Mockingjay</a>
		</el-header>

		<el-container class="mk-container">
			<comp-aside></comp-aside>

			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<!-- vue loader会解析src引入的资源，路径前面是".“引入的表示当前页面的资源而不是模块引入，和import区分 -->
<style src="./index.less"></style>
<script src="./index.js"></script>
