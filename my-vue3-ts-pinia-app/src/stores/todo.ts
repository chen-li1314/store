import { defineStore } from 'pinia'

interface Todo {
  id: number
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    nextId: 1
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({ id: this.nextId++, text, done: false })
    },
    toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
})
