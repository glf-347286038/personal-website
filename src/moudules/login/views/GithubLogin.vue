<template>
  <div class="githubLoginLoading" v-loading="loading" element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
  </div>
</template>

<script>

  import {githubLogin, publicUrl} from '../../../config/request'
  import {getUrlParam} from '../../../utils/getUrlParam'

  export default {
    name: 'GithubLoginLoading',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        loading: true, // 等待登录成功
        data: {
          userInfo: {
            accessToken: '',
            account: '',
            bio: '',
            id: '',
            name: '',
            nationality: '',
            location: ''
          }
        }

      }
    },

    methods: {
      /**
       * @param code github授权code
       */
      getTokenAndGithubUserInfo (code) {
        console.log(publicUrl.user + code)
        this.$axios({
          method: 'get',
          url: `${publicUrl.user}/login/githubLogin`,
          params: {
            code: code
          },
        }).then(res => {
          const result = res.data.data
          console.log('用户信息:' + result)
          console.log(result.name)
          this.loading = false
          localStorage.setItem('userName', result.name)
          localStorage.setItem('accessToken', result.accessToken)
          // this.$router.replace('/home')
          this.$router.back()
        }).catch(error => {
          this.loading = false
          this.$router.back()
          this.$message.error('github网络异常,请重新登录!' + error)
        })
      },

      /**
       * github认证登录
       */
      githubLogin () {
        console.log("sss")
        const authorization_uri = `${githubLogin.authorization_uri}`
        const client_id = `${githubLogin.client_id}`
        const authorization_callback_url = `${githubLogin.authorization_callback_url}`
        location.href = `${authorization_uri}?client_id=${client_id}&redirect_uri=${authorization_callback_url}`
        // 被路由监听到
      }

    },

    // 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
    created () {
      console.log('开始从url上解析GitHub授权code')
      const code = getUrlParam('code')
      this.getTokenAndGithubUserInfo(code)
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .githubLoginLoading {
    width: 100%;
    height: 100%;
  }
</style>
