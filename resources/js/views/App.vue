<template>
    <div>
        <ul>
            <li><router-link to="/">ホーム</router-link></li>
            <li><router-link to="/login">ログイン</router-link></li>
            <li><router-link to="/about">about</router-link></li>
            <li><router-link to="/user">ユーザー情報</router-link></li>
            <li v-if="$isLogin">
              <button @click="logout">
                ログアウト
              </button>
            </li>
            <li>{{ $isLogin }}</li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  methods: {
    logout() {
      axios
        .post('/api/logout')
        .then(res => {
          axios.defaults.headers.common['Authorization'] = ''
          this.$isLogin = false
          this.$router.push({ path: '/' }, () => {})  // v3.1.xからはコールバック関数必要
        })
    }
  },
}

</script>
