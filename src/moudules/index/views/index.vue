<template>
  <div class="home">
    <div class="home_center">
      <p>开发者-高凌峰</p>
      <el-button type="success" @click="getUserInfo" plain v-model=data.userInfo.userName>
        {{data.userInfo.userName}}
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',

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
      getUserInfo () {
        const that = this
        this.$axios({
          method: 'get',
          url: 'http://192.168.0.106:5004/sso/getUserInfo'
        }).then(function (response) {
          console.log(response)
          console.log(response.status)
        }).catch((error) => {
          switch (error.response.status) {
            case 401:
              console.log('未认证,跳转到登录页面')
              // location.href = 'http://localhost:5000/sso/checkLogin?redirectUrl=http://localhost:5004/sso/verify'
              this.$axios({
                method: 'get',
                url: 'http://192.168.0.106:5000/sso/checkLogin',
                withCredentials: true
              }).then(function (response) {
                console.log('checkLogin:' + response.data)
                if (!response.data) {
                  that.$router.push('login')
                }
              })
            // location.href = 'http://localhost:5000/sso/checkLogin?redirectUrl=http://127.0.0.1:8000/verify'
          }
        })
      },

      /**
       * 测试按钮,用与跳转到sso页面
       */
      testAuthorize () {
        console.log("")
      }

    },
    created () {
      // 获取登录者的用户信息
      console.log('开始')
      this.getUserInfo()
    },

  }
</script>

<style scoped>

</style>
