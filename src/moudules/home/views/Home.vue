<template>
  <div class="home">
    <div class="home_center">
      <p>高凌峰</p>
      <a href="https://github.com/login/oauth/authorize?client_id=13112e32b406a71b053a&state=gao">
        登录
      </a>
      <div class="github-btn">
        <button @click="githubLogin">github登录</button>
      </div>

    </div>
  </div>
</template>

<script>
  import GithubLogin from '../../login/views/GithubLogin'

  export default {
    name: 'Home',

    data: function () {
      return {
        param: {
          githubUrl: 'https://github.com/login/oauth/authorize?client_id=13112e32b406a71b053a&state=gao'
        },
      }

    },

    methods: {
      /**
       * github认证登录
       */
      githubLogin () {
        GithubLogin.methods.githubLogin()
      }

    },

  }
</script>

<style scoped>

</style>
