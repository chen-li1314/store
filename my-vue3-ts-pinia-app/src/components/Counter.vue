<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useCounterStore } from '@/stores/counter'
  
  export default defineComponent({
    setup() {
      const counterStore = useCounterStore()
      return {
        count: computed(() => counterStore.count),
        doubleCount: computed(() => counterStore.doubleCount),
        increment: counterStore.increment,
        decrement: counterStore.decrement
      }
    }
  })
  </script>
  