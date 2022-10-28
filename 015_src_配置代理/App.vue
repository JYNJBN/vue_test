<template>
  <div id="root">
    <button @click="setReq1">发送get1请求</button>  
    <button @click="setReq2">发送get2请求</button>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    setReq1(){
      axios.get('http://localhost:8080/serve1/students')
      .then(response=>{
        // console.log(response);
        console.log(response.data);
      }).catch(err=>{
        console.log(err.message);
      })
    },
     setReq2(){
    axios.get('http://localhost:8080/serve2/cars')
    .then(response=>{
      console.log(response.data);
    },err=>{
      console.log(err.message);
    })
  }
  },
 
}

</script>


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
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-normal {
  color: #fff;
  background-color: #45be77;
  border: 1px solid #45be77;
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
