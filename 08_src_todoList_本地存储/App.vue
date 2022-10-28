<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addTodo="addTodo"></MyHeader>
				<MyList :todoArr="todoArr" :changeState="changeState" :deleteItems="deleteItems"></MyList>
				<MyFooter :todoArr="todoArr" :changeAll="changeAll" :clearItem="clearItem"></MyFooter>
			</div>
		</div>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader.vue';
	import MyFooter from './components/MyFooter.vue';
	import MyList from './components/MyList.vue';

	export default {
		name: 'App',
		components: { MyHeader, MyFooter, MyList },
		data() {
			return {
				todoArr: JSON.parse(localStorage.getItem('todoArr')),
			};
		},
		methods: {
			//添加代办事项
			addTodo(obj) {
				if (!obj.title) return;
				console.log('我是vue我接收到了數據' + obj.title);
				this.todoArr.unshift(obj);
			},
			//改变完成状态
			changeState(id) {
				for (let item of this.todoArr) {
					if (item.id == id) {
						item.done = !item.done;
					}
				}
			},
			// 删除代办事项
			deleteItems(id) {
				// for (let i in this.todoArr) {
				// 	if (id == this.todoArr[i].id) {
				// 		this.todoArr.splice(i, 1);
				// 	}
				// }
				this.todoArr = this.todoArr.filter((item) => item.id != id);
			},
			//全选  全不选
			changeAll(done) {
				this.todoArr.forEach((todoObj) => {
					todoObj.done = done;
				});
			},
			//清除选中的代办项
			clearItem() {
				this.todoArr = this.todoArr.filter((todoObj) => {
					return todoObj.done == false;
				});
			},
		},
		//将数据存储到localStorage中，实现重启浏览器数据还存在
		watch: {
			todoArr: {
				handler(newValue) {
					// console.log(JSON.stringify(newValue));
					localStorage.setItem('todoArr', JSON.stringify(newValue));
				},
				deep: true,
			},
		},
	};
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}

	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn:focus {
		outline: none;
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
