<template>
	<div class="detail">
		<div class="header">
			<i class="iconfont return" @click="go">&#xe604;</i>
			<span>书籍详情</span>
			<i class="iconfont home">&#xe607;</i>
		</div>
		<div class="bookInfo">
			<img class="img" :src="book.image"width="98px" height="130px" alt="">
			<div class="info">
				<span class="name">{{book.name}}</span>
				<span class="author">{{book.author}}</span>
			</div>
		</div>
		<div class="btns">
			<input class="readBtn btn" type="button" value="开始阅读">
			<input class="downBtn btn" type="button" value="离线下载">
			<input class="addBtn btn" type="button" value="加入书架">
		</div>
		<div class="desc">
			{{book.description}}
		</div>
		<grayLine></grayLine>
		<div class="commentTitle">
			精华评论
		</div>
		<ul class="comments">
			<li class="comment"  v-for="(item,index) in book.comments" key="index">
				<img class="icon" :src="item.icon" alt="">
				<div class="info">
					<span class="title">{{item.name}}</span>
					<span class="content">{{item.content}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import grayLine from '../Home/grayLine.vue'
	export default {
		data() {
			return {
				book: this.$route.params.book
			}
		},
		methods: {
			go() {
				this.$router.go(-1);
			}
		},
		components: {
			grayLine
		}
	}
</script>

<style scpoed lang="less">
	@margin: 17px;
	.detail {
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
		.bookInfo {
			display: flex;
			margin: @margin;
			.img {
				
			}
			.info {
				flex: 1;
				margin: @margin;
				.name {
					display: block;
					font-size: 17px;
				}
				.author {
					display: block;
					font-size: 14px;
					line-height: 40px;
					color: #999;
				}
			}
		
		}
		.btns {
			display: flex;
			margin: @margin;
			justify-content: space-between;
			.btn {
				width: 105px;
				height: 41px;
				background-color: #ffffff;
				border: solid 1px #00C98D;
				border-radius: 5px;
				color: #00C98D;
				cursor: pointer;
			}
			.readBtn {
				background-color: #00C98D;
				color: #ffffff;
			}
		}
		.desc {
			margin: @margin;
			color: #999;
			font-size: 14px;
			line-height: 26px;
		}
		.commentTitle {
			margin-left: @margin;
			border-bottom: solid 1px rgba( 0, 0, 0, .1);
			font-size: 15px;
			line-height: 40px;
		}
		.comments {
			margin: @margin;
			.comment {
				display: flex;
				margin-top: 20px;
				padding-bottom: 10px; 
				border-bottom: solid 1px rgba( 0, 0, 0, .1);
				.icon {
					// flex: 0 24px;
					width: 24px;
					height: 24px;
				}
				.info {
					flex: 1;
					margin-left: 10px;
					.title {
						display: block;
						color: #999;
						font-size: 13px;
					}
					.content {
						display: inline-block;
						margin-top: 10px;
						font-size: 13px;
					}
				}
			}
		}
	}
</style>
