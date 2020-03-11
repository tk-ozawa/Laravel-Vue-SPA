<template>
    <div>
        <h1>ユーザー一覧</h1>
        <router-link class="btn btn-primary" :to="{ name: 'user_create'}">ユーザー追加</router-link>
        <ul>
            <li v-for="(user, index) in users" v-bind:key="user.id">
                {{ user.name }}
                <router-link class="btn btn-success" :to="{ name: 'user_detail', params: { id: user.id }}">詳細</router-link>
                <router-link class="btn btn-primary" :to="{ name: 'user_edit', params: { id: user.id }}">更新</router-link>
                <span class="btn btn-danger" @click="userDelete(index, user.id)">削除</span>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return{
            users:[],
        }
    },
    methods: {
        userDelete(index, id) {
            axios.delete(`/api/user/${id}`)
                .then(res => {
                    this.users.splice(index, 1)
                })
                .catch(error => console.log(error));
        },
    },
    created() {
        axios.get('/api/user')
            .then(res =>{
                this.users = res.data.users;
            })
            .catch(error => {
                console.log(error)
            });
    },

}
</script>
