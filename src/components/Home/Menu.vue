<template>
	<div class="menu">
		<div class="item">
			<i class="iconfont icon">&#xe602;</i>
			<span class="text">分类</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe606;</i>
			<span class="text">排行</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe60a;</i>
			<span class="text">男生</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe687;</i>
			<span class="text">女生</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe601;</i>
			<span class="text">书单</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe606;</i>
			<span class="text">待定</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe606;</i>
			<span class="text">待定</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe606;</i>
			<span class="text">待定</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe606;</i>
			<span class="text">待定</span>
		</div>
		<div class="item">
			<i class="iconfont icon">&#xe606;</i>
			<span class="text">待定</span>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.menu {
		// background-color: #ccc;
		// margin-left: 20px;
		.item {
			float: left;
			width: 45px;
			height: 45px;
			margin-left: 26px;
			margin-top: 18px;
			margin-bottom: 10px;
			cursor: pointer;
			.icon {
				display: block;
				width: 40px;
				height: 40px;
				margin: 0 auto;
				text-align: center;
				line-height: 40px;
				border-radius: 18px;
				background-color: rgba(255, 80, 100, 1);
				color:#ffffff ;
			}
			.text {
				display: inline-block;
				width: 40px;
				height: 28px;
				margin-top: 6px;
				margin-left: 2px;
				text-align: center;
				font-size: 14px;
				color: #999;
			}
			
		}
		.clear {
			clear: both;
		}
	}
</style>
