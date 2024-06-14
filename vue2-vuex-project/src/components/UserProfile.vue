<template>
  <div>
    <p>User: {{ userName }}</p>
    <p>Logged In: {{ isLoggedIn }}</p>
    <button @click="fetchUser">Fetch User</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserProfile',
  computed: {
    ...mapState('user', {
      userName: state => {
        const name = state.user ? state.user.name : '';
        console.log('Computed userName:', name);
        return name;
      },
      isLoggedIn: state => {
        const loggedIn = !!state.user;
        console.log('Computed isLoggedIn:', loggedIn);
        return loggedIn;
      }
    })
  },
  methods: {
    ...mapActions('user', ['fetchUser'])
  },
  mounted() {
    console.log('Initial userName:', this.userName);  // 打印初始值
  }
};
</script>
