<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<button @click="sendStudentName">发送studentName</button>
	</div>
</template>

<script>
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: 'Student',
		data() {
			return {
				name: '张三',
				sex: '男',
			};
		},
		methods: {
			sendStudentName() {
				this.$bus.$emit('demo', this.name);
			},
		},
		mounted() {},
	};
</script>

<style scoped>
	.student {
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
