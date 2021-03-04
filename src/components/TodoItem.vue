<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>{{ todo.name }}</td>
    <td><button @click="changeState">{{ this.completedText }}</button></td>
    <td><button @click="onEdit">編集</button></td>
    <td><button @click="onSubmit">削除</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    todo: {
      require: true
    }
  },
  methods: {
    // this.propsネームでpropsデータにアクセスができる
    onSubmit: function () {
      const res = confirm('項目を削除しますか？')

      if (res) {
        this.$emit('onSubmit', this.todo)
      }
    },
    onEdit: function () {
      this.$emit('onEdit', this.todo)
    },
    changeState: function () {
      this.todo.state = !this.todo.state
    }
  },
  computed: {
    completedText: function () {
      return this.todo.state ? '完了' : '作業中'
    }
  }
}
</script>

<style scoped>

button{
  margin-left: 12px;
}

</style>
