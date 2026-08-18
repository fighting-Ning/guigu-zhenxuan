<script setup lang="ts">
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'

// 事件回调 -- 1
const handler = (event) => {
  // event即为事件对象
  console.log(event)
}

// 事件回调--2
const handler1 = (a, b, c, $event) => {
  console.log(a, b, c, $event)
}

const handler2 = () => {
  console.log('djklgjfkl')
}
</script>

<template>
  <div class="box">
    <h1>事件</h1>
    <!-- 原生DOM事件 -->
    <pre @click="handler">
      大江东去浪淘尽，千古风流人物
    </pre>
    <button @click="handler1(1, 2, 3, $event)">点击我传递多个参数</button>

    <hr />

    <!--
    重点区分：
      在vue2中，此写法是自定义事件，可以通过.navite修饰符变为原生DOM事件
      在vue3中，下面写法即为原生DOM事件
      vue3：原生的DOM事件不管在标签身上、组件标签身上都是原生DOM事件
    -->
    <Event1 @click="handler2">Event1</Event1>

    <hr />

    <Event2></Event2>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: skyblue;
  height: 400px;
  height: 300px;
}
</style>
