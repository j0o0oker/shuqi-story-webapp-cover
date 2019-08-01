<template>
	<div class="booksShow">
			<ul class="content">
				<li class="item"   v-for="item in recommendData">
					<img class="imgs" width=" 75px" height=" 100px" :src="item.image" @click="toDetail(item)">
					<span class="name">{{item.name}}</span>
					<span class="author">{{item.author}}</span>
				</li>
			</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		props: [
			'recommendData'
		],
		methods: {
			toDetail(item) {
				// console.log(item.name);
				this.$router.push(
				{
					name: 'Detail',
					params: {
						book: item
					}
				});
			}
		},
	}
</script>

<style lang="less">
	.booksShow {
			.content {
				display: block;
				margin-left: 17px;
				margin-bottom: 20px;
				.item {
					display: inline-block;
					width: 75px;
					height: 157px;
					margin-right: 14px;
					.imgs {
						display: block;
						
					}
					.name {
						display: inline-block;
						width: 90px;
						// height: 63px;
						margin-top: 10px;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 14px;
					}
					.author {
						display: inline-block;
						width: 90px;
						height: 28px;
						margin-top: 2px;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 14px;
						color: #999;
					}
				}
			}
	}
</style>
