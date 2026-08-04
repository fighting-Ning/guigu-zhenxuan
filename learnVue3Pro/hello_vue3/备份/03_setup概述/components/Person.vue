<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  // vu2 语法
  /* data() {
    return {
      name: '张三',
      age: 18,
      tel: '12345678910',
      telVisible: false,
    }
  },
  methods: {
    showTel() {
      this.telVisible = true
    },

    changeAge() {
      this.age++
    },
    changeName() {
      this.name = 'Zhang-San'
    },
  }, */

  setup() {
    // console.log(this) // setup函数中的this是undefined， vue3中已经弱化this了
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

    return { name, age, showTel, changeName, changeAge }
  },
}
</script>

<style>
.person {
  background-color: skyblue;
}
</style>
