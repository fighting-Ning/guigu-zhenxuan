<script setup lang="ts">
import $bus from '@/bus'

const handler = () => {
  $bus.emit('car', { car: '法拉利' })
}
</script>

<template>
  <div class="box2">
    <span>我是曹丕</span>
    <button @click="handler">点我给兄弟上跑车</button>
  </div>
</template>

<style scoped lang="scss">
.box2 {
  width: 400px;
  height: 400px;
  background-color: red;
}
</style>
