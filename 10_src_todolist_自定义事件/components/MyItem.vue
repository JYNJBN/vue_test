<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
	<li>
		<label>
			<input type="checkbox" :checked="todoObj.done" @click="getCheckId(todoObj.id)" />
			<span>{{ todoObj.title }}</span>
		</label>
		<button class="btn btn-danger" @click="getDeleteId(todoObj.id)">删除</button>
	</li>
</template>

<script>
	export default {
		name: 'MyItem',
		props: ['todoObj', 'changeState', 'deleteItems'],
		methods: {
			// 通知app.vue进行改变状态
			getCheckId(id) {
				console.log(id);
				this.changeState(id);
			},
			// 通知app.vue进行删除
			getDeleteId(id) {
				console.log(id);
				if (confirm('你确认要删除吗？')) {
					this.deleteItems(id);
				}
			},
		},
	};
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}
	li:hover {
		background-color: #ddd;
	}
	li:hover button {
		display: inline-block;
	}
</style>
