/// <reference types="vite/client" />

// 手动为它添加一个类型声明，告诉 TS 编译器这个模块是存在的
declare module 'virtual:svg-icons-register' {
  const component: any
  export default component
}
