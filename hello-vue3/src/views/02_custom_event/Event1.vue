<script setup lang="ts">
const handler1 = () => {
  console.log('子组件方法被触发')
}
</script>

<template>
  <div>
    <button @click="handler1">点击我也执行</button>
  </div>
</template>

<style scoped lang="scss"></style>
