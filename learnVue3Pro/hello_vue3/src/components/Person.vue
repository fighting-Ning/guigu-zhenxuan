<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: 'Person',

  /*
    data、methods可以和setup同时存在，但不建议
    甚至可以通过data中使用this获取到setup中的数据， setup不能获取到vue2写法中的数据
  */

  setup() {
    // console.log(this) // setup函数中的this是undefined，vue3已经弱化this了
    // 数据
    let name = '张三' // 这种定义方式不是响应式的：数据值改变，但页面数据不会跟随改变
    let age = 18
    let tel = '12345678910'

    // 方法
    function showTel() {
      alert(tel)
    }

    function changeName() {
      name = 'zhang-san'
    }

    function changeAge() {
      age += 1
    }

    // 只有返回出去才能被使用
    return { name, age, showTel, changeName, changeAge }

    // setup的返回值也可以是一个渲染函数：直接代替template中的渲染内容
    // return () => '呵呵'
  },
}
</script> -->

<!-- setup 语法糖， name必须添加插件才能生效：vite-plugin-vue-setup-extend  -->
<script lang="ts" setup name="Person">
import { ref } from 'vue' // 引入ref， 与vue2的ref只是重名而已，毫无关系

// 数据
let name = ref('张三') // 响应式数据需要使用ref注册
let age = ref(18) // 响应式数据需要使用ref注册
let tel = '12345678910' //

// 方法
function showTel() {
  alert(tel)
}

function changeName() {
  name.value = 'zhang-san' // vue3语法，自动将value注册在RefImpl中，值在RefImpl.value中，在template中不需要使用.value，vue自动处理
}

function changeAge() {
  age.value += 1
}
</script>

<style>
.person {
  background-color: skyblue;
}
</style>
