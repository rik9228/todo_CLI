<template>
  <div id="app">
    <h1>Todoリスト</h1>
    <FilterTodoButtons @onSelect="filterTodos"></FilterTodoButtons>
    <TodosTable
    :todos="todos"
    @deleteTodo="deleteTodo"
    @editTodo="editTodo"
    >
    </TodosTable>
    <AddTodo
    @addTodo="addTodo">
    </AddTodo>
    <UpdateTodo
    :showUpdateForm="showUpdateForm"
    :updateTodos="updateTodos"
    @accept="updateTodo"
    @onBack="updateBack"
    ></UpdateTodo>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo'
import TodosTable from './components/TodosTable'
import UpdateTodo from './components/UpdateTodo'
import FilterTodoButtons from './components/FilterTodoButtons'

export default {
  name: 'App',
  components: {
    AddTodo,
    TodosTable,
    UpdateTodo,
    FilterTodoButtons
  },
  data: function () {
    return {
      todos: [],
      updateTodos: {
        id: null,
        name: '',
        state: false
      },
      savedTodos: [],
      showUpdateForm: false
    }
  },
  methods: {
    addTodo: function (todoId, todoTitle, todoState) {
      this.todos.push({
        id: todoId,
        name: todoTitle,
        state: todoState
      })
    },
    deleteTodo: function (targetTodo) {
      this.todos = this.todos.filter(todo => todo.id !== targetTodo.id)
      // todosの数が0個になった場合はshowUpdateFormを消す
      if (this.todos.length === 0) {
        this.showUpdateForm = false
      }
    },
    editTodo: function (targetTodo) {
      this.updateTodos = {
        id: targetTodo.id,
        name: targetTodo.name,
        state: targetTodo.state
      }

      if (this.showUpdateForm) {
        this.showUpdateForm = false
      } else {
        this.showUpdateForm = true
      }
    },
    updateTodo: function (updateTodoName) {
      this.todos = this.todos.filter(todo => {
        if (updateTodoName.id === todo.id) {
          todo.name = updateTodoName.name
        }
        return this.todos
      })
    },
    // 戻るボタン
    updateBack: function () {
      this.updateTodos = {
        id: null,
        name: '',
        state: false
      }
      this.showUpdateForm = false
    },
    filterTodos: function (state) {
      this.todos = this.todos.filter(todo => todo.state === state)
    }
  }
  // computed: {
  //   filterTodos: function (state) {
  //     return this.todos.filter(todo => todo.state === state.textContent)
  //   }
  // }

}
</script>

<style>

</style>
