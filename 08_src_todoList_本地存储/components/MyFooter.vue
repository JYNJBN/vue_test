<template>
	<div class="todo-footer" v-show="total">
		<label>
			<!-- 全选第一种写法 -->
			<!-- <input type="checkbox" :checked="finish" @change="selectAllOrNone" ref="isAll" /> -->
			<input type="checkbox" v-model="finish" ref="isAll" />
		</label>
		<span>
			<span>已完成{{ doneTotal }}</span> / 全部{{ total }}
		</span>
		<button class="btn btn-danger" @click="clearCompletedTasks">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name: 'MyFooter',
		props: ['todoArr', 'changeAll', 'clearItem'],
		computed: {
			total() {
				return this.todoArr.length;
			},
			doneTotal() {
				// let i = 0;
				// this.todoArr.forEach((item) => {
				// 	if (item.done) i++;
				// });
				// return i;

				// let x = this.todoArr.reduce((pre, cur) => {
				// 	return pre + (cur.done ? 1 : 0);
				// }, 0);
				// return x;

				// return this.todoArr.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0);
				return this.todoArr.filter((todoObj) => todoObj.done == true).length;
			},
			// eslint-disable-next-line vue/return-in-computed-property
			finish: {
				// 全选第一种写法
				get() {
					return this.doneTotal === this.total && this.total > 0;
				},
				set(value) {
					// checkbox的value就是checked的值
					console.log(value);
					this.changeAll(value);
				},
			},
		},
		methods: {
			// 全选第一种写法
			// selectAllOrNone() {
			// 	// console.log(e.target.checked);
			// 	console.log(this.$refs.isAll.checked);
			// 	this.changeAll(this.$refs.isAll.checked);
			// },
			clearCompletedTasks() {
				this.clearItem();
			},
		},
	};
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
