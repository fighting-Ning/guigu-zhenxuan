// 引入mitt插件: mitt是一个方法，方法执行后会返回buy对象
import mitt from 'mitt'

const $bus = mitt()

export default $bus
