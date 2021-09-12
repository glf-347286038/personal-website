<template>
  <div class="home">
    <div class="home_center">
      <p>开发者-高凌峰</p>
      <el-button type="success" @click="githubLogin" plain v-model=data.userInfo.userName>
        {{data.userInfo.userName}}
      </el-button>
    </div>
  </div>
</template>

<script>
  import GithubLogin from '../../login/views/GithubLogin'
  import {getItem} from '../../../utils/storage'

  export default {
    name: 'Home',

    data: function () {
      return {
        data: {
          userInfo: {
            userName: ''
          }
        }
      }

    },

    methods: {
      /**
       * github认证登录
       */
      githubLogin () {
        console.log('开始')
        GithubLogin.methods.githubLogin()
      }

    },
    created () {
      if (getItem('userName') !== null) {
        this.$message({
          message: this.data.userInfo.userName + 'github已经登录成功',
          type: 'success',
          duration: 2000
        })
        this.data.userInfo.userName = getItem('userName') + ',欢迎登录'
      } else {
        this.data.userInfo.userName = 'github登录'
      }
    },

  }
</script>

<style scoped>

</style>
