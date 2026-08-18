import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from './router'

// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
// 配置element-plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 获取应用实例对象
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})

// svg插件需要配置代码
import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目全局组件
import globalComponents from '@/components' // 默认就是index
// 安装自定义插件
app.use(globalComponents)

// 将应用挂载到挂载点上
app.mount('#app')
