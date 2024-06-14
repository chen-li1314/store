<template>
    <div>
      <h1>Todo Page</h1>
      <Todo />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import Todo from '@/components/Todo.vue'
  
  export default defineComponent({
    components: {
      Todo
    }
  })
  </script>
  