<template>
  <div>
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" v-model="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">ログイン</button>
      <span v-show="isError" class="alert alert-warning">認証に失敗しました。</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios
        .post(
          '/api/login',
          {
            email: this.email,
            password: this.password
          }
        )
        .then(res => {
          const token = res.data.access_token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          this.$isLogin = true
          this.$router.push({ path: '/' })
        })
        .catch(err => {
          this.isError = true
        })
    }
  }
}
</script>

<style>

</style>
