<script setup lang="ts">
// 在组件注册时就要绑定总线事件
import $bus from '@/bus'
import { onMounted } from 'vue'

onMounted(() => {
  $bus.on('car', (car) => {
    console.log(car)
  })
})
</script>

<template>
  <div class="box1">
    <span>我是曹植</span>
  </div>
</template>

<style scoped lang="scss">
.box1 {
  width: 400px;
  height: 450px;
  background-color: yellow;
}
</style>
