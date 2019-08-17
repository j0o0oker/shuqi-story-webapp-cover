<template>
  <div class="footer">
    <p1>下载客户端</p1>
    <p1>海量图书，更高品质阅读体验</p1>
	<p>测试文字测试文字</p>
	<p>biubiubiubiubiubiubiubiu</p>
	<p>1231-2312333333333333333333333312312312</p>
  </div>
</template>
<script>
	export default {
		
	}
</script>
<style scoped lang="less">
	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, .1);
		p {
			font-size: 12px;
			color: rgba(0, 0, 0, .4);
			margin-top: 4px;
		}
		p1 {
			margin-bottom: 18px;
		}
		:nth-child(1) {
			width: 99%;
			height: 35px;
			margin-top: 15px;
			border-radius: 5px;
			color: #ffffff;
			text-align: center;
			line-height: 35px;
			background-color: #00C98D;
			cursor: pointer;
		}
	}
</style>
