<template>
	<div class="login">
		<div class="header">
			<i class="iconfont return" @click="go">&#xe604;</i>
			<span>登录</span>
			<i class="iconfont home">&#xe607;</i>
		</div>
		<div class="tabCtrl">
			<div class="tab">
				<span>账户密码</span>
				<span>手机验证码</span>
			</div>
			<div class="idShow">
				<div>
					<lable>账户</lable>
					<input type="text">
				</div>
				<div>
					<lable>密码</lable>
					<input type="password">
					<i class="iconfont">&#xe603;</i>
				</div>
				<div>
					<input type="checkbox">
					<span>同意<a href="#">用户协议</a></span>
				</div>
				<input type="submit" value="登陆">
				<span>忘记密码</span>
				<span>注册</span>
			</div>
			<div class="phoneShow"></div>
		</div>
	</div>
	
</template>

<script>
	export default {
		methods: {
			go() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped lang="less">
	.login {
		.header {
			display: flex;
			margin: 10px;
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
	}
</style>
