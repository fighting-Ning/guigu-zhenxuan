// 引入createApp组件，用于创建vue
import { createApp } from 'vue'
// 引入vue的根组件
import App from './App.vue'

// 将vue挂载到app容器中（app容器在index.html中)
createApp(App).mount('#app')
