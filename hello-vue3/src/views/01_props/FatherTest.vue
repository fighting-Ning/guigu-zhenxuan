<script setup lang="ts">
import ChildTest from './ChildTest.vue'
import { ref } from 'vue'

// props：可以实现父子组件通信，props数据还是只读的！
const money = ref(10000)
</script>

<template>
  <div class="container">
    <span class="header">我是父组件</span>
    <ChildTest info="我是你爹" :money="money"></ChildTest>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: pink;
  width: 80vw;
  height: 30vw;
  justify-content: left;
}

.header {
  margin: 40px 20px;
}
</style>
