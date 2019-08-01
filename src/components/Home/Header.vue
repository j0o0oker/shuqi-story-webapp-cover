<template>
	<div class="header">
		<img class="logo1" src="http://c-shuqi.11222.cn/assets/logo_7a44de2.png" alt="">
		<img class="logo2" src="http://c-shuqi.11222.cn/assets/website-name_c08f935.png" alt="">
		<div class="iconfont userIcon">
			<router-link to="login">&#xe60a;</router-link>
		</div>
		<i class="iconfont bookShelf">&#xe6ac;</i>
		<i class="iconfont search">&#xe600;</i>
	</div>
</template>

<script>
	
</script>

<style scoped lang="less">
	.header {
		display: flex;
		height: 42px;
		// vertical-align: center;
		align-items: center;
		// background-color: #ccc;
		.logo1 {
			display: inline-block;
			margin-left: 15px;
			width: 26px;
			height: 26px;
			cursor: pointer;

		}
		.logo2 {
			display: inline-block;
			margin-left: 13px;
			width: 77px;
			height: 18px;
			cursor: pointer;
		}
		.userIcon {
			display: inline-block;
			width: 25px;
			height: 25px;
			margin-left: 130px;
			border-radius: 50%;
			text-align: center;
			line-height: 25px;
			color: #47ddb0;
			// background-color: rgba(0, 0, 0, .5);
			cursor: pointer;
		}
		.bookShelf {
			display: inline-block;
			width: 22px;
			height: 18px;
			margin-left: 19px;
			margin-top: -7px;
			font-size: 25px;
			color: #47ddb0;
			cursor: pointer;

		}
		.search {
			display: inline-block;
			width: 22px;
			height: 18px;
			margin-left: 13px;
			margin-top: -10px;
			font-size: 28px;
			font-weight: 800;
			color: #47ddb0;
			cursor: pointer;

		}
	}		
	
</style>
