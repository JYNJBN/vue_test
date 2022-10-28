<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @click="getCheckId(todoObj.id)" /><span v-show="!todoObj.flag">{{
        todoObj.title
      }}</span>
      <input
        type="text"
        v-bind:value="todoObj.title"
        v-show="todoObj.flag"
        @blur="sendInputValue"
        ref="modifyData"
    /></label>
    <button class="btn btn-danger" @click="getDeleteId(todoObj.id)">
      删除
    </button>
    <button class="btn btn-normal" @click="addFlag">编辑</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  methods: {
    // 通知app.vue进行改变状态
    getCheckId(id) {
      console.log(id);
      // this.changeState(id);
      this.$bus.$emit('changeState', id);
    },
    // 通知app.vue进行删除
    getDeleteId(id) {
      console.log(id);
      if (confirm('你确认要删除吗？')) {
        // this.deleteItems(id);
        this.$bus.$emit('deleteItems', id);
      }
    },
    // 添加一个标准用于显示input框
    addFlag() {
      if (!Object.prototype.hasOwnProperty.call(this.todoObj, 'flag')) {
        //没有就添加flag属性
        this.$set(this.todoObj, 'flag', true);
      } else {
        // eslint-disable-next-line vue/no-mutating-props
        this.todoObj.flag = true;
      }
      this.$nextTick(function () {
        this.$refs.modifyData.focus();
      });

      // setTimeout(() => {
      // 	this.$refs.modifyData.focus();
      // }, 0);
    },
    sendInputValue() {
      // eslint-disable-next-line vue/no-mutating-props
      this.todoObj.flag = false;
      this.$bus.$emit(
        'modifyItems',
        this.todoObj.id,
        this.$refs.modifyData.value
      );
    },
  },
  props: ['todoObj'],
  setup() {
    return {};
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

.btn-normal {
  margin-right: 5px;
}
</style>
