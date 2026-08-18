<script setup lang="ts">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
</script>

<template>
  <div class="box">
    <span>我是曹操</span>
    <div class="child">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: skyblue;
  width: 900px;
  height: 600px;
}

.child {
  background-color: pink;
  justify-content: right;
  align-content: space-between;
}
</style>
