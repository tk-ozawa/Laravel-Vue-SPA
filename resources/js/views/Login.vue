<template>
  <div>
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input
          type="email"
          v-model="email"
          name="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          v-if="!isDisplay"
          required
        />
        <input
          type="text"
          v-model="password"
          class="form-control"
          v-else
          required
        />
        <label for="passwordDisplay">パスワードを表示する</label>
        <input type="checkbox" v-model="isDisplay" id="passwordDisplay" />
      </div>
      <button type="submit" class="btn btn-primary">ログイン</button>
      <label for="storeLoginState">ログイン状態を保持</label>
      <input type="checkbox" v-model="storeLoginState" id="storeLoginState" />
    </form>
    <span v-show="isError" class="alert alert-warning"
      >認証に失敗しました。</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
      isDisplay: false,
      storeLoginState: false,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios
        .post('/api/login', {
          email: this.email,
          password: this.password,
          storeLoginState: this.storeLoginState
        })
        .then(res => {
          const token = res.data.access_token
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          this.$isLogin = true
          this.$router.push({ path: '/' })
        })
        .catch(err => {
          this.isError = true
          console.error(err)
        })
    }
  }
}
</script>

<style></style>
