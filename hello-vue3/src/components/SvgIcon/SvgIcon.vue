<!-- 本意是index.vue 但是符合lint规范，就multi-words -->
<script setup lang="ts">
defineProps({
  // xlink:href属性值前缀
  prefix: {
    name: String,
    default: '#icon-',
  },
  // 提供使用的图标名字
  name: String,
  // 接受父组件传递颜色
  color: String,
  // 样式-高度
  width: String,
  // 样式-高度
  height: String,
})
</script>

<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss"></style>
