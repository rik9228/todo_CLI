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
      @onSubmit="onSubmit(todo)"
      @onEdit="onEdit(todo, true)"
      @onChange="onChange">
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
    },
    updateTodos: {
      // 必須
      require: true
    }
  },
  methods: {
    onSubmit: function (targetTodo) {
      this.$emit('deleteTodo', targetTodo)
    },
    onEdit: function (targetTodo) {
      this.$emit('editTodo', targetTodo)
    },
    onChange: function () {
      this.$emit('onChange')
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
