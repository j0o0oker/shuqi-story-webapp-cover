<template>
	<div class="mainContent" v-if="this.Data.books">
		<div class="recommend">
			<span class="greenBox"></span>
			<span class="title">热门推荐</span>
			<booksShow :recommendData="recommenddata"></booksShow>
			<Refresh :refreshArr="recommenddata"></Refresh>
		</div>
		<grayLine></grayLine>
		<div class="girls">
			<span class="greenBox"></span>
			<span class="title">女生美文</span>
			<booksShow :recommendData="girlsData"></booksShow>
			<ul class="detail">
				<li class="item" v-for="(item,index) in girlsData">
					<span class="girlTitle">{{item.name}}</span>
					<ul class="tags">
						<li class="tag" v-for="(tag,index) in item.tags" v-if="index<3">{{tag}}</li>
					</ul>
					<span class="description">{{item.description}}</span>
				</li>
			</ul> 
		</div>
		<grayLine></grayLine>
		<div class="boy">
			<span class="greenBox"></span>
			<span class="title">男生美文</span>
			<booksShow :recommendData="boyData"></booksShow>
		</div>
		<grayLine></grayLine>
	</div>
</template>

<script>
	import booksShow from './booksShow.vue'
	import grayLine from './grayLine.vue'
	import Refresh from './Refresh.vue'
	export default {
		data () {
			return {
				
			}
		},
		props: [
			'Data'
		],
		created () {
			// console.log(this.Data.books);

		},
		computed: {
			recommenddata () {
				return this.Data.books.filter(item => item.type==0); 
			},
			girlsData () {
				return this.Data.books.filter(item => item.type==1); 
			},
			boyData () {
				return this.Data.books.filter(item => item.type==2); 
			}
		},
		components: {
			booksShow,grayLine,Refresh
		}
	}
</script>

<style lang="less">
	.mainContent {
			.greenBox {
			display: inline-block;
			width: 10px;
			height: 14px;
			margin-right: 3px;
			margin-top: 16px;
			background-color: #00c27e;
		}
		.title {
			display: inline-block;
			width: 60px;
			height: 47px;
			line-height: 47px;
			font-size: 14px;
			vertical-align: top;
		}
		.detail {
			.item {
				display: block;
				margin: 17px;
				border-top: 1px solid rgba(0, 0, 0, .1);
				.girlTitle {
					display: inline-block;
					height: 20px;
					margin-top: 20px;
					// margin-right: 100px;
					line-height: 20px;
					font-size: 16px;
					
				}
				.tags {
					float: right;
					display: inline-block;
					margin-top: 19px;
					.tag {
						display: inline-block;
						// width: 32px;
						height: 18px;
						padding: 0 4px 0 4px;
						margin-left: 5px;
						font-size: 10px;
						line-height: 18px;
						border: 1px solid #00c27e;
					}
				}
				.description {
					display: block;
					margin-top: 15px;
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
