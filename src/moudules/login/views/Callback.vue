<template>
  <div>
    <el-form ref="loginForm" class="login-form" auto-complete="on"
             label-position="left">
      <el-button style="width:100%;margin-bottom:30px;"
                 @click.native.prevent="test">Login
      </el-button>
    </el-form>
  </div>
</template>

<script>
  import {getUrlParam} from '../../../utils/urlUtil'

  export default {
    name: 'callback',

    methods: {
      test () {
        window.location.href = 'http://127.0.0.1:2002/authorize?appId=delta-test'
      },
      /**
       * 根据验证码获取授权码
       */
      accessToken () {
        // 从url上获取验证码
        let code = getUrlParam('code')
        console.log('sso返回的code为{}', code)
        // 模拟从后端获取授权码

      }

    },

    /**
     * 生命周期函数
     * 用于sso回调接收验证码
     */
    created: function () {
      // 获取授权码
      this.accessToken()
    }
  }


</script>

<style scoped>

</style>
