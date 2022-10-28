<template>
	<div class="school">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
	</div>
</template>

<script>
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: 'School',
		props: ['getSchoolName'],
		data() {
			return {
				name: '尚硅谷',
				address: '北京',
			};
		},
		methods: {
			accept(name) {
				console.log('接收到studentName', name);
			},
		},
		mounted() {
			this.$bus.$on('demo', this.accept);
			console.log(this.$bus);
		},
	};
</script>

<style scoped>
	.school {
		background-color: skyblue;
		padding: 5px;
	}
</style>
