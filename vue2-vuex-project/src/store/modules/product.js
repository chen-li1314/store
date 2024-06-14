const state = {
  allProducts: []
};

const mutations = {
  setProducts(state, products) {
    console.log('setProducts mutation called', products);
    state.allProducts = products;
  }
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      console.log("Fetching products...");
      // 模拟异步请求
      const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' }
      ];
      commit('setProducts', products);
      console.log("Products fetched:", products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
