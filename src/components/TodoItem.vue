<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>{{ todo.name }}</td>
    <td><button @click="onChange">{{ this.completedText }}</button></td>
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
      const res = confirm(`項目ID：${this.todo.id}を削除しますか？`)

      if (res) {
        this.$emit('onSubmit', this.todo.id)
      }
    },
    onEdit: function () {
      this.$emit('onEdit', this.todo)
    },
    onChange: function () {
      this.$emit('onChange', this.todo.id)
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
