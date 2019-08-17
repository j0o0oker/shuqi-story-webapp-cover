<template>
	<div class="home">
		<Header></Header>
		<Menu></Menu>
		<MainContent :Data="data"></MainContent>
		<Footer></Footer>
	</div>
</template>

<script>
	import axios from 'axios';
	import Header from './Header.vue';
	import Menu from './Menu.vue';
	import MainContent from './MainContent.vue';
	import Footer from './Footer.vue';

	export default {
		data () {
			return {
				data:{}
			}
		},
		beforeCreate() {
			axios.get('../static/DATA/shuqi.json').then((res) => {
				this.data = res.data;
			})
		},
		components: {
			Header,Menu,MainContent,Footer
		}
	}
</script>
	
<style scoped lang="less">
	
</style>
