import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user';
import product from './modules/product';

export default createStore({
  modules: {
    user,
    product
  },
  plugins: [createPersistedState()]
});
