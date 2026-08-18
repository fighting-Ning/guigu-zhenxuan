// 注册全局组件
// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/SvgIcon.vue'
import PaginationCop from './Pagination/PaginationCop.vue'

import type { App } from 'vue'

// 全局对象
const allGlobalComponents = { SvgIcon, PaginationCop }

export default {
  // 方法名固定
  install(app: App) {
    // 将全局对象挂载到app上
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(
        key as keyof typeof allGlobalComponents,
        allGlobalComponents[key as keyof typeof allGlobalComponents],
      )
    })
  },
}
