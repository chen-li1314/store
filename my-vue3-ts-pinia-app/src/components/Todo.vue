<template>
    <div>
      <h2>Todo List</h2>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" v-model="todo.done" @change="toggleTodo(todo.id)" />
          <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">{{ todo.text }}</span>
          <button @click="removeTodo(todo.id)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  import { useTodoStore } from '@/stores/todo'
  
  export default defineComponent({
    setup() {
      const todoStore = useTodoStore()
      const newTodo = ref('')
  
      const addTodo = () => {
        if (newTodo.value.trim() !== '') {
          todoStore.addTodo(newTodo.value)
          newTodo.value = ''
        }
      }
  
      return {
        newTodo,
        todos: computed(() => todoStore.todos),
        addTodo,
        toggleTodo: todoStore.toggleTodo,
        removeTodo: todoStore.removeTodo
      }
    }
  })
  </script>
  