<template>
	<div class="app">
		<h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName" />

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
		<!-- <Student @demo="getStudentName" /> -->
		<Student ref="student" />

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
		<!-- <Student ref="student" @click.native="show"/> -->
	</div>
</template>

<script>
	import Student from './components/Student';
	import School from './components/School';

	export default {
		name: 'App',
		// eslint-disable-next-line vue/no-unused-components
		components: { School, Student },
		data() {
			return {
				msg: '你好啊！',
				studentName: '',
			};
		},
		methods: {
			getSchoolName(name) {
				console.log('app接受到了学校名' + name);
			},
			getStudentName(name, ...parameters) {
				console.log('app接受到了学生名' + name);
				this.studentName = name;
				// console.log(parameters);
			},
		},
		mounted() {
			this.$refs.student.$on('demo', (name) => {
				console.log('app接受到了学生名' + name);
				this.studentName = name;
			});
		},
	};
</script>

<style scoped>
	.app {
		background-color: gray;
		padding: 5px;
	}
</style>
