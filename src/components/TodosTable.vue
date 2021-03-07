<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>タスク</th>
        <th>状態</th>
        <th>-</th>
        <th>-</th>
      </tr>
    </thead>
    <tbody>
      <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @onSubmit="onSubmit"
      @onChange="onChange"
      @onEdit="onEdit">
      </TodoItem>
    </tbody>
  </table>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  // ファイル名と同じにする
  name: 'TodosTable',
  props: {
    todos: {
      // 必須
      require: true
    }
  },
  methods: {
    onSubmit: function (targetTodoId) {
      this.$emit('deleteTodo', targetTodoId)
    },
    onEdit: function (targetTodo) {
      this.$emit('editTodo', targetTodo)
    },
    onChange: function (targetTodoId) {
      this.$emit('changeTodoState', targetTodoId)
    }
  },

  // インポートしたコンポーネント
  components: {
    TodoItem
  }
}
</script>

<style scoped>

table{
  margin-top: 16px;
}

</style>
