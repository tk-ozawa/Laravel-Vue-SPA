<template>
  <div>
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">
          <v-fa icon="envelope" />
          メールアドレス
        </label>
        <input
          type="email"
          v-model="email"
          name="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">
          <v-fa icon="key" />
          パスワード
        </label>
        <input
          v-if="!isDisplay"
          type="password"
          v-model="password"
          class="form-control"
          required
        />
        <input
          v-else
          type="text"
          v-model="password"
          class="form-control"
          required
        />
        <div class="text-right">
          <label for="passwordDisplay">
            <v-fa icon="eye" />
            パスワードを表示する
          </label>
          <input
            type="checkbox"
            v-model="isDisplay"
            id="passwordDisplay"
            tabindex="-1"
          />
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary mr-2">ログイン</button>
        <label for="storeLoginState">
          <v-fa icon="save" />
          ログイン状態を保持
        </label>
        <input type="checkbox" v-model="storeLoginState" id="storeLoginState" />
        <span v-show="isError" class="alert alert-warning ml-2"
          >認証に失敗しました。</span
        >
      </div>
    </form>
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
