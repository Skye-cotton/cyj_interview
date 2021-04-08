<template>
    <section class="todoapp">
      <header class="header">
        <h1>Vue3 todos</h1>
        <input type="text" class="new-todo" placeholder="想干的事" @keyup.enter="addTodo" v-model="newTodo">
      </header>
    </section>
    <section class="main">
      <ul class="todo-list">
        <li v-for="(todo,index) in todos" :key="todo.id" class="todo">
          <div class="view">
            <label>{{todo.title}}</label>
            <button class="destroy" @click="removeTo(index)" ></button>
          </div>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  import { reactive, toRefs } from 'vue'
  export default {
    setup () {
      const state = reactive({
        newTodo:'',
        todos: [
          { id: '1', title: '吃饭', complated: false },
          { id: '2', title: '睡觉', complated: false }
        ]
      })
      function addTodo() {
        //   console.log(state.newTodo);
        let value=state.newTodo && state.newTodo.trim()
        if (!value) return
        state.todos.push({
            id:state.todos.lengths+1,
            title:value,
            complated:false
        })
        state.newTodo=''
      }
      function removeTo(index) {
          state.todos.splice(index,1)

      }
      return {
        ...toRefs(state),
        addTodo,
        removeTo
      }
    }
  }
  </script>
  
  <style>
  
  </style>