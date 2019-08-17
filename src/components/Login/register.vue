<template>
	<div>
		<div class="header">
			<i class="iconfont return" @click="go">&#xe604;</i>
			<span>注册</span>
			<i class="iconfont home">&#xe607;</i>
		</div>
		<form class="register">
			<div class="phone">
				<span>手机号</span>
				<input type="text" class ="phoneInp" v-model="phoneDatas.number" placeholder="请输入手机号">
			</div>
			<div class="checkCode">
				<span>校验码</span>
				<input type="password" class="checkCodeInp" v-model="phoneDatas.checkCode">
				<img src="" alt="">
				<span class="refresh">换一换</span>
			</div>
			
			<div class="protocol">
				<input type="checkbox">
				<span>同意<a href="#"><<用户协议>></a></span>
			</div>
			<input class="loginBtn" type="submit" value="登录">
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phoneDatas: {
					number: '',
					checkCode: ''
				}
			}
		},
		methods: {
			go() {
				this.$router.go(-1);
			}
		}
		
	}
</script>

<style scoped lang="less">
	.header {
		display: flex;
		margin: 10px;
		margin-bottom: 60px;
		color: limegreen;
		.return {
			flex: 1;
			font-size: 19px;
		}
		.home {
			flex: 1;
			font-size: 19px;
			text-align: right;
		}
	}
	.register {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.phone {
			width: 90%;
			padding-bottom: 3px;
			margin-bottom: 20px;
			border-bottom: 1px solid gainsboro;
			.phoneInp {
				width: 75%;
				margin-left: 20px;
				font-size: 16px;
				border: none;
			}
		}
		.checkCode {
			width: 90%;
			padding-bottom: 3px;
			margin-bottom: 40px;
			border-bottom: 1px solid gainsboro;
			.checkCodeInp {
				width: 59%;
				margin-left: 20px;
				font-size: 16px;
				border: none;
			}
			.refresh {
				font-size: 14px;
				color: #00C98D;
				cursor: pointer;
			}
		}
		.protocol a{
			font-size: 14px;
			color: #00C98D;
		}
		.loginBtn {
			width: 92%;
			height: 45px;
			margin-top: 25px;
			margin-bottom: 10px;
			border: none;
			border-radius: 5px;
			color: #ffffff;
			text-align: center;
			line-height: 35px;
			background-color: #00C98D;
			cursor: pointer;
		}
	}
</style>
