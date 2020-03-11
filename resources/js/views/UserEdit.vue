<template>
    <div>
        <div>
            <h1>ユーザー更新</h1>
            <p>
                User Id: {{ user.id }}
            </p>
            <form @submit.prevent="updateUser">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input v-model="user.name">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input v-model="user.email">
                </div>
                <button type="submit">更新</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            user: {
                id: '',
                name: '',
                email: ''
            }
        }
    },
    methods: {
        updateUser() {
            axios
                .put(`/api/user/${this.user.id}`,
                    { user: this.user }
                )
                .then(res => {
                    this.user = res.data.user
                    this.$router.push({
                        name: 'user_detail',
                        params: {
                            id: this.$route.params.id
                        }
                    })
                })
                .catch(err => console.log(err))
        }
    },
    created () {
        axios.get(`/api/user/${this.id}`)
            .then(res => this.user = res.data.user)
            .catch(err => console.log(err))
    }
}
</script>
