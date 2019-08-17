<template>
	<div class="login">
		<div class="header">
			<i class="iconfont return" @click="go">&#xe604;</i>
			<span>登录</span>
			<i class="iconfont home">&#xe607;</i>
		</div>
		<div class="tabCtrl">
			<div class="tab">
				<span class="useId" :class="{active:!isIdShow}" @click="idChange()">账户密码</span>
				<span class="usePhone"  :class="{active: isIdShow}" @click="phoneChange()">手机验证码</span>
			</div>
			<form class="idShow" v-show="!isIdShow">
				<div class="id">
					<span>账户</span>
					<input type="text" class="idInp" v-model="idDatas.id" placeholder="请输入用户名/手机号/邮箱">
				</div>
				<div class="password">
					<span>密码</span>
					<input type="password" class="passwordInp" v-model="idDatas.psd" placeholder="请输入密码">
					<i class="iconfont">&#xe603;</i>
				</div>
				<div class="protocol">
					<input type="checkbox">
					<span>同意<a href="#"><<用户协议>></a></span>
				</div>
				<input class="loginBtn" type="submit" value="登录" @click="idSubmit()">
				<div class="other">
					<span class="wjmm">忘记密码</span>
					<router-link class="zc" to="register">注册</router-link>
				</div>
			</form>
			<form class="phoneShow" v-show="isIdShow">
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
				<div class="verificatonCode">
					<span>验证码</span>
					<input type="text" class ="verificationInp" v-model="phoneDatas.verificatonCode">
					<span class="text">获取验证码</span>
				</div>
				<div class="protocol">
					<input type="checkbox">
					<span>同意<a href="#"><<用户协议>></a></span>
				</div>
				<input class="loginBtn" type="submit" value="登录" @click="idSubmit()">
				<div class="other">
					<span class="wjmm">忘记密码</span>
					<router-link class="zc" to="register">注册</router-link>
				</div>
			</form>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				// 控制选项卡切换
				isIdShow: true,
				// 账户密码登陆数据
				idDatas: {
					id: '',
					psd: ''
				},
				phoneDatas: {
					number: '',
					checkCode: '',
					verificatonCode: ''
				}
			}
		},
		methods: {
			go() {
				this.$router.go(-1);
			},
			idChange() {
				this.isIdShow = !this.isIdShow;
			},
			idSubmit() {
				console.log("id:"+this.idDatas.id+this.idDatas.password)
			},
			phoneChange() {
				this.isIdShow = !this.isIdShow;
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
	.tabCtrl {
		.tab {
			height: 50px;
			margin-bottom: 60px;
			border-top: 1px solid gainsboro;
			border-bottom: 1px solid gainsboro;
			.useId {
				display: inline-block;
				width: 49%;
				text-align: center;
				line-height: 50px;
				cursor: pointer;
			}
			.usePhone {
				display: inline-block;
				width: 49%;
				text-align: center;
				line-height: 50px;
				cursor: pointer;
			}
			.active {
				height: 48px;
				color: #00C98D;
				border-bottom: 2px solid #00C98D;
			}
		}
	}
	.idShow {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.id {
			width: 90%;
			padding-bottom: 3px;
			margin-bottom: 20px;
			border-bottom: 1px solid gainsboro;
			.idInp {
				width: 75%;
				margin-left: 20px;
				font-size: 16px;
				border: none;
			}
		}
		.password {
			width: 90%;
			padding-bottom: 3px;
			margin-bottom: 60px;
			border-bottom: 1px solid gainsboro;
			.passwordInp {
				width: 75%;
				margin-left: 20px;
				font-size: 16px;
				border: none;
			}
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
	.other {
		flex: 0 0 100px;
		display: flex;
		align-self: flex-start;
		.wjmm {
			margin-left: 17px;
			color: #999;
			font-size: 13px;
		}
		.zc {
			align-self: flex-end;
			// margin-left: 100%;
			color: #00C98D;
			cursor: pointer;
			font-size: 13px;
		}
	}
	.phoneShow {
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
			margin-bottom: 20px;
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
		.verificatonCode {
			width: 90%;
			padding-bottom: 3px;
			margin-bottom: 60px;
			border-bottom: 1px solid gainsboro;
			.verificationInp {
				width: 50%;
				margin-left: 20px;
				font-size: 16px;
				border: none;
			}
			.text {
				display: inline-block;
				width: 85px;
				height: 25px;
				border-radius: 3px;
				font-size: 12px;
				background-color: #00C98D;
				text-align: center;
				line-height: 25px;
				color: #ffffff;
				cursor: pointer;
			}
		}
	}
</style>
