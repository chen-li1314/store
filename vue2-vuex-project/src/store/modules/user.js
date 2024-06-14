const state = {
  user: null
};

const mutations = {
  setUser(state, user) {
    console.log('setUser mutation called', user);  // 添加日志
    state.user = user;
    console.log('Updated state:', state);  // 检查 state 更新情况
  }
};

const actions = {
  fetchUser({ commit }) {
    console.log("模拟异步请求");
    const user = { id: 1, name: 'John 2' };
    commit('setUser', user);
  }
};

const getters = {
  isLoggedIn: state => !!state.user,
  userName: state => (state.user ? state.user.name : '')
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
