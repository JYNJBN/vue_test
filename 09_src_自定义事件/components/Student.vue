<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<h2>当前求和为：{{ number }}</h2>
		<button @click="sendStudentName">把学生名给App</button>
		<button @click="unbinding">点击解绑自定义事件</button>
		<button @click="add">add</button>
		<button @click="kill">点击销毁student-vc实例对象</button>
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
				number: 0,
			};
		},
		methods: {
			sendStudentName() {
				this.$emit('demo', this.name, 111, 222, 333);
				// console.log(this);
			},
			unbinding() {
				// this.$off('demo');
				this.$off();
			},
			kill() {
				//销毁后绑定的事件都没有了，页面响应式也没有了
				this.$destroy();
			},
			add() {
				console.log('num++');
				this.number++;
			},
		},
	};
</script>

<style scoped>
	.student {
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
