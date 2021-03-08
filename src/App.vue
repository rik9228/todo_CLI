<template>
  <div id="app">
    <h1>Todoリスト</h1>
    <FilterTodoButtons @filterTodos="changeState"></FilterTodoButtons>
    <TodosTable
    :todos="filterTodos"
    @deleteTodo="deleteTodo"
    @editTodo="editTodo"
    @changeTodoState="changeTodoState"
    >
    </TodosTable>
    <AddTodo
    @addTodo="addTodo">
    </AddTodo>
    <UpdateTodo
    v-if="showUpdateForm"
    :showUpdateForm="showUpdateForm"
    :updateTodosName="updateTodos.name"
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
      showUpdateForm: false,
      currentTodoState: 'all'
    }
  },
  computed: {
    filterTodos: function (targetTodoState) {
      if (this.currentTodoState === 'all') {
        return this.todos
      } else if (this.currentTodoState === 'working') {
        return this.todos.filter(todo => !todo.state)
      } else {
        return this.todos.filter(todo => todo.state)
      }
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
    deleteTodo: function (targetTodoId) {
      this.todos = this.todos.filter(todo => todo.id !== targetTodoId)
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
      this.todos.forEach(todo => {
        if (this.updateTodos.id === todo.id) {
          todo.name = updateTodoName
        }
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
    changeState: function (targetStateValue) {
      this.currentTodoState = targetStateValue
    },
    changeTodoState: function (targetTodoId) {
      this.todos.forEach(todo => {
        if (targetTodoId === todo.id) {
          todo.state = !todo.state
        }
      })
    }
  }
}
</script>

<style>

</style>
