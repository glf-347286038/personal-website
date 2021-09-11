// 当前环境
const environment = process.env['NODE_ENV']
const userServiceName = '/user'
const orderServiceName = '/order'
const productServiceName = '/product'

const dev = 'http://127.0.0.1:8001'
const product = 'http://118.190.211.69:8001'

// 公共路径
let publicUrl

let githubLogin

if (environment === 'development') {
  publicUrl = {
    user: dev + userServiceName,
    order: dev + orderServiceName,
    product: dev + productServiceName,
  }
  githubLogin = {
    authorization_uri: 'https://github.com/login/oauth/authorize',
    client_id: '13112e32b406a71b053a',
    authorization_callback_url: 'http://localhost:8000/githubLogin'
  }

} else if (environment === 'production') {
  publicUrl = {
    user: product + userServiceName,
    order: product + orderServiceName,
    product: product + productServiceName,
  }
  githubLogin = {
    authorization_uri: 'https://github.com/login/oauth/authorize',
    client_id: '50bc59db4f8209204635',
    authorization_callback_url: 'http://118.190.211.69:8000/githubLogin'
  }
}
export {publicUrl, githubLogin}
