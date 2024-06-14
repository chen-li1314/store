<template>
  <div>
    <ul>
      <li v-for="product in allProducts" :key="product.id">{{ product.name }}</li>
    </ul>
    <button @click="fetchProducts">Fetch Products</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  computed: {
    ...mapState('product', {
      allProducts: state => state.allProducts
    })
  },
  methods: {
    ...mapActions('product', ['fetchProducts'])
  },
  mounted() {
    console.log('Initial products:', this.allProducts);  // 打印初始值
  },
  watch: {
    allProducts(newValue) {
      console.log('allProducts updated:', newValue);  // 检查 allProducts 更新
    }
  }
};
</script>
