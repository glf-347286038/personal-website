// 当前环境
import axios from 'axios'

const environment = process.env['NODE_ENV']
const userServiceName = '/user-service'
const orderServiceName = '/order'
const productServiceName = '/product'

const dev = 'http://127.0.0.1:8001'
const product = 'http://118.190.211.69:8001'

// 公共路径
let publicUrl

if (environment === 'development') {
  publicUrl = {
    user: dev + userServiceName,
    order: dev + orderServiceName,
    product: dev + productServiceName,
  }
} else if (environment === 'production') {
  publicUrl = {
    user: product + userServiceName,
    order: product + orderServiceName,
    product: product + productServiceName,
  }
}
export {publicUrl}
