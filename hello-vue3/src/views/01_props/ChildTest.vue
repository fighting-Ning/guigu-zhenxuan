<script setup lang="ts">
// 需要使用defineProps方法去接受父组件传递过来的数据
const props = defineProps(['money', 'info']) // 数组或对象写法

const updateProps = () => {
  // props.money = 100  // props的数据是只读数据
  console.log(props.info)
}
</script>

<template>
  <div class="box">
    <h1 style="color: red">我是子组件</h1>
    <span>{{ props.info }}</span>
    <span>{{ props.money }}</span>
    <h2>可以省略可以不写props.</h2>
    <span>{{ info }}</span>
    <span>{{ money }}</span>
    <button @click="updateProps">修改props数据</button>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: aqua;
  height: 30vh;
  width: 20vw;
}
</style>
