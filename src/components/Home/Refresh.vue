<template>
	<div class="iconfont refresh" @click="refresh()">换一换&#xe644;</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: [
			'refreshArr'
		],
		methods: {
			refresh() {
				 console.log("这个功能还没写好");
		    }
		}
	}
</script>

<style scoped lang="less">
	.refresh {
		text-align: center;
		font-size: 15px;
		cursor: pointer;
	}
</style>
